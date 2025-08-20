// ScaleSpinner.jsx
import React from "react";
import "../styles/ScaleSpinner.css"; // we'll add the rocking animation here

export const ScaleSpinner = ({ size = 64 }) => (
    <div className="scale-spinner" style={{ width: size, height: size }}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
        >
            <path d="M32 8v48M16 24h32" /> {/* pole and beam */}
            <path d="M16 24l-8 16h16l-8-16zM48 24l-8 16h16l-8-16z" /> {/* pans */}
        </svg>
    </div>
);
