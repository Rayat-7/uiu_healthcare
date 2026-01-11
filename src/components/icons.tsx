
// src/components/icons.tsx
import React from 'react';

export const PlusIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14" />
    <path d="M12 5v14" />
  </svg>
);

export const StethoscopeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg 
        {...props}
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
    >
        <path d="M4.8 2.3A.3.3 0 1 0 5 2a.3.3 0 0 0-.2.3Z"/>
        <path d="M6.4 4c-1.2 1.2-1.2 3.1 0 4.2"/>
        <path d="M8 6A3 3 0 0 1 5 9"/>
        <path d="M17.6 4c1.2 1.2 1.2 3.1 0 4.2"/>
        <path d="M16 6a3 3 0 0 0 3 3"/>
        <path d="M19 10v-.2c0-1-.8-1.8-1.8-1.8h-1.4c-1 0-1.8-.8-1.8-1.8V5c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v1.2c0 1-.8 1.8-1.8 1.8H5.8C4.8 8 4 8.8 4 9.8V10"/>
        <path d="M4 10v2c0 1.1.9 2 2 2h.5c.3 0 .5.2.5.5v3.5c0 .6.4 1 1 1h8c.6 0 1-.4 1-1V14.5c0-.3.2-.5.5-.5H18c1.1 0 2-.9 2-2v-2"/>
    </svg>
);

export const BrainIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg 
        {...props}
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
    >
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v0A2.5 2.5 0 0 1 9.5 7h.08"/>
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v0A2.5 2.5 0 0 0 14.5 7h-.08"/>
        <path d="M12 14.5a2.5 2.5 0 0 0 2.5-2.5v0a2.5 2.5 0 0 0-2.5-2.5h0a2.5 2.5 0 0 0-2.5 2.5v0A2.5 2.5 0 0 0 12 14.5Z"/>
        <path d="M4.5 7A2.5 2.5 0 0 0 7 9.5v0A2.5 2.5 0 0 0 4.5 12H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h.5Z"/>
        <path d="M19.5 7A2.5 2.5 0 0 1 17 9.5v0A2.5 2.5 0 0 1 19.5 12H20a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-.5Z"/>
        <path d="M7 14.5a2.5 2.5 0 0 1 2.5 2.5v0a2.5 2.5 0 0 1-2.5 2.5h-.08"/>
        <path d="M17 14.5a2.5 2.5 0 0 0-2.5 2.5v0a2.5 2.5 0 0 0 2.5 2.5h.08"/>
        <path d="M12.5 7A2.5 2.5 0 0 1 15 9.5v0a2.5 2.5 0 0 1-2.5 2.5h-.08"/>
        <path d="M9 12a2.5 2.5 0 0 0 2.5 2.5v0a2.5 2.5 0 0 0-2.5 2.5h.08"/>
        <path d="M15 12a2.5 2.5 0 0 1-2.5 2.5v0a2.5 2.5 0 0 1 2.5 2.5h-.08"/>
    </svg>
);

export const FileIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
    </svg>
);

export const QuestionMarkIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <path d="M12 17h.01" />
    </svg>
);
