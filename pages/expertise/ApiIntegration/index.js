import React from "react";
import styles from "./style.module.scss";
import AllServicesPage from "@/components/common/AllServicesPage";

const ApiIntegration = () => {
  const services = [
    {
      title: "AI Chatbots for Customer Support",
      description:
        "Integrating AI-powered chatbots to provide real-time support and automate customer interactions on your website.",
      icon: "fas fa-robot",
    },
    {
      title: "Machine Learning Models",
      description:
        "Developing and deploying machine learning models to analyze data and predict trends to improve business decisions.",
      icon: "fas fa-project-diagram",
    },
    {
      title: "Natural Language Processing (NLP)",
      description:
        "Using NLP technology to enable machines to understand and interpret human language, enhancing interactions with software.",
      icon: "fas fa-comments",
    },
    {
      title: "AI-Powered Predictive Analytics",
      description:
        "Leveraging AI to analyze historical data and predict future outcomes, helping businesses make data-driven decisions.",
      icon: "fas fa-chart-line",
    },
    {
      title: "AI-Based Personalization",
      description:
        "Implementing AI algorithms to personalize user experiences and increase engagement by analyzing user behavior and preferences.",
      icon: "fas fa-user-circle",
    },
    {
      title: "Computer Vision Solutions",
      description:
        "Building AI-powered computer vision systems to enable automated image and video recognition for a variety of applications.",
      icon: "fas fa-eye",
    },
  ];

  return (
    <AllServicesPage
      imageUrl="https://web-admin.spdigitalagency.com///uploads/Services_in_AI_integration_2_80633b59aa.jpg"
      title="AI Integration"
      description="Integrate AI technologies to optimize your business processes and create innovative solutions."
      description2="Our AI integration services help automate tasks, predict trends, and improve customer experience using cutting-edge AI tools."
      services={services}
      gridTitle="AI Integration Services"
      gridDescription="We provide seamless AI integration that empowers businesses to use machine learning, automation, and data analysis to improve their operations."
      gridDescription2="Our AI solutions are tailored to your business needs, enhancing productivity and driving innovation in your industry."
      gridImageUrl="https://media.istockphoto.com/id/1452604857/photo/businessman-touching-the-brain-working-of-artificial-intelligence-automation-predictive.jpg?s=612x612&w=0&k=20&c=GkAOxzduJbUKpS2-LX_l6jSKtyhdKlnPMo2ito4xpR4="
    />
  );
};
export default ApiIntegration;
