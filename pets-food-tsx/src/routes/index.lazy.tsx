import { createLazyFileRoute } from '@tanstack/react-router';
import { About } from '../components/About';
import { Footer } from '../components/Footer';
import { Gallery } from '../components/Gallery';
import { Hero } from '../components/Hero';
import { Testimonial } from '../components/Testimonial';

export const Route = createLazyFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Gallery />
      <About />
      <Testimonial />
      <Footer />
    </>
  );
}
