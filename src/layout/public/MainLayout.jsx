import FooterSection from './FooterSection';
import NavBarSection from './NavBarSection';
import { Outlet } from 'react-router';
import TopNavSection from './TopNavSection';
import Footer from './FooterSection';
import SmokingImageSection from '../../page/public/public_home/components/SmokingImageSection';

const MainLayout = () => {
  return (
    <>
      <TopNavSection />
      <NavBarSection />
      <Outlet />
      {/* <FooterSection /> */}
      <SmokingImageSection />
      <Footer />
    </>
  );
};

export default MainLayout;
