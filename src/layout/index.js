import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  const location = useLocation();
  const isGalleryPage = location.pathname === "/gallerie";

  return (
    <div>
      {!isGalleryPage && <Header />}
      {children}
      {!isGalleryPage && <Footer />}
    </div>
  );
};

export default Layout;
