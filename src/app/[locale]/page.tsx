import { Header } from '../../components/Header';
import { Hero } from '../../components/Hero';
import { PainPoints } from '../../components/PainPoints';
import { HowItWorks } from '../../components/HowItWorks';
import { Features } from '../../components/Features';
import { WaitlistForm } from '../../components/WaitlistForm';
import { Footer } from '../../components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <PainPoints />
        <HowItWorks />
        <Features />
        <WaitlistForm />
      </main>
      <Footer />
    </div>
  );
}
