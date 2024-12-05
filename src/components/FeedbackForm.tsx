import { useState } from "react";

import { useFeedbackStore } from "../stores/feedbacks";
import { FeedbackItem } from "../types/types";

const MAX_CHAR_LENGTH = 150;

export default function FeedbackForm() {
  const [text, setText] = useState("");
  const [showValidIndicator, setShowValidIndicator] = useState(false);
  const [showInvalidIndicator, setShowInvalidIndicator] = useState(false);

  const formClassName = `form ${showValidIndicator ? "form--valid" : ""} ${showInvalidIndicator ? "form--invalid" : ""
    }`

  const handleOnTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length > MAX_CHAR_LENGTH) {
      e.target.value = e.target.value.slice(0, MAX_CHAR_LENGTH);
    }
    setText(e.target.value);
  };
  const postFeedback = useFeedbackStore((state) => state.postFeedback);
  const handleOnSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const company = text.split(" ").find((word) => word.startsWith('#'))

    // basic validation
    if (text.length >= 5 && company) {
      setShowValidIndicator(true);
      setTimeout(() => setShowValidIndicator(false), 2000);
    } else {
      setShowInvalidIndicator(true);
      setTimeout(() => setShowInvalidIndicator(false), 2000);
      return;
    }

    const companyName = company.substring(1);
    const badgeLetter = company.charAt(0);

    setText("");

    const foo: FeedbackItem = {
      id: new Date().getTime(),
      badgeLetter: badgeLetter,
      company: companyName,
      text: text,
      upvoteCount: 0,
      daysAgo: 0,
    }
    postFeedback(foo)
  };

  return (
    <form
      onSubmit={handleOnSubmit}
      className={formClassName}
    >
      <textarea
        id="feedback-textarea"
        placeholder="" // empty placeholder to use label instead
        spellCheck="false"
        value={text}
        onChange={handleOnTextChange}
      />
      <label htmlFor="feedback-textarea">
        Enter your feedback here. Remember to #hastag the company.
      </label>
      <div>
        <p className="u-italic">{MAX_CHAR_LENGTH - text.length}</p>
        <button>
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
}
