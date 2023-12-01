import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import BlogPage from "../pages/BlogPage";
import FAQPage from "../pages/FAQPage";
import GroupPage from "../pages/GroupPage";
import HomePage from "../pages/HomePage";
import MedicarePage from "../pages/MedicarePage";
import TestimonialsPage from "../pages/TestimonialsPage";
import ContactPage from "../pages/ContactPage";
import ErrorPage from "../pages/ErrorPage";

export const routesConfig = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/medicare", element: <MedicarePage /> },
      { path: "/group", element: <GroupPage /> },
      { path: "/faq", element: <FAQPage /> },
      { path: "/testimonials", element: <TestimonialsPage /> },
      { path: "/blog", element: <BlogPage /> },
      { path: "/contact", element: <ContactPage /> },
    ],
  },
]);
