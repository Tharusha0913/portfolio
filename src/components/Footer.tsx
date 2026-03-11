import Link from "next/link";

export default function Footer() {
    const years = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-t from-black to-background-secondary pt-24 pb-12 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="text-2xl font-serif font-bold tracking-tight text-white mb-6 block">
                            THARUSHA<span className="text-brand-brown-light">.</span>
                        </Link>
                        <p className="text-white/50 text-sm leading-relaxed max-w-xs">
                            Building digital products, brands, and experiences that connect with people.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6">Services</h4>
                        <ul className="space-y-4 text-sm text-white/50">
                            <li><Link href="#solutions" className="hover:text-white transition-colors">Web Development</Link></li>
                            <li><Link href="#solutions" className="hover:text-white transition-colors">Mobile Apps</Link></li>
                            <li><Link href="#solutions" className="hover:text-white transition-colors">UI/UX Design</Link></li>
                            <li><Link href="#solutions" className="hover:text-white transition-colors">Consulting</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6">Connect</h4>
                        <ul className="space-y-4 text-sm text-white/50">
                            <li><Link href="https://linkedin.com" target="_blank" className="hover:text-white transition-colors">LinkedIn</Link></li>
                            <li><Link href="https://github.com" target="_blank" className="hover:text-white transition-colors">GitHub</Link></li>
                            <li><Link href="https://twitter.com" target="_blank" className="hover:text-white transition-colors">Twitter</Link></li>
                            <li><Link href="https://instagram.com" target="_blank" className="hover:text-white transition-colors">Instagram</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6">Explore</h4>
                        <ul className="space-y-4 text-sm text-white/50">
                            <li><Link href="#work" className="hover:text-white transition-colors">Work</Link></li>
                            <li><Link href="#experience" className="hover:text-white transition-colors">Experience</Link></li>
                            <li><Link href="#about" className="hover:text-white transition-colors">About</Link></li>
                            <li><Link href="#contact" className="hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/30 text-xs">
                        © {years} CREATIVE Platforms Inc. All rights reserved.
                    </p>
                    <div className="flex space-x-6">
                        <Link href="#" className="text-white/30 hover:text-white transition-colors text-xs">Instagram</Link>
                        <Link href="#" className="text-white/30 hover:text-white transition-colors text-xs">Twitter</Link>
                        <Link href="#" className="text-white/30 hover:text-white transition-colors text-xs">LinkedIn</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
