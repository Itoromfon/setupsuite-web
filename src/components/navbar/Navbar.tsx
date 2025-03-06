'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[var(--background)] shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        {/* Navbar content - hidden when menu is open */}
        <div className={`flex items-center justify-between h-16 ${isMenuOpen ? 'hidden' : ''}`}>
          <div className="flex items-center">
            <div className="lg:hidden ">
              <button 
                onClick={toggleMenu}
                className="
                  text-[var(--greyadd)] 
                  hover:text-gray-900 
                  focus:outline-none
                  cursor-pointer
                "
              >
                <svg 
                  className="h-6 w-6" 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M6 18L18 6M6 6l12 12" 
                    />
                  ) : (
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M4 6h16M4 12h16M4 18h16" 
                    />
                  )}
                </svg>
              </button>
            </div>
            <Link className='ml-[-6px]' href="/">
              <Image 
                src="/images/setup.svg"
                alt='Setup-suite Logo'
                width={182}
                height={100}
                layout="responsive"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block space-x-16">
            <Link href="#" 
                className={`text-[var(--primary)] text-base relative ${
                    pathname === '/' ? 'active' : ''
                }`}
            >
              Home
            </Link>
            <Link href="#" 
                className="
                    text-[var(--primary)] 
                    text-base 
                "
            >
              Features
            </Link>
            <Link href="#" 
                className="
                    text-[var(--primary)] 
                    text-base
                "
            >
              Pricing
            </Link>
            <Link href="#" 
                className="
                    text-[var(--primary)] 
                    text-base 
                "
            >
              Contact us
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              href="/#" 
              className="text-[var(--primary)] text-base hover:text-gray-900 transition duration-300"
            >
              Sign In
            </Link>
            <Link 
              href="#" 
              className="
                bg-[var(--foreground)] 
                text-[var(--white)] 
                px-4 
                py-2 
                rounded-full 
                font-semibold
                border-[1.46px]
                border-[var(--border)]
                border-b-5 
                border-b-[var(--border-bottom)] 
              "
            >
              Sign up
            </Link>
          </div>

          {/* Mobile Auth Buttons */}
          <div 
            className="
              md:hidden
              lg:hidden
            "
          >
            <Link 
              href="#" 
              className="text-[var(--primary)] text-[12px] hover:text-gray-900 transition duration-300"
            >
              Sign In
            </Link>
            <Link 
              href="#" 
              className="
                bg-[var(--foreground)] 
                text-[var(--white)] 
                text-[12px]
                ml-[10px]
                px-3 
                py-1 
                rounded-full 
                font-semibold
                border-[1.46px]
                border-[var(--border)]
                border-b-5 
                border-b-[var(--border-bottom)] 
              "
            >
              Sign up
            </Link>
          </div>
        </div>

        {/* Mobile Menu - shown when menu is open */}
        {isMenuOpen && (
          <div className="
            lg:hidden 
            absolute 
            top-0 
            left-0 
            w-full 
            h-screen 
            bg-[var(--background)] 
            flex 
            flex-col 
            items-center 
            justify-center 
            transition-all 
            duration-300
            z-40
          ">
            {/* Logo */}
            <div 
              className='
              absolute 
              top-0
              left-6 
              text-[var(--greyadd)] 
              hover:text-gray-900 
              focus:outline-none
              cursor-pointer
            '
            >
              <Image 
                src="/images/setup.svg"
                width={118}
                height={65}
                alt='logo'
                layout='responsive'
              />
            </div>

            {/* Close Button */}
            <button 
              onClick={toggleMenu}
              className="
                absolute 
                top-6 
                right-6 
                text-[var(--greyadd)] 
                hover:text-gray-900 
                focus:outline-none
                cursor-pointer
              "
            >
              <svg 
                className="h-6 w-6" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            </button>
            {/* Mobile Menu Links */}
            <div 
              className="
                flex 
                flex-col 
                items-left 
                mt-[-190px] 
                space-y-10
              ">
              <Link 
                href="#" 
                onClick={toggleMenu}
                className={`
                  text-[var(--primary)] 
                  text-[14px]
                  font-semibold 
                  hover:text-gray-900
                  flex
                  pl-6
                  justify-start
                  text-left
                  ${pathname === '/' ? 'bg-[var(--border-bottom)] text-white rounded-lg w-[360px] py-2' : ''}
                `}
              >
                Home
              </Link>
              <Link 
                href="#" 
                onClick={toggleMenu}
                className={`
                  text-[var(--primary)] 
                  text-[14px]
                  font-semibold 
                  hover:text-gray-900
                  flex
                  pl-6
                  justify-start
                  text-left
                  ${pathname === '/features' ? 'bg-[var(--border-bottom)] text-white rounded-lg w-[360px] px-6 py-2' : ''}
                `}
              >
                Features
              </Link>
              <Link 
                href="#" 
                onClick={toggleMenu}
                className={`
                  text-[var(--primary)] 
                  text-[14px]
                  font-semibold 
                  hover:text-gray-900
                  flex
                  pl-6
                  justify-start
                  text-left
                  ${pathname === '/pricing' ? 'bg-[var(--border-bottom)] text-white rounded-lg w-[360px] px-6 py-2' : ''}
                `}
              >
                Pricing
              </Link>
              <Link 
                href="#" 
                onClick={toggleMenu}
                className={`
                  text-[var(--primary)] 
                  text-[14px]
                  font-semibold 
                  hover:text-gray-900
                  flex
                  pl-6
                  justify-start
                  text-left
                  ${pathname === '/contact' ? 'bg-[var(--border-bottom)] text-white rounded-lg w-[360px] px-6 py-2' : ''}
                `}
              >
                Contact us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;