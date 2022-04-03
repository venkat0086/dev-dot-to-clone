import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FcHome,
  FcReading,
  FcTodoList,
  FcVideoCall,
  FcAbout,
  FcIdea,
  FcShop,
  FcLike,
  FcBriefcase,
  FcDisclaimer,
  FcBusinessContact,
} from "react-icons/fc";
import { AiFillAudio } from "react-icons/ai";
import { FaTags, FaDev } from "react-icons/fa";
import { IoLogoTwitter, IoLogoFacebook, IoLogoGithub } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { GrFormClose } from "react-icons/gr";

export const Hamburger = (props) => {
  const [more, setmore] = useState(false);
  const toggle = () => {
    setmore(!more);
  };

  return (
    <>
      {props.burgerMenu && (
        <div className="hamburger">
          <div className="hamburger__content">
            <header>
              <h2>DEV Community</h2>
              <button onClick={() => props.closeMenu()}>
                <GrFormClose />
              </button>
            </header>

            <div className="hamburger__content__items">
              <nav className="leftBar__menu">
                <ul>
                  <li>
                    <a href="/">
                      <i>
                        <FcHome />
                      </i>
                      Home
                    </a>
                  </li>

                  <li>
                    <Link to="/about">
                      <i>
                        <FaDev />
                      </i>
                      About
                    </Link>
                  </li>

                  <li>
                    <Link to="/contact">
                      <i>
                        <FcBusinessContact />
                      </i>
                      Contact
                    </Link>
                  </li>

                  <li>
                    <Link to="/videos">
                      <i>
                        <FcVideoCall />
                      </i>
                      Videos
                    </Link>
                  </li>

                  <li>
                    <a href="/">
                      <i>
                        <AiFillAudio />
                      </i>
                      Podcasts
                    </a>
                  </li>

                  <li>
                    <a href="/">
                      <i>
                        <FaTags />
                      </i>
                      Tags
                    </a>
                  </li>

                  <li className={more ? "more hidden" : "more"}>
                    <i></i>
                    <a href="/#" onClick={toggle}>
                      More...
                    </a>
                  </li>

                  <div className={more ? "list" : "list hidden"}>
                    <li>
                      <a href="/">
                        <i>
                          <FcAbout />
                        </i>
                        Code of Conduct
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i>
                          <FcIdea />
                        </i>
                        FAQ
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i>
                          <FcShop />
                        </i>
                        DEV Shop
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i>
                          <FcLike />
                        </i>
                        Sponsers
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i>
                          <FcReading />
                        </i>
                        Reading List
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i>
                          <FcTodoList />
                        </i>
                        list
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i>
                          <FcBriefcase />
                        </i>
                        Privacy Policy
                      </a>
                    </li>

                    <li>
                      <a href="/">
                        <i>
                          <FcDisclaimer />
                        </i>
                        Terms of use
                      </a>
                    </li>
                  </div>
                </ul>
              </nav>
              <div
                className={more ? "leftBar__social" : "leftBar__social hidden"}
              >
                <a
                  href="https://twitter.com/thepracticaldev"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <i>
                    <IoLogoTwitter />
                  </i>
                </a>
                <a
                  href="https://www.facebook.com/thepracticaldev"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <i>
                    <IoLogoFacebook />
                  </i>
                </a>
                <a
                  href="https://github.com/thepracticaldev"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <i>
                    <IoLogoGithub />
                  </i>
                </a>
                <a
                  href="https://www.instagram.com/thepracticaldev/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <i>
                    <RiInstagramFill />
                  </i>
                </a>
              </div>
            </div>
          </div>

          <div className="hamburger overlay"></div>
        </div>
      )}
    </>
  );
};
