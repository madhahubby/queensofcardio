
"use client";

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Zap, Dumbbell, HeartPulse, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const workoutImages = [
  { src: '/yoga.png', alt: 'Yoga class in progress', dataAiHint: 'yoga class' },
  { src: '/bodytoning.png', alt: 'Body toning class', dataAiHint: 'body toning' },
  { src: '/funtionaltraining.png', alt: 'Functional training session', dataAiHint: 'functional training' },
  { src: '/selfdefence.png', alt: 'Self-defence class', dataAiHint: 'self defence' },
];

const featureBlocks = [
    { src: `/bmicalcsitepic.png?v=1721997993000`, alt: 'BMI Calculator page screenshot', title: 'Calculate Your BMI', dataAiHint: 'bmi calculator', href: '/bmi-calculator', external: false },
    { src: `/routinegenai.png?v=1721997993000`, alt: 'AI generating a fitness routine on a tablet', title: 'AI Fitness Generator', dataAiHint: 'ai fitness', href: '/fitness-routine-generator', external: false },
];

const WHATSAPP_BOOKING_URL = "https://wa.link/utohga";

const Icon = ({ className, ...rest }: {className?: string, [key: string]: any}) => {
  const icons = [
    <Dumbbell key="dumbbell" className={className} {...rest} />,
    <HeartPulse key="heartpulse" className={className} {...rest} />,
    <Sparkles key="sparkles" className={className} {...rest} />,
    <svg key="shoe" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...rest}><path d="M7 17l-4 4"></path><path d="M14 14l3-3"></path><path d="M18 22V8.5c0-1.4-1.1-2.5-2.5-2.5S13 7.1 13 8.5V14"></path><path d="M11 14V8a2 2 0 0 0-2-2H4.5a2.5 2.5 0 0 0 0 5H8"></path></svg>,
    <svg key="jumprope" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...rest}><path d="M4 14a4 4 0 1 0 8 0c0-4.42-7.58-8-16-8"></path><path d="M20 14a4 4 0 1 1-8 0c0-4.42 7.58-8 16-8"></path><path d="M4 14v4a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2v-4"></path><path d="M16 14v4a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2v-4"></path></svg>,
  ]
  const [icon, setIcon] = React.useState<React.ReactNode>(null);

  React.useEffect(() => {
    setIcon(icons[Math.floor(Math.random() * icons.length)]);
  }, []);

  return icon;
}

const NeonIcon = () => {
  const [position, setPosition] = React.useState({ top: '0%', left: '0%' });
  const [animationProps, setAnimationProps] = React.useState({
    animationDuration: '5s',
    animationDelay: '0s',
    size: '60px',
    color: 'text-primary',
    opacity: 0.2,
  });

  React.useEffect(() => {
    setPosition({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    });
    setAnimationProps({
      animationDuration: `${Math.random() * 5 + 3}s`,
      animationDelay: `${Math.random() * 5}s`,
      size: `${Math.random() * 60 + 20}px`,
      color: ['text-primary', 'text-accent', 'text-secondary-foreground'][Math.floor(Math.random() * 3)],
      opacity: Math.random() * 0.3 + 0.1,
    });
  }, []);

  return (
    <div
      className="absolute animate-pulse"
      style={{
        top: position.top,
        left: position.left,
        width: animationProps.size,
        height: animationProps.size,
        animationDuration: animationProps.animationDuration,
        animationDelay: animationProps.animationDelay,
        opacity: animationProps.opacity,
      }}
    >
      <Icon className={`w-full h-full ${animationProps.color}`} />
    </div>
  );
};


export default function Home() {
  const [icons, setIcons] = React.useState<React.ReactNode[]>([]);

  React.useEffect(() => {
    setIcons(Array.from({ length: 30 }).map((_, i) => <NeonIcon key={i} />));
  }, []);

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section id="home" className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 w-full h-full z-0">
          {icons}
        </div>
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 p-4 text-center">
            <h1 className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-white">
              We are Queens Of Cardio
            </h1>
        </div>
      </section>

      {/* Membership Section */}
      <section id="about" className="py-16 md:py-24">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-12">
            <Image src="/membership image.png" alt="Person sitting on a yoga mat" width={400} height={400} className="rounded-lg shadow-2xl" data-ai-hint="membership" />
            <div className="max-w-lg text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                  One membership for all your fitness needs.
              </h2>
            </div>
        </div>
      </section>
      
      {/* Workouts Section */}
      <section id="classes" className="py-16 md:py-24 bg-black">
          <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Fun, trainer-led group workouts
                  </h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {workoutImages.map((image, index) => (
                      <div key={index} className="relative aspect-square group overflow-hidden rounded-lg">
                          <Image
                              src={image.src}
                              alt={image.alt}
                              width={600}
                              height={600}
                              className="transition-transform duration-300 group-hover:scale-105 opacity-50 group-hover:opacity-75 object-cover w-full h-full"
                              data-ai-hint={image.dataAiHint}
                          />
                           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                           <div className="absolute inset-x-0 bottom-0 p-4">
                                <h3 className="text-lg font-bold text-white">{image.alt.replace(' class', '').replace(' in progress', '').replace(' session', '')}</h3>
                           </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* Features Grid Section */}
      <section id="gallery" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {featureBlocks.map((block, index) => {
                    const CardComponent = (
                      <div className="relative aspect-video group overflow-hidden rounded-lg">
                         <Image
                            src={block.src}
                            alt={block.alt}
                            fill
                            style={{ objectFit: 'cover' }}
                            className="transition-transform duration-300 group-hover:scale-105"
                            data-ai-hint={block.dataAiHint}
                         />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                              <h3 className="text-white font-bold text-xl">{block.title}</h3>
                         </div>
                      </div>
                    );

                    if (block.external) {
                      return (
                        <a href={block.href} key={index} target="_blank" rel="noopener noreferrer">
                          {CardComponent}
                        </a>
                      );
                    }
                    
                    return (
                      <Link href={block.href} key={index}>
                        {CardComponent}
                      </Link>
                    );
                  })}
              </div>
          </div>
      </section>

       {/* Final CTA */}
      <section className="py-20 md:py-32 text-center bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-headline font-bold mb-4">Ready to Join the 'Verse?</h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Your first class is waiting. Let's get started!
          </p>
          <Button size="lg" variant="secondary" asChild>
            <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="text-lg py-7 px-10">
                <Zap className="mr-2 h-5 w-5"/>
                Book Your Class Now
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
