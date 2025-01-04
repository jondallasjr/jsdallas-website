import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import PaymentSection from '@/components/home/PaymentSection';
import ContactSection from '@/components/home/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <Services />
      <PaymentSection />
      <ContactSection />
      <Footer />
    </div>
  );
}