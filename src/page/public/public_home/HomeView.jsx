import CategorySection from './components/CategorySection';
import ContentBlockSection from './components/ContentBlockSection';
import HeroSection from './components/HeroSection';
import LatestCollectionSection from './components/LatestCollectionSection';
import NewsletterSection from './components/NewsletterSection';
import OurExclusiveProducts from './components/OurExclusiveProducts';
import ServicesSection from './components/ServicesSection';
import ShopByCategorySection from './components/ShopByCategorySection';
import ShopChristmasGiftsSection from './components/ShopChristmasGiftsSection';

const HomeView = () => {
  return (
    <>
      <HeroSection />
      <ShopChristmasGiftsSection />
      <CategorySection />
      <ShopByCategorySection />
      <LatestCollectionSection />
      <OurExclusiveProducts />
      <ContentBlockSection />
      <ServicesSection />
      <NewsletterSection />
    </>
  );
};

export default HomeView;
