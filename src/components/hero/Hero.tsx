import Image from "next/image";
import Link from "next/link";
import { PlayCircle } from "@phosphor-icons/react";

// Add this style for loading placeholder
const styles = `
  .image-loading {
    transition: opacity 0.3s ease-in;
  }
`;

const Hero = () => {
  return (
    <>
      <style>{styles}</style>
      <div 
        id="home"
        className="hidden xl:block"
      >
        <div 
          className="
            bg-[var(--background)]
            flex 
            pt-[120px]
            lg:justify-around
            xl:justify-around
            px-[50px]
          "
        >
          <div>
            <Image 
              src="/images/groupleft.png"
              alt="Decorative ellipse"
              width={292}
              height={750}
              priority // Preload this image as it's above the fold
              placeholder="blur" // Add blur effect while loading
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI+wN4B5XJggAAAABJRU5ErkJggg==" // Simple gray placeholder
              className="image-loading"
            />
          </div>
          <div className="mt-[70px]">
            <div>
              <h1 
                className="
                  font-black
                  text-6xl
                  w-[676px]
                  h-[181px]
                  text-center
                  leading-tight
                  text-[var(--hero)] 
                "
              >
                Seamless Event Management, From Start to Finish.
              </h1>
            </div>
            <div className="mt-[50px]">
              <p 
                className="
                  text-[var(--text)]
                  w-[498px]
                  h-[119px]
                  text-center
                  text-[18px]
                  mx-auto
                  leading-snug
                "
              >
                Say goodbye to chaos and hello to efficiency. Setup Suite empowers you with smart tools for planning, organizing, and executing flawless events—whether virtual or in-person. From guest management to real-time coordination, we make every detail effortless.
              </p>
            </div>
            <div className="flex justify-center mt-[80px] gap-[16px]">
              <div>
                <Link
                  href="/signup"
                  className="flex items-center group animate-slide-up"
                >
                  <PlayCircle
                    size={20}
                    color="var(--play)"
                    className="group-hover:animate-pulse transition-all duration-600"
                  />
                  <span
                    className="
                      text-[var(--play)]
                      mx-1
                      text-base
                      group-hover:translate-x-2 
                      transition-all 
                      duration-600
                    "
                  >
                    See how it works
                  </span>
                </Link>
              </div>
              <div>
                <Link 
                  href="/signup" 
                  className="
                    bg-[var(--foreground)] 
                    text-[var(--white)] 
                    px-11 
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
                  Sign up
                </Link>
              </div>
            </div>
          </div>
          <div>
            <Image 
              src="/images/groupright.png"
              alt="Decorative ellipse"
              width={296}
              height={757}
              priority
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI+wN4B5XJggAAAABJRU5ErkJggg=="
              className="image-loading"
            />
          </div>
        </div>
        <div 
          className="
            flex 
            lg:justify-around
            xl:justify-around
            mx-[50px]
            mt-[100px]
          "
        >
          <div className="flex">
            <div className="mt-[8px]">
              <Image 
                src="/images/seam.png"
                alt="Seamless feature icon"
                width={53}
                height={53}
                loading="eager" // Load immediately
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI+wN4B5XJggAAAABJRU5ErkJggg=="
                className="image-loading"
              />
            </div>
            <div className="ml-[12px]">
              <h1 className="font-black text-[var(--hero2)] text-[22px] leading-normal">SEAMLESS</h1>
              <h3 className="text-[var(--grey)] text-[14px] font-semibold leading-none mb-2">
                Effortless Planning & Execution
              </h3>
              <p className="text-[var(--grey)] text-[10px] font-normal leading-none w-[217px]">
                Say goodbye to chaos! Our streamlined tools ensure every event detail is managed smoothly.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="mt-[8px]">
              <Image 
                src="/images/smart.png"
                alt="Smart feature icon"
                width={53}
                height={53}
                loading="eager"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI+wN4B5XJggAAAABJRU5ErkJggg=="
                className="image-loading"
              />
            </div>
            <div className="ml-[12px]">
              <h1 className="font-black text-[var(--hero2)] text-[22px] leading-normal">SMART</h1>
              <h3 className="text-[var(--grey)] text-[14px] font-semibold leading-none mb-2">
                Data-Driven Success
              </h3>
              <p className="text-[var(--grey)] text-[10px] font-normal leading-none w-[217px]">
                Leverage intelligent insights to optimize event marketing, sales, and guest experience.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="mt-[8px]">
              <Image 
                src="/images/seam.png"
                alt="Stress-free feature icon"
                width={53}
                height={53}
                loading="eager"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI+wN4B5XJggAAAABJRU5ErkJggg=="
                className="image-loading"
              />
            </div>
            <div className="ml-[12px]">
              <h1 className="font-black text-[var(--hero2)] text-[22px] leading-normal">STRESS-FREE</h1>
              <h3 className="text-[var(--grey)] text-[14px] font-semibold leading-none mb-2">
                Automated & Hassle-Free
              </h3>
              <p className="text-[var(--grey)] text-[10px] font-normal leading-none w-[217px]">
                From check-ins to crowd control, our system takes the burden off your shoulders.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="mt-[8px]">
              <Image 
                src="/images/smart.png"
                alt="Crowd control feature icon"
                width={53}
                height={53}
                loading="eager"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI+wN4B5XJggAAAABJRU5ErkJggg=="
                className="image-loading"
              />
            </div>
            <div className="ml-[12px]">
              <h1 className="font-black text-[var(--hero2)] text-[22px] leading-normal">CROWD CONTROL</h1>
              <h3 className="text-[var(--grey)] text-[14px] font-semibold leading-none mb-2">
                Manage Your Audience with Ease
              </h3>
              <p className="text-[var(--grey)] text-[10px] font-normal leading-none w-[217px]">
                Prevent overcrowding, enhance engagement, and create a safe, organized event.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile responsiveness */}
      <div>
        <div 
          className="block lg:hidden xl:hidden pt-[110px] pb-[80px] bg-[var(--background)]"
        >
          <div className="flex justify-between mx-[50px]">
            <div>
              <Image 
                src="/images/mobile1.png"
                alt="Decorative ellipse group"
                width={75}
                height={54}
                priority
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI+wN4B5XJggAAAABJRU5ErkJggg=="
                className="image-loading"
              />
            </div>
            <div>
              <Image 
                src="/images/mobile3.png"
                alt="Decorative ellipse group"
                width={75}
                height={55}
                priority
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI+wN4B5XJggAAAABJRU5ErkJggg=="
                className="image-loading"
              />
            </div>
          </div>
          <div>
            <div className="flex justify-center">
              <h1 
                className="
                  font-black
                  lg:text-3xl
                  lg:w-[500px]
                  text-[32px]
                  w-[381px]
                  h-[112px]
                  text-center
                  leading-tight
                  text-[var(--hero)] 
                  mb-[10px]
                "
              >
                Seamless Event Management, From Start to Finish.
              </h1>
            </div>
            <div className="mt-[1px] lg:mt-[15px]">
              <p 
                className="
                  text-[var(--text)]
                  w-[294px]
                  h-[102px]
                  text-center
                  lg:text-[14px]
                  lg:w-[330px]
                  lg:mb-[50px]
                  text-[11px]
                  mx-auto
                  leading-relaxed
                "
              >
                Say goodbye to chaos and hello to efficiency. Setup Suite empowers you with smart tools for planning, organizing, and executing flawless events—whether virtual or in-person. From guest management to real-time coordination, we make every detail effortless.
              </p>
            </div>
            <div className="flex justify-center mt-[20px] gap-[16px]">
              <div>
                <Link href="/signup" className="flex items-center group animate-slide-up">
                  <PlayCircle
                    size={18}
                    color="var(--play)"
                    className="group-hover:animate-pulse transition-all duration-600"
                  />
                  <span
                    className="
                      text-[var(--play)]
                      mx-1
                      text-[14px]
                      lg:text-base
                      group-hover:translate-x-2 
                      transition-all 
                      duration-600
                    "
                  >
                    See how it works
                  </span>
                </Link>
              </div>
              <div>
                <Link 
                  href="/signup" 
                  className="
                    bg-[var(--foreground)] 
                    text-[var(--white)] 
                    text-[16px]
                    lg:text-[14px]
                    px-6
                    py-1
                    lg:px-8 
                    lg:py-2 
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
                  Sign up
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-between mx-[50px] mt-[60px]">
            <div>
              <Image 
                src="/images/mobile2.png"
                alt="Decorative swag"
                width={75}
                height={54}
                loading="eager"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI+wN4B5XJggAAAABJRU5ErkJggg=="
                className="image-loading"
              />
            </div>
            <div>
              <Image 
                src="/images/mobile4.png"
                alt="Decorative fashion"
                width={75}
                height={55}
                loading="eager"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI+wN4B5XJggAAAABJRU5ErkJggg=="
                className="image-loading"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-center lg:justify-around lg:hidden xl:hidden mt-[50px] mb-[25px]">
            <div className="flex">
              <div className="mt-[8px] w-[29px] md:w-[53px]">
                <Image 
                  src="/images/seam.png"
                  alt="Seamless feature icon"
                  width={53}
                  height={53}
                  loading="eager"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI+wN4B5XJggAAAABJRU5ErkJggg=="
                  className="image-loading"
                />
              </div>
              <div className="ml-[3px] lg:ml-[12px]">
                <h1 className="font-black text-[var(--hero2)] text-[14px] lg:text-[16px] leading-normal">
                  SEAMLESS
                </h1>
                <h3 className="text-[var(--grey)] text-[10px] lg:text-[12px] font-semibold leading-none mb-2 w-[120px] lg:w-[200px]">
                  Effortless Planning & Execution
                </h3>
                <p className="text-[var(--grey)] text-[6px] lg:text-[10px] font-normal leading-none w-[125px] lg:w-[250px]">
                  Say goodbye to chaos! Our streamlined tools ensure every event detail is managed smoothly.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="mt-[8px] w-[29px] md:w-[53px]">
                <Image 
                  src="/images/smart.png"
                  alt="Smart feature icon"
                  width={53}
                  height={53}
                  loading="eager"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI+wN4B5XJggAAAABJRU5ErkJggg=="
                  className="image-loading"
                />
              </div>
              <div className="ml-[3px] lg:ml-[12px]">
                <h1 className="font-black text-[var(--hero2)] text-[14px] lg:text-[16px] leading-normal">SMART</h1>
                <h3 className="text-[var(--grey)] text-[10px] lg:text-[12px] font-semibold leading-none mb-2 w-[120px] lg:w-[200px]">
                  Data-Driven Success
                </h3>
                <p className="text-[var(--grey)] text-[6px] lg:text-[10px] font-normal leading-none w-[125px] lg:w-[250px]">
                  Leverage intelligent insights to optimize event marketing, sales, and guest experience.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center lg:justify-around lg:hidden xl:hidden">
            <div className="flex">
              <div className="mt-[8px] w-[29px] md:w-[53px]">
                <Image 
                  src="/images/smart.png"
                  alt="Stress-free feature icon"
                  width={53}
                  height={53}
                  loading="eager"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI+wN4B5XJggAAAABJRU5ErkJggg=="
                  className="image-loading"
                />
              </div>
              <div className="ml-[3px] lg:ml-[12px]">
                <h1 className="font-black text-[var(--hero2)] text-[14px] lg:text-[16px] leading-normal">STRESS-FREE</h1>
                <h3 className="text-[var(--grey)] text-[10px] lg:text-[12px] font-semibold leading-none mb-2 w-[120px] lg:w-[200px]">
                  Automated & Hassle-Free
                </h3>
                <p className="text-[var(--grey)] text-[6px] lg:text-[10px] font-normal leading-none w-[125px] lg:w-[250px]">
                  From check-ins to crowd control, our system takes the burden off your shoulders.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="mt-[8px] w-[29px] md:w-[53px]">
                <Image 
                  src="/images/seam.png"
                  alt="Crowd control feature icon"
                  width={53}
                  height={53}
                  loading="eager"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI+wN4B5XJggAAAABJRU5ErkJggg=="
                  className="image-loading"
                />
              </div>
              <div className="ml-[3px] lg:ml-[12px]">
                <h1 className="font-black text-[var(--hero2)] text-[13px] lg:text-[16px] leading-normal">
                  CROWD CONTROL
                </h1>
                <h3 className="text-[var(--grey)] text-[10px] lg:text-[12px] font-semibold leading-none mb-2 w-[120px] lg:w-[200px]">
                  Manage Your Audience with Ease
                </h3>
                <p className="text-[var(--grey)] text-[6px] lg:text-[10px] font-normal leading-none w-[125px] lg:w-[250px]">
                  Prevent overcrowding, enhance engagement, and create a safe, organized event.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;