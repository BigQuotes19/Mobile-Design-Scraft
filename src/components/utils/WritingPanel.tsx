import React from "react";

type WritingPanelProps = {
  submitted: boolean;
  setSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
};

const WritingPanel = ({ submitted, setSubmitted }: WritingPanelProps) => {
  return (
    <div>
      <form>
        <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 h-1000">
          <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
            <textarea
              id="comment"
              rows={4}
              className="w-full px-0 py-2 text-sm text-gray-900 bg-white outline-none"
              placeholder="Write your response here"
              required
            ></textarea>
          </div>
          <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
            <button
              type="submit"
              onClick={() => setSubmitted(true)}
              className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-accent-main hover:bg-accent-secondary rounded-lg focus:ring-4 focus:ring-blue-200"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default WritingPanel;
