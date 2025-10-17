
const PALETTE = {
  bg: "#1E1C17", // deep brown-black
  ink: "#EAE8E1", // soft beige
  moss: "#4B6043",
  olive: "#5C715E",
  clay: "#7D7461",
  tan: "#9B8B70",
  linen: "#C9C5B5",
};

function IconBadge({ children, label, accent = PALETTE.moss }) {
  return (
    <div
      className="inline-flex items-center gap-3 rounded-2xl p-3 shadow-sm hover:scale-105 transition-transform"
      style={{
        background: `linear-gradient(180deg, ${PALETTE.bg}, #181712)`,
        border: `1px solid ${PALETTE.clay}40`,
        color: PALETTE.ink,
      }}
    >
      <div
        style={{ filter: "drop-shadow(0 0 8px rgba(0,0,0,0.35))" }}
      >
        {children}
      </div>
      <div className="pr-1">
        <div className="text-sm tracking-wide" style={{ color: PALETTE.linen }}>
          {label}
        </div>
      </div>
      <div
        className="ml-2 h-2 w-2 rounded-full"
        style={{ background: accent, boxShadow: `0 0 0 3px ${accent}20` }}
      />
    </div>
  );
}

export function BrandingIcon({ stroke = PALETTE.moss }) {
  return (
    <svg width="38" height="38" viewBox="0 0 48 48" fill="none">
      {/* Outer compass ring */}
      <circle cx="20" cy="24" r="10" stroke={stroke} strokeWidth="2" fill={`${PALETTE.bg}`} />
      {/* Compass needle */}
      <path d="M20 15 L24 24 L20 33 L16 24 Z" fill={PALETTE.tan} stroke={stroke} strokeWidth="1.5" />
      {/* Monogram tag */}
      <rect x="28" y="14" width="14" height="18" rx="3" fill={PALETTE.clay} stroke={stroke} strokeWidth="1.5" />
      <circle cx="35" cy="19" r="2" fill={PALETTE.bg} stroke={stroke} strokeWidth="1" />
      <path d="M31 24 h8" stroke={PALETTE.linen} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M31 27 h6" stroke={PALETTE.linen} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function VisualsIcon({ stroke = PALETTE.olive }) {
  return (
    <svg width="38" height="38" viewBox="0 0 48 48" fill="none">
      {/* Frame */}
      <rect x="10" y="12" width="28" height="22" rx="4" fill={PALETTE.bg} stroke={stroke} strokeWidth="2" />
      {/* Eye */}
      <path d="M14 23c4-5 16-5 20 0-4 5-16 5-20 0Z" stroke={PALETTE.tan} strokeWidth="1.8" fill={`${PALETTE.clay}20`} />
      <circle cx="24" cy="23" r="4" fill={PALETTE.olive} />
      <circle cx="25.5" cy="21.5" r="1.2" fill={PALETTE.linen} />
      {/* Bottom caption bar */}
      <rect x="10" y="32" width="28" height="2" fill={PALETTE.clay} opacity="0.6" />
    </svg>
  );
}

export function FashionIcon({ stroke = PALETTE.clay }) {
  return (
    <svg width="38" height="38" viewBox="0 0 48 48" fill="none">
      {/* Fabric swatch */}
      <path d="M14 14 h14 v14 H14 Z" fill={PALETTE.tan} stroke={stroke} strokeWidth="1.5" />
      {/* Pinking shear edge */}
      <path d="M14 20 h14" stroke={PALETTE.bg} strokeWidth="1.5" strokeDasharray="2 3" />
      {/* Needle */}
      <path d="M28 30 L40 16" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="39.2" cy="16.8" r="1.1" fill={PALETTE.bg} stroke={stroke} strokeWidth="1" />
      {/* Thread */}
      <path d="M34 22 q6 6 -2 10 q-6 3 -10 -1" stroke={PALETTE.olive} strokeWidth="1.6" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export default function DemoBadges() {
  return (
    <div className="flex flex-wrap gap-4 p-6" style={{ background: PALETTE.bg }}>
      <IconBadge label="Branding" accent={PALETTE.moss}>
        <BrandingIcon />
      </IconBadge>
      <IconBadge label="Visuals" accent={PALETTE.olive}>
        <VisualsIcon />
      </IconBadge>
      <IconBadge label="Fashion" accent={PALETTE.clay}>
        <FashionIcon />
      </IconBadge>
    </div>
  );
}
