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
        // Ensure to check if element exists before accessing properties
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

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isMobile = false) => {
    e.preventDefault();
    if (isMobile) {
      setIsOpen(false);
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback for when selector is not found
      window.location.hash = href;
    }
    setActiveLink(href);
  };

  const renderNavLinks = (isMobile = false) =>
    navLinks.map((link) => (
      <Link
        href={link.href}
        key={link.href}
        onClick={(e) => handleLinkClick(e, link.href, isMobile)}
        className={`font-bold transition-colors text-foreground/80 hover:text-foreground`}
      >
        {link.label}
      </Link>
    ));

  return (
    <header className={`fixed top-0 z-50 w-full transition-colors duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b' : 'bg-transparent'}`}>
      <div className="container flex h-16 max-w-7xl items-center">
        <div className="flex-1 flex items-center justify-start">
            <Link href="#home" className="flex items-center space-x-2" onClick={(e) => handleLinkClick(e, '#home')}>
              <HeartPulse className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">CARDIOVERSE</span>
            </Link>
        </div>
        
        <nav className="hidden md:flex items-center justify-center space-x-6 flex-1">
          {renderNavLinks()}
        </nav>

        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button asChild variant="ghost" className="text-primary hover:bg-primary/10 hover:text-primary">
            <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer">Book Now</a>
          </Button>
        </div>

        <div className="md:hidden flex-1 justify-end flex">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background">
              <div className="flex flex-col h-full">
                <div className="p-4 border-b">
                   <Link href="#home" className="flex items-center space-x-2" onClick={(e) => handleLinkClick(e, '#home', true)}>
                    <HeartPulse className="h-6 w-6 text-primary" />
                    <span className="font-bold text-lg">CARDIOVERSE</span>
                   </Link>
                </div>
                <nav className="flex flex-col gap-4 p-4">
                  {navLinks.map((link) => (
                    <Link
                      href={link.href}
                      key={link.href}
                      onClick={(e) => handleLinkClick(e, link.href, true)}
                      className={`font-bold text-lg transition-colors text-foreground/80 hover:text-foreground`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
