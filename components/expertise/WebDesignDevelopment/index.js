import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "./style.module.scss";
import { showcase } from "../../../assets/data/dummydata";
// import {webDev,seo,webDesign,AI,uiUX} from '../../../public/images'

const WebDesignDevelopment = () => {
  const [selectedService, setSelectedService] = useState(
    "AI Integration Services"
  );
  const [animationKey, setAnimationKey] = useState(0);

  const router = useRouter();

  const serviceDetails = {
    "Web Development": {
      description:
        "We offer modern web development solutions tailored to your needs.",
      image:
        "https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg",
    },
    SEO: {
      description: "Boost your online presence with our expert SEO services.",
      image:
        "https://img.freepik.com/free-vector/seo-analytics-team-concept-illustration_114360-9205.jpg?semt=ais_hybrid",
    },
    // Shopify: {
    //   description: "Set up and optimize your Shopify store with ease.",
    //   image:
    //     "https://images.pexels.com/photos/633042/pexels-photo-633042.jpeg?cs=srgb&dl=pexels-jessica-lewis-633042.jpg&fm=jpg",
    // },
    ChatBot: {
      description:
        "Craft visually appealing and user-friendly designs for your website.",
      image:
        "https://t3.ftcdn.net/jpg/03/23/83/00/360_F_323830067_Qd0gNLxdF4bu7PfsPpkJtVr0dBtnGKpX.jpg",
    },
    // "Office Automation": {
    //   description: "Streamline office processes with our automation solutions.",
    //   image:
    //     "https://images.pexels.com/photos/669614/pexels-photo-669614.jpeg?cs=srgb&dl=pexels-pixabay-669614.jpg&fm=jpg",
    // },
    "UI/UX Design": {
      description: "Enhance user experience with our creative UI/UX designs.",
      image:
        "https://img.freepik.com/free-vector/gradient-ui-ux-elements-background_23-2149056159.jpg",
    },
    // "Mobile Apps": {
    //   description: "Develop robust and scalable mobile applications.",
    //   image:
    //     "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?cs=srgb&dl=pexels-pixabay-1181676.jpg&fm=jpg",
    // },
    "AI Integration Services": {
      description:
        "An AI is a software that acts as a communication medium between two or more applications. Our AI integration services allow users to customize their services according to their needs.",
      image:
        "https://d1krbhyfejrtpz.cloudfront.net/blog/wp-content/uploads/2024/09/13180012/AI-Integration-in-Business-%E2%80%93-Benefits-Use-Cases-and-Process.jpg",
    },
  };

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setAnimationKey((prevKey) => prevKey + 1); // Trigger the animation
  };

  const handleReadMoreClick = (serviceName) => {
    if (serviceName === "Web Development") {
      router.push("/expertise/WebDevelopment");
    } else if (serviceName === "AI Integration Services") {
      router.push("/expertise/ApiIntegration");
    } else if (serviceName === "SEO") {
      router.push("/expertise/SEO");
    } else if (serviceName === "UI/UX Design") {
      router.push("/expertise/uiUX");
    } else if (serviceName === "ChatBot") {
      router.push("/expertise/ChatBot");
    } else {
      // For other services, do nothing for now
      console.log("No navigation for this service.");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {/* Left Section */}
        <div className={styles.leftSection}>
          <h2 className="text-lg font-bold mb-6">Services</h2>
          <ul className={styles.servicesList}>
            {Object.keys(serviceDetails).map((service) => (
              <li
                key={service}
                className={`${styles.serviceItem} ${
                  selectedService === service ? styles.active : ""
                }`}
                onClick={() => handleServiceClick(service)}
              >
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section */}
        <div
          className={`${styles.rightSection} ${
            styles[`animate${animationKey}`]
          }`}
        >
          <div className={styles.imageContainer}>
            <img
              src={serviceDetails[selectedService].image}
              alt={`${selectedService} Illustration`}
              className={styles.serviceImage}
            />
          </div>
          <h1 className={styles.serviceTitle}>{selectedService}</h1>
          <p className={styles.serviceDescription}>
            {serviceDetails[selectedService].description}
          </p>

          <button
            className={styles.readMoreButton}
            onClick={() => handleReadMoreClick(selectedService)}
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default WebDesignDevelopment;
