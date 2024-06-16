import { About } from './components/About';
import { Footer } from './components/Footer';
import { Gallery } from './components/Gallery';
import { Hero } from './components/Hero';
import { Navbar } from './components/Home/Navbar';
import { Testimonial } from './components/Testimonial';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Gallery />
      <About />
      <Testimonial />
      <Footer />
    </>
  );
}

export { App };
