import { create } from "zustand";
import { FeedbackItem } from "../types/types";

const API_URL = "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks";

type FeedbackStore = {
	feedbacks: FeedbackItem[];
	filteredFeedbacks: FeedbackItem[];
	companies: string[];
	isLoading: boolean;
	fetchFeedbacks: () => Promise<void>;
	postFeedback: (feedback: FeedbackItem) => Promise<void>;
	selectCompany: (company: string) => void;
};

export const useFeedbackStore = create<FeedbackStore>((set, get) => ({
	feedbacks: [],
	filteredFeedbacks: [],
	companies: [],
	isLoading: false,
	selectCompany: (company: string) => {
		const allFeedbacks = get().feedbacks;
		const selectedCompanies = company ? allFeedbacks.filter((feedback) => feedback.company === company) : allFeedbacks
		set({ filteredFeedbacks: selectedCompanies });
	},
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
	postFeedback: async (feedback: FeedbackItem) => {
		set((state) => ({ feedbacks: [feedback, ...state.feedbacks] }));
		set((state) => ({ filteredFeedbacks: [feedback, ...state.filteredFeedbacks] }));
		set((state) => ({ companies: state.companies.includes(feedback.company) ? state.companies : [...state.companies, feedback.company] }));
		await fetch(API_URL, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(feedback),
		});
	},
}));

