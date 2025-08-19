
import Image from 'next/image';

const workoutImages = [
  { src: 'https://placehold.co/600x600.png', alt: 'Yoga class in progress', dataAiHint: 'yoga class' },
  { src: 'https://placehold.co/600x600.png', alt: 'High-intensity interval training session', dataAiHint: 'hiit workout' },
  { src: 'https://placehold.co/600x600.png', alt: 'Dance fitness class with energetic participants', dataAiHint: 'dance fitness' },
  { src: 'https://placehold.co/600x600.png', alt: 'Strength training workout with weights', dataAiHint: 'strength training' },
];

export default function WorkoutsPage() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-primary mb-4">
            Our Workouts
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Fun, trainer-led group workouts designed for every fitness level. Find the perfect class to crush your goals.
          </p>
        </div>
      </section>

      {/* Workouts Section */}
      <section id="classes" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold">
                    A Class for Every Queen
                  </h2>
                  <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
                    From high-energy dance to calming yoga, our diverse classes are designed to keep you motivated and moving.
                  </p>
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

      {/* Join CTA */}
      <section className="py-20 md:py-32 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Find Your Favorite Class</h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-muted-foreground">
            Ready to sweat, smile, and succeed? Book your spot and let's get moving together.
          </p>
          <a href="https://wa.me/1234567890?text=I'd%20like%20to%20book%20a%20class!" target="_blank" rel="noopener noreferrer">
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold py-3 px-8 rounded-lg text-lg">
              Book a Class
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}
