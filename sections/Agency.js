import Banner from "@/components/Banner";
import Brand from "@/components/Brand";
import Testimonial from "@/components/Testimonial";
import { Title, TitleSm } from "@/components/common/Title";

const Agency = () => {
  return (
    <>
      <section className="agency bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="ABOUT AGENCY" /> <br />
            <br />
            <Title
              title="The last digital agency you will ever need!"
              className="title-bg"
            />
          </div>

          <div className="content flex1">
            <div className="left w-60 py">
              <TitleSm title="Turning your business ideas into smart digital products " />
              <p className="desc-p">
                With over two decades of experience, we excel in transforming
                bold ideas into smart, user-friendly digital solutions. Whether
                it’s crafting intuitive applications, streamlining processes, or
                creating impactful designs, we are dedicated to helping
                businesses thrive in the digital age. Our focus is on delivering
                results that drive growth, innovation, and long-term success.
              </p>
              <div className="grid-3 ">
                <div className="box">
                  <h1 className="indigo">10+</h1>
                  <h3>Years of experience</h3>
                </div>
                <div className="box">
                  <h1 className="indigo">30+</h1>
                  <h3>Successful cases</h3>
                </div>
                {/* <div className="box">
                  <h1 className="indigo">12+</h1>
                  <h3>Industry awards</h3>
                </div> */}
              </div>
            </div>
            <div className="right w-40 ml">
              <img
                src="/images/s1.jpg"
                alt="Img"
                className="round"
                width="100%"
                height="100%"
              />
            </div>
          </div>

          <div className="content flex">
            <div className="left w-40 py">
              <img
                src="/images/s4.jpg"
                alt="Img"
                className="round"
                width="100%"
                height="100%"
              />
            </div>
            <div className="right w-60 ml">
              <TitleSm title="Our mission" />
              <br />
              <p className="misson-p">
                Our mission is to empower businesses by creating innovative
                digital solutions that inspire growth and success. We strive to
                deliver excellence through cutting-edge technology, creative
                design, and a user-first approach. By building products that are
                as smart as they are impactful, we aim to simplify complexity,
                drive meaningful change, and help our clients achieve their full
                potential in a rapidly evolving digital world.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Brand />
      <Testimonial />
      <Banner />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Agency;
