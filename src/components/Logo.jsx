import React from "react";

export default function Logo({ className = "w-16 h-16" }) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="currentColor">
      <circle
        cx="100"
        cy="100"
        r="95"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      />
      <circle
        cx="100"
        cy="100"
        r="88"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="70" cy="90" r="18" fill="currentColor" />
      <circle
        cx="70"
        cy="90"
        r="15"
        fill="none"
        stroke="white"
        strokeWidth="1.5"
      />
      <circle cx="115" cy="85" r="20" fill="currentColor" />
      <circle
        cx="115"
        cy="85"
        r="17"
        fill="none"
        stroke="white"
        strokeWidth="1.5"
      />
      <circle cx="130" cy="115" r="16" fill="currentColor" />
      <circle
        cx="130"
        cy="115"
        r="13"
        fill="none"
        stroke="white"
        strokeWidth="1.5"
      />
      <path
        d="M 75 75 Q 80 65 90 70 L 95 75"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
      />
      <path
        d="M 120 70 Q 125 60 135 65 L 140 70"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
      />
      <path
        d="M 135 105 Q 145 100 150 108"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
      />
      <ellipse
        cx="82"
        cy="78"
        rx="8"
        ry="4"
        transform="rotate(-25 82 78)"
        fill="currentColor"
      />
      <ellipse
        cx="108"
        cy="73"
        rx="9"
        ry="4"
        transform="rotate(-15 108 73)"
        fill="currentColor"
      />
      <ellipse
        cx="138"
        cy="108"
        rx="7"
        ry="3"
        transform="rotate(15 138 108)"
        fill="currentColor"
      />
    </svg>
  );
}
