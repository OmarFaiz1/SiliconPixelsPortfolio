import React from "react";

import AllServicesPage from "@/components/common/AllServicesPage";

const ChatbotServices = () => {
  const services = [
    {
      title: "Customer Support Chatbots",
      description:
        "Implement AI-driven chatbots to provide 24/7 support and handle common customer queries efficiently.",
      icon: "fas fa-headset",
    },
    {
      title: "E-commerce Chatbots",
      description:
        "Enhance shopping experiences by recommending products, processing orders, and resolving customer concerns in real time.",
      icon: "fas fa-shopping-bag",
    },
    {
      title: "Lead Generation Chatbots",
      description:
        "Automate lead generation and nurture potential customers by engaging them with personalized conversations.",
      icon: "fas fa-user-plus",
    },
    {
      title: "Educational Chatbots",
      description:
        "Create chatbots to assist in learning, answer queries, and provide personalized educational content to users.",
      icon: "fas fa-book-reader",
    },
    {
      title: "Healthcare Chatbots",
      description:
        "Develop chatbots for appointment scheduling, health-related FAQs, and patient engagement, ensuring timely assistance.",
      icon: "fas fa-heartbeat",
    },
    {
      title: "Multilingual Chatbots",
      description:
        "Build chatbots capable of communicating in multiple languages to cater to a diverse global audience.",
      icon: "fas fa-globe",
    },
  ];

  return (
    <AllServicesPage
      imageUrl="https://web-admin.spdigitalagency.com///uploads/Services_in_AI_integration_2_80633b59aa.jpg"
      title="Chatbot Development"
      description="Revolutionize interactions with AI-powered chatbots tailored to your business needs."
      description2="Our chatbot development services provide seamless automation and personalized conversations to enhance user engagement and efficiency."
      services={services}
      gridTitle="Chatbot Services"
      gridDescription="Our expert team creates intelligent chatbots designed to streamline customer interactions and drive operational efficiency."
      gridDescription2="From customer support to lead generation, our chatbot solutions are versatile and customizable for any industry."
      gridImageUrl="https://www.shutterstock.com/image-vector/3d-artificial-intelligence-digital-brain-600nw-2288372371.jpg"
    />
  );
};

export default ChatbotServices;
