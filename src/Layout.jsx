import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingContact from "./components/FloatingContact";

export const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
      <FloatingContact />
    </div>
  );
};
