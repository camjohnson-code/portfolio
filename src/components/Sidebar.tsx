import { Menu } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa6';
import { IoLogoGithub } from 'react-icons/io';
import { BsChatDotsFill } from 'react-icons/bs';
import { IoCodeSlash, IoHomeSharp } from 'react-icons/io5';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState } from 'react';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const navItems = [
  { id: 'home', label: 'Home', icon: IoHomeSharp },
  { id: 'projects', label: 'Projects', icon: IoCodeSlash },
  { id: 'chat', label: 'Chat with me', icon: BsChatDotsFill },
];

const socialLinks = [
  { label: 'GitHub', icon: IoLogoGithub, href: 'https://github.com/camjohnson-code' },
  { label: 'LinkedIn', icon: FaLinkedin, href: 'https://linkedin.com/in/camjohnson-code' },
];

export const Sidebar = ({ activeSection, setActiveSection }: SidebarProps) => {
  const [open, setOpen] = useState(false);

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setOpen(false);
  };

  const SidebarContent = () => (
    <div className='flex flex-col h-full bg-sidebar'>
      <div className='p-6 border-b border-border'>
        <h2 className='text-2xl font-bold bg-gradient-to-r from-accent1 to-accent2 bg-clip-text text-transparent'>
          Cam Johnson
        </h2>
      </div>

      <nav className='flex-1 p-4 space-y-2'>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 cursor-pointer rounded-lg transition-all duration-300 ${
                isActive
                  ? 'bg-card text-accent1 border border-accent1 shadow-mint'
                  : 'text-text-secondary hover:bg-card hover:text-text-primary'
              }`}
            >
              <Icon className='w-5 h-5' />
              <span className='font-medium'>{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className='p-4 border-t border-border'>
        <div className='flex flex-row items-center justify-center gap-2'>
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2 px-4 py-3 rounded-lg text-muted-foreground hover:bg-card hover:text-foreground transition-all duration-300'
              >
                <Icon className='w-7 h-7' />
              </a>
            );
          })}
        </div>
        <p className='text-xs text-text-secondary text-center mt-2'>
          &copy; {new Date().getFullYear()} Cameron Johnson. All rights reserved.
        </p>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className='hidden md:flex w-64 bg-sidebar border-r border-border flex-col fixed left-0 top-0 h-screen'>
        <SidebarContent />
      </aside>

      {/* Mobile/Tablet Header with Hamburger */}
      <header className='md:hidden fixed top-0 left-0 right-0 h-16 bg-sidebar border-b border-border flex items-center justify-between px-4 z-50'>
        <h2 className='text-xl font-bold bg-gradient-primary bg-clip-text text-transparent'>
          Portfolio
        </h2>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button className='cursor-pointer' variant='ghost' size='icon'>
              <Menu className='w-6 h-6' />
            </Button>
          </SheetTrigger>
          <SheetContent side='left' className='w-64 p-0 bg-sidebar border-r border-border'>
            <SidebarContent />
          </SheetContent>
        </Sheet>
      </header>
    </>
  );
};
