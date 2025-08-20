import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: {
    default: 'QueensOfCardio | Fun Group Fitness for Women in New Delhi',
    template: '%s | QueensOfCardio',
  },
  description: 'Join QueensOfCardio for fun, trainer-led group workouts in New Delhi. We offer yoga, body toning, functional training, and self-defence classes for all fitness levels.',
  keywords: ['fitness', 'group workout', 'yoga', 'self defence', 'body toning', 'functional training', 'New Delhi', 'women fitness'],
  openGraph: {
    title: 'QueensOfCardio | Fun Group Fitness for Women',
    description: 'Fun, trainer-led group workouts designed for every fitness level. Find the perfect class to crush your goals.',
    url: 'https://queensofcardio.vercel.app', // Replace with your actual domain
    siteName: 'QueensOfCardio',
    images: [
      {
        url: 'https://queensofcardio.vercel.app/og-image.png', // Replace with your actual OG image URL
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QueensOfCardio | Fun Group Fitness for Women',
    description: 'Fun, trainer-led group workouts designed for every fitness level. Find the perfect class to crush your goals.',
    // images: ['https://queensofcardio.vercel.app/twitter-image.png'], // Replace with your actual Twitter image URL
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased h-full flex flex-col bg-background">
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main>
            {children}
          </main>
          <Footer />
          <Toaster />
        </div>
      </body>
    </html>
  );
}
