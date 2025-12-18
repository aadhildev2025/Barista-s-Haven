const Gallery = () => {
    const images = [
        'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1529892485617-25f63cd7b1e9?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80',
    ];

    return (
        <section id="gallery" className="py-24 bg-coffee-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20 animate-fade-in">
                    <span className="block text-coffee-500 font-cursive text-3xl mb-2">Atmosphere</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-coffee-50 font-serif mb-4">Gallery</h2>
                    <div className="h-1 w-24 bg-coffee-500 mx-auto rounded-full mt-6"></div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {images.map((img, index) => (
                        <div
                            key={index}
                            className="relative group overflow-hidden rounded-xl aspect-square cursor-pointer border border-transparent hover:border-coffee-500 transition-all duration-300"
                        >
                            <img
                                src={img}
                                alt={`Gallery ${index + 1}`}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-coffee-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-coffee-50 text-lg font-serif border border-coffee-500 px-6 py-2 rounded-full hover:bg-coffee-500 hover:text-coffee-950 transition-colors">
                                    View
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
