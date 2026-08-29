import Container from '@/components/ui/Container';
import AnimatedSection from '@/components/ui/AnimatedSection';
import StatCard from '@/components/ui/StatCard';
import { stats } from '@/data/services';

export default function StatsSection() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark">
            Un réseau national. Une expertise locale.
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <AnimatedSection key={index} delay={index * 0.1} className="h-full">
              <StatCard
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                className="bg-gradient-to-br from-white to-blue-50/50 border border-blue-100/50 shadow-sm hover:shadow-md transition-shadow h-full rounded-2xl"
              />
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
