import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Dumbbell, User, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const featuredClasses = [
  {
    id: 1,
    name: 'Neon Spin',
    instructor: 'DJ Ryde',
    description: 'A high-energy cycling class with electrifying beats.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'cycling class',
  },
  {
    id: 2,
    name: 'Pulse Pumper HIIT',
    instructor: 'Cora Cardio',
    description: 'Push your limits with high-intensity interval training.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'hiit workout',
  },
  {
    id: 3,
    name: 'Yoga Flow',
    instructor: 'Zen Zoe',
    description: 'Find your balance and flow in this calming yoga session.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'yoga studio',
  },
];

const galleryImages = [
  { src: 'https://placehold.co/600x400.png', alt: 'Group of people in a spin class', dataAiHint: 'spin class' },
  { src: 'https://placehold.co/400x600.png', alt: 'Woman doing yoga pose', dataAiHint: 'yoga pose' },
  { src: 'https://placehold.co/600x400.png', alt: 'Man lifting weights', dataAiHint: 'lifting weights' },
  { src: 'https://placehold.co/600x400.png', alt: 'High energy dance fitness class', dataAiHint: 'dance fitness' },
];

const WHATSAPP_BOOKING_URL = "https://wa.me/1234567890?text=I'd%20like%20to%20book%20a%20class!";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative h-[calc(100vh-4rem)] flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Energetic fitness class"
          fill
          style={{objectFit:"cover"}}
          className="z-0"
          data-ai-hint="fitness class"
          priority
        />
        <div className="relative z-20 container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4 tracking-tight text-primary animate-fade-in-down">
            Find Your Rhythm. Unleash Your Power.
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-neutral-200 animate-fade-in-up">
            Welcome to CardioVerse, where fitness meets community and fun. Join our high-energy classes and transform your workout routine into an obsession.
          </p>
          <Button size="lg" asChild>
            <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer">Book a Class on WhatsApp</a>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground mb-4">
              Welcome to CardioVerse
            </h2>
            <p className="text-muted-foreground mb-4">
              We believe fitness should be an exhilarating experience that leaves you feeling empowered. CardioVerse isn't just a gym; it's a universe of energy, motivation, and support. Our state-of-the-art studio is designed to inspire, our expert instructors are here to guide you, and our community is here to cheer you on.
            </p>
            <p className="text-muted-foreground">
              From heart-pumping spin classes to restorative yoga flows, we offer a diverse range of classes to match your energy and goals. Ready to join the movement?
            </p>
          </div>
          <div className="relative h-80 rounded-lg shadow-2xl overflow-hidden">
             <Image src="https://placehold.co/600x400.png" alt="CardioVerse gym interior" fill style={{objectFit: 'cover'}} data-ai-hint="gym interior" />
          </div>
        </div>
      </section>

      {/* Featured Classes Section */}
      <section id="classes" className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground">
              Our Signature Classes
            </h2>
            <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
              Experience workouts designed to be effective, engaging, and absolutely addictive.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredClasses.map((classItem) => (
              <Card key={classItem.id} className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col">
                <CardHeader className="p-0">
                  <Image
                    src={classItem.image}
                    alt={classItem.name}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover"
                    data-ai-hint={classItem.dataAiHint}
                  />
                </CardHeader>
                <CardContent className="p-6 flex-grow">
                  <CardTitle className="text-2xl font-headline mb-2">{classItem.name}</CardTitle>
                  <div className="flex items-center text-muted-foreground text-sm mb-4">
                    <User className="w-4 h-4 mr-2" />
                    <span>{classItem.instructor}</span>
                  </div>
                  <p className="text-muted-foreground">{classItem.description}</p>
                </CardContent>
                <div className="p-6 pt-0 mt-auto">
                    <Button variant="outline" className="w-full hover:bg-accent/20" asChild>
                         <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer">Book This Class</a>
                    </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground">
              Vibes from the 'Verse
            </h2>
            <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
              A glimpse into the energy and community at CardioVerse.
            </p>
          </div>
          <div className="columns-2 md:columns-4 gap-4 space-y-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="break-inside-avoid group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                <Image
                    src={image.src}
                    alt={image.alt}
                    width={600}
                    height={600}
                    className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={image.dataAiHint}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* Final CTA */}
      <section className="py-20 md:py-32 text-center bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-headline font-bold mb-4">Ready to Sweat?</h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Your first class is on us! Come see what the hype is all about.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="text-lg py-7 px-10">
                <Zap className="mr-2 h-5 w-5"/>
                Book Your Free Class Now
            </a>
          </Button>
        </div>
      </section>
    </>
  );
}
