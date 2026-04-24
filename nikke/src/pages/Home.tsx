import { Link } from 'react-router-dom';
import {
    ArrowRight,
    Zap,
    Target,
    TrendingUp,
    Monitor,
    Lightbulb,
    MessageCircle,
} from 'lucide-react';

const skills = [
    {
        icon: Monitor,
        title: 'Digital Skills',
        description: 'Mastering the digital landscape with precision and purpose.',
    },
    {
        icon: Lightbulb,
        title: 'Creativity',
        description: 'Turning ideas into impact through bold, original thinking.',
    },
    {
        icon: MessageCircle,
        title: 'Communication',
        description: 'Connecting with clarity, confidence, and conviction.',
    },
];

export default function Home() {
    return (
        <div className="bg-black">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-black via-neutral-950 to-neutral-900" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(200,255,0,0.06),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(200,255,0,0.03),transparent_50%)]" />

                {/* Decorative grid lines */}
                <div className="absolute inset-0 opacity-[0.03]">
                    <div
                        className="h-full w-full"
                        style={{
                            backgroundImage:
                                'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                            backgroundSize: '80px 80px',
                        }}
                    />
                </div>

                {/* Floating accent shapes */}
                <div className="absolute top-1/4 right-[10%] w-72 h-72 bg-[#c8ff00]/5 rounded-full blur-3xl animate-pulse-slow" />
                <div className="absolute bottom-1/4 left-[5%] w-96 h-96 bg-[#c8ff00]/3 rounded-full blur-3xl animate-pulse-slow-delayed" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#c8ff00]/20 bg-[#c8ff00]/5 mb-8 animate-fade-in-up">
                            <Zap size={14} className="text-[#c8ff00]" />
                            <span className="text-[#c8ff00] text-xs font-semibold tracking-widest uppercase">
                                Performance Redefined
                            </span>
                        </div>

                        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-6 animate-fade-in-up animation-delay-200">
                            Push Beyond
                            <br />
                            <span className="text-[#c8ff00]">Limits.</span>
                        </h1>

                        <p className="text-lg sm:text-xl text-white/50 max-w-xl leading-relaxed mb-10 animate-fade-in-up animation-delay-400">
                            Discipline. Focus. Performance. Building a digital presence that
                            inspires growth, challenges the ordinary, and moves with purpose.
                        </p>

                        <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-600">
                            <Link
                                to="/about"
                                className="group inline-flex items-center gap-2 px-8 py-4 bg-[#c8ff00] text-black font-bold text-sm tracking-wide rounded-full transition-all duration-300 hover:bg-[#d4ff33] hover:shadow-[0_0_30px_rgba(200,255,0,0.3)] hover:scale-105"
                            >
                                Explore More
                                <ArrowRight
                                    size={16}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </Link>
                            <Link
                                to="/blog"
                                className="group inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold text-sm tracking-wide rounded-full transition-all duration-300 hover:border-[#c8ff00]/40 hover:text-[#c8ff00] hover:bg-[#c8ff00]/5"
                            >
                                Read the Blog
                                <ArrowRight
                                    size={16}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-slow">
                    <span className="text-white/20 text-[10px] tracking-[0.3em] uppercase">
                        Scroll
                    </span>
                    <div className="w-px h-8 bg-linear-to-b from-white/20 to-transparent" />
                </div>
            </section>

            {/* Brand Identity Section */}
            <section className="relative py-32 overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-b from-black via-neutral-950 to-black" />
                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-[#c8ff00] text-xs font-semibold tracking-[0.3em] uppercase mb-4 block">
                                Who I Am
                            </span>
                            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight tracking-tight mb-6">
                                Built on
                                <br />
                                Discipline.
                            </h2>
                            <p className="text-white/50 text-lg leading-relaxed mb-8">
                                Every great brand starts with a single decision: to show up when
                                it matters. This is more than a website — it's a statement of
                                intent. A commitment to growth, to craft, and to pushing beyond
                                what's expected.
                            </p>
                            <div className="flex items-center gap-6">
                                <div className="text-center">
                                    <div className="text-3xl font-black text-[#c8ff00]">100%</div>
                                    <div className="text-white/30 text-xs tracking-wider uppercase mt-1">
                                        Commitment
                                    </div>
                                </div>
                                <div className="w-px h-12 bg-white/10" />
                                <div className="text-center">
                                    <div className="text-3xl font-black text-[#c8ff00]">24/7</div>
                                    <div className="text-white/30 text-xs tracking-wider uppercase mt-1">
                                        Grind
                                    </div>
                                </div>
                                <div className="w-px h-12 bg-white/10" />
                                <div className="text-center">
                                    <div className="text-3xl font-black text-[#c8ff00]">0%</div>
                                    <div className="text-white/30 text-xs tracking-wider uppercase mt-1">
                                        Excuses
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="aspect-4/5 rounded-2xl overflow-hidden relative group">
                                <img
                                    src="https://images.pexels.com/photos/1954522/pexels-photo-1954522.jpeg?auto=compress&cs=tinysrgb&w=800"
                                    alt="Urban training atmosphere"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6">
                                    <span className="text-[#c8ff00] text-xs font-bold tracking-[0.2em] uppercase">
                                        No shortcuts
                                    </span>
                                </div>
                            </div>
                            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-[#c8ff00]/20 rounded-2xl" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="relative py-32 overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-b from-black to-neutral-950" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(200,255,0,0.03),transparent_60%)]" />
                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-[#c8ff00] text-xs font-semibold tracking-[0.3em] uppercase mb-4 block">
                            Core Strengths
                        </span>
                        <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                            What Drives Me
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {skills.map((skill, index) => (
                            <div
                                key={skill.title}
                                className="group relative p-8 rounded-2xl border border-white/5 bg-white/2 hover:border-[#c8ff00]/20 hover:bg-[#c8ff00]/3 transition-all duration-500"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="w-12 h-12 rounded-xl bg-[#c8ff00]/10 flex items-center justify-center mb-6 group-hover:bg-[#c8ff00]/20 transition-colors duration-500">
                                    <skill.icon
                                        size={22}
                                        className="text-[#c8ff00] group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <h3 className="text-white font-bold text-xl mb-3 tracking-tight">
                                    {skill.title}
                                </h3>
                                <p className="text-white/40 text-sm leading-relaxed">
                                    {skill.description}
                                </p>
                                <div className="absolute bottom-0 left-8 right-8 h-px bg-linear-to-r from-transparent via-[#c8ff00]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vision Section */}
            <section className="relative py-32 overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-neutral-950 via-black to-neutral-950" />
                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <Target
                            size={40}
                            className="text-[#c8ff00] mx-auto mb-6"
                        />
                        <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-6">
                            The Vision
                        </h2>
                        <p className="text-white/50 text-lg leading-relaxed mb-4">
                            To build a digital identity that stands at the intersection of
                            performance and purpose. Every project, every post, every
                            interaction — designed to move the needle forward.
                        </p>
                        <p className="text-white/30 text-base leading-relaxed">
                            This isn't about following trends. It's about setting the pace.
                            Creating value through discipline, innovation through focus, and
                            impact through consistency.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-32 overflow-hidden">
                <div className="absolute inset-0 bg-[#c8ff00]/5" />
                <div className="absolute inset-0 bg-linear-to-b from-black via-black/95 to-black" />
                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <TrendingUp
                        size={40}
                        className="text-[#c8ff00] mx-auto mb-6"
                    />
                    <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-6">
                        Ready to Move?
                    </h2>
                    <p className="text-white/50 text-lg max-w-md mx-auto mb-10">
                        The gap between where you are and where you want to be is called
                        action. Start now.
                    </p>
                    <Link
                        to="/blog"
                        className="group inline-flex items-center gap-2 px-10 py-5 bg-[#c8ff00] text-black font-bold text-sm tracking-wide rounded-full transition-all duration-300 hover:bg-[#d4ff33] hover:shadow-[0_0_40px_rgba(200,255,0,0.3)] hover:scale-105"
                    >
                        Read the Blog
                        <ArrowRight
                            size={16}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </Link>
                </div>
            </section>
        </div>
    );
}
