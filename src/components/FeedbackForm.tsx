
import { useState } from "react";

const MAX_CHAR_LENGTH = 150;

export default function FeedbackForm() {
  const [text, setText] = useState("");
  const handleOnTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length > MAX_CHAR_LENGTH) {
      e.target.value = e.target.value.slice(0, MAX_CHAR_LENGTH);
    }
    setText(e.target.value);
  };
  const handleOnSubmit = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
  };

  return (
    <form className="form">
      <textarea
        id="feedback-textarea"
        placeholder="" // empty placeholder to use label instead
        spellCheck="false"
        value={text}
        onChange={handleOnTextChange}
        onSubmit={handleOnSubmit}
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
