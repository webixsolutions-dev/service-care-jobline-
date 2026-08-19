import { useState, useEffect } from "react";
import { homePageContent } from "../../../data/homePageContent";
import { homeTestimonials } from "../../../data/homeTestimonials";
import TestimonialCard from "../../../components/TestimonialCard/TestimonialCard";
import CarouselDots from "../../../components/CarouselDots/CarouselDots";
import styles from "./HomeTestimonials.module.css";

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.innerWidth < breakpoint
  );

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    setIsMobile(mq.matches);
    return () => mq.removeEventListener("change", handler);
  }, [breakpoint]);

  return isMobile;
}

export default function HomeTestimonials() {
  const { headingParts, subtext } = homePageContent.testimonials;
  const [slide, setSlide] = useState(0);
  const isMobile = useIsMobile();
  const totalSlides = homeTestimonials.length;

  const visibleItems = isMobile
    ? [homeTestimonials[slide]]
    : homeTestimonials;

  return (
    <section className={styles.section} aria-labelledby="home-testimonials-heading">
      <div className="container">
        <h2 id="home-testimonials-heading" className={styles.heading}>
          {headingParts.map((part, i) => (
            <span key={`${part.text}-${i}`} className={part.accent ? styles[part.accent] : undefined}>
              {part.text}
              {i < headingParts.length - 1 ? " " : ""}
            </span>
          ))}
        </h2>
        <p className={styles.sub}>{subtext}</p>

        <div className={`${styles.grid} ${isMobile ? styles.mobile : ""}`}>
          {visibleItems.map((item) => (
            <TestimonialCard key={item.name} {...item} />
          ))}
        </div>

        <CarouselDots totalSlides={totalSlides} currentSlide={slide} onDotClick={setSlide} />
      </div>
    </section>
  );
}
