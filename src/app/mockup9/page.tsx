import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Mockup9Hero from '@/components/mockup9/Mockup9Hero';
import Mockup9Services from '@/components/mockup9/Mockup9Services';
import Mockup9Team from '@/components/mockup9/Mockup9Team';

export default function Mockup9Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Header />
      <Mockup9Hero />
      <Mockup9Services />
      <Mockup9Team />
      <Footer />
    </main>
  );
}
