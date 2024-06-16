import { createLazyFileRoute } from '@tanstack/react-router';

import { About } from '../components/Home/About';
import { Footer } from '../components/Home/Footer';
import { Gallery } from '../components/Home/Gallery';
import { Hero } from '../components/Home/Hero';
import { Testimonial } from '../components/Home/Testimonial';

export const Route = createLazyFileRoute('/')({
  component: Index,
});

// export const Route = createLazyFileRoute('/')({
//   component: () => <div>Hello /!</div>
// });

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
