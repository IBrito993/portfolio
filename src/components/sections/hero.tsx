"use client";
import { Button } from "@/components/ui/button";

interface HeroProps {
  seoText: string;
}

export function Hero({ seoText }: HeroProps) {
  const handleNavClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="container mx-auto px-4 md:px-6 min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center text-center space-y-6">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary via-foreground to-primary">
          Hi, I’m Ivan Brito
        </h1>
        <p className="max-w-2xl text-2xl md:text-3xl text-muted-foreground font-medium">
          Software Engineer based in Santiago, Chile
        </p>
        <p className="max-w-xl text-lg text-muted-foreground">
          {seoText}
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" onClick={() => handleNavClick('projects')}>
            My Projects
          </Button>
          <Button size="lg" variant="secondary" onClick={() => handleNavClick('contact')}>
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
}
