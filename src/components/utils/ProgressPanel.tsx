import React from "react";

type ProgressPanelProps = {
  submitted: boolean;
  setSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
};

const ProgressPanel = ({ submitted, setSubmitted }: ProgressPanelProps) => {
  return (
    <footer className="bg-white rounded-b-lg border-t-2 border-gray-200 sticky bottom-0">
      <div className="p-4 flex justify-between">
        <button className="bg-white hover:bg-gray-200 p-3 rounded-lg border-2 border-gray-200 shadow-xl cursor-pointer">
          <div className=" w-32 text-center ">
            <button
              onClick={() =>
                alert("Skip question; this will not be visible on mobile")
              }
              className="text-gray-700 font-bold cursor-pointer"
            >
              Skip
            </button>
          </div>
        </button>
        <button
          disabled={!submitted}
          onClick={() => alert("next question")}
          className="btn-primary p-3 rounded-lg shadow-xl cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-400"
        >
          <label className="w-32 text-white font-bold ">Next Question</label>
        </button>
      </div>
    </footer>
  );
};

export default ProgressPanel;
