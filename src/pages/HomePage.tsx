import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Services from '../components/Services';
import Differential from '../components/Differential';
import Amenities from '../components/Amenities';
import Testimonials from '../components/Testimonials';
import Gallery from '../components/Gallery';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Experience />
      <Services />
      <Differential />
      <Amenities />
      <Testimonials />
      <Gallery />
    </>
  );
}
