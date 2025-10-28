import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Sidebar } from '@/components/Sidebar';
import { Home } from '@/components/Home';
import { Projects } from '@/components/Projects';
// import { Chat } from '@/components/Chat';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home onNavigate={setActiveSection} />;
      case 'projects':
        return <Projects />;
      // case 'chat':
      //   return <Chat onNavigate={setActiveSection} />;
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
