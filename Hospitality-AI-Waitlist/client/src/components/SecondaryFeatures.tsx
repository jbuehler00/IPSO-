const serifFont = { fontFamily: "'Playfair Display', serif" };

const secondaryFeatures = [
  {
    title: "Hospitality Canon Built-In",
    description: "Service, beverage, culinary, and guest interaction fundamentals—ready to use or customize.",
  },
  {
    title: "ND-Friendly Learning Modes",
    description: "Supports ADHD, dyslexia, anxiety, visual/audio learners, and short-burst learning styles.",
  },
  {
    title: "Recognition Engine",
    description: "Automatically highlights improvement, effort, and skill growth that often goes unnoticed.",
  },
  {
    title: "Concept-Adaptive Training",
    description: "Adjust content for casual, elevated, bar-forward, or family-friendly operations.",
  },
  {
    title: "Shift Cards & Micro-Drills",
    description: "Tiny, daily practice reps that reinforce habits and improve performance automatically.",
  },
];

export default function SecondaryFeatures() {
  return (
    <section className="w-full bg-card py-16 md:py-20 px-4" style={serifFont}>
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center" data-testid="text-secondary-features-title">
          More Powerful Features
        </h2>

        <ul className="space-y-4">
          {secondaryFeatures.map((feature, index) => (
            <li
              key={index}
              className="flex gap-3"
              data-testid={`secondary-feature-${index}`}
            >
              <span className="text-primary mt-1">•</span>
              <div>
                <span className="font-semibold text-foreground">{feature.title}:</span>{" "}
                <span className="text-muted-foreground">{feature.description}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
