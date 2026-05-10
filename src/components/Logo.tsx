import React from 'react';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Outer Circle */}
        <circle cx="200" cy="200" r="190" stroke="currentColor" strokeWidth="2.5" />
        
        {/* Main Text: BALANCE */}
        <text
          x="50%"
          y="48%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="currentColor"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '68px',
            fontWeight: 400,
            letterSpacing: '0.15em',
            textTransform: 'uppercase'
          }}
        >
          BALANCE
        </text>
        
        {/* Bottom Text Container */}
        <g transform="translate(200, 245)">
          {/* Left Line */}
          <line x1="-120" y1="-5" x2="-80" y2="-5" stroke="currentColor" strokeWidth="1" />
          
          {/* Text: MASSAGE STUDIO */}
          <text
            x="0"
            y="0"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="currentColor"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '18px',
              fontWeight: 400,
              letterSpacing: '0.25em',
              textTransform: 'uppercase'
            }}
          >
            MASSAGE STUDIO
          </text>
          
          {/* Right Line */}
          <line x1="80" y1="-5" x2="120" y2="-5" stroke="currentColor" strokeWidth="1" />
        </g>
      </svg>
    </div>
  );
}
