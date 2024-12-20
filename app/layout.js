"use client"

import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/hamburger-menu/NewNavbar";
import Footer from "@/components/footer-section/Footer";
import { ReactLenis } from 'lenis/react';
import CustomCursor from "@/components/CustomCursor";



const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [startScrollTop, setStartScrollTop] = useState(0);


  useEffect(() => {
    const scroller = document.querySelector(".scroller");
    const scrollerContainer = document.querySelector(".scroller-container");

    function updateScroller() {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = (scrollTop / scrollHeight) * 100;

      const containerHeight = 200;
      const scrollerHeight = 40;
      const maxScrollerPosition = containerHeight - scrollerHeight;

      const scrollerPosition = (scrollPercent / 100) * maxScrollerPosition;

      scroller.style.transform = `translateY(${scrollerPosition}px)`;
    }

    const handleMouseDown = (e) => {
      e.preventDefault();
      setIsDragging(true);
      setStartY(e.clientY);
      setStartScrollTop(document.documentElement.scrollTop || document.body.scrollTop);
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;

      const deltaY = e.clientY - startY;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const containerHeight = scrollerContainer.offsetHeight - scroller.offsetHeight;

      const scrollDelta = (deltaY / containerHeight) * scrollHeight;
      window.scrollTo({
        top: startScrollTop + scrollDelta,
        behavior: "auto",
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    scroller.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("scroll", updateScroller);

    return () => {
      scroller.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("scroll", updateScroller);
    };
  }, [isDragging, startY, startScrollTop]);

  return (
    <html lang="en">
      <head>
        <title>Imran Devify | Web Developer</title>
        <meta name="description" content='A professional portfolio showcasing the skills and experience of Imran Safdar, a skilled web developer specializing in Frontend Development.' />
        <meta name="keywords" content="web developer, Frontend Development, React.js, Next.js, API Integration, portfolio" />
        <meta property="og:title" content='Imran Devify | Web Developer' />
        <meta property="og:description" content="A professional portfolio showcasing the skills and experience of Imran Devify, a skilled web developer specializing in react.js Development." />
        <meta property="og:url" content="https://www.linkedin.com/in/imran-safdar" />
        <meta property="og:image" content="https://yourwebsite.com/image.jpg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
              <link rel="manifest" href="/site.webmanifest"></link>
            </head>
            <ReactLenis root options={{autoRaf: true, lerp: 0.1, smoothWheel:true, wheelMultiplier: 0.8, autoResize:true}}>
            <body style={{
              position: "relative",
            }}
              className={inter.className}>
              <div className="scroller-container hidden md:block">
                <div className="scroller"></div>
              </div>
              <CustomCursor />
              <header>
                <Navbar />
              </header>
              <main className="bg-whole text-whole-text">{children}</main>
              <Footer />
            </body>
            </ReactLenis>
          </html>
          );
}