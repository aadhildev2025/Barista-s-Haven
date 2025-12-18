const Services = () => {
    const services = [
        {
            id: 1,
            title: 'Dine-In Luxury',
            description: 'Immerse yourself in our warm, amber-lit sanctuary.',
            icon: (
                <svg className="w-10 h-10 text-coffee-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            )
        },
        {
            id: 2,
            title: 'Artisan Takeaway',
            description: 'Premium quality, packaged for your journey.',
            icon: (
                <svg className="w-10 h-10 text-coffee-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            )
        },
        {
            id: 3,
            title: 'High-Speed Wi-Fi',
            description: 'Stay connected in an environment built for focus.',
            icon: (
                <svg className="w-10 h-10 text-coffee-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                </svg>
            )
        },
        {
            id: 4,
            title: 'Creative Space',
            description: 'Quiet corners designed for inspiration and work.',
            icon: (
                <svg className="w-10 h-10 text-coffee-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            )
        }
    ];

    return (
        <section id="services" className="py-24 bg-coffee-950 border-t border-coffee-900 border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold text-coffee-50 font-serif mb-4">Our Services</h2>
                    <div className="h-1 w-24 bg-coffee-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className={`bg-coffee-900/50 p-8 rounded-2xl border border-coffee-800 hover:border-coffee-500 transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,163,115,0.1)] group animate-fade-in`}
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="flex justify-center mb-8 transform group-hover:scale-110 transition-transform duration-300">
                                <div className="p-4 bg-coffee-950 rounded-full border border-coffee-800 group-hover:border-coffee-500 transition-colors">
                                    {service.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-serif font-semibold text-coffee-100 mb-4 text-center group-hover:text-coffee-500 transition-colors">{service.title}</h3>
                            <p className="text-coffee-400 text-center leading-relaxed group-hover:text-coffee-300 transition-colors">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
