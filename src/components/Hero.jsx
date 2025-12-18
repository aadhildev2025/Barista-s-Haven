import heroBg from '../assets/images/hero-bg.png';

const Hero = () => {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Parallax-like fixity */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed transform scale-105"
                style={{ backgroundImage: `url(${heroBg})` }}
            >
                {/* Darker, moodier overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-coffee-950"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
                <span className="block text-coffee-500 font-cursive text-3xl md:text-4xl mb-4 animate-fade-in">
                    Welcome to
                </span>
                <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold text-white mb-6 font-serif tracking-tight leading-none animate-fade-in delay-100 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                    Barista's Haven
                </h1>
                <p className="text-xl sm:text-2xl md:text-3xl text-coffee-200 mb-10 font-light tracking-wide animate-fade-in delay-200 max-w-2xl mx-auto">
                    Where every cup is brewed with <span className="text-coffee-500 font-medium italic">passion</span> and <span className="text-coffee-500 font-medium italic">precision</span>.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in delay-300">
                    <a
                        href="#menu"
                        className="group relative px-8 py-3 bg-coffee-500 text-coffee-950 font-bold rounded-full overflow-hidden transition-all hover:shadow-[0_0_25px_rgba(212,163,115,0.4)]"
                    >
                        <span className="relative z-10">Order Your Cup</span>
                        <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:animate-shine"></div>
                    </a>

                    <a
                        href="#about"
                        className="px-8 py-3 bg-transparent border border-coffee-500 text-coffee-500 hover:bg-coffee-500 hover:text-coffee-950 font-semibold rounded-full transition-all duration-300"
                    >
                        Our Story
                    </a>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <svg className="w-6 h-6 text-coffee-500/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    );
};

export default Hero;
