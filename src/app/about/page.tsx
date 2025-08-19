
import Image from 'next/image';

export default function AboutPage() {
  return (
    <section id="about" className="py-32 md:py-48">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
          <Image src="/membership image.png" alt="Person sitting on a yoga mat" width={400} height={400} className="rounded-lg shadow-2xl" data-ai-hint="membership" />
          <div className="max-w-lg">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
                One membership for all your fitness needs.
            </h1>
            <p className="text-lg text-muted-foreground">
                At CardioVerse, we believe that fitness should be accessible, fun, and empowering. Our mission is to provide a diverse range of workouts that cater to every fitness level and interest. Whether you're a seasoned athlete or just starting your fitness journey, we have something for you. Our community is built on support and motivation, helping you stay on track and achieve your goals. Join us and discover a universe of cardio fitness that will transform your life.
            </p>
          </div>
      </div>
    </section>
  );
}
