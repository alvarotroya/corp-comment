import { useFeedbackStore } from "../stores/feedbacks";


export default function HashtagButton({ company }: { company: string }) {
  const selectCompany = useFeedbackStore((state) => state.selectCompany);

  return (
    <li key={company}>
      <button onClick={() => selectCompany(company)}>
        #{company}
      </button>
    </li >
  );
}

