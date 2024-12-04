import UpvoteIcon from "./UpvoteIcon";

export default function Footer() {
  return (
    <ol className="feedback-list">
      <li className="feedback">
        <button>
          <span>594</span>
          <UpvoteIcon />
        </button>
        <div>
          <p>B</p>
        </div>

        <div>
          <p>ByteGrad</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <p>4d</p>
      </li>
    </ol>
  );
}
