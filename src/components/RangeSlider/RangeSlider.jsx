import styles from "./RangeSlider.module.css";

function percent(value, min, max) {
  return ((value - min) / (max - min)) * 100;
}

function formatSalary(value, isMax, max) {
  const label = `$${value.toLocaleString("en-CA")}`;
  return isMax && value >= max ? `${label}+` : label;
}

/**
 * Dual-handle salary range slider.
 */
export default function RangeSlider({
  min = 20000,
  max = 120000,
  step = 1000,
  minValue,
  maxValue,
  onChange,
  minLabel = "Minimum salary",
  maxLabel = "Maximum salary",
}) {
  const left = percent(minValue, min, max);
  const right = 100 - percent(maxValue, min, max);

  return (
    <div className={styles.wrap}>
      <div className={styles.labels}>
        <span>{formatSalary(minValue, false, max)}</span>
        <span>{formatSalary(maxValue, true, max)}</span>
      </div>
      <div className={styles.slider}>
        <div className={styles.track} />
        <div className={styles.range} style={{ left: `${left}%`, right: `${right}%` }} />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={minValue}
          aria-label={minLabel}
          className={styles.thumb}
          onChange={(e) => {
            const next = Math.min(Number(e.target.value), maxValue - step);
            onChange({ min: next, max: maxValue });
          }}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={maxValue}
          aria-label={maxLabel}
          className={styles.thumb}
          onChange={(e) => {
            const next = Math.max(Number(e.target.value), minValue + step);
            onChange({ min: minValue, max: next });
          }}
        />
      </div>
    </div>
  );
}
