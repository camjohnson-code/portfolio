import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Sidebar } from '@/components/Sidebar';
import { Home } from '@/components/Home';
import { Projects } from '@/components/Projects';
import { Chat } from '@/components/Chat';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [chatMessages, setChatMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content:
        "Hi! I'm Cam's AI representative. I can help answer questions about his experience, projects, and skills. You can also leave your name and email and I'll get back to you as soon as possible. What would you like to know?",
    },
  ]);

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home onNavigate={setActiveSection} />;
      case 'projects':
        return <Projects />;
      case 'chat':
        return <Chat messages={chatMessages} setMessages={setChatMessages} />;
      default:
        return <Home onNavigate={setActiveSection} />;
    }
  };

  return (
    <div className='flex min-h-screen w-full bg-background'>
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />

      <AnimatePresence mode='wait'>
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className='content-area flex-1 flex'
        >
          <main className='flex-1 md:ml-64 pt-16 md:pt-0 w-full'>{renderSection()}</main>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Index;
