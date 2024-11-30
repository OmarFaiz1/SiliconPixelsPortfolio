import { home } from "@/assets/data/dummydata";
import Banner from "@/components/Banner";
import Expertise from "@/components/Expertise";
import ShowCase from "@/components/ShowCase";
import Testimonial from "@/components/Testimonial";
import { Title, TitleLogo, TitleSm } from "@/components/common/Title";
import {  Brand } from "@/components/router";
import React from "react";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <TitleLogo title="SiliconPixels" caption="" className="logobg" />
          <h1 className="hero-title">PIXELS THAT BUILD, AI THAT LEARNS</h1>

          <div className="sub-heading">
            <TitleSm title="WEBSITES" /> <span>.</span>
            <TitleSm title="SEO" /> <span>.</span>
            <TitleSm title="AI INTEGRATION" />
          </div>
        </div>
      </section>
      <section className="hero-sec">
        <div className="container">
          <div className="heading-title">
            <Title title="The last digital agency you ll ever need" />
            <p>
              At SiliconPixels, we provide cutting-edge digital solutions
              designed to transform your brand. From creative design to seamless
              user experiences, we help businesses grow with innovative
              strategies and results-driven technology.
            </p>
          </div>
          <div className="hero-content grid-4">
            {home.map((item, i) => (
              <div className="box" key={i}>
                <span className="green">{item.icon}</span> <br />
                <br />
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Expertise />
      <Banner />
      <ShowCase />
      <Testimonial />
      <Brand />

      <div className="text-center">
        {/* <Title title="Latest news & articles" /> */}
      </div>
      {/* <BlogCard /> */}
    </>
  );
};

export default Hero;
