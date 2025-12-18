import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-coffee-50 min-h-screen font-sans selection:bg-coffee-500 selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Menu />
      <Gallery />
      <Contact />

      <footer className="bg-coffee-900 text-coffee-200 py-8 text-center border-t border-coffee-800">
        <div className="max-w-7xl mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} Barista's Haven. All rights reserved.</p>
          <p className="text-sm mt-2 opacity-75">Brewed with love & React.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
