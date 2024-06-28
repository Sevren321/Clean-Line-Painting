"use client";
import Image from "next/image";
import Header from "../components/Header";

import About from "../components/About";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import FinalCarousel from "@/components/FinalCarousel";

export default function Home() {
  return (
    <div>
      <Header />
      <FinalCarousel />
      <About />
      <Services />
      <Projects />
      <ContactForm />
      <Footer />
    </div>
  );
}
