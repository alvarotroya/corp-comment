import { useEffect } from "react";
import FeedbackItemListEntry from "./FeedbackItemListEntry";
import { useFeedbackStore } from "../stores/feedbacks";

export default function FeedbackList() {
  const feedbackItems = useFeedbackStore((state) => state.filteredFeedbacks);
  const isLoading = useFeedbackStore((state) => state.isLoading);
  const fetchFeedbackItems = useFeedbackStore((state) => state.fetchFeedbacks);

  useEffect(() => {
    fetchFeedbackItems();
  }, []);

  return (
    <>
      {isLoading && <div className="spinner" aria-hidden="true" />}
      <ol className="feedback-list">
        {feedbackItems.map((item) => (
          <li key={item.id} className="feedback">
            <FeedbackItemListEntry {...item} />
          </li >
        ))}
      </ol >
    </>
  );
}
