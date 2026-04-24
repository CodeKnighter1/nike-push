import {
  User,
  Eye,
  Route,
  Award,
  BookOpen,
  Flame,
} from 'lucide-react';

const journeySteps = [
  {
    year: 'Start',
    title: 'The Decision',
    description: 'Chose to stop waiting and start building. Every journey begins with a single, decisive step.',
  },
  {
    year: 'Growth',
    title: 'The Grind',
    description: 'Dedicated to learning, creating, and improving every single day. No shortcuts, no excuses.',
  },
  {
    year: 'Now',
    title: 'The Momentum',
    description: 'Building a digital presence that reflects discipline, creativity, and relentless ambition.',
  },
];

export default function About() {
  return (
    <div className="bg-black">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-black via-neutral-950 to-neutral-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(200,255,0,0.05),transparent_50%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-[#c8ff00] text-xs font-semibold tracking-[0.3em] uppercase mb-4 block">
              About
            </span>
            <h1 className="text-5xl sm:text-7xl font-black text-white leading-[0.9] tracking-tighter mb-6">
              Who I
              <br />
              <span className="text-[#c8ff00]">Am.</span>
            </h1>
            <p className="text-white/50 text-lg leading-relaxed">
              A student, a builder, a force in motion. Driven by discipline and
              the belief that greatness is a daily practice — not a destination.
            </p>
          </div>
        </div>
      </section>

      {/* Who I Am */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-black via-neutral-950 to-black" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden relative group">
                <img
                  src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Profile"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
              </div>
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-[#c8ff00]/20 rounded-2xl" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#c8ff00]/5 rounded-2xl" />
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <User size={20} className="text-[#c8ff00]" />
                <span className="text-[#c8ff00] text-xs font-semibold tracking-[0.3em] uppercase">
                  Introduction
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-6">
                Student. Builder.
                <br />
                Digital Creator.
              </h2>
              <p className="text-white/50 leading-relaxed mb-4">
                I'm a student with a passion for digital creation and personal
                growth. I believe that the tools we use and the habits we build
                define who we become. My focus is on developing skills that
                matter — in technology, communication, and self-discipline.
              </p>
              <p className="text-white/40 leading-relaxed">
                Every day is an opportunity to level up. Whether it's learning a
                new framework, writing about what matters, or pushing through
                resistance — I show up. That's the standard I hold myself to.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { icon: BookOpen, label: 'Continuous Learning' },
                  { icon: Flame, label: 'Relentless Drive' },
                  { icon: Award, label: 'High Standards' },
                  { icon: Eye, label: 'Clear Vision' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 p-3 rounded-xl border border-white/5 bg-white/2"
                  >
                    <item.icon size={16} className="text-[#c8ff00]" />
                    <span className="text-white/60 text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Vision */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-black to-neutral-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(200,255,0,0.04),transparent_50%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#c8ff00]/10 mb-8">
              <Eye size={28} className="text-[#c8ff00]" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-6">
              My Vision
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-6">
              To create a digital footprint that reflects excellence — not
              perfection. I'm building toward a future where my work speaks
              louder than my words, and my consistency speaks louder than my
              talent.
            </p>
            <p className="text-white/30 leading-relaxed">
              The vision is simple: show up, do the work, grow. Share the
              process. Inspire others to do the same. The digital world rewards
              those who build with intention and move with purpose.
            </p>
          </div>
        </div>
      </section>

      {/* My Journey */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-neutral-950 via-black to-neutral-950" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <Route size={20} className="text-[#c8ff00]" />
              <span className="text-[#c8ff00] text-xs font-semibold tracking-[0.3em] uppercase">
                The Path
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              My Journey
            </h2>
          </div>

          <div className="max-w-2xl mx-auto">
            {journeySteps.map((step, index) => (
              <div key={step.title} className="relative pl-12 pb-12 last:pb-0">
                {/* Timeline line */}
                {index < journeySteps.length - 1 && (
                  <div className="absolute left-2.75 top-6 bottom-0 w-px bg-linear-to-b from-[#c8ff00]/30 to-transparent" />
                )}
                {/* Timeline dot */}
                <div className="absolute left-0 top-1 w-6 h-6 rounded-full border-2 border-[#c8ff00]/40 bg-[#c8ff00]/10 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#c8ff00]" />
                </div>

                <div className="group">
                  <span className="text-[#c8ff00] text-xs font-bold tracking-[0.2em] uppercase">
                    {step.year}
                  </span>
                  <h3 className="text-white font-bold text-xl mt-1 mb-2 tracking-tight group-hover:text-[#c8ff00] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Motivational Quote */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#c8ff00]/5" />
        <div className="absolute inset-0 bg-linear-to-b from-black via-black/95 to-black" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <blockquote className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto">
            "Don't tell me what you're going to do.
            <span className="text-[#c8ff00]"> Show me."</span>
          </blockquote>
          <p className="text-white/30 mt-8 text-sm tracking-wider uppercase">
            The standard I live by
          </p>
        </div>
      </section>
    </div>
  );
}
