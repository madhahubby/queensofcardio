import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Clock, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const upcomingClasses = [
  {
    id: 1,
    name: 'Neon Spin',
    instructor: 'DJ Ryde',
    time: '6:00 PM',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'cycling class',
  },
  {
    id: 2,
    name: 'Pulse Pumper',
    instructor: 'Cora Cardio',
    time: '7:00 PM',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'aerobics class',
  },
  {
    id: 3,
    name: 'Yoga Flow',
    instructor: 'Zen Zoe',
    time: '8:00 PM',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'yoga studio',
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[calc(100vh-4rem)] flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Energetic fitness class"
          fill
          objectFit="cover"
          className="z-0"
          data-ai-hint="fitness class"
          priority
        />
        <div className="relative z-20 container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4 tracking-tight text-primary animate-fade-in-down">
            Find Your Rhythm.
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-neutral-200 animate-fade-in-up">
            Welcome to CardioVerse, where fitness meets fun. Join our high-energy classes and transform your workout routine.
          </p>
          <Button size="lg" asChild>
            <Link href="/schedule">View Class Schedule</Link>
          </Button>
        </div>
      </section>

      {/* Upcoming Classes Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground">
              Upcoming Classes
            </h2>
            <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
              Get a sneak peek at our next sessions. Book your spot before they fill up!
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingClasses.map((classItem) => (
              <Card key={classItem.id} className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
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
                <CardContent className="p-6">
                  <CardTitle className="text-2xl font-headline mb-2">{classItem.name}</CardTitle>
                  <div className="flex items-center text-muted-foreground text-sm mb-1">
                    <User className="w-4 h-4 mr-2" />
                    <span>{classItem.instructor}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{classItem.time}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full hover:bg-accent/20" asChild>
                    <Link href="/schedule">
                      More Info <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/schedule">Explore All Classes</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
