import { About } from './components/Home/About';
import { Footer } from './components/Home/Footer';
import { Gallery } from './components/Home/Gallery';
import { Hero } from './components/Home/Hero';
import { Testimonial } from './components/Home/Testimonial';
import { Navbar } from './components/Navbar';

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
