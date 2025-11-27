// src/App.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import ModelsGrid from "./components/ModelsGrid/ModelsGrid";
import PostSale from "./components/PostSale/PostSale";
import Sucursales from "./components/Branches/Branches";
import "./App.css";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ModelDetail from "./components/ModelDetail/ModelDetail"; 
import content from "./content/siteContent";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";
import Branches from "./components/Branches/Branches";

// Componente HOME con la landing
function Home() {
  return (
    <>
      <Hero />
      <ModelsGrid />
      <PostSale />
      <Branches/>
      <WhatsAppButton/>
      <Contact />
    </>
  );
}

export default function App() {
  React.useEffect(() => {
    document.title = content.seo.titulo;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", content.seo.descripcion);
  }, []);

  return (
    <>
      <Navbar />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Detalle de modelo: /modelos/hb20, /modelos/creta, /modelos/staria, etc. */}
        <Route path="/modelos/:id" element={<ModelDetail />} />
      </Routes>

      <Footer />
    </>
  );
}
