'use client';

import Image from "next/image";
import Link from "next/link";

// Add CSS for loading placeholder
const styles = `
  .image-loading {
    transition: opacity 0.3s ease-in;
  }
`;

const Features = () => {
  return (
    <>
      <style>{styles}</style>
      <div id="features">
        <div className="lg:mt-[80px] mt-[10px] mx-[50px]">
          <div 
            className="
              lg:text-3xl
              xl:text-5xl
              text-[18px]
              font-bold
              text-[var(--hero)]
              flex 
              justify-center
              text-center
              mb-[20px]
              lg:mb-[100px]
              pt-[50px]
            "
          >
            Effortless Events, Exceptional Experiences
          </div>
          <div 
            className="
              flex
              flex-col
              lg:flex-row
              justify-center
              items-center
              lg:justify-around
              xl:justify-around
            "
          >
            <div>
              <div className="mb-[30px] mt-[50px]">
                <Link 
                  href="#"
                  className="
                    bg-[var(--register)] 
                    text-[var(--register-text)] 
                    text-[12px]
                    lg:text-base
                    px-7
                    lg:px-11 
                    py-4 
                    rounded-full 
                    font-semibold
                    hover:scale-105 
                    hover:shadow-lg 
                    transition-all 
                    duration-300 
                    animate-fade-in
                  "  
                >
                  Registration
                </Link>
              </div>
              <div 
                className="
                  text-[var(--register-event)]
                  font-black
                  xl:text-[56px]
                  lg:text-3xl
                  text-[28px]
                  w-[348px]
                  xl:w-[532px]
                  lg:w-[450px]
                  leading-snug
                  mb-[23px]
                "
              >
                Seamless Event Registration and Check-in
              </div>
              <div 
                className="
                  text-[var(--register-event)]
                  text-[14px]
                  lg:text-[14px]
                  xl:text-[16px]
                  w-[327px]
                  lg:w-[450px]
                  leading-normal
                  mb-[50px]
                  lg:mb-[70px]
                "
              >
                No more chaotic entry lines or messy manual lists. With QR-powered check-ins and real-time attendee tracking, your event starts smoothly from the first guest.
              </div>
              <div className="mb-[60px] lg:mb-0">
                <Link 
                  href="/signup" 
                  className="
                    bg-[var(--foreground)] 
                    text-[var(--white)] 
                    px-14
                    lg:px-18 
                    xl:px-18 
                    text-[14px]
                    lg:text-[16px]
                    py-3 
                    rounded-full 
                    font-semibold
                    border
                    border-[var(--border)]
                    border-b-5 
                    border-b-[var(--border-bottom)] 
                    hover:scale-105 
                    hover:shadow-lg 
                    transition-all 
                    duration-300 
                    animate-fade-in
                  "
                >
                  Get started
                </Link>
              </div>
            </div>
            <div className="w-[362px] lg:w-[541px] flex items-center">
              <Image 
                src="/images/drinks.png"
                alt="Event registration illustration"
                width={541}
                height={583}
                priority // Preload as it's the first image
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI+wN4B5XJggAAAABJRU5ErkJggg=="
                className="rounded-2xl image-loading"
              />
            </div>
          </div>
          <div 
            className="
              flex
              flex-col-reverse
              lg:flex-row
              justify-center
              items-center
              lg:justify-around
              xl:justify-around
              mt-[30px]
              lg:mt-[100px]
              xl:mt-[100px]
            "
          >
            <div className="w-[362px] lg:w-[541px] flex items-center">
              <Image 
                src="/images/hall.png"
                alt="Event control illustration"
                width={541}
                height={583}
                loading="eager" // Load immediately when in view
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI+wN4B5XJggAAAABJRU5ErkJggg=="
                className="rounded-2xl image-loading"
              />
            </div>
            <div>
              <div className="mb-[30px] mt-[50px]">
                <Link 
                  href="#"
                  className="
                    bg-[var(--register)] 
                    text-[var(--register-text)] 
                    text-[12px]
                    lg:text-base
                    px-7
                    lg:px-11 
                    py-4 
                    rounded-full 
                    font-semibold
                    hover:scale-105 
                    hover:shadow-lg 
                    transition-all 
                    duration-300 
                    animate-fade-in
                  "  
                >
                  Event Control
                </Link>
              </div>
              <div 
                className="
                  text-[var(--register-event)]
                  font-black
                  xl:text-[56px]
                  lg:text-3xl
                  text-[28px]
                  w-[348px]
                  xl:w-[532px]
                  lg:w-[450px]
                  leading-snug
                  mb-[23px]
                "
              >
                All-in-One Event Control and Insights
              </div>
              <div 
                className="
                  text-[var(--register-event)]
                  text-[14px]
                  lg:text-[14px]
                  xl:text-[16px]
                  w-[327px]
                  lg:w-[450px]
                  leading-normal
                  mb-[50px]
                  lg:mb-[70px]
                "
              >
                Keep everything organized in one place—track RSVPs, monitor guest engagement, and access powerful analytics to make informed decisions effortlessly.
              </div>
              <div className="mb-[60px] lg:mb-0">
                <Link 
                  href="/signup" 
                  className="
                    bg-[var(--foreground)] 
                    text-[var(--white)] 
                    px-14
                    lg:px-18 
                    xl:px-18 
                    text-[14px]
                    lg:text-[16px]
                    py-3 
                    rounded-full 
                    font-semibold
                    border
                    border-[var(--border)]
                    border-b-5 
                    border-b-[var(--border-bottom)] 
                    hover:scale-105 
                    hover:shadow-lg 
                    transition-all 
                    duration-300 
                    animate-fade-in
                  "
                >
                  Get started
                </Link>
              </div>
            </div>
          </div>
          <div 
            className="
              flex
              flex-col
              lg:flex-row
              justify-center
              items-center
              lg:justify-around
              xl:justify-around
              mt-[30px]
              lg:mt-[100px]
              xl:mt-[100px]
            "
          >
            <div>
              <div className="mb-[30px] mt-[50px]">
                <Link 
                  href="#"
                  className="
                    bg-[var(--register)] 
                    text-[var(--register-text)] 
                    text-[12px]
                    lg:text-base
                    px-7
                    lg:px-11 
                    py-4 
                    rounded-full 
                    font-semibold
                    hover:scale-105 
                    hover:shadow-lg 
                    transition-all 
                    duration-300 
                    animate-fade-in
                  "  
                >
                  Vendor
                </Link>
              </div>
              <div 
                className="
                  text-[var(--register-event)]
                  font-black
                  xl:text-[56px]
                  lg:text-3xl
                  text-[28px]
                  w-[348px]
                  xl:w-[532px]
                  lg:w-[450px]
                  leading-snug
                  mb-[23px]
                "
              >
                Smart Vendor, Guest and Logistics Management
              </div>
              <div 
                className="
                  text-[var(--register-event)]
                  text-[14px]
                  lg:text-[14px]
                  xl:text-[16px]
                  w-[327px]
                  lg:w-[450px]
                  leading-normal
                  mb-[50px]
                  lg:mb-[70px]
                "
              >
                From coordinating vendors to handling souvenirs and guest lists, streamline every detail and eliminate last-minute surprises.
              </div>
              <div className="mb-[60px] lg:mb-0">
                <Link 
                  href="/signup" 
                  className="
                    bg-[var(--foreground)] 
                    text-[var(--white)] 
                    px-14
                    lg:px-18 
                    xl:px-18 
                    text-[14px]
                    lg:text-[16px]
                    py-3 
                    rounded-full 
                    font-semibold
                    border
                    border-[var(--border)]
                    border-b-5 
                    border-b-[var(--border-bottom)] 
                    hover:scale-105 
                    hover:shadow-lg 
                    transition-all 
                    duration-300 
                    animate-fade-in
                  "
                >
                  Get started
                </Link>
              </div>
            </div>
            <div className="w-[362px] lg:w-[541px] flex items-center">
              <Image 
                src="/images/food.png"
                alt="Logistics management illustration"
                width={541}
                height={583}
                loading="eager"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI+wN4B5XJggAAAABJRU5ErkJggg=="
                className="rounded-2xl image-loading"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;