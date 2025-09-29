import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Mockup7Hero from '@/components/mockup7/Mockup7Hero';
import Mockup7Heritage from '@/components/mockup7/Mockup7Heritage';
import Mockup7Team from '@/components/mockup7/Mockup7Team';
import Mockup7Services from '@/components/mockup7/Mockup7Services';

export default function Mockup7Page() {
  return (
    <main className="min-h-screen" style={{background: 'linear-gradient(135deg, #f8f5f0 0%, #f0e6d2 100%)'}}>
      <Header />
      <Mockup7Hero />
      <Mockup7Heritage />
      <Mockup7Team />
      <Mockup7Services />
      <Footer />
    </main>
  );
}
