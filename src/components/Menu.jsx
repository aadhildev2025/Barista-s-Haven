const menuItems = [
    {
        id: 1,
        name: 'Signature Latte',
        description: 'Rich espresso with silky steamed milk and latte art.',
        price: '$4.50',
        image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=400&q=80'
    },
    {
        id: 2,
        name: 'Cappuccino',
        description: 'Equal parts espresso, steamed milk, and foam.',
        price: '$4.00',
        image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=400&q=80'
    },
    {
        id: 3,
        name: 'Cold Brew',
        description: 'Slow-steeped for 12 hours for a smooth, bold taste.',
        price: '$5.00',
        image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=400&q=80'
    },

    {
        id: 5,
        name: 'Blueberry Muffin',
        description: 'Freshly baked daily with organic blueberries.',
        price: '$3.50',
        image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?auto=format&fit=crop&w=400&q=80'
    },
    {
        id: 6,
        name: 'Croissant',
        description: 'Buttery, flaky, and golden brown.',
        price: '$3.00',
        image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=400&q=80'
    },
    {
        id: 7,
        name: 'Hazelnut Mocha',
        description: 'Rich chocolate and toasted hazelnut syrup blended with espresso.',
        price: '$5.75',
        image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&w=400&q=80'
    }
];

const Menu = () => {
    const handleOrder = (item) => {
        const message = `Hello, I would like to order: ${item.name} (${item.price})`;
        const phoneNumber = '+94714304378';
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <section id="menu" className="py-24 bg-coffee-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <span className="block text-coffee-500 font-cursive text-3xl mb-2">Exquisite Taste</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-coffee-50 font-serif mb-4">Our Menu</h2>
                    <div className="h-1 w-24 bg-coffee-500 mx-auto rounded-full mt-6"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {menuItems.map((item) => (
                        <div
                            key={item.id}
                            className="bg-coffee-900 rounded-2xl overflow-hidden shadow-xl border border-coffee-800 hover:border-coffee-600 transition-all duration-500 group flex flex-col h-full hover:shadow-[0_0_25px_rgba(212,163,115,0.15)]"
                        >
                            {/* Image Container */}
                            <div className="relative h-72 overflow-hidden shrink-0">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-coffee-900 to-transparent opacity-80"></div>

                                {/* Price Tag */}
                                <div className="absolute top-4 right-4 bg-coffee-500/90 backdrop-blur-md text-coffee-950 px-4 py-1.5 rounded-full font-bold shadow-lg border border-white/20 z-10">
                                    {item.price}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 flex flex-col flex-grow relative -mt-16 z-20">
                                <div className="mb-6">
                                    <h3 className="text-2xl font-serif font-bold text-white mb-3 group-hover:text-coffee-500 transition-colors">{item.name}</h3>
                                    <p className="text-coffee-300 line-clamp-3 font-light leading-relaxed">{item.description}</p>
                                </div>

                                <button
                                    onClick={() => handleOrder(item)}
                                    className="mt-auto w-full py-3.5 border border-coffee-600 text-coffee-100 font-medium rounded-xl hover:bg-coffee-500 hover:text-coffee-950 hover:border-coffee-500 transition-all duration-300 active:scale-95 flex items-center justify-center space-x-2 group-hover:shadow-lg"
                                >
                                    <span>Order Now</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <a href="#contact" className="inline-block bg-transparent border-2 border-coffee-500 text-coffee-500 px-10 py-3 rounded-full font-semibold hover:bg-coffee-500 hover:text-coffee-950 transition-all duration-300">
                        View Full Menu
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Menu;
