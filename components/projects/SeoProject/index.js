import React from "react";
import styles from "./style.module.scss";

const SeoProject = ({
  title,
  description,
  link,
  rating,
  imageGrid,
  imageDescription,
  result,
}) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.gridSection}>
          {/* First Grid Box */}
          <div className={styles.firstBox}>
            <h3 className={styles.websiteName}>{title}</h3>
            <p className={styles.summary}>{description}</p>
            <a
              href={link}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Website
            </a>
            <div className={styles.rating}>
              <div className={styles.ratingProgress}>
                <div
                  className={styles.ratingBar}
                  style={{ width: `${rating}%` }}
                />
              </div>
              <span className={styles.ratingValue}>{rating}%</span>
            </div>
          </div>

          {/* Second Grid Box (Image of Grid) */}
          <div className={styles.secondBox}>
            <div className={styles.imageContainer}>
              <h4 className={styles.analyticsHeading}>Analytics</h4>
              <img
                src={imageGrid}
                alt="SEO Grid"
                className={styles.imageGrid}
              />
            </div>
          </div>

          {/* Third Grid Box (Description Image) */}
          <div className={styles.thirdBox}>
            <div className={styles.imageContainer}>
              <h4 className={styles.keywordsHeading}>Keywords</h4>
              <img
                src={imageDescription}
                alt="SEO Description"
                className={styles.imageDesc}
              />
            </div>
          </div>
        </div>

        {/* Below Line for Results */}
        <div className={styles.resultLine}>
          <p>Here is the result for the project...</p>
          <p>{result}</p>
        </div>
      </div>
      <hr
        style={{
          border: "none",
          height: "2px",
          backgroundColor: "#fff",
          margin: "2rem 0",
          width: "100%",
        }}
      />
    </>
  );
};

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

// const SeoProjectsList = () => {
//   return (
//     <div>
//       {seoProjectsData.map((project, index) => (
//         <SeoProject
//           key={index}
//           title={project.title}
//           description={project.description}
//           link={project.link}
//           rating={project.rating}
//           imageGrid={project.imageGrid}
//           imageDescription={project.imageDescription}
//           result={project.result}
//         />
//       ))}
//     </div>
//   );
// };

export default SeoProject;
