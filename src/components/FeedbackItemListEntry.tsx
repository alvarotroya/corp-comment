import { FeedbackItem } from "../types/types";
import UpvoteIcon from "./UpvoteIcon";


export default function FeedbackItemListEntry(feedbackItem: FeedbackItem) {
  const { badgeLetter, company, text, upvoteCount, daysAgo } = feedbackItem;
  return (
    <li className="feedback">
      <button>
        <span>{upvoteCount}</span>
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
    </li>
  );
}
