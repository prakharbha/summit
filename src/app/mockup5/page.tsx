import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Mockup5Hero from '@/components/mockup5/Mockup5Hero';

export default function Mockup5Page() {
  return (
    <main className="min-h-screen" style={{background: 'linear-gradient(135deg, #fef7cd 0%, #fde68a 100%)'}}>
      <Header />
      <Mockup5Hero />
      <Footer />
    </main>
  );
}
