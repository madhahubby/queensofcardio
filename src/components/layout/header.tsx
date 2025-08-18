"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, HeartPulse } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#classes", label: "Classes" },
  { href: "#schedule", label: "Schedule" },
  { href: "#gallery", label: "Gallery" },
];

const WHATSAPP_BOOKING_URL = "https://wa.me/1234567890?text=I'd%20like%20to%20book%20a%20class!";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (isMobile = false) => {
    if (isMobile) {
      setIsOpen(false);
    }
  };

  const renderNavLinks = (isMobile = false) =>
    navLinks.map((link) => (
      <Button
        key={link.href}
        asChild
        variant="ghost"
        className="justify-start text-base font-medium text-foreground/80 hover:text-primary"
        onClick={() => handleLinkClick(isMobile)}
      >
        <Link href={link.href}>{link.label}</Link>
      </Button>
    ));

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center">
        <Link href="#home" className="mr-6 flex items-center space-x-2">
          <HeartPulse className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">CardioVerse</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-1">
          {renderNavLinks()}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button asChild>
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
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background">
              <div className="flex flex-col h-full">
                <div className="p-4 border-b">
                   <Link href="#home" className="flex items-center space-x-2" onClick={() => handleLinkClick(true)}>
                    <HeartPulse className="h-6 w-6 text-primary" />
                    <span className="font-bold text-lg">CardioVerse</span>
                   </Link>
                </div>
                <nav className="flex flex-col gap-4 p-4">
                  {renderNavLinks(true)}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
