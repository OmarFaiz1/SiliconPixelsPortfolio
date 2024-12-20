import Link from "next/link";
import { TitleLogo } from "./Title";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { RiMenu4Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [activeLink, setActiveLink] = useState("");
  const [open, setOpen] = useState(false);

  const router = useRouter();
  useEffect(() => {
    setActiveLink(router.pathname);
  }, [router.pathname]);

  return (
    <>
      <header>
        <div className="container">
          <div className="logo">
            <Link href="/">
              <TitleLogo title="SiliconPixels" caption="" className="logomin" />
            </Link>
          </div>
          <nav className={open ? "openMenu" : "closeMenu"}>
            <Link href="/" className={activeLink === "/" ? "activeLink" : ""}>
              Home
            </Link>
            <Link
              href="/agency"
              className={activeLink === "/agency" ? "activeLink" : ""}
            >
              Agency
            </Link>
            {/* <Link
              href="/team"
              className={activeLink === "/team" ? "activeLink" : ""}
            >
              Team
            </Link> */}
            <Link
              href="/services"
              className={activeLink === "/services" ? "activeLink" : ""}
            >
              Services
            </Link>
            <Link
              href="/showcase"
              className={activeLink === "/showcase" ? "activeLink" : ""}
            >
              Projects
            </Link>
            {/* <Link
              href="/blogs"
              className={activeLink === "/blogs" ? "activeLink" : ""}
            >
              Blog
            </Link> */}
            <Link
              href="/contact"
              className={activeLink === "/contact" ? "activeLink" : ""}
            >
              <button className="button-primary">contact</button>
            </Link>
            {/* <button className="button-primary">Book a Consultation</button> */}
          </nav>
          <button onClick={() => setOpen(!open)}>
            {open ? <AiOutlineClose size={25} /> : <RiMenu4Line size={25} />}
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
