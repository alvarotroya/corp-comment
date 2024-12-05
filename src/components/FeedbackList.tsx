import { useEffect, useState } from "react";
import FeedbackItemListEntry from "./FeedbackItemListEntry";
import { FeedbackItem } from "../types/types";

const API_URL = "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks";

export default function FeedbackList() {
  const [feedbackItems, setFeedbackItems] = useState<FeedbackItem[]>([]);

  useEffect(() => {
    const fetchFeedback = async () => {
      // I intentionally left out the error handling for brevity, we should use react-query for this
      const response = await fetch(API_URL);
      const data = await response.json();
      setFeedbackItems(data.feedbacks);
    };
    fetchFeedback();
  }, []);

  return (
    <ol className="feedback-list">
      {feedbackItems.map((item) => <FeedbackItemListEntry {...item} />)}
    </ol>
  );
}
