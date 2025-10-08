import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CTASection from "./components/CTASection";
import TwoColumnSection from "./components/TwoColumnSection";
import Footer from "./components/Footer";
import "./index.css";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <CTASection />
      <TwoColumnSection />
      <Footer />
    </>
  );
}
