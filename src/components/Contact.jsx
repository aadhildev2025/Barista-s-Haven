import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        item: '',
        quantity: '1',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, item, quantity } = formData;
        const message = `Hello, my name is ${name}.%0AI would like to order:%0A${item} x ${quantity}`;
        const phoneNumber = '+94714304378';
        const url = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(url, '_blank');
    };

    return (
        <section id="contact" className="py-24 bg-coffee-900 border-t border-coffee-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-16">
                    {/* Contact Info & Map */}
                    <div className="space-y-10">
                        <div className="animate-fade-in">
                            <span className="block text-coffee-500 font-cursive text-3xl mb-2">Visit Us</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-coffee-50 font-serif mb-6">Contact Us</h2>
                            <div className="h-1 w-20 bg-coffee-500 rounded-full mb-8"></div>
                            <p className="text-coffee-300 text-lg leading-relaxed mb-8">
                                Questions, reservations, or just want to say hello? We'd love to hear from you.
                            </p>

                            <div className="space-y-6 text-coffee-200">
                                <div className="flex items-start space-x-4 group">
                                    <div className="p-3 bg-coffee-800 rounded-lg group-hover:bg-coffee-500 transition-colors">
                                        <svg className="w-6 h-6 text-coffee-500 group-hover:text-coffee-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <span className="mt-2 group-hover:text-coffee-50 transition-colors">Puttalam, Sri Lanka</span>
                                </div>
                                <div className="flex items-center space-x-4 group">
                                    <div className="p-3 bg-coffee-800 rounded-lg group-hover:bg-coffee-500 transition-colors">
                                        <svg className="w-6 h-6 text-coffee-500 group-hover:text-coffee-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <span className="group-hover:text-coffee-50 transition-colors">+94 71 430 4378</span>
                                </div>
                                <div className="flex items-center space-x-4 group">
                                    <div className="p-3 bg-coffee-800 rounded-lg group-hover:bg-coffee-500 transition-colors">
                                        <svg className="w-6 h-6 text-coffee-500 group-hover:text-coffee-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <span className="group-hover:text-coffee-50 transition-colors">hello@baristashaven.com</span>
                                </div>
                            </div>
                        </div>

                        <div className="h-64 rounded-xl overflow-hidden shadow-2xl border border-coffee-800 hover:border-coffee-600 transition-colors">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31610.136703551787!2d79.8207903!3d8.0333333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afdf33119561b3d%3A0x2db2a1e94444444!2sPuttalam!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Google Maps"
                            ></iframe>
                        </div>
                    </div>

                    {/* WhatsApp Order Form */}
                    <div className="bg-coffee-950 p-10 rounded-2xl shadow-2xl border border-coffee-800 flex flex-col justify-between h-full hover:border-coffee-700 transition-colors">
                        <div>
                            <h3 className="text-2xl font-bold text-coffee-50 mb-8 font-serif border-b border-coffee-800 pb-4">
                                Quick Order <span className="text-coffee-500">via WhatsApp</span>
                            </h3>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-coffee-400 mb-2 uppercase tracking-wider">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-5 py-3 bg-coffee-900 border border-coffee-700 rounded-lg focus:ring-2 focus:ring-coffee-500 focus:border-transparent outline-none transition-all text-coffee-50 placeholder-coffee-700"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="item" className="block text-sm font-medium text-coffee-400 mb-2 uppercase tracking-wider">Item to Order</label>
                                    <div className="relative">
                                        <select
                                            id="item"
                                            name="item"
                                            required
                                            value={formData.item}
                                            onChange={handleChange}
                                            className="w-full px-5 py-3 bg-coffee-900 border border-coffee-700 rounded-lg focus:ring-2 focus:ring-coffee-500 focus:border-transparent outline-none transition-all text-coffee-50 appearance-none"
                                        >
                                            <option value="">Select an Item</option>
                                            <option value="Signature Latte">Signature Latte</option>
                                            <option value="Cappuccino">Cappuccino</option>
                                            <option value="Cold Brew">Cold Brew</option>
                                            <option value="Caramel Macchiato">Caramel Macchiato</option>
                                            <option value="Blueberry Muffin">Blueberry Muffin</option>
                                            <option value="Croissant">Croissant</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-coffee-500">
                                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="quantity" className="block text-sm font-medium text-coffee-400 mb-2 uppercase tracking-wider">Quantity</label>
                                    <input
                                        type="number"
                                        id="quantity"
                                        name="quantity"
                                        min="1"
                                        required
                                        value={formData.quantity}
                                        onChange={handleChange}
                                        className="w-full px-5 py-3 bg-coffee-900 border border-coffee-700 rounded-lg focus:ring-2 focus:ring-coffee-500 focus:border-transparent outline-none transition-all text-coffee-50"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1 mt-4"
                                >
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.017-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                                    </svg>
                                    <span>Send to WhatsApp</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
