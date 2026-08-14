import BannerSection from './components/BannerSection';
import PackagingSection from './components/PackagingSection';
import AlsoLikeSection from './components/AlsoLikeSection';
import FAQSection from './components/FAQSection';
import RecentlySection from './components/RecentlySection';
import CustomerReview from './components/CustomerReview';

const ProductDetailsView = () => {
  return (
    <div className="">
      <BannerSection />
      <PackagingSection />
      <CustomerReview />
      <AlsoLikeSection />
      <FAQSection />
      <RecentlySection />
    </div>
  );
};

export default ProductDetailsView;
