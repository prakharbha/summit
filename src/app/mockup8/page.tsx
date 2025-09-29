import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Mockup8Hero from '@/components/mockup8/Mockup8Hero';
import Mockup8News from '@/components/mockup8/Mockup8News';
import Mockup8Team from '@/components/mockup8/Mockup8Team';

export default function Mockup8Page() {
  return (
    <main className="min-h-screen bg-gray-100" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-opacity='0.05'%3E%3Cpath fill='%23000' d='M0 0h100v100H0V0zm10 10h80v80H10V10zm5 5h70v70H15V15z'/%3E%3C/g%3E%3C/svg%3E")`
    }}>
      <Header />
      <Mockup8Hero />
      <Mockup8News />
      <Mockup8Team />
      <Footer />
    </main>
  );
}
