
import Image from 'next/image';
import Link from 'next/link';

const featureBlocks = [
    { src: `/bmicalcsitepic.png?v=${new Date().getTime()}`, alt: 'BMI Calculator page screenshot', title: 'Calculate Your BMI', dataAiHint: 'bmi calculator', href: 'https://queensofcardiobmicalc.vercel.app', external: true },
    { src: `/routinegenai.png?v=${new Date().getTime()}`, alt: 'AI generating a fitness routine on a tablet', title: 'AI Fitness Generator', dataAiHint: 'ai fitness', href: '/fitness-generator', external: false },
];

export default function FeaturesPage() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-primary mb-4">
            Our Features
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore the tools and features we've built to help you on your fitness journey.
          </p>
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

      {/* Join CTA */}
      <section className="py-20 md:py-32 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready to Explore?</h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-muted-foreground">
            Take advantage of our tools and start your journey to a healthier you.
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
