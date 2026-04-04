interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
}

export default function Logo({ variant = "light", className = "" }: LogoProps) {
  const textColor = variant === "light" ? "#0F1F3D" : "#FFFFFF";

  return (
    <svg
      viewBox="0 0 200 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Foundable"
    >
      {/* Beacon ray */}
      <polygon
        points="15,0 27,0 24,16 18,16"
        fill="url(#ray-gradient)"
      />
      {/* Beacon circle */}
      <circle cx="21" cy="30" r="14" fill="url(#circle-gradient)" />
      {/* Wordmark */}
      <text
        x="44"
        y="37"
        fontFamily="'Geist', 'Inter', sans-serif"
        fontWeight="700"
        fontSize="28"
        letterSpacing="-0.5"
      >
        <tspan fill={textColor}>Found</tspan>
        <tspan fill="#F97316">able</tspan>
      </text>
      {/* Gradients */}
      <defs>
        <linearGradient id="ray-gradient" x1="21" y1="16" x2="21" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="circle-gradient" x1="10" y1="20" x2="32" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#F97316" />
        </linearGradient>
      </defs>
    </svg>
  );
}
