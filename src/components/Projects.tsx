import { Card } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heatAiImage from '../../assets/heat-ai.webp';
import aiCareerRepImage from '../../assets/ai-career-rep.webp';
import workoutmetricsFitImage from '../../assets/WorkoutMetrics.fit.webp';
import aiTradingPlatformImage from '../../assets/WorkoutMetrics.fit.webp';

const projects = [
  {
    title: 'Heat Adapt',
    description:
      'Full-stack e-commerce solution with real-time inventory management and payment processing.',
    link: 'https://github.com/camjohnson-code/heat-adapt',
    image: heatAiImage,
  },
  {
    title: 'AI Career Rep',
    description:
      "AI chatbot acting as a representative for me, found in my 'Chat with Me' section.",
    link: 'https://github.com/camjohnson-code/career-ai-bot',
    image: aiCareerRepImage,
  },
  {
    title: 'Workoutmetrics.fit',
    description: 'Workout tracking and analytics platform for athletes and fitness enthusiasts.',
    link: 'https://workout-metrics.vercel.app/',
    image: workoutmetricsFitImage,
  },
  {
    title: 'AI Trading Platform',
    description: 'Trading platform powered by machine learning for predictive trading insights.',
    link: 'https://workout-metrics.vercel.app/',
    image: aiTradingPlatformImage,
  },
];

export const Projects = () => {
  return (
    <section className='min-h-screen pt-20'>
      <div className='max-w-7xl mx-auto space-y-12 animate-in fade-in duration-1000'>
        <div className='max-w-4xl px-6 w-full'>
          <div className='space-y-4'>
            <h2 className='text-4xl md:text-5xl font-bold'>
              Featured{' '}
              <span className='bg-gradient-to-r from-accent1 to-accent2 bg-clip-text text-transparent'>
                Projects
              </span>
            </h2>
            <p className='text-lg text-text-secondary'>
              A collection of projects that showcase my skills and experience in building modern web
              applications.
            </p>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2'>
          {projects.map((project) => (
            <Card
              key={project.title}
              className='group border-none bg-card hover:border-primary transition-all duration-300 overflow-hidden rounded-none h-80 lg:h-96 relative'
              style={{
                backgroundImage: `url(${project.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <div
                className='absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-105'
                style={{
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              ></div>
              <div className='absolute inset-0 bg-bg/75'></div>
              <div className='relative p-6 space-y-4 text-center px-12 group-hover:bg-bg/80 h-full transition-all duration-300 flex flex-col justify-center items-center z-10'>
                <h3 className='text-xl font-bold group-hover:text-text-primary opacity-0 group-hover:opacity-100 transition-all duration-300'>
                  {project.title}
                </h3>

                <p className='text-text-secondary text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-300'>
                  {project.description}
                </p>

                <div className='flex gap-3 pt-2 opacity-0 group-hover:opacity-100 transition-all duration-300'>
                  <Button
                    variant='ghost'
                    asChild
                    className='bg-accent1 text-bg hover:scale-105 hover:shadow-mint transition-all duration-300'
                  >
                    <a href={project.link} target='_blank' rel='noopener noreferrer'>
                      View Project
                      <ExternalLink className='w-4 h-4' />
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
