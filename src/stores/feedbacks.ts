import { create } from "zustand";
import { FeedbackItem } from "../types/types";

const API_URL = "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks";

type FeedbackStore = {
	feedbacks: FeedbackItem[];
	isLoading: boolean;
	fetchFeedbacks: () => Promise<void>;
};

export const useFeedbackStore = create<FeedbackStore>((set) => ({
	feedbacks: [],
	isLoading: false,
	fetchFeedbacks: async () => {
		set({ isLoading: true });
		const response = await fetch(API_URL);
		const data = await response.json();
		set({ feedbacks: data.feedbacks });
		set({ isLoading: false });
	},
}));

