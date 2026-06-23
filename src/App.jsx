import React, { lazy, Suspense, useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { Layout } from "./Layout";
import Preloader from "./components/Preloader";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Terms = lazy(() => import("./pages/Terms"));
const CategoryPage = lazy(() => import("./pages/CategoryPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => {
  const [loading, setLoading] = useState(true);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms" element={<Terms />} />
        <Route path="categories/:slug" element={<CategoryPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>,
    ),
  );

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <Suspense fallback={null}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
};

export default App;
