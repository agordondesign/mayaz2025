import { useState, useRef, useEffect } from "react";

type Props = {
  text: string;
  maxLength?: number;
};

const ReadMoreText = ({ text, maxLength = 150 }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showReadMoreButton, setShowReadMoreButton] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (textRef.current) {
      // Check if the content overflows its container
      if (textRef.current.scrollHeight > textRef.current.clientHeight) {
        setShowReadMoreButton(true);
      } else {
        setShowReadMoreButton(false);
      }
    }
  }, [text]); // Re-run if text changes

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const truncatedText = text.substring(0, maxLength);

  return (
    <div>
      <p
        ref={textRef}
        style={
          !isExpanded
            ? {
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
              }
            : {}
        }
      >
        {isExpanded ? text : truncatedText}
        {!isExpanded && showReadMoreButton && "..."}
      </p>
      {showReadMoreButton && (
        <button
          onClick={toggleExpanded}
          style={{
            background: "none",
            border: "none",
            color: "blue",
            cursor: "pointer",
          }}
        >
          {isExpanded ? "Read less" : "Read more"}
        </button>
      )}
    </div>
  );
};

export default ReadMoreText;
