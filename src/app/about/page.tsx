import type { Metadata } from 'next';
import Image from 'next/image';
import { HeartPulse, Users, Target } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about the mission, vision, and story of QueensOfCardio. We are a fitness community in New Delhi dedicated to making workouts fun, accessible, and empowering for women.',
};

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-primary mb-4">
            About QueensOfCardio
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the heart and soul behind your favorite fitness community. We're more than just workouts; we're a movement.
          </p>
        </div>
      </section>

      {/* Original About Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-12">
            <Image 
              src="/membership image.png" 
              alt="Person sitting on a yoga mat" 
              width={400} 
              height={400} 
              className="rounded-lg shadow-2xl" 
              data-ai-hint="membership" 
            />
            <div className="max-w-lg text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                  One membership for all your fitness needs.
              </h2>
              <p className="text-lg text-muted-foreground">
                  At QueensOfCardio, we believe that fitness should be accessible, fun, and empowering. Our mission is to provide a diverse range of workouts that cater to every fitness level and interest. Whether you're a seasoned athlete or just starting your fitness journey, we have something for you.
              </p>
            </div>
        </div>
      </section>

      {/* Our Mission, Vision, Story */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <HeartPulse className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
              <p className="text-muted-foreground">
                To make fitness an accessible and enjoyable part of everyone's life, fostering a supportive community where every member can achieve their personal best.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Target className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-2">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the most inspiring and inclusive digital fitness platform globally, creating a universe where movement connects and transforms lives for the better.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-2">Our Story</h3>
              <p className="text-muted-foreground">
                Founded by a group of passionate fitness enthusiasts, QueensOfCardio was born from a desire to break the monotony of traditional exercise and build a vibrant, energetic community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20 md:py-32 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Join the Movement</h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-muted-foreground">
            Become a part of a community that celebrates every step, squat, and success. Your journey to a healthier, happier you starts here.
          </p>
          <a href="https://wa.link/utohga" target="_blank" rel="noopener noreferrer">
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold py-3 px-8 rounded-lg text-lg">
              Start Your Journey
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}
