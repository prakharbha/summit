import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Mockup10Hero from '@/components/mockup10/Mockup10Hero';
import Mockup10Services from '@/components/mockup10/Mockup10Services';
import Mockup10Team from '@/components/mockup10/Mockup10Team';

export default function Mockup10Page() {
  return (
    <main className="min-h-screen relative">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-summit-primary/10 via-white to-summit-red/10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-summit-primary/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-summit-red/20 to-transparent rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-summit-accent/15 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <Header />
      <Mockup10Hero />
      <Mockup10Services />
      <Mockup10Team />
      <Footer />
    </main>
  );
}
