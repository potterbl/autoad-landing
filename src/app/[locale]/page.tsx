import { Header } from '../../components/Header';
import { Hero } from '../../components/Hero';
import { PainPoints } from '../../components/PainPoints';
import { HowItWorks } from '../../components/HowItWorks';
import { Features } from '../../components/Features';
import { Economics } from '../../components/Economics';
import { Security } from '../../components/Security';
import { FAQ } from '../../components/FAQ';
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
        <Economics />
        <Security />
        <FAQ />
        <WaitlistForm />
      </main>
      <Footer />
    </div>
  );
}
