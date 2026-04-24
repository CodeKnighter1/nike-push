import { ArrowRight, Clock, Tag } from 'lucide-react';

const posts = [
    {
        id: 1,
        title: 'How Social Media Affects Focus',
        description:
            'Social media is designed to capture attention, not build it. Explore how endless scrolling rewires your brain and what you can do to reclaim your focus in a world built on distraction.',
        tag: 'Focus',
        readTime: '5 min read',
        image:
            'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
        id: 2,
        title: 'Top 5 Ways to Stay Productive as a Student',
        description:
            'Being a student means juggling deadlines, distractions, and self-doubt. These five strategies are built on discipline, not motivation — because motivation fades, but systems last.',
        tag: 'Productivity',
        readTime: '7 min read',
        image:
            'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
        id: 3,
        title: 'The Power of Showing Up Every Day',
        description:
            'Consistency beats intensity. Learn why the most successful people focus on daily habits rather than occasional bursts of effort, and how you can apply this to your own life.',
        tag: 'Discipline',
        readTime: '4 min read',
        image:
            'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
        id: 4,
        title: 'Building a Digital Brand from Scratch',
        description:
            'Your digital presence is your modern resume. Here is how to start building one that reflects who you are and where you are going — even if you are starting from zero.',
        tag: 'Branding',
        readTime: '6 min read',
        image:
            'https://images.pexels.com/photos/196945/pexels-photo-196945.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
];

export default function Blog() {
    return (
        <div className="bg-black">
            {/* Hero */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-black via-neutral-950 to-neutral-900" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(200,255,0,0.05),transparent_50%)]" />
                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="max-w-2xl">
                        <span className="text-[#c8ff00] text-xs font-semibold tracking-[0.3em] uppercase mb-4 block">
                            Blog
                        </span>
                        <h1 className="text-5xl sm:text-7xl font-black text-white leading-[0.9] tracking-tighter mb-6">
                            Thoughts &
                            <br />
                            <span className="text-[#c8ff00]">Insights.</span>
                        </h1>
                        <p className="text-white/50 text-lg leading-relaxed">
                            Writing about focus, productivity, discipline, and building a
                            digital presence. Real talk, no fluff.
                        </p>
                    </div>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="relative py-16 overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-b from-black via-neutral-950 to-black" />
                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {posts.map((post) => (
                            <article
                                key={post.id}
                                className="group relative rounded-2xl overflow-hidden border border-white/5 bg-white/[0.02] hover:border-[#c8ff00]/20 transition-all duration-500"
                            >
                                <div className="aspect-video overflow-hidden relative">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent" />
                                    <div className="absolute top-4 left-4">
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#c8ff00]/10 border border-[#c8ff00]/20 text-[#c8ff00] text-[10px] font-bold tracking-[0.15em] uppercase">
                                            <Tag size={10} />
                                            {post.tag}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="inline-flex items-center gap-1.5 text-white/30 text-xs">
                                            <Clock size={12} />
                                            {post.readTime}
                                        </span>
                                    </div>
                                    <h3 className="text-white font-bold text-xl tracking-tight mb-3 group-hover:text-[#c8ff00] transition-colors duration-300">
                                        {post.title}
                                    </h3>
                                    <p className="text-white/40 text-sm leading-relaxed mb-5">
                                        {post.description}
                                    </p>
                                    <button className="group/btn inline-flex items-center gap-2 text-[#c8ff00] text-sm font-semibold tracking-wide transition-all duration-300 hover:gap-3">
                                        Read More
                                        <ArrowRight
                                            size={14}
                                            className="transition-transform duration-300 group-hover/btn:translate-x-1"
                                        />
                                    </button>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-[#c8ff00]/5" />
                <div className="absolute inset-0 bg-linear-to-b from-black via-black/95 to-black" />
                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
                        Stay in the Loop
                    </h2>
                    <p className="text-white/40 text-lg max-w-md mx-auto mb-8">
                        Get new posts and insights delivered straight to you. No spam, just
                        value.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="your@email.com"
                            className="flex-1 px-5 py-3.5 rounded-full bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#c8ff00]/40 focus:ring-1 focus:ring-[#c8ff00]/20 transition-all duration-300"
                        />
                        <button className="px-8 py-3.5 bg-[#c8ff00] text-black font-bold text-sm tracking-wide rounded-full transition-all duration-300 hover:bg-[#d4ff33] hover:shadow-[0_0_30px_rgba(200,255,0,0.3)] hover:scale-105">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
