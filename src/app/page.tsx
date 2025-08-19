import { Button } from '@/components/ui/button';
import { Zap } from 'lucide-react';
import Image from 'next/image';

const workoutImages = [
  { src: 'https://placehold.co/600x600.png', alt: 'Yoga class in progress', dataAiHint: 'yoga class' },
  { src: 'https://placehold.co/600x600.png', alt: 'High-intensity interval training session', dataAiHint: 'hiit workout' },
  { src: 'https://placehold.co/600x600.png', alt: 'Dance fitness class with energetic participants', dataAiHint: 'dance fitness' },
  { src: 'https://placehold.co/600x600.png', alt: 'Strength training workout with weights', dataAiHint: 'strength training' },
];

const featureBlocks = [
    { src: 'https://placehold.co/600x600.png', alt: 'Person measuring waist with a tape measure', title: 'Track Your Progress', dataAiHint: 'fitness tracking' },
    { src: 'https://placehold.co/600x600.png', alt: 'Group of smiling people in a fitness class', title: 'Join Our Community', dataAiHint: 'fitness community' },
    { src: 'https://placehold.co/600x600.png', alt: 'Woman in a calm yoga pose in a studio', title: 'Find Your Zen', dataAiHint: 'yoga pose' },
    { src: 'https://placehold.co/600x600.png', alt: 'Close-up of a fitness tracker on a wrist', title: 'Integrate Your Tech', dataAiHint: 'fitness watch' },
]

const WHATSAPP_BOOKING_URL = "https://wa.me/1234567890?text=I'd%20like%20to%20book%20a%20class!";

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section id="home" className="relative w-full aspect-[3/2] flex flex-col items-center justify-center overflow-hidden rounded-2xl">
        <Image
          src="/my-hero-image.jpg"
          alt="Hero background image"
          fill
          style={{ objectFit: "cover" }}
          className="z-0 opacity-50"
          priority
          key={new Date().getTime()}
        />
        <div className="relative z-10 p-4">
        </div>
      </section>

      {/* Membership Section */}
      <section id="about" className="py-16 md:py-24">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
            <Image src="/membership image.png" alt="Person sitting on a yoga mat" width={200} height={200} className="rounded-lg shadow-2xl" data-ai-hint="membership" />
            <h2 className="text-3xl md:text-5xl font-bold max-w-lg leading-tight">
                One membership for all your fitness needs.
            </h2>
        </div>
      </section>
      
      {/* Workouts Section */}
      <section id="classes" className="py-16 md:py-24 bg-secondary">
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
                  {featureBlocks.map((block, index) => (
                      <div key={index} className="relative aspect-video md:aspect-square group overflow-hidden rounded-lg">
                           <Image
                              src={block.src}
                              alt={block.alt}
                              fill
                              style={{ objectFit: 'cover' }}
                              className="transition-transform duration-300 group-hover:scale-105"
                              data-ai-hint={block.dataAiHint}
                           />
                           <div className="absolute inset-0 bg-black/50 flex items-center justify-center p-4">
                                <h3 className="text-2xl font-bold text-white text-center">{block.title}</h3>
                           </div>
                      </div>
                  ))}
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
