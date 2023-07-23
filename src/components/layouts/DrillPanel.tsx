

import React, { ReactNode, useState } from "react";
import ProgressPanel from "../utils/ProgressPanel";
import WritingDrill from "../utils/WritingDrill";
import { isMobile } from "react-device-detect";
import clsx from "clsx";

type DrillPanelProps = {};

const DrillPanel = ({}: DrillPanelProps) => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div
      className={clsx(
        "bg-white h-full m-4 rounded-lg shadow-lg overflow-hidden",
        isMobile
          ? "h-[calc(100vh-12rem)] mb-12 w-screen" // Full width on mobile devices
          : "h-[calc(100vh-8rem)] max-w-lg mx-auto" // Limited width on non-mobile devices
      )}
    >
      <div className="p-6">
        <WritingDrill
          question="What did Google executive tell NYT?"
          submitted={submitted}
          setSubmitted={setSubmitted}
        />
      </div>
      <ProgressPanel submitted={submitted} setSubmitted={setSubmitted} />
    </div>
  );
};
export default DrillPanel;

