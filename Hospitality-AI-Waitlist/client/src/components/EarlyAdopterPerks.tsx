import { Gift, Percent, Star, MessageSquare, Lightbulb } from "lucide-react";

const sansFont = { fontFamily: "'Nunito Sans', sans-serif" };

interface Perk {
  icon: typeof Gift;
  title: string;
  description: string;
}

const defaultPerks: Perk[] = [
  {
    icon: Percent,
    title: "50% Lifetime Discount",
    description: "Lock in half-price access forever as a founding member.",
  },
  {
    icon: Star,
    title: "Priority Early Access",
    description: "Be the first to explore new features before public release.",
  },
  {
    icon: Lightbulb,
    title: "Shape the Product",
    description: "Your feedback directly influences what we build next—be a true co-creator.",
  },
  {
    icon: MessageSquare,
    title: "Direct Founder Access",
    description: "Private channel to share feedback and shape the product.",
  },
  {
    icon: Gift,
    title: "Bonus Training Content",
    description: "Exclusive hospitality training modules only for early adopters.",
  },
];

interface EarlyAdopterPerksProps {
  perks?: Perk[];
  title?: string;
  subtitle?: string;
  spotsRemaining?: number;
}

export default function EarlyAdopterPerks({
  perks = defaultPerks,
  title = "Early Adopter Perks",
  subtitle = "Join the first 10 signups and unlock exclusive benefits",
  spotsRemaining = 7,
}: EarlyAdopterPerksProps) {
  return (
    <section className="w-full bg-muted py-16 md:py-24 px-4" style={sansFont}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4" data-testid="badge-spots-remaining">
            <Gift className="w-4 h-4" />
            Only {spotsRemaining} spots remaining
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3" data-testid="text-perks-title">
            {title}
          </h2>
          <p className="text-muted-foreground text-base md:text-lg" data-testid="text-perks-subtitle">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {perks.map((perk, index) => (
            <div
              key={index}
              className="flex gap-4 p-5 bg-background rounded-lg"
              data-testid={`card-perk-${index}`}
            >
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <perk.icon className="w-5 h-5 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{perk.title}</h3>
                <p className="text-sm text-muted-foreground">{perk.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
