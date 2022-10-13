import { BsDot } from "react-icons/bs";

const Slider = ({ articles }) => {
  console.log(articles);
  return (
    <div className="slider">
      <div className="wrapper">
        <div className="marquee">
          {articles.map((item, key) => (
            <p
              onClick={() => (document.location.href = item?.url)}
              key={key}
              className="hover_underline"
            >
               <BsDot />
              {item?.title}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
