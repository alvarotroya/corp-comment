import { useFeedbackStore } from "../stores/feedbacks";
import HashtagButton from "./HashtagButton";


export default function HashtagList() {
  const companies = useFeedbackStore((state) => state.companies);

  return (
    <ul className="hashtags">
      {
        companies.map((company) => (
          <li key={company}>
            <HashtagButton company={company} />
          </li >
        ))
      };
    </ul>
  );
}

