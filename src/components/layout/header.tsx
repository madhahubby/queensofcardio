
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from 'next/navigation';
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/workouts", label: "Workouts" },
];

const WHATSAPP_BOOKING_URL = "https://wa.link/utohga";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
        if (pathname !== '/') {
            window.location.href = `/${href}`;
            return;
        }
        e.preventDefault();
        const element = document.querySelector(href.substring(1));
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
    if (isOpen) {
      setIsOpen(false);
    }
  };


  const renderNavLinks = (isMobile: boolean = false) =>
    navLinks.map((link) => (
      <Link
        href={link.href}
        key={link.href}
        onClick={(e) => handleLinkClick(e, link.href)}
        className={`font-bold transition-colors text-foreground/80 hover:text-foreground ${isMobile ? 'text-2xl' : ''} ${pathname === link.href ? 'text-primary' : ''}`}
      >
        {link.label}
      </Link>
    ));

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 md:top-4 md:mx-4`}>
      <div className={`container flex h-16 items-center transition-colors duration-300 justify-between ${isScrolled || isOpen ? 'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:rounded-2xl' : 'bg-transparent'}`}>
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/membership image.png" alt="QueensOfCardio Logo" width={24} height={24} className="rounded-lg" />
          <span className="font-bold text-lg">QUEENSOFCARDIO</span>
        </Link>
        
        <nav className="hidden md:flex items-center justify-center space-x-6">
          {renderNavLinks()}
        </nav>

        <div className="hidden md:flex items-center justify-end space-x-2">
          <Button asChild variant="outline" className="border-foreground/80 text-foreground/80 hover:text-foreground font-bold bg-transparent hover:bg-transparent">
            <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer">Book Now</a>
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full bg-background/95 backdrop-blur">
              <div className="flex flex-col h-full">
                <div className="p-4 border-b border-border">
                   <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                    <Image src="/membership image.png" alt="QueensOfCardio Logo" width={24} height={24} className="rounded-lg" />
                    <span className="font-bold text-lg">QUEENSOFCARDIO</span>
                   </Link>
                </div>
                <nav className="flex flex-col items-center justify-center flex-1 gap-8">
                  {renderNavLinks(true)}
                  <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:text-primary-foreground hover:bg-primary font-bold text-xl py-6 px-8">
                    <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer">Book Now</a>
                  </Button>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
