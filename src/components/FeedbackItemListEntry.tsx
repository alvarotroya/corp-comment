import { useState } from "react";
import { FeedbackItem } from "../types/types";
import UpvoteIcon from "./UpvoteIcon";

type FeedbackItemListEntryProps = {
  feedbackItem: FeedbackItem;
  isExpanded: boolean;
  setIsExpanded: (isExpanded: boolean) => void;
}

export default function FeedbackItemListEntry(feedbackItem: FeedbackItem) {
  const { badgeLetter, company, text, upvoteCount, daysAgo } = feedbackItem;
  const [managedUpvoteCount, setUpvoteCount] = useState(upvoteCount);

  const handleOnUpvoteCountChange = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setUpvoteCount(managedUpvoteCount + 1)
    e.currentTarget.disabled = true;
    e.stopPropagation();
  }

  return (
    <>
      <button onClick={handleOnUpvoteCountChange}>
        <span>{managedUpvoteCount}</span>
        <UpvoteIcon />
      </button>
      <div>
        <p>{badgeLetter}</p>
      </div>

      <div>
        <p>{company}</p>
        <p>
          {text}
        </p>
      </div>
      <p>{daysAgo > 0 ? `${daysAgo}d` : 'now'}</p>
    </>
  );
}
