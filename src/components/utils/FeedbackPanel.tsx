import React from "react";
import CrissCrossPanel from "./CrissCrossPanel";
import AIFeedback from "./AIFeedback";

type FeedbackPanelProps = {
  feedbackOpen: boolean;
  setFeedbackOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const FeedbackPanel = ({
  feedbackOpen,
  setFeedbackOpen,
}: FeedbackPanelProps) => {
  return (
    <div>
      <form>
        <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 ">
          <CrissCrossPanel
            feedbackOpen={feedbackOpen}
            setFeedbackOpen={setFeedbackOpen}
          />
          <AIFeedback />
        </div>
      </form>
    </div>
  );
};

export default FeedbackPanel;
