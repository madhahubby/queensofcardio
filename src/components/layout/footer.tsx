import Link from 'next/link';
import { HeartPulse, Twitter, Instagram, Facebook } from 'lucide-react';
import { Button } from '../ui/button';

export function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <HeartPulse className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg">CardioVerse</span>
          </Link>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link href="/" className="text-sm hover:text-primary transition-colors">Home</Link>
            <Link href="/schedule" className="text-sm hover:text-primary transition-colors">Schedule</Link>
            <Link href="/gallery" className="text-sm hover:text-primary transition-colors">Gallery</Link>
            <Link href="/dashboard" className="text-sm hover:text-primary transition-colors">Dashboard</Link>
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
        <div className="mt-6 text-center text-sm text-muted-foreground border-t border-border pt-6">
          &copy; {new Date().getFullYear()} CardioVerse. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
