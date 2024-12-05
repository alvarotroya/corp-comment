import { create } from "zustand";
import { FeedbackItem } from "../types/types";

const API_URL = "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks";

type FeedbackStore = {
	feedbacks: FeedbackItem[];
	filteredFeedbacks: FeedbackItem[];
	companies: string[];
	isLoading: boolean;
	fetchFeedbacks: () => Promise<void>;
	selectCompany: (company: string) => void;
};

export const useFeedbackStore = create<FeedbackStore>((set, get) => ({
	feedbacks: [],
	filteredFeedbacks: [],
	companies: [],
	isLoading: false,
	fetchFeedbacks: async () => {
		set({ isLoading: true });
		const response = await fetch(API_URL);
		const data = (await response.json()) as { feedbacks: FeedbackItem[] };
		set({ feedbacks: data.feedbacks });
		set({ filteredFeedbacks: data.feedbacks });
		set({
			companies: [...new Set(data.feedbacks.map((feedback: FeedbackItem) => feedback.company))],
		});

		set({ isLoading: false });
	},
	selectCompany: (company: string) => {
		const allFeedbacks = get().feedbacks;
		const selectedCompanies = company ? allFeedbacks.filter((feedback) => feedback.company === company) : allFeedbacks
		set({ filteredFeedbacks: selectedCompanies });
	},
}));

