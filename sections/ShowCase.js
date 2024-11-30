import { showcase } from "@/assets/data/dummydata";
import { Card } from "@/components/common/Card";
import { Title, TitleSm } from "@/components/common/Title";
import React from "react";

const ShowCase = () => {
  const handleCardClick = (link) => {
    // Open the link in a new tab (no page routing involved)
    window.open(link, "_blank");
  };

  return (
    <>
      <section className="showcase bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="SHOWCASE" /> <br />
            <br />
            <Title
              title="Fresh ideas. Bold design. Smart realization."
              className="title-bg"
            />
          </div>
          <br />
          <br />
          <div className="grid-3">
            {showcase.map((item) => (
              <div key={item.id} onClick={() => handleCardClick(item.link)}>
                <Card data={item} caption={item.title} />
              </div>
            ))}
          </div>
          {/* <div className="py btn">
            <button className="secondary-button">View More</button>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default ShowCase;
