import { FileText, GraduationCap, Theater, Heart, Shield, BarChart3 } from "lucide-react";

const sansFont = { fontFamily: "'Nunito Sans', sans-serif" };

const primaryFeatures = [
  {
    icon: FileText,
    title: "AI SOP Ingestion",
    description: "Turn any binder, PDF, or doc into clean, structured SOPs.",
  },
  {
    icon: GraduationCap,
    title: "Adaptive Training",
    description: "Personalized micro-learning for every role, skill level, and learning style.",
  },
  {
    icon: Theater,
    title: "Scenario Lab",
    description: "Real-world simulations for guest issues, high-stress moments, and sensitive situations.",
  },
  {
    icon: Heart,
    title: "Well-Being & Culture Insights",
    description: "Mood check-ins, pulse surveys, recognition, and early risk signals.",
  },
  {
    icon: Shield,
    title: "Safe Incident Reporting",
    description: "Anonymous logging + AI guidance for managers with no HR team.",
  },
  {
    icon: BarChart3,
    title: "Manager Intelligence",
    description: "Gaps, morale trends, strengths, risks, and recommended actions.",
  },
];

export default function FeaturePillars() {
  return (
    <section className="w-full py-12 md:py-16 px-4" style={sansFont}>
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {primaryFeatures.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-card rounded-lg border border-border"
              data-testid={`feature-${index}`}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
