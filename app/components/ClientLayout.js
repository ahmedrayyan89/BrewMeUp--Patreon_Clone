'use client';

import SessionWrapper from "./SessionWrapper";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ClientLayout({ children }) {
  return (
    <SessionWrapper>
      <Navbar />
      <div className="min-h-[84vh] bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))">
        {children}
      </div>
      <Footer />
    </SessionWrapper>
  );
}
