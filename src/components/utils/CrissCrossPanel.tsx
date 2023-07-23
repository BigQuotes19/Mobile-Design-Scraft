import React from "react";
import SingleSentence from "./SingleSentence";
import { HiOutlineBookOpen } from "react-icons/hi";

type CrissCrossPanelProps = {
  feedbackOpen: boolean;
  setFeedbackOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const CrissCrossPanel = ({
  feedbackOpen,
  setFeedbackOpen,
}: CrissCrossPanelProps) => {
  return (
    <div className="px-4 py-2 bg-white rounded-lg space-y-4">
      <div className="flex space-x-1">
        <HiOutlineBookOpen className="text-gray-500" size={23} />
        <h2 className="text-gray-500">Grammar Correction</h2>
      </div>
      <SingleSentence
        sentence="This article talks about the rise of ChatGPT, which has the potential to threaten Google’s search business."
        feedbackOpen={feedbackOpen}
        setFeedbackOpen={setFeedbackOpen}
      />
      {/* <SingleSentence sentence="The author mainly talks about how use of chatbot ChatGPT would diminish their opportunity." />
      <SingleSentence sentence="This article talks about the rise of ChatGPT, which has the potential to threaten Google’s search business." /> */}
    </div>
  );
};

export default CrissCrossPanel;
