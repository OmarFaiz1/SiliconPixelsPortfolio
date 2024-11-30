import React from "react";

import AllServicesPage from "@/components/common/AllServicesPage";

const UiUxDesign = () => {
  const services = [
    {
      title: "User Research & Analysis",
      description:
        "Conducting comprehensive research to understand user behavior and design solutions that cater to their needs.",
      icon: "fas fa-users",
    },
    {
      title: "Wireframing & Prototyping",
      description:
        "Creating wireframes and interactive prototypes to visualize the user journey and refine designs before development.",
      icon: "fas fa-pencil-alt",
    },
    {
      title: "UI Design",
      description:
        "Designing intuitive and aesthetically pleasing interfaces that enhance user engagement.",
      icon: "fas fa-desktop",
    },
    {
      title: "UX Design",
      description:
        "Crafting seamless and enjoyable user experiences by focusing on usability and functionality.",
      icon: "fas fa-lightbulb",
    },
    {
      title: "Usability Testing",
      description:
        "Testing designs with real users to identify pain points and optimize the user experience.",
      icon: "fas fa-check-circle",
    },
    {
      title: "Accessibility Design",
      description:
        "Ensuring designs are inclusive and accessible to users with disabilities, following WCAG guidelines.",
      icon: "fas fa-universal-access",
    },
  ];

  return (
    <AllServicesPage
      imageUrl="https://web-admin.spdigitalagency.com///uploads/Services_in_AI_integration_2_80633b59aa.jpg"
      title="UI/UX Design"
      description="Elevate your digital presence with user-centered and innovative UI/UX design solutions."
      description2="Our UI/UX design services are dedicated to creating intuitive, engaging, and accessible designs for your target audience."
      services={services}
      gridTitle="UI/UX Design Services"
      gridDescription="We specialize in designing interfaces and experiences that resonate with users and align with your business objectives."
      gridDescription2="Our design process ensures that every element serves a purpose, contributing to a seamless and enjoyable user journey."
      gridImageUrl="https://img.freepik.com/free-vector/gradient-ui-ux-elements-background_23-2149056159.jpg"
    />
  );
};

export default UiUxDesign;
