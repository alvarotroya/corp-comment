import { useEffect, useState } from "react";
import FeedbackItemListEntry from "./FeedbackItemListEntry";
import { FeedbackItem } from "../types/types";

const API_URL = "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks";

export default function FeedbackList() {
  const [feedbackItems, setFeedbackItems] = useState<FeedbackItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchFeedback = async () => {
      // I intentionally left out the error handling for brevity, we should use react-query for this
      const response = await fetch(API_URL);
      const data = await response.json();
      setFeedbackItems(data.feedbacks);
      setIsLoading(false);
    };
    fetchFeedback();
  }, []);

  return (
    <>
      {isLoading && <div className="spinner" aria-hidden="true" />}
      <ol className="feedback-list">
        {feedbackItems.map((item) => <FeedbackItemListEntry {...item} />)}
      </ol>
    </>
  );
}
