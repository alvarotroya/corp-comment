import FeedbackForm from "./FeedbackForm";
import Logo from "./Logo";
import PageHeading from "./PageHeading";
import Pattern from "./Pattern";

export default function Header() {
  return (
    <header className="header">
      <Pattern />
      <Logo />
      <PageHeading />
      <FeedbackForm />
    </header >
  );
}
