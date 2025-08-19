
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, HeartPulse } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#classes", label: "Workouts" },
  { href: "#gallery", label: "Features" },
];

const WHATSAPP_BOOKING_URL = "https://wa.me/1234567890?text=I'd%20like%20to%20book%20a%20class!";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      const sections = navLinks.map(link => {
        const el = document.querySelector(link.href);
        return el ? el as HTMLElement : null;
      });
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveLink(navLinks[i].href);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (isOpen) {
      setIsOpen(false);
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = href;
    }
    setActiveLink(href);
  };

  const renderNavLinks = () =>
    navLinks.map((link) => (
      <Link
        href={link.href}
        key={link.href}
        onClick={(e) => handleLinkClick(e, link.href)}
        className={`font-bold transition-colors text-foreground/80 hover:text-foreground`}
      >
        {link.label}
      </Link>
    ));

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 md:top-4 md:mx-4`}>
      <div className={`container flex h-16 items-center transition-colors duration-300 justify-between ${isScrolled || isOpen ? 'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:border md:rounded-2xl' : 'bg-transparent'}`}>
        <Link href="#home" className="flex items-center space-x-2" onClick={(e) => handleLinkClick(e, '#home')}>
          <HeartPulse className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">CARDIOVERSE</span>
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
                   <Link href="#home" className="flex items-center space-x-2" onClick={(e) => handleLinkClick(e, '#home')}>
                    <HeartPulse className="h-6 w-6 text-primary" />
                    <span className="font-bold text-lg">CARDIOVERSE</span>
                   </Link>
                </div>
                <nav className="flex flex-col items-center justify-center flex-1 gap-8">
                  {navLinks.map((link) => (
                    <Link
                      href={link.href}
                      key={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className={`font-bold text-2xl transition-colors text-foreground/80 hover:text-foreground`}
                    >
                      {link.label}
                    </Link>
                  ))}
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
