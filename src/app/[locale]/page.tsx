import { Header } from '../../components/Header';
import { Hero } from '../../components/Hero';
import { HowItWorks } from '../../components/HowItWorks';
import { Guarantees } from '../../components/Guarantees';
import { Features } from '../../components/Features';
import { Economics } from '../../components/Economics';
import { Roadmap } from '../../components/Roadmap';
import { Security } from '../../components/Security';
import { FAQ } from '../../components/FAQ';
import { FounderSection } from '../../components/FounderSection';
import { WaitlistForm } from '../../components/WaitlistForm';
import { Footer } from '../../components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Guarantees />
        <Economics />
        <Features />
        <Roadmap />
        <Security />
        <FAQ />
        <FounderSection />
        <WaitlistForm />
      </main>
      <Footer />
    </div>
  );
}
