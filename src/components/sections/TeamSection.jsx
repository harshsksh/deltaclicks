import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import FadeIn from '@/components/animations/FadeIn';
import { teamMembers } from '@/data/team-members';

export default function TeamSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Our Team"
          title="The People Behind DeltaClicks"
          subtitle="A small, experienced team focused on brand strategy, creative execution, and measurable growth."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">
          {teamMembers.map((member, index) => (
            <FadeIn key={member.name} delay={index * 0.08}>
              <Card className="h-full p-6 bg-background-card border border-white/10 hover:border-primary/30 transition-colors">
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl gradient-bg text-white font-bold text-lg mb-5">
                  {member.initials}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-sm text-primary-light font-medium mb-4">{member.role}</p>
                <p className="text-foreground-muted text-sm leading-relaxed">{member.bio}</p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}