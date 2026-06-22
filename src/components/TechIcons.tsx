import React from 'react';

interface IconProps {
  size?: number;
}

// Java Icon (Coffee Cup style)
export const JavaIcon: React.FC<IconProps> = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 10H14C15.1046 10 16 10.8954 16 12V16C16 18.2091 14.2091 20 12 20H8C5.79086 20 4 18.2091 4 16V12C4 10.8954 4.89543 10 6 10Z" stroke="#E76F51" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 12H18C19.1046 12 20 12.8954 20 14C20 15.1046 19.1046 16 18 16H16" stroke="#E76F51" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7 6V3" stroke="#F4A261" strokeWidth="2" strokeLinecap="round"/>
    <path d="M10 6V2" stroke="#F4A261" strokeWidth="2" strokeLinecap="round"/>
    <path d="M13 6V4" stroke="#F4A261" strokeWidth="2" strokeLinecap="round"/>
    <path d="M3 21H19" stroke="#264653" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// Python Icon
export const PythonIcon: React.FC<IconProps> = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.83 1.023C9.07 1.023 6.83 1.835 6.83 4.835V6.835H11.83V7.335H4.83C2.07 7.335 1 9.07 1 11.83C1 14.59 2.07 16.33 4.83 16.33H6.83V14.33C6.83 11.83 8.83 9.83 11.33 9.83H16.33V4.835C16.33 2.075 14.59 1.023 11.83 1.023Z" fill="#3776AB"/>
    <path d="M12.17 22.977C14.93 22.977 17.17 22.165 17.17 19.165V17.165H12.17V16.665H19.17C21.93 16.665 23 14.93 23 12.17C23 9.41 21.93 7.67 19.17 7.67H17.17V9.67C17.17 12.17 15.17 14.17 12.67 14.17H7.67V19.165C7.67 21.925 9.41 22.977 12.17 22.977Z" fill="#FFE873"/>
    <circle cx="9.25" cy="4.25" r="0.75" fill="#F0F4F8"/>
    <circle cx="14.75" cy="19.75" r="0.75" fill="#306998"/>
  </svg>
);

// C Language Icon
export const CIcon: React.FC<IconProps> = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 6.5V17.5L12 22L22 17.5V6.5L12 2Z" fill="#00599C" stroke="#004481" strokeWidth="1.5"/>
    <path d="M16.5 8.5C15.5 7.5 13.8 7 12 7C9 7 7.5 9 7.5 12C7.5 15 9 17 12 17C13.8 17 15.5 16.5 16.5 15.5" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// JavaScript Icon
export const JavaScriptIcon: React.FC<IconProps> = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="#F7DF1E"/>
    <path d="M12.5 12.5H14.5V17.5C14.5 18.5 13.7 19.2 12.5 19.2C11.5 19.2 11 18.5 11 18H12.75C12.75 18.2 12.85 18.3 12.95 18.3C13.05 18.3 13.2 18.25 13.2 17.9V12.5H12.5ZM16.5 12.5H18.5V14.5C18.5 15.5 17.7 16.2 16.5 16.2C15.5 16.2 15 15.5 15 15H16.75C16.75 15.2 16.85 15.3 16.95 15.3C17.05 15.3 17.2 15.25 17.2 14.9V12.5H16.5Z" fill="#000000" stroke="#000000" strokeWidth="0.5"/>
    <path d="M9.8 18C9.5 18.3 9.1 18.5 8.6 18.5C7.9 18.5 7.4 18 7.4 17.1L9 17C9 17.4 9.1 17.6 9.3 17.6C9.5 17.6 9.6 17.5 9.6 17.3V12.5H11.2V17.2C11.2 18.5 10.5 19 9.5 19C8.8 19 8.2 18.6 7.9 18" fill="#000000"/>
  </svg>
);

// React Icon
export const ReactIcon: React.FC<IconProps> = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="12" cy="12" rx="10" ry="3.5" transform="rotate(30 12 12)" stroke="#61DAFB" strokeWidth="1.5"/>
    <ellipse cx="12" cy="12" rx="10" ry="3.5" transform="rotate(90 12 12)" stroke="#61DAFB" strokeWidth="1.5"/>
    <ellipse cx="12" cy="12" rx="10" ry="3.5" transform="rotate(150 12 12)" stroke="#61DAFB" strokeWidth="1.5"/>
    <circle cx="12" cy="12" r="1.5" fill="#61DAFB"/>
  </svg>
);

// HTML & CSS combined icon
export const HtmlCssIcon: React.FC<IconProps> = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* HTML Shield (Orange) */}
    <path d="M2 3L3.8 19L10 21L11.5 10.5H6L5.7 7H12V3H2Z" fill="#E34F26"/>
    {/* CSS Shield (Blue) */}
    <path d="M22 3L20.2 19L14 21L12.5 10.5H18L18.3 7H12V3H22Z" fill="#1572B6"/>
  </svg>
);

