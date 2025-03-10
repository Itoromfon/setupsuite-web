import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CaretUp } from "@phosphor-icons/react";
import { CaretDown } from "@phosphor-icons/react";

const Footer = () => {
  // State to manage the visibility of each section
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);

  return (
    <>
      {/* Desktop Footer */}
      <div
        id="contact"
        className="
          bg-[var(--greyadd)]
          py-[70px]
          lg:block
          hidden
        "
      >
        <div className="flex justify-around">
          <div className="flex">
            <div
              className="
                mt-[-10px]
                mr-1
              "
            >
              <Image
                src="./images/iconlogo.svg"
                alt="Icon Logo"
                width={51}
                height={51}
              />
            </div>
            <div
              className="
                text-[20px]
                font-medium
                w-[122px]
                text-[var(--play)]
              "
            >
              <div>
                Setup<span className="ml-1 text-[var(--white)]">Suite</span>
              </div>
            </div>
          </div>
          <div
            className="
              text-[18px]
              w-[526px]
              font-normal
              text-[var(--white)]
            "
          >
            Plan, manage, and execute unforgettable events with ease. From
            registrations to logistics, Setup Suite takes care of it all—so you
            can focus on creating memorable experiences.
          </div>
        </div>
        <div
          className="
            w-full
            mt-[50px]
          "
        >
          <hr
            className="
              w-full
              h-[1px]
              bg-[var(--footerbg)]
              border-none
              mx-0
            "
          />
        </div>
        <div
          className="
            flex
            justify-between
            mx-[130px]
            mt-[100px]
          "
        >
          <div
            className="
              flex
              gap-[80px]
            "
          >
            <div>
              <div className="font-bold mb-[30px] text-[var(--play)] text-[20px]">
                Product
              </div>
              <div className="text-[18px] text-[var(--white)]">Features</div>
              <div className="text-[18px] text-[var(--white)]">Pricing</div>
              <div className="text-[18px] text-[var(--white)]">Case studies</div>
              <div className="text-[18px] text-[var(--white)]">Reviews</div>
              <div className="text-[18px] text-[var(--white)]">Updates</div>
            </div>
            <div>
              <div className="font-bold mb-[30px] text-[var(--play)] text-[20px]">
                Company
              </div>
              <div className="text-[18px] text-[var(--white)]">About</div>
              <div className="text-[18px] text-[var(--white)]">Connect us</div>
              <div className="text-[18px] text-[var(--white)]">Careers</div>
              <div className="text-[18px] text-[var(--white)]">Culture</div>
              <div className="text-[18px] text-[var(--white)]">Blog</div>
            </div>
            <div>
              <div className="font-bold mb-[30px] text-[var(--play)] text-[20px]">
                Support
              </div>
              <div className="text-[18px] text-[var(--white)]">Getting Started</div>
              <div className="text-[18px] text-[var(--white)]">Help Center</div>
              <div className="text-[18px] text-[var(--white)]">Server Status</div>
              <div className="text-[18px] text-[var(--white)]">Report a bug</div>
              <div className="text-[18px] text-[var(--white)]">Chat support</div>
            </div>
          </div>
          <div>
            <div className="font-bold mb-[30px] text-[var(--play)] text-[20px]">
              Stay ahead of the game!
            </div>
            <div className="text-[18px] w-[358px] text-[var(--white)]">
              Subscribe to our newsletter for exclusive updates, industry
              insights, and event management tips.
            </div>
            {/* Email Subscription Form */}
            <div className="mt-[20px]">
              <form className="bg-[var(--white)] px-3 py-3 rounded-lg flex items-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-[250px] p-[10px] rounded-l-md text-[var(--emailtext)] focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="bg-[var(--foreground)] font-medium px-4 text-[var(--white)] p-[10px] rounded-xl hover:bg-[var(--play-dark)] transition duration-200"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        <div
          className="
            w-full
            mt-[80px]
            flex
            justify-center
          "
        >
          <hr
            className="
              w-[1150px]
              h-[1px]
              bg-[var(--line2)]
              border-none
            "
          />
        </div>
        <div className="flex justify-between mt-[50px] mx-[130px]">
          <div className="text-[18px] text-[var(--white)]">
            Copyright © 2025 setup suite | All Rights Reserved
          </div>
          <div className="flex gap-4">
            <div>
              <Link href="#">
                <Image
                  src="./images/Facebook.svg"
                  alt="Facebook"
                  width={11}
                  height={19}
                />
              </Link>
            </div>
            <div className="mt-1">
              <Link href="#">
                <Image
                  src="./images/Twitter.svg"
                  alt="Twitter"
                  width={19}
                  height={15}
                />
              </Link>
            </div>
            <div>
              <Link href="#">
                <Image
                  src="./images/Instagram.svg"
                  alt="Instagram"
                  width={19}
                  height={19}
                />
              </Link>
            </div>
            <div>
              <Link href="#">
                <Image
                  src="./images/LinkedIn.svg"
                  alt="LinkedIn"
                  width={19}
                  height={18}
                />
              </Link>
            </div>
            <div className="mt-1">
              <Link href="#">
                <Image
                  src="./images/YouTube.svg"
                  alt="YouTube"
                  width={21}
                  height={15}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>


      {/* Mobile Footer */}
      <div
        className="
          bg-[var(--greyadd)]
          py-[40px]
          lg:hidden
          block
          px-[10px]
        "
      >
        <div className="flex flex-col items-center text-center">
          {/* Logo and Brand Name */}
          <div className="flex items-center mb-[20px]">
            <div className="mr-2">
              <Image
                src="./images/iconlogo.svg"
                alt="Icon Logo"
                width={51}
                height={51}
              />
            </div>
            <div
              className="
                text-[20px]
                font-medium
                text-[var(--play)]
              "
            >
              Setup<span className="ml-1 text-[var(--white)]">Suite</span>
            </div>
          </div>

          {/* Description */}
          <div
            className="
              lg:text-[16px]
              text-[14px]
              text-left
              text-[var(--white)]
              mb-[30px]
              max-w-[358px]
            "
          >
            Plan, manage, and execute unforgettable events with ease. From
            registrations to logistics, Setup Suite takes care of it all—so you
            can focus on creating memorable experiences.
          </div>

          {/* Horizontal Line */}
          <div
            className="
              w-full
              mb-[20px]
            "
          >
            <hr
              className="
                w-full
                h-[1px]
                bg-[var(--footerbg)]
                border-none
              "
            />
          </div>

          {/* Subscription Section */}
          <div className="mb-[30px] w-full max-w-[358px]">
            <div className="font-bold mb-[20px] text-[var(--play)] text-[20px]">
              Stay ahead of the game!
            </div>
            <div className="text-[14px] lg:text-[16px] text-left text-[var(--white)] mb-[20px]">
              Subscribe to our newsletter for exclusive updates, industry
              insights, and event management tips.
            </div>
            <form className="bg-[var(--white)] px-3 py-3 rounded-lg flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 p-[10px] rounded-l-md text-[var(--emailtext)] focus:outline-none"
                required
              />
              <button
                type="submit"
                className="bg-[var(--foreground)] font-medium px-4 text-[var(--white)] p-[10px] rounded-xl hover:bg-[var(--play-dark)] transition duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Navigation Links with Icons and Collapsible Sections */}
          <div className="flex flex-col gap-[30px] w-full max-w-[358px]">
            {/* Product Section */}
            <div>
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setIsProductOpen(!isProductOpen)}
              >
                <div className="font-bold text-[var(--play)] text-base lg:text-[18px]">
                  Product
                </div>
                <div>
                  {isProductOpen ? (
                    <CaretUp size={24} color="var(--white)" />
                  ) : (
                    <CaretDown size={24} color="var(--white)" />
                  )}
                </div>
              </div>
              {isProductOpen && (
                <div className="mt-2 text-left text-[16px] text-[var(--white)]">
                  <div>Features</div>
                  <div>Pricing</div>
                  <div>Case studies</div>
                  <div>Reviews</div>
                  <div>Updates</div>
                </div>
              )}
            </div>

            {/* Company Section */}
            <div>
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setIsCompanyOpen(!isCompanyOpen)}
              >
                <div className="font-bold text-[var(--play)] text-base lg:text-[18px]">
                  Company
                </div>
                <div>
                  {isCompanyOpen ? (
                    <CaretUp size={24} color="var(--white)" />
                  ) : (
                    <CaretDown size={24} color="var(--white)" />
                  )}
                </div>
              </div>
              {isCompanyOpen && (
                <div className="mt-2 text-left text-[16px] text-[var(--white)]">
                  <div>About</div>
                  <div>Connect us</div>
                  <div>Careers</div>
                  <div>Culture</div>
                  <div>Blog</div>
                </div>
              )}
            </div>

            {/* Support Section */}
            <div>
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setIsSupportOpen(!isSupportOpen)}
              >
                <div className="font-bold text-[var(--play)] text-base lg:text-[18px]">
                  Support
                </div>
                <div>
                  {isSupportOpen ? (
                    <CaretUp size={24} color="var(--white)" />
                  ) : (
                    <CaretDown size={24} color="var(--white)" />
                  )}
                </div>
              </div>
              {isSupportOpen && (
                <div className="mt-2 text-left text-[16px] text-[var(--white)]">
                  <div>Getting Started</div>
                  <div>Help Center</div>
                  <div>Server Status</div>
                  <div>Report a bug</div>
                  <div>Chat support</div>
                </div>
              )}
            </div>
          </div>

          {/* Horizontal Line */}
          <div
            className="
              w-full
              mt-[40px]
            "
          >
            <hr
              className="
                w-full
                h-[1px]
                bg-[var(--footerbg)]
                border-none
              "
            />
          </div>

          {/* Copyright and Social Media */}
          <div className="mt-[30px]">
            <div className="flex mb-[20px] justify-center gap-4">
              <Link href="#">
                <Image
                  src="./images/Facebook.svg"
                  alt="Facebook"
                  width={11}
                  height={19}
                />
              </Link>
              <Link className="mt-1" href="#">
                <Image
                  src="./images/Twitter.svg"
                  alt="Twitter"
                  width={19}
                  height={15}
                />
              </Link>
              <Link  href="#">
                <Image
                  src="./images/Instagram.svg"
                  alt="Instagram"
                  width={19}
                  height={19}
                />
              </Link>
              <Link href="#">
                <Image
                  src="./images/LinkedIn.svg"
                  alt="LinkedIn"
                  width={19}
                  height={18}
                />
              </Link>
              <Link className="mt-1" href="#">
                <Image
                  src="./images/YouTube.svg"
                  alt="YouTube"
                  width={21}
                  height={15}
                />
              </Link>
            </div>
            <div className="text-[16px] text-[var(--white)]">
              Copyright © 2025 setup suite | All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;