
import Link from 'next/link';
import { Twitter, Instagram, Facebook, Phone, MapPin } from 'lucide-react';
import { Button } from '../ui/button';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-secondary border-t">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/membership image.png" alt="QueensOfCardio Logo" width={24} height={24} className="rounded-lg" />
            <span className="font-bold text-lg">QUEENSOFCARDIO</span>
          </Link>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</Link>
            <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About</Link>
            <Link href="/workouts" className="text-sm text-muted-foreground hover:text-primary transition-colors">Workouts</Link>
          </nav>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" asChild>
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="#" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="#" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-border text-center text-muted-foreground text-sm">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
                <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary" />
                    <a href="tel:+919289431112" className="hover:text-primary">+91-9289431112</a>
                    <span>|</span>
                    <a href="tel:+919289431113" className="hover:text-primary">+91-9289431113</a>
                </div>
                <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>I-25 Karam Pura, New Delhi</span>
                </div>
            </div>
        </div>
        <div className="mt-6 text-center text-sm text-muted-foreground border-t border-border pt-6">
          &copy; {new Date().getFullYear()} QueensOfCardio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
