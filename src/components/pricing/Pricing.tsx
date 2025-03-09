import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Pricing = () => {
  // State to track whether the toggle is set to "Monthly" or "Yearly"
  const [isYearly, setIsYearly] = useState(false);

  // Function to handle toggle switch
  const handleToggle = () => {
    setIsYearly(!isYearly);
  };

  return (
    <div
      className="
        bg-[linear-gradient(180deg,#F2EFEB_0%,#1ABC9C_100%,#8FE3D2_100%)]
        w-full
        min-h-screen
        flex
        flex-col
        items-center
        justify-center
        py-12
        mt-[150px]
      "
    >
      <div className="flex text-center">
        <div className="lg:mt-[-110px] mt-[-90px]">
        <h1 
            className="
                text-[20px]
                lg:text-[40px]
                mr-4
                font-normal
                lg:w-[380px]
                lg:text-left
                text-[var(--greyadd)]
                mb-4
            "
            >
            Choose Your Plans
        </h1>
        
        </div>
        {/* Toggle Switch */}
        <div className="mt-[-100px]">
        <div className=" mb-12">
          <div className="relative flex items-center bg-white lg:w-[200px] rounded-full shadow-md">
            {/* Monthly Button */}
            <button
              onClick={handleToggle}
              className={`lg:px-6 px-2 py-2 rounded-full text-[12px] font-semibold transition-colors duration-300 ${
                !isYearly
                  ? "bg-black text-white"
                  : "bg-white text-black hover:bg-gray-100"
              }`}
            >
              MONTHLY
            </button>
            {/* Yearly Button */}
            <button
              onClick={handleToggle}
              className={`px-6 py-2 rounded-full text-[12px] font-semibold transition-colors duration-300 ${
                isYearly
                  ? "bg-black text-white"
                  : "bg-white text-black hover:bg-gray-100"
              }`}
            >
              YEARLY
            </button>
          </div>
        </div>
        </div>
      </div>
      <p 
        className="
            lg:text-lg 
            text-base
            text-left
            lg:text-left
            text-[var(--greys)]
            font-md
            lg:w-[584px]
            w-[350px]
            mb-8
          "
        >
          Sign up in less than 30 seconds. Try out a 7-day free trial. Upgrade
          at anytime, no questions, no hassle.
        </p>
      {/* You can conditionally render pricing plans based on the toggle state */}
      <div className="mt-[20px]">
          {isYearly ? (
            <>
                <div 
                    className="
                      bg-[linear-gradient(180deg,#F2EFEB_0%,#8FE3D2_100%)] 
                      flex
                      flex-col
                      lg:flex-row
                      xl:flex-row
                      py-12
                      lg:px-12
                      px-3
                      gap-[30px]
                      rounded-3xl
                ">
                    <div 
                      className="
                        bg-[var(--white)]
                        rounded-3xl
                        pt-[65px]
                        px-12
                        h-[532px]
                      ">
                      <div>
                        <h1
                          className="
                            text-[var(--play)] 
                            font-bold
                            lg:text-4xl
                            text-[36px]
                            mb-[10px]
                          "
                        >
                          180,000 
                          <span 
                            className="
                              text-[var(--greyadd)]
                              ml-4
                              font-medium
                              lg:text-[17px] 
                              text-[17px]
                            "
                          >
                            /year
                          </span>
                        </h1>
                        <h3 
                          className="
                            font-medium
                            lg:text-[28px]
                            text-[28px]
                            text-[var(--play)] 
                            mb-[15px]
                          "
                        >
                            Basic Plan
                          </h3>
                        <div className="flex mb-[10px]">
                          <div className="w-[20px] mr-2">
                          <Image 
                            src="/images/check-circle.svg"
                            alt="Setup-suite Logo"
                            width={20}
                            height={20}
                            className="rounded-2xl"
                            layout="responsive"
                          />
                          </div>
                          <p 
                            className="
                              font-medium
                              text-[14px]
                              text-[var(--greyadd)]
                            "
                          >
                            15 events per month
                          </p>
                        </div>
                        <div className="flex mb-[10px]">
                          <div className="w-[20px] mr-2">
                          <Image 
                            src="/images/check-circle.svg"
                            alt="Setup-suite Logo"
                            width={20}
                            height={20}
                            className="rounded-2xl"
                            layout="responsive"
                          />
                          </div>
                          <p 
                            className="
                            font-medium
                            text-[14px]
                            text-[var(--greyadd)]
                          "
                          >
                            No survenuir management 
                          </p>
                        </div>
                        <div className="flex mb-[10px]">
                          <div className="w-[20px] mr-2">
                          <Image 
                            src="/images/check-circle.svg"
                            alt="Setup-suite Logo"
                            width={20}
                            height={20}
                            className="rounded-2xl"
                            layout="responsive"
                          />
                          </div>
                          <p 
                            className="
                            font-medium
                            text-[14px]
                            text-[var(--greyadd)]
                            "
                          >
                            No vendor management 
                          </p>
                        </div>
                        <div className="flex mb-[10px]">
                          <div className="w-[20px] mr-2">
                          <Image 
                            src="/images/check-circle.svg"
                            alt="Setup-suite Logo"
                            width={20}
                            height={20}
                            className="rounded-2xl"
                            layout="responsive"
                          />
                          </div>
                          <p 
                            className="
                            font-medium
                            text-[14px]
                            text-[var(--greyadd)]
                          "
                          >
                            Can send 500 emails per month 
                          </p>
                        </div>
                      </div>
                      <div 
                        className="
                          mt-[200px]
                          lg:mt-[200px]
                          xl:mt-[220px]
                          flex
                          justify-center
                        "
                      >
                      <Link 
                        href="#" 
                        className="
                            bg-[var(--foreground)] 
                            text-[var(--white)] 
                            px-14
                            lg:px-10
                            xl:px-14
                            text-[16px]
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
                    Choose plan
                </Link>
                </div>
                    </div>
                    
                    <div 
                      className="
                        bg-[var(--white)]
                        rounded-3xl
                        pt-[65px]
                        px-12
                        h-[532px]
                        mb-[20px]
                        mt-[20px]
                        lg:mb-[0px]
                        lg:mt-[0px]
                      ">
                      <div>
                        <h1
                          className="
                            text-[var(--play)] 
                            font-bold
                            lg:text-4xl
                            text-[36px]
                            mb-[10px]
                          "
                        >
                          220,000 
                          <span 
                            className="
                              text-[var(--greyadd)]
                              ml-4
                              font-medium
                              lg:text-[17px] 
                              text-[17px]
                            "
                          >
                            /year
                          </span>
                        </h1>
                        <h3 
                          className="
                            font-medium
                            lg:text-[28px]
                            text-[28px]
                            text-[var(--play)] 
                            mb-[15px]
                          "
                        >
                            Pro Plan
                          </h3>
                        <div className="flex mb-[10px]">
                          <div className="w-[20px] mr-2">
                          <Image 
                            src="/images/check-circle.svg"
                            alt="Setup-suite Logo"
                            width={20}
                            height={20}
                            className="rounded-2xl"
                            layout="responsive"
                          />
                          </div>
                          <p 
                            className="
                              font-medium
                              text-[14px]
                              text-[var(--greyadd)]
                            "
                          >
                            25 events per month
                          </p>
                        </div>
                        <div className="flex mb-[10px]">
                          <div className="w-[20px] mr-2">
                          <Image 
                            src="/images/check-circle.svg"
                            alt="Setup-suite Logo"
                            width={20}
                            height={20}
                            className="rounded-2xl"
                            layout="responsive"
                          />
                          </div>
                          <p 
                            className="
                            font-medium
                            text-[14px]
                            text-[var(--greyadd)]
                          "
                          >
                            survenuir management 
                          </p>
                        </div>
                        <div className="flex mb-[10px]">
                          <div className="w-[20px] mr-2">
                          <Image 
                            src="/images/check-circle.svg"
                            alt="Setup-suite Logo"
                            width={20}
                            height={20}
                            className="rounded-2xl"
                            layout="responsive"
                          />
                          </div>
                          <p 
                            className="
                            font-medium
                            text-[14px]
                            text-[var(--greyadd)]
                            "
                          >
                            vendor management 
                          </p>
                        </div>
                        <div className="flex mb-[10px]">
                          <div className="w-[20px] mr-2">
                          <Image 
                            src="/images/check-circle.svg"
                            alt="Setup-suite Logo"
                            width={20}
                            height={20}
                            className="rounded-2xl"
                            layout="responsive"
                          />
                          </div>
                          <p 
                            className="
                            font-medium
                            text-[14px]
                            text-[var(--greyadd)]
                          "
                          >
                            Can send 1000 emails per month 
                          </p>
                        </div>
                        <div className="flex mb-[10px]">
                          <div className="w-[20px] mr-2">
                          <Image 
                            src="/images/check-circle.svg"
                            alt="Setup-suite Logo"
                            width={20}
                            height={20}
                            className="rounded-2xl"
                            layout="responsive"
                          />
                          </div>
                          <p 
                            className="
                            font-medium
                            text-[14px]
                            text-[var(--greyadd)]
                          "
                          >
                            Plus one management 
                          </p>
                        </div>
                        <div className="flex mb-[10px]">
                          <div className="w-[20px] mr-2">
                          <Image 
                            src="/images/check-circle.svg"
                            alt="Setup-suite Logo"
                            width={20}
                            height={20}
                            className="rounded-2xl"
                            layout="responsive"
                          />
                          </div>
                          <p 
                            className="
                            font-medium
                            text-[14px]
                            text-[var(--greyadd)]
                          "
                          >
                            Onsite accreditation
                          </p>
                        </div>
                        
                      </div>
                      <div 
                        className="
                          lg:mt-[140px]
                          xl:mt-[160px]
                          mt-[140px]
                          flex
                          justify-center
                        ">
                      <Link 
                        href="#" 
                        className="
                            bg-[var(--foreground)] 
                            text-[var(--white)] 
                            px-14
                            lg:px-10 
                            xl:px-14 
                            text-[16px]
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
                    Choose plan
                </Link>
                </div>
                  </div>
                    <div 
                      className="
                        bg-[var(--white)]
                        rounded-3xl
                        pt-[65px]
                        px-12
                        h-[532px]
                        mx-auto
                      ">
                      <div>
                        <h1
                          className="
                            text-[var(--play)] 
                            font-bold
                            lg:text-4xl
                            text-[36px]
                            mb-[10px]
                          "
                        >
                          300,000 
                          <span 
                            className="
                              text-[var(--greyadd)]
                              ml-4
                              font-medium
                              lg:text-[17px] 
                              text-[17px]
                            "
                          >
                            /year
                          </span>
                        </h1>
                        <h3 
                          className="
                            font-medium
                            lg:text-[28px]
                            text-[28px]
                            text-[var(--play)] 
                            mb-[15px]
                          "
                        >
                            Sky Plan
                          </h3>
                        <div className="flex mb-[10px]">
                          <div className="w-[20px] mr-2">
                          <Image 
                            src="/images/check-circle.svg"
                            alt="Setup-suite Logo"
                            width={20}
                            height={20}
                            className="rounded-2xl"
                            layout="responsive"
                          />
                          </div>
                          <p 
                            className="
                              font-medium
                              text-[14px]
                              text-[var(--greyadd)]
                            "
                          >
                            Unlimited events per month
                          </p>
                        </div>
                        <div className="flex mb-[10px]">
                          <div className="w-[20px] mr-2">
                          <Image 
                            src="/images/check-circle.svg"
                            alt="Setup-suite Logo"
                            width={20}
                            height={20}
                            className="rounded-2xl"
                            layout="responsive"
                          />
                          </div>
                          <p 
                            className="
                            font-medium
                            text-[14px]
                            text-[var(--greyadd)]
                          "
                          >
                            All basic and pro features 
                          </p>
                        </div>
                        <div className="flex mb-[10px]">
                          <div className="w-[20px] mr-2">
                          <Image 
                            src="/images/check-circle.svg"
                            alt="Setup-suite Logo"
                            width={20}
                            height={20}
                            className="rounded-2xl"
                            layout="responsive"
                          />
                          </div>
                          <p 
                            className="
                            font-medium
                            text-[14px]
                            text-[var(--greyadd)]
                            "
                          >
                            staff management 
                          </p>
                        </div>
                        <div className="flex mb-[10px]">
                          <div className="w-[20px] mr-2">
                          <Image 
                            src="/images/check-circle.svg"
                            alt="Setup-suite Logo"
                            width={20}
                            height={20}
                            className="rounded-2xl"
                            layout="responsive"
                          />
                          </div>
                          <p 
                            className="
                            font-medium
                            text-[14px]
                            text-[var(--greyadd)]
                          "
                          >
                            Event report breakdown 
                          </p>
                        </div>
                        <div className="flex mb-[10px]">
                          <div className="w-[20px] mr-2">
                          <Image 
                            src="/images/check-circle.svg"
                            alt="Setup-suite Logo"
                            width={20}
                            height={20}
                            className="rounded-2xl"
                            layout="responsive"
                          />
                          </div>
                          <p 
                            className="
                            font-medium
                            text-[14px]
                            text-[var(--greyadd)]
                            w-[180px]
                          "
                          >
                            On site registration ( realtime tag printing  )  
                          </p>
                        </div>
                        <div className="flex mb-[10px]">
                          <div className="w-[20px] mr-2">
                          <Image 
                            src="/images/check-circle.svg"
                            alt="Setup-suite Logo"
                            width={20}
                            height={20}
                            className="rounded-2xl"
                            layout="responsive"
                          />
                          </div>
                          <p 
                            className="
                            font-medium
                            text-[14px]
                            text-[var(--greyadd)]
                            w-[190px]
                          "
                          >
                            3 days subscription renewal plan after subscription expiration
 
                          </p>
                        </div>
                        <div className="flex mb-[10px]">
                          <div className="w-[20px] mr-2">
                          <Image 
                            src="/images/check-circle.svg"
                            alt="Setup-suite Logo"
                            width={20}
                            height={20}
                            className="rounded-2xl"
                            layout="responsive"
                          />
                          </div>
                          <p 
                            className="
                            font-medium
                            text-[14px]
                            text-[var(--greyadd)]
                            w-[177px]
                          "
                          >
                            Can send 10,000 emails per
                            month 
                          </p>
                        </div>
                      <div 
                        className="
                          lg:mt-[40px]
                          mt-[30px]
                          flex
                          justify-center
                        ">
                        <Link 
                          href="/signup" 
                          className="
                              bg-[var(--foreground)] 
                              text-[var(--white)] 
                              px-14
                              lg:px-10
                              xl:px-14
                              text-[16px]
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
                            Choose plan
                          </Link>
                        </div>
                      </div>
                    </div>
                </div>
            </>
          ) : (
                <>
                  <div 
                    className="
                      bg-[linear-gradient(180deg,#F2EFEB_0%,#8FE3D2_100%)] 
                      flex
                      flex-col
                      lg:flex-row
                      xl:flex-row
                      py-12
                      lg:px-12
                      px-3
                      gap-[30px]
                      rounded-3xl
                ">
                    <div 
                      className="
                        bg-[var(--white)]
                        rounded-3xl
                        pt-[65px]
                        px-12
                        h-[532px]
                      ">
                      <div>
                        <h1
                          className="
                            text-[var(--play)] 
                            font-bold
                            lg:text-4xl
                            text-[36px]
                            mb-[10px]
                          "
                        >
                          180,000 
                          <span 
                            className="
                              text-[var(--greyadd)]
                              ml-4
                              font-medium
                              lg:text-[17px] 
                              text-[17px]
                            "
                          >
                            /month
                          </span>
                        </h1>
                        <h3 
                          className="
                            font-medium
                            lg:text-[28px]
                            text-[28px]
                            text-[var(--play)] 
                            mb-[15px]
                          "
                        >
                            Basic Plan
                          </h3>
                        <div className="flex mb-[10px]">
                          <div className="w-[20px] mr-2">
                          <Image 
                            src="/images/check-circle.svg"
                            alt="Setup-suite Logo"
                            width={20}
                            height={20}
                            className="rounded-2xl"
                            layout="responsive"
                          />
                          </div>
                          <p 
                            className="
                              font-medium
                              text-[14px]
                              text-[var(--greyadd)]
                            "
                          >
                            15 events per month
                          </p>
                        </div>
                        <div className="flex mb-[10px]">
                          <div className="w-[20px] mr-2">
                          <Image 
                            src="/images/check-circle.svg"
                            alt="Setup-suite Logo"
                            width={20}
                            height={20}
                            className="rounded-2xl"
                            layout="responsive"
                          />
                          </div>
                          <p 
                            className="
                            font-medium
                            text-[14px]
                            text-[var(--greyadd)]
                          "
                          >
                            No survenuir management 
                          </p>
                        </div>
                        <div className="flex mb-[10px]">
                          <div className="w-[20px] mr-2">
                          <Image 
                            src="/images/check-circle.svg"
                            alt="Setup-suite Logo"
                            width={20}
                            height={20}
                            className="rounded-2xl"
                            layout="responsive"
                          />
                          </div>
                          <p 
                            className="
                            font-medium
                            text-[14px]
                            text-[var(--greyadd)]
                            "
                          >
                            No vendor management 
                          </p>
                        </div>
                        <div className="flex mb-[10px]">
                          <div className="w-[20px] mr-2">
                          <Image 
                            src="/images/check-circle.svg"
                            alt="Setup-suite Logo"
                            width={20}
                            height={20}
                            className="rounded-2xl"
                            layout="responsive"
                          />
                          </div>
                          <p 
                            className="
                            font-medium
                            text-[14px]
                            text-[var(--greyadd)]
                          "
                          >
                            Can send 500 emails per month 
                          </p>
                        </div>
                      </div>
                      <div 
                        className="
                          mt-[200px]
                          lg:mt-[200px]
                          xl:mt-[220px]
                          flex
                          justify-center
                        "
                      >
                      <Link 
                        href="#" 
                        className="
                            bg-[var(--foreground)] 
                            text-[var(--white)] 
                            px-14
                            lg:px-10
                            xl:px-14
                            text-[16px]
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
                    Choose plan
                </Link>
                </div>
                    </div>
                    
                    <div 
                      className="
                        bg-[var(--white)]
                        rounded-3xl
                        pt-[65px]
                        px-12
                        h-[532px]
                        mb-[20px]
                        mt-[20px]
                        lg:mb-[0px]
                        lg:mt-[0px]
                      ">
                      <div>
                        <h1
                          className="
                            text-[var(--play)] 
                            font-bold
                            lg:text-4xl
                            text-[36px]
                            mb-[10px]
                          "
                        >
                          220,000 
                          <span 
                            className="
                              text-[var(--greyadd)]
                              ml-4
                              font-medium
                              lg:text-[17px] 
                              text-[17px]
                            "
                          >
                            /month
                          </span>
                        </h1>
                        <h3 
                          className="
                            font-medium
                            lg:text-[28px]
                            text-[28px]
                            text-[var(--play)] 
                            mb-[15px]
                          "
                        >
                            Pro Plan
                          </h3>
                        <div className="flex mb-[10px]">
                          <div className="w-[20px] mr-2">
                          <Image 
                            src="/images/check-circle.svg"
                            alt="Setup-suite Logo"
                            width={20}
                            height={20}
                            className="rounded-2xl"
                            layout="responsive"
                          />
                          </div>
                          <p 
                            className="
                              font-medium
                              text-[14px]
                              text-[var(--greyadd)]
                            "
                          >
                            25 events per month
                          </p>
                        </div>
                        <div className="flex mb-[10px]">
                          <div className="w-[20px] mr-2">
                          <Image 
                            src="/images/check-circle.svg"
                            alt="Setup-suite Logo"
                            width={20}
                            height={20}
                            className="rounded-2xl"
                            layout="responsive"
                          />
                          </div>
                          <p 
                            className="
                            font-medium
                            text-[14px]
                            text-[var(--greyadd)]
                          "
                          >
                            survenuir management 
                          </p>
                        </div>
                        <div className="flex mb-[10px]">
                          <div className="w-[20px] mr-2">
                          <Image 
                            src="/images/check-circle.svg"
                            alt="Setup-suite Logo"
                            width={20}
                            height={20}
                            className="rounded-2xl"
                            layout="responsive"
                          />
                          </div>
                          <p 
                            className="
                            font-medium
                            text-[14px]
                            text-[var(--greyadd)]
                            "
                          >
                            vendor management 
                          </p>
                        </div>
                        <div className="flex mb-[10px]">
                          <div className="w-[20px] mr-2">
                          <Image 
                            src="/images/check-circle.svg"
                            alt="Setup-suite Logo"
                            width={20}
                            height={20}
                            className="rounded-2xl"
                            layout="responsive"
                          />
                          </div>
                          <p 
                            className="
                            font-medium
                            text-[14px]
                            text-[var(--greyadd)]
                          "
                          >
                            Can send 1000 emails per month 
                          </p>
                        </div>
                        <div className="flex mb-[10px]">
                          <div className="w-[20px] mr-2">
                          <Image 
                            src="/images/check-circle.svg"
                            alt="Setup-suite Logo"
                            width={20}
                            height={20}
                            className="rounded-2xl"
                            layout="responsive"
                          />
                          </div>
                          <p 
                            className="
                            font-medium
                            text-[14px]
                            text-[var(--greyadd)]
                          "
                          >
                            Plus one management 
                          </p>
                        </div>
                        <div className="flex mb-[10px]">
                          <div className="w-[20px] mr-2">
                          <Image 
                            src="/images/check-circle.svg"
                            alt="Setup-suite Logo"
                            width={20}
                            height={20}
                            className="rounded-2xl"
                            layout="responsive"
                          />
                          </div>
                          <p 
                            className="
                            font-medium
                            text-[14px]
                            text-[var(--greyadd)]
                          "
                          >
                            Onsite accreditation
                          </p>
                        </div>
                        
                      </div>
                      <div 
                        className="
                          lg:mt-[140px]
                          xl:mt-[160px]
                          mt-[140px]
                          flex
                          justify-center
                        ">
                      <Link 
                        href="#" 
                        className="
                            bg-[var(--foreground)] 
                            text-[var(--white)] 
                            px-14
                            lg:px-10 
                            xl:px-14 
                            text-[16px]
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
                    Choose plan
                </Link>
                </div>
                  </div>
                    <div 
                      className="
                        bg-[var(--white)]
                        rounded-3xl
                        pt-[65px]
                        px-12
                        h-[532px]
                        mx-auto
                      ">
                      <div>
                        <h1
                          className="
                            text-[var(--play)] 
                            font-bold
                            lg:text-4xl
                            text-[36px]
                            mb-[10px]
                          "
                        >
                          300,000 
                          <span 
                            className="
                              text-[var(--greyadd)]
                              ml-4
                              font-medium
                              lg:text-[17px] 
                              text-[17px]
                            "
                          >
                            /month
                          </span>
                        </h1>
                        <h3 
                          className="
                            font-medium
                            lg:text-[28px]
                            text-[28px]
                            text-[var(--play)] 
                            mb-[15px]
                          "
                        >
                            Sky Plan
                          </h3>
                        <div className="flex mb-[10px]">
                          <div className="w-[20px] mr-2">
                          <Image 
                            src="/images/check-circle.svg"
                            alt="Setup-suite Logo"
                            width={20}
                            height={20}
                            className="rounded-2xl"
                            layout="responsive"
                          />
                          </div>
                          <p 
                            className="
                              font-medium
                              text-[14px]
                              text-[var(--greyadd)]
                            "
                          >
                            Unlimited events per month
                          </p>
                        </div>
                        <div className="flex mb-[10px]">
                          <div className="w-[20px] mr-2">
                          <Image 
                            src="/images/check-circle.svg"
                            alt="Setup-suite Logo"
                            width={20}
                            height={20}
                            className="rounded-2xl"
                            layout="responsive"
                          />
                          </div>
                          <p 
                            className="
                            font-medium
                            text-[14px]
                            text-[var(--greyadd)]
                          "
                          >
                            All basic and pro features 
                          </p>
                        </div>
                        <div className="flex mb-[10px]">
                          <div className="w-[20px] mr-2">
                          <Image 
                            src="/images/check-circle.svg"
                            alt="Setup-suite Logo"
                            width={20}
                            height={20}
                            className="rounded-2xl"
                            layout="responsive"
                          />
                          </div>
                          <p 
                            className="
                            font-medium
                            text-[14px]
                            text-[var(--greyadd)]
                            "
                          >
                            staff management 
                          </p>
                        </div>
                        <div className="flex mb-[10px]">
                          <div className="w-[20px] mr-2">
                          <Image 
                            src="/images/check-circle.svg"
                            alt="Setup-suite Logo"
                            width={20}
                            height={20}
                            className="rounded-2xl"
                            layout="responsive"
                          />
                          </div>
                          <p 
                            className="
                            font-medium
                            text-[14px]
                            text-[var(--greyadd)]
                          "
                          >
                            Event report breakdown 
                          </p>
                        </div>
                        <div className="flex mb-[10px]">
                          <div className="w-[20px] mr-2">
                          <Image 
                            src="/images/check-circle.svg"
                            alt="Setup-suite Logo"
                            width={20}
                            height={20}
                            className="rounded-2xl"
                            layout="responsive"
                          />
                          </div>
                          <p 
                            className="
                            font-medium
                            text-[14px]
                            text-[var(--greyadd)]
                            w-[180px]
                          "
                          >
                            On site registration ( realtime tag printing  )  
                          </p>
                        </div>
                        <div className="flex mb-[10px]">
                          <div className="w-[20px] mr-2">
                          <Image 
                            src="/images/check-circle.svg"
                            alt="Setup-suite Logo"
                            width={20}
                            height={20}
                            className="rounded-2xl"
                            layout="responsive"
                          />
                          </div>
                          <p 
                            className="
                            font-medium
                            text-[14px]
                            text-[var(--greyadd)]
                            w-[190px]
                          "
                          >
                            3 days subscription renewal plan after subscription expiration
 
                          </p>
                        </div>
                        <div className="flex mb-[10px]">
                          <div className="w-[20px] mr-2">
                          <Image 
                            src="/images/check-circle.svg"
                            alt="Setup-suite Logo"
                            width={20}
                            height={20}
                            className="rounded-2xl"
                            layout="responsive"
                          />
                          </div>
                          <p 
                            className="
                            font-medium
                            text-[14px]
                            text-[var(--greyadd)]
                            w-[177px]
                          "
                          >
                            Can send 10,000 emails per
                            month 
                          </p>
                        </div>
                      <div 
                        className="
                          lg:mt-[40px]
                          mt-[30px]
                          flex
                          justify-center
                        ">
                        <Link 
                          href="/signup" 
                          className="
                              bg-[var(--foreground)] 
                              text-[var(--white)] 
                              px-14
                              lg:px-10
                              xl:px-14
                              text-[16px]
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
                            Choose plan
                          </Link>
                        </div>
                      </div>
                    </div>
                </div>
                </>
          )}
        </div>
    </div>
  );
};

export default Pricing;