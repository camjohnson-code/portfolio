import { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Home } from '@/components/Home';
// import { Projects } from "@/components/sections/Projects";
// import { Chat } from "@/components/sections/Chat";

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home onNavigate={setActiveSection} />;
      //   case "projects":
      //     return <Projects />;
      //   case "chat":
      //     return <Chat />;
      default:
        return <Home onNavigate={setActiveSection} />;
    }
  };

  return (
    <div className='flex min-h-screen w-full bg-background'>
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />

      <main className='flex-1 md:ml-64 pt-16 md:pt-0'>{renderSection()}</main>
    </div>
  );
};

export default Index;
