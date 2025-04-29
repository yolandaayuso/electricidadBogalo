import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Cookies from "./pages/Cookies";
import Legal from "./pages/Legal";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const App = () => {
  const [cookiesAccepted, setCookiesAccepted] = useState<boolean>(() => {
    const saved = localStorage.getItem("cookiesAccepted");
    return saved === "true"; // Si no existe, será false
  });

  useEffect(() => {
    if (cookiesAccepted) {
      const script = document.createElement('script');
      script.src = "https://www.googletagmanager.com/gtag/js?id=G-5JKGE1C405";
      script.async = true;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) { window.dataLayer.push(args); }
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', 'G-5JKGE1C405');
    }
  }, [cookiesAccepted]);

  const handleAcceptCookies = () => {
    setCookiesAccepted(true);
    localStorage.setItem("cookiesAccepted", "true");
  };

  const handleRejectCookies = () => {
    setCookiesAccepted(false);
    localStorage.setItem("cookiesAccepted", "false");
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Helmet>
          <title>Electricidad Bógalo - Servicios eléctricos y energías renovables</title>
          <meta name="description" content="Electricidad Bógalo - Especialistas en servicios eléctricos y energías renovables en Ciudad Real y toda España. Instalaciones eléctricas, solares, bombeo solar, antenas y más." />
          <meta name="keywords" content="electricista Ciudad Real, instalaciones solares, energía renovable, bombeo solar, antenas, videoporteros, servicio eléctrico 24h, campo de montiel, valdepeñas" />
        </Helmet>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/nosotros" element={<About />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/proyectos" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/privacidad" element={<Privacy />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        {localStorage.getItem("cookiesAccepted") === null && (
  <div
    style={{
      position: "fixed",
      bottom: "1.5rem",
      right: "1.5rem",
      zIndex: 9999,
      backgroundColor: "#fff",
      borderRadius: "0.75rem",
      padding: "1rem",
      boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
      maxWidth: "320px",
      fontFamily: "system-ui, sans-serif",
      fontSize: "0.875rem",
      color: "#333",
    }}
  >
    <div style={{ display: "flex", alignItems: "center", marginBottom: "0.5rem" }}>
      <span style={{ fontSize: "1.5rem", marginRight: "0.5rem" }}>🍪</span>
      <strong>Cookies y privacidad</strong>
    </div>
    <p style={{ marginBottom: "1rem" }}>
      Usamos cookies para mejorar tu experiencia y analizar el tráfico. ¿Aceptas?
    </p>
    <div style={{ display: "flex", justifyContent: "flex-end", gap: "0.5rem" }}>
    <button
        onClick={handleAcceptCookies}
        style={{
          backgroundColor: "#1e40af",
          color: "#fff",
          border: "none",
          padding: "0.4rem 0.8rem",
          borderRadius: "0.375rem",
          cursor: "pointer",
          fontWeight: 500,
        }}
      >
        Aceptar
      </button>
      <button
        onClick={handleRejectCookies}
        style={{
          backgroundColor: "#e5e7eb",
          color: "#000",
          border: "none",
          padding: "0.4rem 0.8rem",
          borderRadius: "0.375rem",
          cursor: "pointer",
          fontWeight: 500,
        }}
      >
        Denegar
      </button>
   
    </div>
  </div>
)}

      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
