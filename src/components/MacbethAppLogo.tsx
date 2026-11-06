"use client";

import React from "react";

export const MacbethAppLogo: React.FC<{ className?: string }> = ({
  className = "w-full h-full",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      fill="none"
    >
      <defs>
        {/* Royal Scottish Gold Gradients */}
        <linearGradient id="mbGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="25%" stopColor="#f59e0b" />
          <stop offset="65%" stopColor="#d97706" />
          <stop offset="100%" stopColor="#92400e" />
        </linearGradient>
        <radialGradient id="mbGoldAura" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.4" />
          <stop offset="60%" stopColor="#d97706" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#92400e" stopOpacity="0" />
        </radialGradient>

        {/* Royal Velvet Crimson */}
        <linearGradient id="mbCrimsonGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fb7185" />
          <stop offset="35%" stopColor="#e11d48" />
          <stop offset="70%" stopColor="#9f1239" />
          <stop offset="100%" stopColor="#4c0519" />
        </linearGradient>

        {/* Steel Blade Gradients */}
        <linearGradient id="mbBladeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="40%" stopColor="#e2e8f0" />
          <stop offset="75%" stopColor="#94a3b8" />
          <stop offset="100%" stopColor="#475569" />
        </linearGradient>
      </defs>

      {/* Ambient Royal Halo Aura */}
      <circle cx="256" cy="256" r="240" fill="url(#mbGoldAura)" />

      {/* Outer Golden Royal Shield Frame */}
      <circle
        cx="256"
        cy="256"
        r="230"
        fill="#0b0f19"
        stroke="url(#mbGoldGrad)"
        strokeWidth="8"
        strokeOpacity="0.95"
      />
      <circle
        cx="256"
        cy="256"
        r="214"
        fill="none"
        stroke="#fef08a"
        strokeWidth="2"
        strokeDasharray="8 8"
        strokeOpacity="0.65"
      />

      {/* Dunsinane Royal Scottish Crown */}
      {/* Velvet Cap of Estate */}
      <path
        d="M 148 318 C 148 226, 186 172, 256 166 C 326 172, 364 226, 364 318 Z"
        fill="url(#mbCrimsonGrad)"
        stroke="#f43f5e"
        strokeWidth="3"
        strokeOpacity="0.6"
      />

      {/* Golden Crown Peak Arches */}
      <path
        d="M 132 318 L 152 216 L 196 268 L 256 160 L 316 268 L 360 216 L 380 318 Z"
        fill="url(#mbGoldGrad)"
        stroke="#fef08a"
        strokeWidth="5"
        strokeLinejoin="round"
      />

      {/* Crown Base Band */}
      <path
        d="M 132 318 C 190 338, 322 338, 380 318 L 372 360 C 318 382, 194 382, 140 360 Z"
        fill="url(#mbGoldGrad)"
        stroke="#fef08a"
        strokeWidth="4"
      />

      {/* Royal Crown Jewels Inset */}
      <circle cx="174" cy="344" r="8" fill="#e11d48" stroke="#ffffff" strokeWidth="1.5" />
      <circle cx="215" cy="351" r="9" fill="#10b981" stroke="#ffffff" strokeWidth="1.5" />
      <circle cx="256" cy="353" r="11" fill="#38bdf8" stroke="#ffffff" strokeWidth="2" />
      <circle cx="297" cy="351" r="9" fill="#10b981" stroke="#ffffff" strokeWidth="1.5" />
      <circle cx="338" cy="344" r="8" fill="#e11d48" stroke="#ffffff" strokeWidth="1.5" />

      {/* Golden Peak Orb Finials */}
      <circle cx="152" cy="212" r="10" fill="#fef08a" stroke="#d97706" strokeWidth="2" />
      <circle cx="360" cy="212" r="10" fill="#fef08a" stroke="#d97706" strokeWidth="2" />

      {/* Spectral Dagger */}
      <circle cx="256" cy="80" r="12" fill="url(#mbGoldGrad)" stroke="#fef08a" strokeWidth="3" />
      <rect x="250" y="92" width="12" height="34" rx="3" fill="url(#mbGoldGrad)" stroke="#78350f" strokeWidth="1.5" />

      {/* Crossguard */}
      <path
        d="M 218 126 C 240 131, 272 131, 294 126 L 298 138 C 272 144, 240 144, 214 138 Z"
        fill="url(#mbGoldGrad)"
        stroke="#fef08a"
        strokeWidth="2.5"
      />

      {/* Gleaming Steel Blade with Crimson Bloodline */}
      <path
        d="M 246 142 L 256 310 L 266 142 Z"
        fill="url(#mbBladeGrad)"
        stroke="#cbd5e1"
        strokeWidth="2"
      />
      <line x1="256" y1="144" x2="256" y2="296" stroke="#e11d48" strokeWidth="3" strokeLinecap="round" />

      {/* Blood Drop at the tip */}
      <circle cx="256" cy="316" r="4.5" fill="#e11d48" />
    </svg>
  );
};
