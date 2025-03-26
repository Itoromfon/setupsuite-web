import Link from "next/link";
import ManagePrice from "../manageprice/ManagePrice";

const Pricing = () => {
  return (
    <div 
      className="
        bg-[linear-gradient(180deg,#F2EFEB_0%,#1ABC9C_100%,#8FE3D2_100%)]
        mt-[50px]
        lg:mt-[50px]
        w-full
        min-h-screen
      "
    >
    <div
      id="pricing"
      className="
        flex
        flex-col
        items-center
        justify-center
        py-12
      "
    >
      {/* You can conditionally render pricing plans based on the toggle state */}
      <div className="mt-[20px]">
              <div className="flex justify-left">
                <div className="lg:mt-[100px] mt-[80px]">
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
                <p 
                className="
                    lg:text-lg 
                    text-base
                    text-left
                    lg:text-left
                    text-[var(--greys)]
                    font-md
                    lg:w-[485px]
                    w-[350px]
                    mb-8
                  "
                >
                  The Ultimate Event Payment Model — Affordable, Flexible, and Tailored Just for You


                </p>
                </div>
              </div>
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
                        lg:w-[507px]
                        w-[315px]
                        h-[589px]
                        mx-auto
                        lg:mt-0
                        mt-[-20px]
                        lg:mb-[0]
                        mb-[30px]
                      ">
                      <Link 
                        href="#"
                        className="
                            bg-[var(--register)] 
                            text-[var(--register-text)] 
                            px-14
                            lg:px-10
                            xl:px-14
                            text-[14px]
                            lg:text-[16px]
                            py-3 
                            rounded-full 
                            font-semibold
                            hover:scale-105 
                            hover:shadow-lg 
                            transition-all 
                            duration-300 
                            animate-fade-in
                        ">
                            Pay Per Day
                      </Link>
                      <div 
                        className="
                          flex 
                          flex-col
                          justify-center
                        ">
                        <h1
                          className="
                            text-[var(--register-event)] 
                            font-bold
                            lg:text-4xl
                            text-[20px]
                            mb-[10px]
                            mt-[40px]
                            lg:w-[418px]
                            w-[230px]
                          "
                        >
                          Planning your perfect event has never been this affordable. 
                        </h1>
                        <p 
                        className="
                           text-[var(--register-event)] 
                           lg:w-[418px]
                           w-[220px]
                           leading-loose
                           mt-[50px]
                           lg:text-base
                           text-[15px]
                        ">
                          For as low as <span className="text-[var(--foreground)] font-bold">N2500</span>, you can start 
                          planning your dream event with complete 
                          flexibility. No hidden fees, no surprises
                           — just straightforward, easy-to-understand 
                           pricing that puts you in control.
                        </p>
                        
                        
                        
                      </div>
                      <div 
                        className="
                          mt-[75px]
                          lg:mt-[98px]
                          xl:mt-[98px]
                          flex
                          justify-center
                        "
                      >
                      <Link 
                        href="#" 
                        className="
                            bg-[var(--foreground)] 
                            text-[var(--white)] 
                            px-12
                            lg:px-10
                            xl:px-14
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
                    Choose 2500 plan
                </Link>
                </div>
                </div>
                  
                  <div 
                      className="
                        bg-[var(--white)]
                        rounded-3xl
                        pt-[65px]
                        px-12
                        mx-auto
                        lg:w-[507px]
                        w-[315px]
                        h-[589px]
                      ">
                      <Link 
                        href="#"
                        className="
                            bg-[var(--register)] 
                            text-[var(--register-text)] 
                            px-14
                            lg:px-10
                            xl:px-14
                            text-[14px]
                            lg:text-[16px]
                            py-3 
                            rounded-full 
                            font-semibold
                            hover:scale-105 
                            hover:shadow-lg 
                            transition-all 
                            duration-300 
                            animate-fade-in
                        ">
                            Custom Plan
                      </Link>
                      <div>
                        <h1
                          className="
                            text-[var(--register-event)] 
                            font-bold
                            lg:text-4xl
                            text-[20px]
                            mb-[10px]
                            mt-[40px]
                            lg:w-[418px]
                            w-[230px]
                          "
                        >
                         Want something even more personalized? 
                        </h1>
                        <p 
                        className="
                           text-[var(--register-event)] 
                           lg:w-[418px]
                           w-[220px]
                           leading-loose
                           lg:mt-[30px]
                           mt-[10px]
                           lg:text-base
                           text-[15px]
                        ">
                          With our Custom Plan, you can send us your offer, and we’ll negotiate until we find a solution that works for both sides. Accept or decline — the choice is yours.
                        </p>
                        <p
                          className="
                           text-[var(--register-event)] 
                           lg:w-[418px]
                           w-[220px]
                           leading-loose
                           lg:mt-[30px]
                           mt-[5px]
                           lg:text-base
                           text-[15px]
                          "
                        >
                          Plus, with our Exclusion Dates feature, you can make sure your event runs smoothly by selecting dates you want to exclude, ensuring no unexpected disruptions to your schedule.    
                        </p>                    
                        
                        
                      </div>
                      <div 
                        className="
                          mt-[30px]
                          lg:mt-[42px]
                          xl:mt-[42px]
                          flex
                          justify-center
                        "
                      >
                      <Link 
                        href="#" 
                        className="
                            bg-[var(--foreground)] 
                            text-[var(--white)] 
                            px-8
                            lg:px-10
                            xl:px-14
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
                          Choose Custom plan
                        </Link>
                </div>
                </div>
                </div>
                </>

        </div>
        {/* Manage Price Section */}
        <div>
            <ManagePrice />
          </div>
    </div>
    </div>
  );
};

export default Pricing;