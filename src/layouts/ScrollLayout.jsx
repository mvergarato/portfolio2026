import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollLayout = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,     // suavizado
      easing: (t) => t,  // easing lineal
      smooth: true,
      smoothTouch: false,
    });

    // RAF loop
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // ScrollTrigger proxy
    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        if (arguments.length) lenis.scrollTo(value);
        else return lenis.scroll;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: document.body.style.transform ? "transform" : "fixed",
    });

    ScrollTrigger.addEventListener("refresh", () => {
      // ya no llamamos lenis.update()
    });
    ScrollTrigger.refresh();

    // Snap programático
    lenis.on("scrollEnd", () => {
      const sections = document.querySelectorAll("section");
      const scrollY = lenis.scroll;
      let closest = sections[0];
      let minDiff = Math.abs(scrollY - sections[0].offsetTop);

      sections.forEach((s) => {
        const diff = Math.abs(scrollY - s.offsetTop);
        if (diff < minDiff) {
          minDiff = diff;
          closest = s;
        }
      });

      lenis.scrollTo(closest.offsetTop, { duration: 0.6 });
    });

    return () => {
      ScrollTrigger.killAll();
    };
  }, []);

  return <>{children}</>;
};

export default ScrollLayout;
