import { TitleSm } from "./Title"; // Assuming TitleSm is your component for titles
import { HiOutlineArrowRight } from "react-icons/hi";

export const Card = ({ data, caption, show, path, onLearnMore }) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={data.cover} alt={data.title} />
      </div>
      <div className="card-details">
        {/* Display title as text, no link */}
        <TitleSm title={data.title} />

        {/* Optional button for learning more */}
        {/* {caption && (
          <button
            onClick={() => onLearnMore(data)}
            className="learn-more-button"
          >
            {caption} <HiOutlineArrowRight className="link-icon" />
          </button>
        )} */}

        <div className="flex">
          <span>{data.category}</span>{" "}
          {data.date && <span> / {data.date}</span>}
        </div>

        {show && (
          <ul>
            {data.desc.map((text, i) => (
              <li key={i}> - {text.text}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
