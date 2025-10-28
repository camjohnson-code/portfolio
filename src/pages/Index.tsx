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
        "Hi! I'm Cam's AI representative. I can help answer questions about his experience, projects, and skills. What would you like to know?",
    },
    {
      role: 'user',
      content: 'What technologies does Cam work with?',
    },
    {
      role: 'assistant',
      content:
        "Cam works with a modern tech stack including React, TypeScript, Node.js, Python, and various cloud platforms. He's experienced in full-stack development, AI/ML integration, and building scalable web applications. Would you like to know more about any specific technology?",
    },
    {
      role: 'user',
      content: 'Tell me about his recent projects',
    },
    {
      role: 'assistant',
      content:
        'Cam has worked on several exciting projects including Heat Adapt (e-commerce platform), WorkoutMetrics.fit (fitness tracking app), and AI-powered tools. Each project showcases different aspects of his skills - from real-time data processing to machine learning integration. Feel free to ask about any specific project!',
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
