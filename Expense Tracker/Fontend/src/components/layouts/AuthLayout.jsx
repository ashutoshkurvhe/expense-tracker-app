"use client";

import React from "react";
const AuthLayout = ({ children }) => {
  return (
    <div className="fixed inset-0 overflow-hidden bg-gradient-to-b  from-blue-500/50 bg-pink-500/50  -z-10">
      {/* Cyberpunk grid overlay */}
      <div className="absolute inset-0">
        <div className="flex justify-center items-center relative">
          <div className="flex flex-col justify-center items-center w-screen h-screen md:w-[60vw] px-2 pt-8 pb-12 z-10 relative">
            <h2 className="text-4xl font-medium text-white lg:text-4xl mb-5">
              Expense Tracker
            </h2>
            {children}
          </div>
        </div>
      </div>

      {/* Cyberpunk SVG lines */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="magenta-pulse" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff00ff" stopOpacity="0" />
            <stop offset="50%" stopColor="#ff00ff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#ff00ff" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="cyan-pulse" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00ffff" stopOpacity="0" />
            <stop offset="50%" stopColor="#00ffff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#00ffff" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="yellow-pulse" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffff00" stopOpacity="0" />
            <stop offset="50%" stopColor="#ffff00" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#ffff00" stopOpacity="0" />
          </linearGradient>
          <filter id="cyber-glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Flowing neon lines */}
        <path
          d="M-200,250 Q200,200 600,230 T1400,210"
          fill="none"
          stroke="url(#magenta-pulse)"
          strokeWidth="3"
          filter="url(#cyber-glow)"
          className="animate-cyber-1"
        />
        <path
          d="M-200,400 Q300,350 700,380 T1400,360"
          fill="none"
          stroke="url(#cyan-pulse)"
          strokeWidth="2.5"
          filter="url(#cyber-glow)"
          className="animate-cyber-2"
        />
        <path
          d="M-200,550 Q400,500 800,530 T1400,510"
          fill="none"
          stroke="url(#yellow-pulse)"
          strokeWidth="2"
          filter="url(#cyber-glow)"
          className="animate-cyber-3"
        />

        {/* Glowing pulse dots */}
        <circle
          cx="400"
          cy="230"
          r="6"
          fill="#ff00ff"
          filter="url(#cyber-glow)"
          className="animate-cyber-pulse"
        />
        <circle
          cx="700"
          cy="380"
          r="5"
          fill="#00ffff"
          filter="url(#cyber-glow)"
          className="animate-cyber-pulse"
          style={{ animationDelay: "1s" }}
        />
        <circle
          cx="800"
          cy="530"
          r="7"
          fill="#ffff00"
          filter="url(#cyber-glow)"
          className="animate-cyber-pulse"
          style={{ animationDelay: "2s" }}
        />
      </svg>

      {/* Embedded animations */}
      <style>{`
        @keyframes cyber-1 {
          0% { transform: translateX(-300px) translateY(0px); }
          50% { transform: translateX(150px) translateY(-30px); }
          100% { transform: translateX(-300px) translateY(0px); }
        }
        @keyframes cyber-2 {
          0% { transform: translateX(-250px) translateY(20px); }
          50% { transform: translateX(200px) translateY(-20px); }
          100% { transform: translateX(-250px) translateY(20px); }
        }
        @keyframes cyber-3 {
          0% { transform: translateX(-350px) translateY(-10px); }
          50% { transform: translateX(100px) translateY(40px); }
          100% { transform: translateX(-350px) translateY(-10px); }
        }
        @keyframes cyber-pulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }

        .animate-cyber-1 {
          animation: cyber-1 15s ease-in-out infinite;
        }
        .animate-cyber-2 {
          animation: cyber-2 18s ease-in-out infinite;
        }
        .animate-cyber-3 {
          animation: cyber-3 20s ease-in-out infinite;
        }
        .animate-cyber-pulse {
          animation: cyber-pulse 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default AuthLayout;