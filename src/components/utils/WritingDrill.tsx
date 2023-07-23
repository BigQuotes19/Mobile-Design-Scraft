import { Divider } from "antd";
import React, { Fragment, useState } from "react";
import Passage from "./Passage";
import WritingPanel from "./WritingPanel";
import FeedbackPanel from "./FeedbackPanel";
import { Transition, Dialog } from "@headlessui/react";

  const dummyContent = `ChatGPT is OpenAI’s AI chatbot that went viral after its release in late November 2022. The chatbot can write essays, poems, and give direct, conversational answers to just about any user query.
  
  A Google executive told The New York Times that AI chatbots like ChatGPT could upend Google’s search business, which heavily relies on ads and e-commerce. The publication said CEO Sundar Pichai has been in meetings to “define Google’s AI strategy” and has “upended the work of numerous groups inside the company to respond to the threat that ChatGPT poses.”`;

  type WritingDrillProps = {
  question: string;
  submitted: boolean;
  setSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
};

const WritingDrill = ({
  question,
  submitted,
  setSubmitted,
}: WritingDrillProps) => {
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  return (
    <div className="min-h-screen">
      <Passage 
      title="ChatGPT is Coming for Google" 
      content={dummyContent} 
      />
      <Divider />
      <h1 className="text-md font-bold my-3">{question}</h1>
      {submitted ? (
        <FeedbackPanel
          feedbackOpen={feedbackOpen}
          setFeedbackOpen={setFeedbackOpen}
        />
      ) : (
        <div></div>
      )}
      {!submitted ? (
        <WritingPanel submitted={submitted} setSubmitted={setSubmitted} />
      ) : (
        <div></div>
      )}
      <Transition appear show={feedbackOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-50 inset-0 overflow-y-auto"
          onClose={() => setFeedbackOpen(false)}
        >
          <span id="rewardId" />
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-20" />
            </Transition.Child>
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block rounded-lg overflow-hidden shadow-xl transform transition-all my-8 align-middle max-w-sm w-full">
                <div className="relative w-full max-w-md max-h-full">
                  <div className="relative bg-white rounded-lg shadow">
                    <button
                      type="button"
                      className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center "
                      onClick={() => {
                        setFeedbackOpen(false);
                      }}
                    >
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                    <div className="p-6 text-center">
                      <svg
                        aria-hidden="true"
                        className="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      <h3 className="mb-5 text-lg font-normal text-gray-500 ">
                        This is where criss-cross feedback will be
                      </h3>
                      <button className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                        Cool!
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default WritingDrill;
