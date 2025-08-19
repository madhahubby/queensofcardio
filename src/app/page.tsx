
import { Button } from '@/components/ui/button';
import { Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const workoutImages = [
  { src: 'https://placehold.co/600x600.png', alt: 'Yoga class in progress', dataAiHint: 'yoga class' },
  { src: 'https://placehold.co/600x600.png', alt: 'High-intensity interval training session', dataAiHint: 'hiit workout' },
  { src: 'https://placehold.co/600x600.png', alt: 'Dance fitness class with energetic participants', dataAiHint: 'dance fitness' },
  { src: 'https://placehold.co/600x600.png', alt: 'Strength training workout with weights', dataAiHint: 'strength training' },
];

const featureBlocks = [
    { src: `/bmicalcsitepic.png?v=${new Date().getTime()}`, alt: 'BMI Calculator page screenshot', title: 'Calculate Your BMI', dataAiHint: 'bmi calculator', href: 'https://queensofcardiobmicalc.vercel.app', external: true },
    { src: `/routinegenai.png?v=${new Date().getTime()}`, alt: 'AI generating a fitness routine on a tablet', title: 'AI Fitness Generator', dataAiHint: 'ai fitness', href: 'https://fitgenius-beta.vercel.app/generator', external: true },
];

const WHATSAPP_BOOKING_URL = "https://wa.me/1234567890?text=I'd%20like%20to%20book%20a%20class!";

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section id="home" className="relative w-full h-[75vh] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="relative z-10 p-4 text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary-foreground">
              We are Queens Of Cardio
            </h1>
        </div>
      </section>

      {/* Membership Section */}
      <section id="about" className="py-16 md:py-24">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
            <Image src="/membership image.png" alt="Person sitting on a yoga mat" width={300} height={300} className="rounded-lg shadow-2xl" data-ai-hint="membership" />
            <h2 className="text-3xl md:text-5xl font-bold max-w-lg leading-tight">
                One membership for all your fitness needs.
            </h2>
        </div>
      </section>
      
      {/* Workouts Section */}
      <section id="classes" className="py-16 md:py-24 bg-background">
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
                              fill
                              style={{ objectFit: 'cover' }}
                              className="transition-transform duration-300 group-hover:scale-105 opacity-50 group-hover:opacity-75"
                              data-ai-hint={image.dataAiHint}
                          />
                           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
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
                              <h3 className="text-xl font-bold text-white">{block.title}</h3>
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
