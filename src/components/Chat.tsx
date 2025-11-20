import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { Message } from '@/types/message';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent } from '@/components/ui/card';
import { Header } from './Header';
import { Footer } from './Footer';
import { LoaderCircle } from 'lucide-react';

export const Chat = () => {
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [chatMessages, setChatMessages] = useState<Message[]>([
    {
      id: 'initial-assistant-message',
      role: 'assistant',
      content:
        "Hi! I'm Cam's AI representative. I can help answer questions about his experience, projects, and skills. You can also leave your name and email and I'll get back to you as soon as possible. What would you like to know?",
    },
  ]);

  const MIN_TEXTAREA_HEIGHT = 48;
  const MAX_TEXTAREA_HEIGHT = 128;

  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollElement = scrollAreaRef.current.querySelector(
        '[data-radix-scroll-area-viewport]'
      );
      if (scrollElement) {
        scrollElement.scrollTop = scrollElement.scrollHeight;
      }
    }
  }, [chatMessages, loading]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: 'user',
      content: input,
    };
    setChatMessages((prev) => [...prev, userMessage]);
    setInput('');

    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${MIN_TEXTAREA_HEIGHT}px`;
    }

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
        setChatMessages((prev) => [...prev, aiMessage]);

        throw new Error(`Request failed: ${res.status} ${res.statusText}`);
      }

      const data = await res.json();

      const replyText = data?.response ?? data?.reply ?? 'Sorry, I could not generate a response.';
      const aiMessage: Message = {
        id: crypto.randomUUID(),
        role: 'assistant',
        content: replyText,
      };

      setChatMessages((prev) => [...prev, aiMessage]);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <section className='py-10 px-6 flex flex-col'>
          <div className='max-w-5xl mx-auto w-full space-y-6 flex flex-col flex-1'>
            <div className='space-y-4 text-center'>
              <h2 className='text-4xl md:text-5xl font-bold'>
                Let's{' '}
                <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                  Chat
                </span>
              </h2>

              <p className='text-lg text-text-secondary max-w-2xl mx-auto'>
                Have a project in mind or just want to chat? I'd love to hear from you.
              </p>
            </div>

            <Card className='h-[75vh] overflow-hidden border border-border flex flex-col mb-8'>
              <CardContent className='p-0 flex-1 flex flex-col min-h-0'>
                <ScrollArea ref={scrollAreaRef} className='flex-1 min-h-0 p-4 space-y-4'>
                  {chatMessages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex my-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`rounded-2xl px-4 py-2 max-w-[80%] ${
                          msg.role === 'user'
                            ? 'bg-primary text-primary-foreground'
                            : 'border border-border'
                        }`}
                      >
                        <div className='whitespace-pre-wrap'>{msg.content}</div>
                      </div>
                    </div>
                  ))}

                  {loading && (
                    <div className='flex items-center justify-start'>
                      <motion.div
                        className='w-4 h-4 rounded-full bg-text-secondary mr-2'
                        animate={{ scale: [0.85, 1, 0.85] }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      ></motion.div>
                      <p className='text-text-secondary text-sm flex items-center gap-2'>
                        <LoaderCircle className="animate-spin" />
                        Creating response
                      </p>
                    </div>
                  )}
                </ScrollArea>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    sendMessage();
                  }}
                  className='flex flex-row items-end gap-2 p-4 border-t border-border'
                >
                  <textarea
                    ref={textareaRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        sendMessage();
                      }
                    }}
                    placeholder='Type your message...'
                    className='flex-1 resize-none border border-border focus:outline-none focus:ring-0 focus:ring-offset-0 py-3 px-3 rounded-md overflow-y-auto no-scrollbar'
                    rows={1}
                    onInput={(e) => {
                      const target = e.target as HTMLTextAreaElement;
                      target.style.height = 'auto';
                      target.style.height = `${Math.min(target.scrollHeight, MAX_TEXTAREA_HEIGHT)}px`;
                    }}
                  />
                  <Button
                    type='submit'
                    disabled={loading || !input.trim()}
                    className='bg-primary text-primary-foreground cursor-pointer hover:shadow-primary transition-all duration-300'
                    style={{ minHeight: `${MIN_TEXTAREA_HEIGHT}px` }}
                  >
                    Send
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </motion.div>
      <Footer />
    </>
  );
};
