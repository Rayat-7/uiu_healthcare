'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LogoIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6">
        <path d="M5 10C5 8.34315 8.13401 7 12 7C15.866 7 19 8.34315 19 10V16C19 17.6569 15.866 19 12 19C8.13401 19 5 17.6569 5 16V10Z" />
    </svg>
)

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="bg-white p-4 border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center text-black text-2xl font-bold">
          <LogoIcon />
          <span>UIU <span className="text-orange-500">HealthCare</span></span>
        </Link>
        <div className="flex space-x-8">
          {pathname.startsWith('/student') && (
            <>
              <Link href="/student/dashboard" className="text-black hover:text-gray-700">Dashboard</Link>
              <Link href="/student/doctors" className="text-black hover:text-gray-700">Doctors</Link>
            </>
          )}
          {pathname.startsWith('/doctor') && (
            <>
              <Link href="/doctor/dashboard" className="text-black hover:text-gray-700">Dashboard</Link>
              
            </>
          )}
          <Link href="/emergency" className="text-red-400 font-bold hover:text-red-700">Emergency</Link>
          <Link href="/faq" className="text-black hover:text-gray-700">FAQs</Link>
          <Link href="/signin" className="text-black hover:text-gray-700">Sign In</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
