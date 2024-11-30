import React from "react";
import styles from "./style.module.scss";
import AllServicesPage from "@/components/common/AllServicesPage";
import SeoProject from "@/components/projects/SeoProject";

const SEOPage = () => {
  const seoProjectsData = [
    {
      title: "BuildersRisk.net",
      description: `
          Birite.com.au is an e-commerce business website based in Australia. We have been working with them since March 2019. They are now ranked for more than 25,000 keywords, and at least 1,500 of them are on Google’s first page. The website had numerous on-page SEO issues that we successfully resolved, helping them rank quickly.
        `,
      link: "https://buildersrisk.net/",
      rating: 80,
      imageGrid: "/images/SEO_Project1_pic.png",
      imageDescription: "/images/SEO_Project1_description_pic.png",
      result:
        "After resolving on-page SEO issues, BuildersRisk.net achieved better keyword rankings, with 1,500+ keywords appearing on the first page of Google.",
    },
    {
      title: "Conniptiongin.com",
      description: `
          SEO Focus Areas:
          - **On-page Optimization**: Content restructuring and keyword optimization for targeted phrases.
          - **Off-page Optimization**: Link-building efforts aimed at high-quality, relevant sites.
          - **Technical SEO**: Conducted audits to identify and fix issues such as broken links and crawl errors.
        `,
      link: "https://conniptiongin.com/",
      rating: 75,
      imageGrid: "/images/SEO_Project2_pic.png",
      imageDescription: "/images/SEO_Project2_description_pic.png",
      result:
        "By focusing on on-page optimization, link-building, and technical audits, Conniptiongin.com saw significant improvements in its SEO ranking and user experience.",
    },
    {
      title: "DurhamDistillery.com",
      description: `
          SEO Focus Areas:
          - **On-page Optimization**: Targeted keywords related to the brand and industry.
          - **Off-page Optimization**: Strengthened backlink profile by collaborating with relevant publications.
          - **Technical SEO**: Addressed indexing issues and optimized for better search engine crawling.
        `,
      link: "https://durhamdistillery.com/",
      rating: 90,
      imageGrid: "/images/SEO_Project3_pic.png",
      imageDescription: "/images/SEO_Project3_description_pic.png",
      result:
        "DurhamDistillery.com benefited from strategic on-page optimizations, strengthened backlinks, and improved technical SEO, leading to better search engine rankings and increased organic traffic.",
    },
  ];

  const services = [
    {
      title: "On-Page SEO Optimization",
      description:
        "Optimizing website elements like titles, headers, and content to improve search engine rankings and visibility.",
      icon: "fas fa-search",
    },
    {
      title: "Off-Page SEO Strategy",
      description:
        "Building backlinks and improving domain authority through content marketing, guest posts, and social media.",
      icon: "fas fa-link",
    },
    {
      title: "Keyword Research & Strategy",
      description:
        "Conducting detailed keyword research to identify high-performing keywords to drive targeted traffic to your site.",
      icon: "fas fa-key",
    },
    {
      title: "Local SEO Services",
      description:
        "Optimizing your website for local searches to increase visibility in local search results and drive local customers.",
      icon: "fas fa-map-marker-alt",
    },
    {
      title: "SEO Audit & Analysis",
      description:
        "Providing a detailed audit of your website’s SEO performance and identifying areas for improvement.",
      icon: "fas fa-search-dollar",
    },
    {
      title: "SEO Content Creation",
      description:
        "Developing high-quality, SEO-friendly content that helps attract organic traffic and boosts search engine rankings.",
      icon: "fas fa-pen",
    },
  ];

  return (
    <>
      <AllServicesPage
        imageUrl="https://web-admin.spdigitalagency.com///uploads/Services_in_AI_integration_2_80633b59aa.jpg"
        title="SEO Optimization"
        description="Improve your website's visibility on search engines through effective SEO strategies."
        description2="We offer on-page and off-page SEO services that help your website rank higher and attract more organic traffic."
        services={services}
        gridTitle="SEO Optimization Services"
        gridDescription="Our SEO optimization services are designed to boost your website’s search engine ranking through targeted strategies and keyword optimization."
        gridDescription2="We help you grow your organic traffic and achieve long-term results with sustainable SEO practices."
        gridImageUrl="https://img.freepik.com/free-vector/seo-analytics-team-concept-illustration_114360-9205.jpg"
      />
      <hr
        style={{
          border: "none",
          height: "2px",
          backgroundColor: "#fff", // White color for better visibility on dark background
          margin: "2rem 0", // Adds space above and below the line
          width: "100%", // Ensures it spans the full width
        }}
      />
      {seoProjectsData.map((project, index) => (
        <SeoProject
          key={index}
          title={project.title}
          description={project.description}
          link={project.link}
          rating={project.rating}
          imageGrid={project.imageGrid}
          imageDescription={project.imageDescription}
          result={project.result}
        />
      ))}

      {/* <a
        href={project.link}
        style={{
          display: "block",
          color: "#4CAF50", // Link color for visibility
          textAlign: "center",
          marginTop: "1rem",
          textDecoration: "none",
          fontWeight: "bold",
        }}
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit {project.title}
      </a> */}
    </>
  );
};

export default SEOPage;
