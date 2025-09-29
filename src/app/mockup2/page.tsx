import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Mockup2Hero from '@/components/mockup2/Mockup2Hero';
import Mockup2Services from '@/components/mockup2/Mockup2Services';
import Mockup2About from '@/components/mockup2/Mockup2About';

export default function Mockup2Page() {
  return (
    <main className="min-h-screen">
      <Header />
      <Mockup2Hero />
      <Mockup2Services />
      <Mockup2About />
      <Footer />
    </main>
  );
}
