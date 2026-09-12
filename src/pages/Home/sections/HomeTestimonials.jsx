import { useEffect, useMemo, useState } from "react";

import { homePageContent } from "../../../data/homePageContent";
import { homeTestimonials } from "../../../data/homeTestimonials";

import TestimonialCard from "../../../components/TestimonialCard/TestimonialCard";
import CarouselDots from "../../../components/CarouselDots/CarouselDots";

import styles from "./HomeTestimonials.module.css";

/* =========================================================
   RESPONSIVE ITEMS PER SLIDE
========================================================= */

function getItemsPerPage(width) {
  if (width < 768) {
    return 1;
  }

  if (width < 1100) {
    return 2;
  }

  return 3;
}

function useItemsPerPage() {
  const [itemsPerPage, setItemsPerPage] = useState(() => {
    if (typeof window === "undefined") {
      return 3;
    }

    return getItemsPerPage(window.innerWidth);
  });

  useEffect(() => {
    function handleResize() {
      setItemsPerPage(
        getItemsPerPage(window.innerWidth)
      );
    }

    window.addEventListener(
      "resize",
      handleResize
    );

    handleResize();

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, []);

  return itemsPerPage;
}

/* =========================================================
   COMPONENT
========================================================= */

export default function HomeTestimonials() {
  const {
    headingParts,
    subtext,
  } = homePageContent.testimonials;

  const itemsPerPage = useItemsPerPage();

  const [slide, setSlide] = useState(0);

  /*
    Desktop:
    6 reviews / 3 = 2 dots

    Tablet:
    6 reviews / 2 = 3 dots

    Mobile:
    6 reviews / 1 = 6 dots
  */
  const totalSlides = Math.ceil(
    homeTestimonials.length / itemsPerPage
  );

  /*
    Current slide ke reviews
  */
  const visibleItems = useMemo(() => {
    const start =
      slide * itemsPerPage;

    const end =
      start + itemsPerPage;

    return homeTestimonials.slice(
      start,
      end
    );
  }, [slide, itemsPerPage]);

  /*
    Screen resize hone par invalid slide
    prevent karta hai.
  */
  useEffect(() => {
    if (slide >= totalSlides) {
      setSlide(
        Math.max(totalSlides - 1, 0)
      );
    }
  }, [slide, totalSlides]);

  function handleDotClick(index) {
    setSlide(index);
  }

  return (
    <section
      className={styles.section}
      aria-labelledby="home-testimonials-heading"
    >
      <div className="container">
        {/* =========================
            HEADING
        ========================== */}

        <h2
          id="home-testimonials-heading"
          className={styles.heading}
        >
          {headingParts.map(
            (part, i) => (
              <span
                key={`${part.text}-${i}`}
                className={
                  part.accent
                    ? styles[part.accent]
                    : undefined
                }
              >
                {part.text}

                {i <
                headingParts.length - 1
                  ? " "
                  : ""}
              </span>
            )
          )}
        </h2>

        <p className={styles.sub}>
          {subtext}
        </p>

        {/* =========================
            TESTIMONIAL SLIDE
        ========================== */}

        <div className={styles.slider}>
          <div
            key={`${slide}-${itemsPerPage}`}
            className={styles.grid}
          >
            {visibleItems.map(
              (item) => (
                <TestimonialCard
                  key={`${slide}-${item.name}`}
                  {...item}
                />
              )
            )}
          </div>
        </div>

        {/* =========================
            DOT NAVIGATION
        ========================== */}

        {totalSlides > 1 ? (
          <div className={styles.dots}>
            <CarouselDots
              totalSlides={totalSlides}
              currentSlide={slide}
              onDotClick={
                handleDotClick
              }
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}