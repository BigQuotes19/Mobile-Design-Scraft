import React from "react";
import { HiSparkles } from "react-icons/hi";

const AIFeedback = () => (
  <div className="p-4 bg-accent-100 rounded-b-lg space-y-2">
    <div className="flex space-x-1">
      <HiSparkles className="text-accent-primary" size={23} />
      <h2 className="text-accent-primary">AI Feedback</h2>
    </div>
    <p>
      The publication said CEO Sundar Pichai has been in meetings to “define
      Google’s AI strategy” and has “upended the work of numerous groups inside
      the company to respond to the threat that ChatGPT poses.
    </p>
  </div>
);

export default AIFeedback;
