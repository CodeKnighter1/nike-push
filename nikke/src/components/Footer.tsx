import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-black border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 bg-[#c8ff00] rounded-sm flex items-center justify-center">
                                <span className="text-black font-black text-sm">P</span>
                            </div>
                            <span className="text-white font-bold text-lg tracking-tight">
                                PUSH
                            </span>
                        </div>
                        <p className="text-white/40 text-sm leading-relaxed max-w-xs">
                            Discipline. Focus. Performance. Building a digital presence that
                            moves beyond limits.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold text-sm tracking-wide uppercase mb-4">
                            Navigate
                        </h4>
                        <div className="space-y-3">
                            {[
                                { to: '/', label: 'Home' },
                                { to: '/about', label: 'About' },
                                { to: '/blog', label: 'Blog' },
                            ].map((link) => (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    className="block text-white/40 hover:text-[#c8ff00] text-sm transition-colors duration-300"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold text-sm tracking-wide uppercase mb-4">
                            Connect
                        </h4>
                        <div className="flex gap-3">
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-[#c8ff00] hover:border-[#c8ff00]/30 transition-all duration-300"
                            >
                                <img src="/instagram.png" alt="Instagram" className="w-6 h-6" />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-[#c8ff00] hover:border-[#c8ff00]/30 transition-all duration-300"
                            >
                                <img src="/instagram.png" alt="Instagram" className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-white/30 text-xs">
                        &copy; {new Date().getFullYear()} PUSH. All rights reserved.
                    </p>
                    <button
                        onClick={scrollToTop}
                        className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-[#c8ff00] hover:border-[#c8ff00]/30 transition-all duration-300"
                    >
                        <ArrowUp size={18} />
                    </button>
                </div>
            </div>
        </footer>
    );
}
