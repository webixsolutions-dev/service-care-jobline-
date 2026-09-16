export default function LoadingSpinner({ label = "Loading", size = "md", full = false, light = false }) {
  return (
    <div className={`sc-loading ${full ? "sc-loading-full" : ""}`} role="status" aria-live="polite">
      <span className={`sc-spinner sc-spinner-${size} ${light ? "sc-spinner-light" : ""}`} aria-hidden="true" />
      {label ? <span className="sc-loading-label">{label}</span> : null}
    </div>
  );
}
