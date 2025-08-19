
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
    { src: `/bmicalcsitepic.png?v=1721997993000`, alt: 'BMI Calculator page screenshot', title: 'Calculate Your BMI', dataAiHint: 'bmi calculator', href: 'https://queensofcardiobmicalc.vercel.app', external: true },
    { src: `/routinegenai.png?v=1721997993000`, alt: 'AI generating a fitness routine on a tablet', title: 'AI Fitness Generator', dataAiHint: 'ai fitness', href: 'https://fitgenius-beta.vercel.app/generator', external: true },
];

const WHATSAPP_BOOKING_URL = "https://wa.link/utohga";

const heroGridImages = [
  { src: 'https://placehold.co/800x600.png', alt: 'Woman stretching before workout', dataAiHint: 'woman stretching', className: 'col-span-2 row-span-2' },
  { src: 'https://placehold.co/400x600.png', alt: 'Woman lifting weights', dataAiHint: 'woman lifting weights', className: '' },
  { src: 'https://placehold.co/800x600.png', alt: 'Group of women in a spin class', dataAiHint: 'spin class', className: 'col-span-2 row-span-2' },
  { src: 'https://placehold.co/400x600.png', alt: 'Woman on a treadmill', dataAiHint: 'woman treadmill', className: '' },
  { src: 'https://placehold.co/400x300.png', alt: 'Close up of running shoes', dataAiHint: 'running shoes', className: '' },
  { src: 'https://placehold.co/400x300.png', alt: 'Woman drinking water after workout', dataAiHint: 'woman drinking water', className: '' },
  { src: 'https://placehold.co/400x600.png', alt: 'Woman doing yoga pose', dataAiHint: 'woman yoga', className: 'row-span-2' },
  { src: 'https://placehold.co/400x300.png', alt: 'Kettlebells on a gym floor', dataAiHint: 'kettlebells gym', className: '' },
  { src: 'https://placehold.co/400x300.png', alt: 'Woman smiling after a workout', dataAiHint: 'woman smiling', className: '' },
  { src: 'https://placehold.co/400x600.png', alt: 'Woman on a rowing machine', dataAiHint: 'woman rowing', className: 'row-span-2' },
];

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section id="home" className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-fr gap-4 h-full">
            {heroGridImages.map((image, index) => (
              <div key={index} className={`relative ${image.className}`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                  data-ai-hint={image.dataAiHint}
                  className="grayscale opacity-30"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 p-4 text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-white">
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
                              {null}
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
