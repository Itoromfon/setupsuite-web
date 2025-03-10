import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";

const ManagePrice = () => {
    return (
        <div 
            className="
                flex
                flex-col
                lg:flex-row
                xl:flex-row
                mt-[100px]
                gap-[60px]
            ">
            <div>
                <div 
                    className="
                        w-[359px]
                        lg:w-[547px]
                        xl:w-[547px]
                    "
                >
                    <Image 
                        src="/images/handleevent.svg"
                        alt="Managge event"
                        width={547}
                        height={483}
                    />
                </div>
                <div className="mt-[35px]">
                    <h1 
                        className="
                            lg:text-[40px]
                            text-[20px]
                            font-bold
                            text-[var(--greyadd)]
                            lg:w-[459px]
                            w-[361px]
                            leading-none
                        "
                    >
                        Lets handle your events 
                        managment.
                    </h1>
                    <p
                        className="
                            lg:text-base
                            text-[14px]
                            font-medium
                            lg:w-[539px]
                            w-[361px]
                            mt-[20px]
                            text-[var(--greyadd)]
                        "
                    >
                        Automating your registration process makes it easy, fast and enjoyable. This results in improved and faster sign ups.
                    </p>
                </div>
                <div>
                <Link 
                    href="/signup" 
                    className="
                        flex
                        justify-center
                        w-[231px]
                        bg-[var(--white)] 
                        text-[var(--greyadd)] 
                        px-14
                        lg:px-14 
                        xl:px-14 
                        text-[14px]
                        lg:text-[16px]
                        py-3 
                        mt-[50px]
                        rounded-full 
                        font-semibold
                        border
                        border-[var(--foreground)]
                        border-b-4
                        border-b-[var(--border-bottom)]
                    "
                    >
                        Learn more 
                        <ArrowRight 
                            className="
                                mt-[4px]
                                ml-2
                            "
                            size={15} 
                        />
                    </Link>
                </div> 
            </div>
            <div>
                <div 
                    className="
                        w-[359px]
                        lg:w-[547px]
                        xl:w-[547px]
                    "
                >
                    <Image 
                        src="/images/audience.svg"
                        alt="Managge event"
                        width={547}
                        height={483}
                    />
                </div>
                <div className="mt-[35px]">
                    <h1 
                        className="
                            lg:text-[40px]
                            text-[20px]
                            font-bold
                            text-[var(--greyadd)]
                            lg:w-[459px]
                            w-[361px]
                            leading-none
                        "
                    >
                        Manage Your Audience with
                        Ease
                    </h1>
                    <p
                        className="
                            lg:text-base
                            text-[14px]
                            font-medium
                            lg:w-[539px]
                            w-[361px]
                            mt-[20px]
                            text-[var(--greyadd)]
                        "
                    >
                        Prevent overcrowding, enhance engagement, and create a safe, organized event.
                    </p>
                </div>
                <div>
                <Link 
                    href="/signup" 
                    className="
                        flex
                        justify-center
                        w-[231px]
                        bg-[var(--white)] 
                        text-[var(--greyadd)] 
                        px-14
                        lg:px-14 
                        xl:px-14 
                        text-[14px]
                        lg:text-[16px]
                        py-3 
                        mt-[50px]
                        rounded-full 
                        font-semibold
                        border
                        border-[var(--foreground)]
                        border-b-4
                        border-b-[var(--border-bottom)]
                    "
                    >
                        Learn more 
                        <ArrowRight 
                            className="
                                mt-[4px]
                                ml-2
                            "
                            size={15} 
                        />
                    </Link>
                </div> 
            </div>
        </div>
    )
}

export default ManagePrice;