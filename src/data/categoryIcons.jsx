/**
 * Category → icon tile used on job cards.
 * `iconKey` on a job overrides the generic category mapping.
 */

function Svg({ children, size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {children}
    </svg>
  );
}

export function HealthcareCrossIcon({ size, color = "#0a1a3c" }) {
  return (
    <Svg size={size}>
      <path d="M10.2 3h3.6v7.2H21v3.6h-7.2V21h-3.6v-7.2H3v-3.6h7.2V3z" fill={color} />
    </Svg>
  );
}

export function CaregiverHouseIcon({ size, color = "#14b8a6" }) {
  return (
    <Svg size={size}>
      <path
        d="M12 3.2 3.6 10.2V20.2h6.2v-5.4h4.4v5.4h6.2V10.2L12 3.2z"
        stroke={color}
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M12 13.6c-1.7-1.55-4.1.12-3.2 1.9.5 1 2.05 2.15 3.2 3 1.15-.85 2.7-2 3.2-3 .9-1.78-1.5-3.45-3.2-1.9z"
        fill={color}
      />
    </Svg>
  );
}

export function ServiceBellIcon({ size, color = "#f5a623" }) {
  return (
    <Svg size={size}>
      <path d="M12 4.2a1.1 1.1 0 0 1 1.1 1.1v.7c3.1.7 5.4 3.4 5.5 6.7H5.4c.1-3.3 2.4-6 5.5-6.7v-.7A1.1 1.1 0 0 1 12 4.2z" fill={color} />
      <path d="M4.5 14.4h15c.6 1.4.4 3.4-1.5 3.4H6c-1.9 0-2.1-2-1.5-3.4z" fill={color} />
    </Svg>
  );
}

export function UtensilsIcon({ size, color = "#f5a623" }) {
  return (
    <Svg size={size}>
      <path d="M8 3.5v7.2c0 1.1-.7 1.8-1.6 1.8S4.8 11.8 4.8 10.7V3.5" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M6.4 3.5v7.2M8 3.5v4.2M4.8 3.5v4.2M6.4 12.5V20.5" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M16.2 3.5c2.1 0 3.2 1.6 3.2 4.1 0 2.2-1.2 3.8-3.2 4.1V20.5" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </Svg>
  );
}

export function HousekeepingIcon({ size, color = "#14b8a6" }) {
  return (
    <Svg size={size}>
      <path d="M12 4 4 11v9h16v-9L12 4z" stroke={color} strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M9 20v-5h6v5" stroke={color} strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M16.8 4.4l.9 1.6 1.8.3-1.3 1.3.3 1.8-1.7-.9-1.7.9.3-1.8-1.3-1.3 1.8-.3.9-1.6z" fill={color} />
    </Svg>
  );
}

export function ChefHatIcon({ size, color = "#e07a2f" }) {
  return (
    <Svg size={size}>
      <path
        d="M7.5 11.2c-1.8 0-3.2-1.5-3.2-3.2 0-1.5 1-2.7 2.4-3.1C7.2 3.4 8.5 2.6 10 2.6c.9 0 1.7.3 2.4.8.7-.5 1.6-.8 2.5-.8 1.6 0 2.9.9 3.4 2.3 1.4.4 2.4 1.6 2.4 3.1 0 1.7-1.4 3.2-3.2 3.2H7.5z"
        fill={color}
      />
      <path d="M7.8 11.2h8.4V19.6H7.8V11.2z" fill={color} />
      <path d="M7.2 19.6h9.6v1.8H7.2v-1.8z" fill={color} />
    </Svg>
  );
}

export function ClipboardCrossIcon({ size, color = "#7c3aed" }) {
  return (
    <Svg size={size}>
      <rect x="5.5" y="4.5" width="13" height="16" rx="2" stroke={color} strokeWidth="1.8" />
      <path d="M9 4.5h6v2.4H9V4.5z" fill={color} />
      <path d="M11.1 9.2h1.8v2.6h2.6v1.8h-2.6v2.6h-1.8v-2.6H8.5v-1.8h2.6V9.2z" fill={color} />
    </Svg>
  );
}

export const categoryIconMap = {
  Healthcare: { Icon: HealthcareCrossIcon, bgColor: "#e8eef8", color: "#0a1a3c" },
  Hospitality: { Icon: ServiceBellIcon, bgColor: "#fff6e5", color: "#f5a623" },
  Caregiver: { Icon: CaregiverHouseIcon, bgColor: "#e6f7f4", color: "#14b8a6" },
  "Other Services": { Icon: ServiceBellIcon, bgColor: "#eef2ff", color: "#4f46e5" },
};

export const iconKeyMap = {
  nurse: { Icon: HealthcareCrossIcon, bgColor: "#e8eef8", color: "#0a1a3c" },
  healthcare: { Icon: HealthcareCrossIcon, bgColor: "#e4eefc", color: "#1d4ed8" },
  caregiver: { Icon: CaregiverHouseIcon, bgColor: "#e6f7f4", color: "#14b8a6" },
  bell: { Icon: ServiceBellIcon, bgColor: "#fff6e5", color: "#f5a623" },
  server: { Icon: UtensilsIcon, bgColor: "#fff4e0", color: "#f5a623" },
  housekeeping: { Icon: HousekeepingIcon, bgColor: "#e6f7f4", color: "#14b8a6" },
  cook: { Icon: ChefHatIcon, bgColor: "#fff1e6", color: "#e07a2f" },
  clipboard: { Icon: ClipboardCrossIcon, bgColor: "#f0e9fb", color: "#7c3aed" },
};

export function getJobIconMeta(job) {
  return iconKeyMap[job.iconKey] || categoryIconMap[job.category] || categoryIconMap.Healthcare;
}
