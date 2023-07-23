import React, { Fragment, useState } from "react";
import { Transition, Dialog } from "@headlessui/react";
import { Progress } from "antd";
import clsx from "clsx";
import { IoMdClose } from "react-icons/io";

type SingleSentenceProps = {
  sentence: string;
  feedbackOpen: boolean;
  setFeedbackOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SingleSentence = ({
  sentence,
  feedbackOpen,
  setFeedbackOpen,
}: SingleSentenceProps) => {
  const handleClick = () => {
    setFeedbackOpen(true);
  };

  return (
    <div>
      <div className="p-2 text-left hover:bg-gray-100 rounded-md btn-transition">
        The author mainly talks about how use of
        <div className="space-x-1 inline-block px-1">
          <s className="text-red-700">chatbot</s>
          <span className="text-green-700">OpenAI&apos;s ChatGPT</span>
        </div>
        would diminish their opportunity.
      </div>
    </div>
  );
};

export default SingleSentence;
