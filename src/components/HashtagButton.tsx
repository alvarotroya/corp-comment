import { useState } from "react";
import { useFeedbackStore } from "../stores/feedbacks";
import { isElementOfType } from "react-dom/test-utils";


export default function HashtagButton({ company }: { company: string }) {
  const [isSelected, setIsSelected] = useState(false);
  const selectCompany = useFeedbackStore((state) => state.selectCompany);
  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setIsSelected(!isSelected);
    selectCompany(!isSelected ? company : '');
  };

  return (
    <button onClick={handleOnClick}>
      #{company}
    </button>
  );
}

