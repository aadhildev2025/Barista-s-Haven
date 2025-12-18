const About = () => {
    return (
        <section id="about" className="py-24 bg-coffee-900 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-coffee-500/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-coffee-500/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold text-coffee-50 font-serif mb-4">Our Story</h2>
                    <div className="h-1 w-24 bg-coffee-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-r from-coffee-500 to-coffee-600 rounded-xl blur-lg opacity-30 group-hover:opacity-60 transition duration-500"></div>
                        <div className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                alt="Coffee Shop Interior"
                                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-coffee-950/20 group-hover:bg-transparent transition-colors duration-500"></div>
                        </div>
                    </div>

                    <div className="space-y-8 animate-fade-in delay-200">
                        <h3 className="text-3xl font-serif font-medium text-coffee-100">
                            Brewing Excellence <span className="text-coffee-500 italic block mt-2">Since 2024</span>
                        </h3>

                        <div className="space-y-6 text-lg text-coffee-300 font-light leading-relaxed">
                            <p>
                                At <strong className="text-coffee-50">Barista's Haven</strong>, we believe coffee is an art form.
                                Born from a relentless pursuit of the perfect cup, we curate the finest beans from sustainable farms
                                across the globe, roasting them locally to unlock their hidden symphonies of flavor.
                            </p>
                            <p>
                                Whether you seek distinct clarity in a pour-over or the comforting embrace of a velvet latte,
                                our sanctuary is designed for you. Immerse yourself in an atmosphere where time slows down,
                                and every sip tells a story.
                            </p>
                        </div>

                        <div className="pt-6">
                            <a href="#menu" className="inline-flex items-center space-x-2 text-coffee-500 font-medium hover:text-coffee-400 group transition-colors">
                                <span className="border-b border-coffee-500 pb-1 group-hover:border-coffee-400">Discover our blends</span>
                                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
