import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsOpen(false);
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Menu', href: '#menu' },
        { name: 'Services', href: '#services' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-coffee-950/90 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">

                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="#" className="flex items-center space-x-2 group">
                            <span className="font-cursive text-3xl md:text-4xl text-coffee-500 group-hover:text-coffee-400 transition-colors">
                                Barista's Haven
                            </span>
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="relative text-sm font-medium text-coffee-100 hover:text-coffee-500 transition-colors duration-200 group py-2"
                                >
                                    {link.name}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-coffee-500 transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            ))}
                            <a
                                href="#menu"
                                className="bg-coffee-500 hover:bg-coffee-600 text-coffee-950 px-6 py-2 rounded-full text-sm font-semibold transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(212,163,115,0.3)] hover:shadow-[0_0_20px_rgba(212,163,115,0.5)]"
                            >
                                Order Now
                            </a>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-coffee-100 hover:text-coffee-500 focus:outline-none"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <div
                className={`md:hidden absolute w-full bg-coffee-900/95 backdrop-blur-xl border-t border-coffee-800 transition-all duration-300 ease-in-out origin-top ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                    } overflow-hidden`}
            >
                <div className="px-4 pt-2 pb-6 space-y-1">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="block px-3 py-3 rounded-md text-base font-medium text-coffee-50 hover:text-coffee-500 hover:bg-coffee-800/50 transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="pt-4">
                        <a
                            href="#menu"
                            className="block w-full text-center bg-coffee-500 hover:bg-coffee-600 text-coffee-950 px-4 py-3 rounded-md text-base font-bold shadow-lg"
                            onClick={() => setIsOpen(false)}
                        >
                            Order Now
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
