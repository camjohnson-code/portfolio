import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface HomeProps {
  onNavigate: (section: string) => void;
}

export const Home = ({ onNavigate }: HomeProps) => {
  return (
    <section className='min-h-screen flex items-center justify-center px-6 lg:pl-25'>
      <div className='max-w-4xl w-full space-y-8 animate-in fade-in duration-1000'>
        <div className='space-y-4'>
          <h1 className='text-5xl md:text-7xl font-bold leading-tight'>
            Hi, I'm{' '}
            <span className='bg-gradient-to-r from-accent1 to-accent2 bg-clip-text text-transparent'>
              Cam Johnson
            </span>
          </h1>

          <p className='text-xl md:text-2xl text-text-secondary max-w-2xl'>
            I build thoughtful, efficient experiences that feel great to use. I specialize in
            transforming complex ideas into clean, performant, and scalable solutions.
          </p>
        </div>

        <div className='flex flex-col sm:flex-row gap-4'>
          <Button
            size='lg'
            onClick={() => onNavigate('projects')}
            className='group cursor-pointer bg-accent1 text-bg hover:scale-102 hover:shadow-mint transition-all duration-300'
          >
            View My Work
            <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
          </Button>

          <Button
            size='lg'
            variant='outline'
            onClick={() => onNavigate('chat')}
            className='cursor-pointer border-border hover:border-accent1 transition-all duration-300'
          >
            Get in Touch
          </Button>
        </div>

        <div className='grid grid-cols-3 gap-8 pt-12 border-t border-border max-w-2xl text-xs'>
          <div className='space-y-1'>
            <div className='text-xl md:text-3xl font-bold text-accent1'>2</div>
            <div className='text-sm text-muted-foreground'>Years in Software Engineering</div>
          </div>
          <div className='space-y-1'>
            <div className='text-xl md:text-3xl font-bold text-accent2'>Contributor</div>
            <div className='text-sm text-muted-foreground'>Across Full Product Lifecycles</div>
          </div>
          <div className='space-y-1'>
            <div className='text-xl md:text-3xl font-bold text-accent1'>Delivering </div>
            <div className='text-sm text-muted-foreground'>
              Scalable Interfaces and Real User Value
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
