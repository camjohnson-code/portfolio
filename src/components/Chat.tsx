import { useState, useRef, useEffect } from 'react';
import type { Message } from '@/types/message';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent } from '@/components/ui/card';

interface ChatProps {
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
}

export const Chat = ({ messages, setMessages }: ChatProps) => {
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollElement = scrollAreaRef.current.querySelector(
        '[data-radix-scroll-area-viewport]'
      );
      if (scrollElement) {
        scrollElement.scrollTop = scrollElement.scrollHeight;
      }
    }
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { id: crypto.randomUUID(), role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch(import.meta.env.VITE_CHAT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      if (!res.ok) {
        const errorMessage = 'Sorry, I could not generate a response.';
        const aiMessage: Message = {
          id: crypto.randomUUID(),
          role: 'assistant',
          content: errorMessage,
        };
        setMessages((prev) => [...prev, aiMessage]);

        throw new Error(`Request failed: ${res.status} ${res.statusText}`);
      }

      const data = await res.json();

      const replyText = data?.response ?? data?.reply ?? 'Sorry, I could not generate a response.';
      const aiMessage: Message = { id: crypto.randomUUID(), role: 'assistant', content: replyText };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className='h-screen py-10 px-6 flex flex-col'>
      <div className='max-w-5xl mx-auto w-full space-y-6 flex flex-col flex-1 animate-in fade-in duration-1000'>
        <div className='space-y-4 text-center'>
          <h2 className='text-4xl md:text-5xl font-bold'>
            Let's{' '}
            <span className='bg-gradient-to-r from-accent1 to-accent2 bg-clip-text text-transparent'>
              Connect
            </span>
          </h2>

          <p className='text-lg text-text-secondary max-w-2xl mx-auto'>
            Have a project in mind or just want to chat? I'd love to hear from you.
          </p>
        </div>

        <Card className='h-[75vh] overflow-hidden border border-border flex flex-col mb-8'>
          <CardContent className='p-0 flex-1 flex flex-col min-h-0'>
            <ScrollArea ref={scrollAreaRef} className='flex-1 min-h-0 p-4 space-y-4'>
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex my-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`rounded-2xl px-4 py-2 max-w-[80%] ${
                      msg.role === 'user' ? 'bg-accent1 text-bg' : 'border border-border'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {loading && (
                <div className='rounded-2xl px-4 py-2 max-w-[80%] border border-border'>
                  Thinking…
                </div>
              )}
            </ScrollArea>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage();
              }}
              className='flex gap-2 p-4 border-t border-border'
            >
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder='Type your message...'
                className='border border-border focus-visible:ring-0 focus-visible:ring-offset-0 !py-3'
              />
              <Button
                type='submit'
                disabled={loading}
                className='bg-accent1 text-bg cursor-pointer hover:shadow-mint transition-all duration-300'
              >
                Send
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
