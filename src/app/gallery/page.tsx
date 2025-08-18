import Image from "next/image";

const galleryImages = [
  { src: 'https://placehold.co/600x400.png', alt: 'Group of people in a spin class', dataAiHint: 'spin class' },
  { src: 'https://placehold.co/400x600.png', alt: 'Woman doing yoga pose', dataAiHint: 'yoga pose' },
  { src: 'https://placehold.co/600x400.png', alt: 'Man lifting weights', dataAiHint: 'lifting weights' },
  { src: 'https://placehold.co/600x400.png', alt: 'High energy dance fitness class', dataAiHint: 'dance fitness' },
  { src: 'https://placehold.co/400x600.png', alt: 'Person stretching after a workout', dataAiHint: 'stretching' },
  { src: 'https://placehold.co/600x400.png', alt: 'CardioVerse gym interior', dataAiHint: 'gym interior' },
  { src: 'https://placehold.co/400x600.png', alt: 'A healthy post-workout smoothie', dataAiHint: 'healthy smoothie' },
  { src: 'https://placehold.co/600x400.png', alt: 'Friends laughing together at the gym', dataAiHint: 'gym friends' },
  { src: 'https://placehold.co/600x400.png', alt: 'Sunrise run', dataAiHint: 'sunrise run' },
];

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground">
          Media Gallery
        </h1>
        <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
          Catch a glimpse of the energy and community at CardioVerse. Your next favorite workout is just a picture away.
        </p>
      </div>

      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {galleryImages.map((image, index) => (
          <div key={index} className="break-inside-avoid group">
             <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={600}
                className="w-full h-auto rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105 group-hover:brightness-110"
                data-ai-hint={image.dataAiHint}
              />
          </div>
        ))}
      </div>
    </div>
  );
}
