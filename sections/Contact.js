import React, { useState } from "react";
import { Title, TitleSm } from "@/components/common/Title";
import {
  AiFillBehanceCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import { FiHeadphones, FiHelpCircle } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    timeframe: "",
    projectDetails: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_kdgiefv",
        "template_uvqtpvt",
        {
          name: formData.name,
          email: formData.email,
          budget: formData.budget,
          timeframe: formData.timeframe,
          projectDetails: formData.projectDetails,
        },
        "KzglbTgMNBgtsEi2g"
      )
      .then(
        (result) => {
          toast.success("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            budget: "",
            timeframe: "",
            projectDetails: "",
          });
        },
        (error) => {
          toast.error("Failed to send the message. Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <>
      <section className="contact bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="CONTACT" /> <br />
            <br />
            <Title title="Let's start right now!" className="title-bg" />
          </div>
          <div className="content py flex1">
            <div className="left w-30">
              <div className="contact-details">
                {/* <div className="box">
                  <FiHeadphones size={30} className="icons" />
                  <h3>1-001-234-5678</h3>
                  <span>Call us: Mon - Fri 9:00 - 19:00</span>
                </div>
                <div className="box">
                  <IoLocationOutline size={30} className="icons" />
                  <h3>New York</h3>
                  <span>
                    990 Madison Ave, Midtown Manhattan, 2th Floor, NY 10022
                  </span>
                </div> */}
                <div className="box">
                  <FiHelpCircle size={30} className="icons" />
                  <a href="mailto:contact@siliconpix.com">
                    <h3> contact@siliconpix.com</h3>
                  </a>
                  {/* <h3>info@dream-theme.com</h3> */}
                  <span>Drop us a line anytime!</span>
                </div>
                {/* <div className="box">
                  <BiUserCircle size={30} className="icons" />
                  <h3>hr@dream-theme.com</h3>
                  <span>Career at Seven Creative</span>
                </div> */}
              </div>
              {/* <ul>
                <li className="icon">
                  <BsFacebook size={25} />
                </li>
                <li className="icon">
                  <AiFillBehanceCircle size={25} />
                </li>
                <li className="icon">
                  <AiFillInstagram size={25} />
                </li>
                <li className="icon">
                  <AiFillLinkedin size={25} />
                </li>
              </ul> */}
            </div>
            <div className="right w-70">
              <TitleSm title="Make an online enquiry" />
              <p className="desc-p">
                Got questions? Ideas? Fill out the form below to get our
                proposal.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="grid-2">
                  <div className="inputs">
                    <span>Name</span>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="inputs">
                    <span>Email</span>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="grid-2">
                  <div className="inputs">
                    <span>Your Budget</span>
                    <input
                      type="text"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="inputs">
                    <span>Timeframe</span>
                    <input
                      type="text"
                      name="timeframe"
                      value={formData.timeframe}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="inputs">
                  <span>TELL US A BIT ABOUT YOUR PROJECT*</span>
                  <textarea
                    name="projectDetails"
                    cols="30"
                    rows="10"
                    value={formData.projectDetails}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="button-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Toast notifications container */}
      <ToastContainer />
    </>
  );
};

export default Contact;
