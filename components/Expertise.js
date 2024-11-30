import { useState, useEffect } from "react";
import Link from "next/link";
import { Title } from "./common/Title";
import { expertise } from "@/assets/data/dummydata";
import { Card } from "./common/Card";
import WebDesignDevelopment from "./expertise/WebDesignDevelopment";

const Expertise = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <section className="expertise">
      <div className="container">
        <div className="heading-title">
          <Title title="Our expertise" />
          <p>
            At SiliconPixels, we specialize in innovative solutions designed to
            meet your business needs. Our expert team is committed to delivering
            high-quality services that help you stay ahead in a competitive
            market.
          </p>
        </div>
        <WebDesignDevelopment />
      </div>
    </section>
  );
};

export default Expertise;
