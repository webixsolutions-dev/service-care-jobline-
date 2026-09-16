import styles from "./CarouselDots.module.css";

/** Dot pagination for lightweight carousels. */
export default function CarouselDots({ totalSlides, currentSlide, onDotClick }) {
  return (
    <div className={styles.dots} role="tablist" aria-label="Carousel pagination">
      {Array.from({ length: totalSlides }).map((_, i) => (
        <button
          key={i}
          type="button"
          role="tab"
          aria-selected={i === currentSlide}
          aria-label={`Go to slide ${i + 1}`}
          className={`${styles.dot} ${i === currentSlide ? styles.active : ""}`}
          onClick={() => onDotClick?.(i)}
        />
      ))}
    </div>
  );
}
