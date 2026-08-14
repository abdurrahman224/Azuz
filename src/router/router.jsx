import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import MainLayout from '../layout/public/MainLayout';

// Auth Views
import RegisterView from '../page/auth/RegisterView';
import LoginView from '../page/auth/LoginView';

// Public Views
import HomeView from '../page/public/public_home/HomeView';
import ContactUsView from '../page/public/public_contact/ContactUsView';
import CollectionsView from '../page/public/public_product_collections/CollectionsView';
import ProductDetailsView from '../page/public/public_product_details/ProductDetailsView';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Public Routes */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomeView />} />
        <Route path="/contact" element={<ContactUsView />} />

        {/* Auth */}
        <Route path="/login" element={<LoginView />} />
        <Route path="/registration" element={<RegisterView />} />

        {/* Single Category page */}
        <Route path="/collections/:slug" element={<CollectionsView />} />
        <Route path="/collections/:slug/:id" element={<ProductDetailsView />} />
      </Route>
    </>
  )
);

export default router;
