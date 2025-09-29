import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Mockup3Hero from '@/components/mockup3/Mockup3Hero';
import Mockup3Services from '@/components/mockup3/Mockup3Services';
import Mockup3About from '@/components/mockup3/Mockup3About';

export default function Mockup3Page() {
  return (
    <main className="min-h-screen bg-amber-50">
      <Header />
      <Mockup3Hero />
      <Mockup3Services />
      <Mockup3About />
      <Footer />
    </main>
  );
}
