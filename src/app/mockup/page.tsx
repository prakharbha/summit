import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MockupHero from '@/components/mockup/MockupHero';
import MockupServices from '@/components/mockup/MockupServices';
import MockupAbout from '@/components/mockup/MockupAbout';
import MockupStats from '@/components/mockup/MockupStats';

export default function MockupPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <MockupHero />
      <MockupStats />
      <MockupServices />
      <MockupAbout />
      <Footer />
    </main>
  );
}
