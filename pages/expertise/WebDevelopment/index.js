import React from "react";
import styles from "./style.module.scss";
import ServicesInGrid from "@/components/common/ServicesInGrid";
import ShowServices from "@/components/common/showServices";
import AllServicesPage from "@/components/common/AllServicesPage";
import { showcase } from "@/assets/data/dummydata";
import { Card } from "@/components/common/Card";

const WebDevelopment = () => {
  const handleCardClick = (link) => {
    // Open the link in a new tab (no page routing involved)
    window.open(link, "_blank");
  };
  const services = [
    {
      title: "Enterprise Applications",
      description:
        "Designing and developing software solutions for large organizations.",
      icon: "fas fa-cogs",
    },
    {
      title: "SaaS Applications",
      description:
        "Developing feature-rich SaaS solutions that can be accessed remotely.",
      icon: "fas fa-cloud",
    },
    {
      title: "HIPAA Compliant Applications",
      description:
        "Building software that complies with HIPAA regulations for secure medical data.",
      icon: "fas fa-file-medical",
    },
    {
      title: "E-Commerce Applications",
      description:
        "Crafting e-commerce platforms with features like shopping carts and payment gateways.",
      icon: "fas fa-shopping-cart",
    },
    {
      title: "Third-Party Applications",
      description:
        "Integrating custom software with third-party APIs and systems.",
      icon: "fas fa-plug",
    },
    {
      title: "Custom ERP Systems",
      description:
        "Designing ERP systems to manage various business processes.",
      icon: "fas fa-warehouse",
    },
  ];

  return (
    <>
      {" "}
      <AllServicesPage
        imageUrl="https://web-admin.spdigitalagency.com///uploads/Services_in_AI_integration_2_80633b59aa.jpg"
        title="Web Design"
        description="Your business needs a visually appealing and user-friendly website. We offer custom web design services that cater to your brand and target audience."
        description2="Our team ensures a seamless user experience, with clean designs that engage and convert visitors into loyal customers."
        services={services}
        gridTitle="Revolutionize Your Business with Custom Application Development Services"
        gridDescription="SiliconPixels offers custom software development and application solutions tailored to meet your unique business needs. Our team builds, maintains, and deploys customized software for specific user requirements."
        gridDescription2="We focus on adapting solutions that fit narrowly defined requirements, enabling us to expand our services quickly and effectively. Our software customization services are designed to meet your unique business challenges."
        gridImageUrl="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg"
      />
      <h1>Recent Projects</h1>
      <div className="hero-content grid-3 py">
        {showcase.slice(0, 3).map((item) => (
          <div key={item.id} onClick={() => handleCardClick(item.link)}>
            <Card data={item} caption={item.title} />
          </div>
        ))}
      </div>
    </>
  );
};

export default WebDevelopment;
