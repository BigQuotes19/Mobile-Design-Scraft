import React from "react";

type PassageProps = {
  title: string;
  content: string;
};

const Passage = ({ title, content }: PassageProps) => {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-bold">{title}</h1>
      <article className="whitespace-pre-line">{content}</article>
    </div>
  );
};

export default Passage;
