import Link from "next/link";
import { TitleLogo } from "./Title";
import { BsFacebook } from "react-icons/bs";
import {
  AiFillBehanceCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="grid-4">
            <div className="logo">
              <TitleLogo title="SiliconPixels" caption="" className="logobg" />
              <br />
              <span>
                Questions? Reach us <br /> Monday – Friday from 9 am to 6 pm
              </span>
              <br />
              <br />
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@siliconpix.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>contact@siliconpix.com</h3>
              </a>

              <br />
              <Link href="/contact">
                <button className="button-primary">Contact</button>
              </Link>
            </div>
            <ul>
              <h3>COMPANY</h3>
              <li>
                <Link href="/agency">About agency</Link>
              </li>
              {/* <li>
                <Link href="/team">Our team</Link>
              </li> */}
              <li>
                <Link href="/showcase">Projects</Link>
              </li>
              {/* <li>
                <Link href="/blogs">Blog</Link>
              </li> */}
              {/* <li>
                <Link href="/">Demo design system</Link>
              </li> */}
              {/* <li>
                <Link href="/">Contact</Link>
              </li> */}
            </ul>
            <ul>
              <h3>SERVICES</h3>
              <li>
                <Link href="/">Web Development</Link>
              </li>
              {/* <li>
                <Link href="/">Digital Marketing</Link>
              </li> */}
              <li>
                <Link href="/">E-Commerce</Link>
              </li>
              <li>
                <Link href="/">AI Integration</Link>
              </li>

              <li>
                <Link href="/">SEO</Link>
              </li>

              <li>
                <Link href="/">UI/UX</Link>
              </li>
            </ul>
            {/* <ul>
              <h3>CONNECT</h3>
              <div className="connect">
                <li>
                  <Link href="/">
                    <BsFacebook size={25} />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <AiFillBehanceCircle size={25} />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <AiFillInstagram size={25} />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <AiFillLinkedin size={25} />
                  </Link>
                </li>
              </div>
            </ul> */}
          </div>
          <div className="legal connect py">
            <div className="text">
              <span>© 2023 SILICON PIXELS. ALL RIGHTS RESERVED.</span>
            </div>
            <div className="connect">
              <span>SILICON PIXELS</span>
              <span> &nbsp; | &nbsp; </span>
              <span>TERMS & CONDITIONS</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
