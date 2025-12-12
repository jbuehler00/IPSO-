import { ReactNode } from "react";

interface HeroSectionProps {
  children?: ReactNode;
}

export default function HeroSection({ children }: HeroSectionProps) {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center px-4 py-12 md:py-20">
      <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
        <h1 
          className="mb-3 md:mb-4"
          data-testid="text-hero-headline"
        >
          <span 
            className="block text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            IPSO
          </span>
        </h1>
        <p 
          className="text-xl md:text-2xl lg:text-3xl text-foreground leading-snug mb-4 md:mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
          data-testid="text-hero-tagline"
        >
          AI Training, Culture Intelligence & Leadership Support—All in One System
        </p>
        <p 
          className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto whitespace-pre-line"
          style={{ fontFamily: "'Playfair Display', serif" }}
          data-testid="text-hero-subheadline"
        >
          {`Transform your people, your culture, and your operations with an adaptive People OS built for hospitality teams.

Upload your materials → IPSO builds training, scenarios, insights, and leadership guidance automatically.`}
        </p>
      </div>
      {children}
    </section>
  );
}
