import StatsBar from '@/components/StatsBar';
import AlertTicker from '@/components/AlertTicker';
import WeatherStrip from '@/components/WeatherStrip';
import HeroSection from '@/components/HeroSection';
import QuoteCarousel from '@/components/QuoteCarousel';
import InfoTicker from '@/components/InfoTicker';
import LatestNews from '@/components/LatestNews';
import WeatherSection from '@/components/WeatherSection';
import AlaskaListingsAd from '@/components/AlaskaListingsAd';
import ConsultingGroupAd from '@/components/ads/ConsultingGroupAd';
import MiningEquipmentAd from '@/components/ads/MiningEquipmentAd';
import AlaskanBoatsAd from '@/components/ads/AlaskanBoatsAd';
import AlaskaFiresAd from '@/components/ads/AlaskaFiresAd';
import AlaskaGoldNewsAd from '@/components/ads/AlaskaGoldNewsAd';
import AnchorageChronicleAd from '@/components/ads/AnchorageChronicleAd';
import Footer from '@/components/Footer';
import ThemeToggle from '@/components/ThemeToggle';
import heroImage from '@/assets/hero-chugach-winter.jpg';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Top Stats Bar */}
      <StatsBar />
      
      {/* Alert Ticker */}
      <AlertTicker />
      
      {/* Weather Strip */}
      <WeatherStrip />
      
      {/* Hero Section with Snow Animation */}
      <HeroSection heroImage={heroImage} />
      
      {/* Quote Carousel */}
      <QuoteCarousel />
      
      {/* Ad: Alaska Fires - Safety/Emergency theme fits after quotes */}
      <AlaskaFiresAd />
      
      {/* Info Ticker */}
      <InfoTicker />
      
      {/* Advanced Weather Section with Radar */}
      <WeatherSection />
      
      {/* Ad: Alaska Consulting Group */}
      <ConsultingGroupAd />
      
      {/* Latest News Grid */}
      <LatestNews />
      
      {/* Ad: Alaska Gold News - Mining/industry after news */}
      <AlaskaGoldNewsAd />
      
      {/* Ad: Mining Equipment */}
      <MiningEquipmentAd />
      
      {/* Ad: Anchorage Chronicle - Sister publication */}
      <AnchorageChronicleAd />
      
      {/* Ad: Alaskan Boats */}
      <AlaskanBoatsAd />
      
      {/* Ad: Alaska Listings - Featured before footer */}
      <AlaskaListingsAd />
      
      {/* Footer */}
      <Footer />
      
      {/* Theme Toggle */}
      <ThemeToggle />
    </div>
  );
};

export default Index;
