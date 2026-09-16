/** Simple placeholder wordmark icons for the trusted-employer strip. */
export default function EmployerMark({ styleName, color }) {
  const svgProps = {
    width: 36,
    height: 36,
    viewBox: "0 0 36 36",
    fill: "none",
    "aria-hidden": true,
  };

  if (styleName === "tree") {
    return (
      <svg {...svgProps}>
        <path d="M18 4 8 16h6l-5 8h8v8h6v-8h8l-5-8h6L18 4z" fill={color} />
      </svg>
    );
  }
  if (styleName === "wave") {
    return (
      <svg {...svgProps}>
        <circle cx="18" cy="18" r="14" fill={color} />
        <path d="M8 20c3-4 6-4 9 0s6 4 11 0" stroke="#fff" strokeWidth="2.2" fill="none" />
      </svg>
    );
  }
  if (styleName === "heartHouse") {
    return (
      <svg {...svgProps}>
        <path
          d="M18 30s-11-7.8-11-15.2C7 10.2 11 7 15.2 7c2.4 0 4.4 1.3 5.8 3.3C22.4 8.3 24.4 7 26.8 7 31 7 35 10.2 35 14.8 35 22.2 18 30 18 30z"
          fill={color}
        />
      </svg>
    );
  }
  if (styleName === "leaf") {
    return (
      <svg {...svgProps}>
        <path d="M8 26c8-16 18-18 22-20-2 10-8 18-22 20z" fill={color} />
        <path d="M12 24c4-6 9-10 16-13" stroke="#fff" strokeWidth="1.6" />
      </svg>
    );
  }
  if (styleName === "cross") {
    return (
      <svg {...svgProps}>
        <rect x="14" y="6" width="8" height="24" rx="1.5" fill={color} />
        <rect x="6" y="14" width="24" height="8" rx="1.5" fill={color} />
      </svg>
    );
  }
  return (
    <svg {...svgProps}>
      <text x="18" y="24" textAnchor="middle" fontSize="20" fontFamily="Georgia, serif" fill={color}>
        F
      </text>
    </svg>
  );
}