// Framer Motion Icon
export const FramerMotionIcon: React.FC<IconProps> = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 12L4 4H20L12 12Z" fill="#F01F7A"/>
    <path d="M12 12L4 20H12V12Z" fill="#00CFF5"/>
    <path d="M20 12H12V20L20 12Z" fill="#7B2CBF"/>
  </svg>
);

// Responsive Design Icon (Monitor & Phone)
export const ResponsiveIcon: React.FC<IconProps> = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-responsive">
    <rect x="2" y="3" width="14" height="11" rx="1.5" stroke="#3b82f6" />
    <path d="M6 18H12" stroke="#3b82f6" />
    <path d="M9 14V18" stroke="#3b82f6" />
    <rect x="15" y="10" width="6" height="11" rx="1" fill="var(--card-bg)" stroke="#10b981" />
    <circle cx="18" cy="18" r="0.5" fill="#10b981" />
  </svg>
);

// Node.js Icon
export const NodejsIcon: React.FC<IconProps> = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L4 6.5V15.5L12 20L20 15.5V6.5L12 2Z" fill="#339933" stroke="#215721" strokeWidth="1.5"/>
    <path d="M12 6V16M12 6L7.5 8.5M12 11L16.5 8.5" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="12" cy="11" r="1.5" fill="#FFFFFF"/>
  </svg>
);

// Express.js Icon
export const ExpressjsIcon: React.FC<IconProps> = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="#000000"/>
    <text x="12" y="16" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="monospace">ex</text>
  </svg>
);

// MySQL Icon
export const MysqlIcon: React.FC<IconProps> = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 6C4 3.79086 7.58172 2 12 2C16.4183 2 20 3.79086 20 6M4 6C4 8.20914 7.58172 10 12 10C16.4183 10 20 8.20914 20 6M4 6V11C4 13.2091 7.58172 15 12 15C16.4183 15 20 13.2091 20 11V6M4 11V16C4 18.2091 7.58172 20 12 20C16.4183 20 20 18.2091 20 16V11" stroke="#00758F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 13C16 11.5 19 11.5 21 13" stroke="#F29111" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

// API / REST API Icon
export const ApiIcon: React.FC<IconProps> = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="16" height="5" rx="1" stroke="#3b82f6" />
    <rect x="4" y="15" width="16" height="5" rx="1" stroke="#3b82f6" />
    <path d="M8 9v6" stroke="#10b981" />
    <path d="M16 9v6" stroke="#10b981" />
    <circle cx="8" cy="12" r="1.5" fill="#10b981" />
    <circle cx="16" cy="12" r="1.5" fill="#10b981" />
  </svg>
);

// Git & GitHub Icon
export const GitIcon: React.FC<IconProps> = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.8 2.2C18.2 1.6 17.4 1.2 16.5 1.2C15.6 1.2 14.8 1.6 14.2 2.2L12 4.4L9.8 2.2C9.2 1.6 8.4 1.2 7.5 1.2C6.6 1.2 5.8 1.6 5.2 2.2L2.2 5.2C1 6.4 1 8.4 2.2 9.6L12 19.4L21.8 9.6C23 8.4 23 6.4 21.8 5.2L18.8 2.2Z" fill="#F05032" stroke="#D13B1F" strokeWidth="1"/>
    <circle cx="12" cy="7.5" r="2" fill="#FFFFFF"/>
    <circle cx="8.5" cy="11.5" r="2" fill="#FFFFFF"/>
    <path d="M12 9.5V11.5H8.5" stroke="#FFFFFF" strokeWidth="1.5"/>
  </svg>
);

// Postman Icon
export const PostmanIcon: React.FC<IconProps> = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 6H13V12H11V6ZM11 14H13V18H11V14Z" fill="#FF6C37"/>
    <path d="M12 8L15 11H9L12 8Z" fill="#FFFFFF"/>
  </svg>
);

// npm / Vite Icon
export const ViteIcon: React.FC<IconProps> = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 6L11 21.5L22 6L12 2Z" fill="#BD34FE"/>
    <path d="M19.5 6.5L12 3.5L4.5 6.5L12 18L19.5 6.5Z" fill="#FFC91F"/>
    <path d="M12.5 5.5L7.5 12H12L11 16.5L16.5 10H12L12.5 5.5Z" fill="#FFFFFF"/>
  </svg>
);

// Firebase Icon
export const FirebaseIcon: React.FC<IconProps> = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.89 17.55L9.61 2.37C9.74 2.01 10.26 2.01 10.39 2.37L12.18 7.14L3.89 17.55Z" fill="#FFC24A"/>
    <path d="M14.07 9.17L12.18 7.14L3.89 17.55L14.07 9.17Z" fill="#FFA611"/>
    <path d="M20.11 17.55L15.34 8.01C15.19 7.71 14.81 7.71 14.66 8.01L12.18 13.06L3.89 17.55H20.11Z" fill="#F58220"/>
  </svg>
);
