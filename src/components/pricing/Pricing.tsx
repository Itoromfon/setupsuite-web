import { useState } from "react";

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
      "
    >
      <div className="flex text-center">
        <div className="mt-[-150px]">
        <h1 
            className="
                text-[40px]
                font-normal
                w-[380px]
                text-left
                text-[var(--greyadd)]
                mb-4
            "
            >
            Choose Your Plans
        </h1>
        <p 
            className="
                text-lg 
                text-left
                text-[var(--greys)]
                font-md
                w-[584px]
                mb-8"
            >
          Sign up in less than 30 seconds. Try out a 7-day free trial. Upgrade
          at anytime, no questions, no hassle.
        </p>
        </div>
        {/* Toggle Switch */}
        <div className="mt-[-150px]">
        <div className=" mb-12">
          <div className="relative flex items-center bg-white w-[200px] rounded-full shadow-md">
            {/* Monthly Button */}
            <button
              onClick={handleToggle}
              className={`px-6 py-2 rounded-full text-[12px] font-semibold transition-colors duration-300 ${
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

        {/* You can conditionally render pricing plans based on the toggle state */}
        <div>
          {isYearly ? (
            <p className="text-xl text-gray-700">
              Yearly pricing plans will be displayed here.
            </p>
          ) : (
            <p className="text-xl text-gray-700">
              Monthly pricing plans will be displayed here.
            </p>
          )}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;