import { useState } from "react";
import { Minus } from "@phosphor-icons/react";
import { Plus } from "@phosphor-icons/react";

const Question = () => {
  // State to track the expansion state of each question independently
  const [expandedStates, setExpandedStates] = useState({
    features: true, // Default to expanded for "What are the key features of Setup Suite?"
    events: true,
    system: true,
    multipleEvents: false,
    qrCode: false,
  });

  // Toggle function to show/hide answer for a specific question
  const toggleAnswer = (question) => {
    setExpandedStates((prevStates) => ({
      ...prevStates,
      [question]: !prevStates[question],
    }));
  };

  return (
    <div className="mt-[150px] mb-[100px]">
      <div className="mb-[20px]">
        <h1
          className="
            lg:text-[48px]
            text-[24px]
            font-black
            text-[var(--greyadd)]
            text-center
          "
        >
          Frequently Ask Questions
        </h1>
      </div>
      <div
        className="
          flex 
          flex-col
          lg:flex-row
          xl:flex-row
          justify-center
          items-center
          mx-auto
          lg:gap-4
          gap-2
        "
      >
        <div
          className="
            flex
            justify-center
            shadow-2xl
            w-[380px]
            lg:w-[558px]
            px-2
            lg:px-7
            py-10
          "
        >
          <div className="flex items-center">
            {expandedStates.features ? (
              <Minus
                size={22}
                className="
                  text-[var(--play)]
                  mt-[-100px]
                "
                onClick={() => toggleAnswer("features")}
              />
            ) : (
              <Plus
                size={22}
                className="
                  text-[var(--play)]
                "
                onClick={() => toggleAnswer("features")}
              />
            )}
          </div>
          <div className="ml-5">
            <h1
              className="
                lg:text-[18px]
                text-[16px]
                text-[var(--question)]
                font-medium
                lg:w-[438px]
                w-[306px]
              "
            >
              What are the key features of Setup Suite?
            </h1>
            {expandedStates.features && (
              <p
                className="
                  lg:text-[15px]
                  text-[14px]
                  font-normal
                  lg:w-[442px]
                  w-[306px]
                  text-[var(--greyadd)]
                  mt-[20px]
                "
              >
                Setup Suite offers a complete event management solution,
                including seamless event registration, automated check-ins, guest
                list management, vendor coordination, real-time analytics, and
                onsite accreditation.
              </p>
            )}
          </div>
        </div>
        <div
          className="
            flex
            justify-center
            shadow-2xl
            w-[380px]
            lg:w-[558px]
            px-2
            lg:px-7
            py-10
          "
        >
          <div className="flex items-center">
            {expandedStates.events ? (
              <Minus
                size={22}
                className="
                  text-[var(--play)]
                  mt-[-100px]
                "
                onClick={() => toggleAnswer("events")}
              />
            ) : (
              <Plus
                size={22}
                className="
                  text-[var(--play)]
                "
                onClick={() => toggleAnswer("events")}
              />
            )}
          </div>
          <div className="ml-5">
            <h1
              className="
                lg:text-[18px]
                text-[16px]
                text-[var(--question)]
                font-medium
                lg:w-[438px]
                w-[306px]
              "
            >
              Can I manage multiple events at once?
            </h1>
            {expandedStates.events && (
              <p
                className="
                  lg:text-[15px]
                  text-[14px]
                  font-normal
                  lg:w-[442px]
                  w-[306px]
                  text-[var(--greyadd)]
                  mt-[20px]
                "
              >
                Yes! Setup Suite allows you to handle multiple events
                simultaneously, with separate guest lists, vendors, and logistics
                for each event—all from a single dashboard.
              </p>
            )}
          </div>
        </div>
      </div>
      <div
        className="
          flex 
          flex-col
          lg:flex-row
          xl:flex-row
          justify-center
          items-center
          mx-auto
          lg:gap-4
          gap-2
          mt-1
        "
      >
        <div
          className="
            flex 
            flex-col
            lg:mt-4
            mt-1
          "
        >
          <div
            className="
              flex
              justify-center
              shadow-2xl
              w-[380px]
              lg:w-[558px]
              px-2
              lg:px-7
              lg:py-9
              py-6
              lg:mb-2
              mb-1
            "
          >
            <div className="flex items-center">
              {expandedStates.qrCode ? (
                <Minus
                  size={22}
                  className="
                    text-[var(--question)]
                    mt-[-100px]
                  "
                  onClick={() => toggleAnswer("qrCode")}
                />
              ) : (
                <Plus
                  size={22}
                  className="
                    text-[var(--question)]
                  "
                  onClick={() => toggleAnswer("qrCode")}
                />
              )}
            </div>
            <div className="ml-5">
              <h1
                className="
                  lg:text-[18px]
                  text-[16px]
                  text-[var(--question)]
                  font-medium
                  lg:w-[438px]
                  w-[306px]
                "
              >
                How does the QR code check-in system work?
              </h1>
              {expandedStates.qrCode && (
                <p
                  className="
                    lg:text-[15px]
                    text-[14px]
                    font-normal
                    lg:w-[442px]
                    w-[306px]
                    text-[var(--greyadd)]
                    mt-[20px]
                  "
                >
                  Each attendee receives a unique QR code upon registration. At
                  the event, they simply scan their code at the check-in point
                  for instant verification, reducing wait times and ensuring a
                  smooth entry process.
                </p>
              )}
            </div>
          </div>
          <div
            className="
              flex
              justify-center
              shadow-2xl
              w-[380px]
              lg:w-[558px]
              px-2
              lg:px-7
              lg:py-9
              py-6
              lg:mb-2
              mb-1
            "
          >
            <div className="flex items-center">
              {expandedStates.multipleEvents ? (
                <Minus
                  size={22}
                  className="
                    text-[var(--question)]
                    mt-[-100px]
                  "
                  onClick={() => toggleAnswer("multipleEvents")}
                />
              ) : (
                <Plus
                  size={22}
                  className="
                    text-[var(--question)]
                  "
                  onClick={() => toggleAnswer("multipleEvents")}
                />
              )}
            </div>
            <div className="ml-5">
              <h1
                className="
                  lg:text-[18px]
                  text-[16px]
                  text-[var(--question)]
                  font-medium
                  lg:w-[438px]
                  w-[306px]
                "
              >
                Can I manage multiple events at once?
              </h1>
              {expandedStates.multipleEvents && (
                <p
                  className="
                    lg:text-[15px]
                    text-[14px]
                    font-normal
                    lg:w-[442px]
                    w-[306px]
                    text-[var(--greyadd)]
                    mt-[20px]
                  "
                >
                  Yes! Setup Suite allows you to handle multiple events
                  simultaneously, with separate guest lists, vendors, and
                  logistics for each event—all from a single dashboard.
                </p>
              )}
            </div>
          </div>
        </div>
        <div
          className="
            flex
            justify-center
            shadow-2xl
            w-[380px]
            lg:w-[558px]
            px-2
            lg:px-7
            py-10
          "
        >
          <div className="flex items-center">
            {expandedStates.system ? (
              <Minus
                size={22}
                className="
                  text-[var(--play)]
                  mt-[-100px]
                "
                onClick={() => toggleAnswer("system")}
              />
            ) : (
              <Plus
                size={22}
                className="
                  text-[var(--play)]
                "
                onClick={() => toggleAnswer("system")}
              />
            )}
          </div>
          <div className="ml-5">
            <h1
              className="
                lg:text-[18px]
                text-[16px]
                text-[var(--question)]
                font-medium
                lg:w-[438px]
                w-[306px]
              "
            >
              How does the QR code check-in system work?
            </h1>
            {expandedStates.system && (
              <p
                className="
                  lg:text-[15px]
                  text-[14px]
                  font-normal
                  lg:w-[442px]
                  w-[306px]
                  text-[var(--greyadd)]
                  mt-[20px]
                "
              >
                Each attendee receives a unique QR code upon registration. At the
                event, they simply scan their code at the check-in point for
                instant verification, reducing wait times and ensuring a smooth
                entry process.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;