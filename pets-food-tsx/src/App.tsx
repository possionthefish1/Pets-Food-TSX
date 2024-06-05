import { About } from './components/About';
import { Gallery } from './components/Gallery';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Gallery />
      <About />
      <Footer />
    </>
  );
}

export { App };
