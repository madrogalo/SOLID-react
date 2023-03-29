import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./layout.css";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="container">{children}</div>
      
      <Footer />
    </>
  );
}
