"use client";
import { PortableText } from "@portabletext/react";
import type { TypedObject } from "@portabletext/types";
import { useRef, useState } from "react";

interface FaqItem {
  question: string;
  answer: TypedObject | TypedObject[] | string;
}

interface FaqsCardProps {
  faqsList: FaqItem;
  idx: number;
}

const FaqsCard: React.FC<FaqsCardProps> = (props) => {
  const answerElRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<boolean>(false);
  const [answerH, setAnswerH] = useState<string>("0px");
  const { faqsList, idx } = props;

  const handleOpenAnswer = () => {
    if (answerElRef.current?.childNodes[0]) {
      const answerElH = (answerElRef.current.childNodes[0] as HTMLElement)
        .offsetHeight;
      setState(!state);
      setAnswerH(`${answerElH + 20}px`);
    } else {
      setState(!state);
    }
  };

  return (
    <button
      type="button"
      className="space-y-3 mt-3 overflow-hidden border-b w-full text-left focus:outline-none"
      key={idx}
      onClick={handleOpenAnswer}
    >
      <h4 className="cursor-pointer pb-3 flex items-center justify-between text-lg text-black font-medium">
        {faqsList.question}
        {state ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-mayazNiche ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-label="Collapse answer"
          >
            <title>Collapse answer</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20 12H4"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-mayazNiche ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <title>Expand answer</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        )}
      </h4>
      <div
        ref={answerElRef}
        className="duration-300"
        style={state ? { height: answerH } : { height: "0px" }}
      >
        <div className="text-gray-500 prose max-w-none prose-a:text-mayazNiche prose-a:no-underline prose-a:hover:text-black">
          {Array.isArray(faqsList.answer) ||
          typeof faqsList.answer === "object" ? (
            <PortableText value={faqsList.answer} />
          ) : (
            <span>{faqsList.answer as string}</span>
          )}
        </div>
      </div>
    </button>
  );
};

interface NewFaqsProps {
  nicheFAQs: FaqItem[];
}

const NewFaqs: React.FC<NewFaqsProps> = ({ nicheFAQs }) => {
  return (
    <section className="leading-relaxed max-w-screen-2xl mx-auto px-4 md:px-8">
      <header className="space-y-4 text-center">
        <h3 className="text-lg font-bold text-mayazNiche uppercase">FAQs</h3>

        <h1 className="text-3xl font-bold uppercase">
          Frequently Asked Questions
        </h1>
        <p className="text-base">
          Answered all frequently asked questions, Still confused? feel free to
          contact us.
        </p>
      </header>
      <div className="mt-12 max-w-4xl mx-auto">
        {nicheFAQs.map((item, idx) => (
          <FaqsCard key={item.question} idx={idx} faqsList={item} />
        ))}
      </div>
    </section>
  );
};

export default NewFaqs;
