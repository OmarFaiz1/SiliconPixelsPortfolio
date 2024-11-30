import React from "react";
import { Title } from "./common/Title";
import { showcase } from "@/assets/data/dummydata";
import { Card } from "./common/Card";
import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi";

const ShowCase = () => {
  const handleCardClick = (link) => {
    // Open the link in a new tab (no page routing involved)
    window.open(link, "_blank");
  };
  return (
    <>
      <section className="showcase">
        <div className="container">
          <div className="heading-title">
            <Title title="Selected cases" />
          </div>
          <div className="hero-content grid-3 py">
            {showcase.slice(0, 3).map((item) => (
              <div key={item.id} onClick={() => handleCardClick(item.link)}>
                <Card data={item} caption={item.title} />
              </div>
            ))}
          </div>
          <div className="card links ">
            <Link href="/showcase">
              VIEW ALL PROJECTS <HiOutlineArrowRight className="link-icon" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShowCase;
