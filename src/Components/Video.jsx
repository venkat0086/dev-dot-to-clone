import "../Styles/Video.css";
import { useEffect, useState } from "react";
import Navigation from "./Navigate";
import { Hamburger } from "./Hamburger";
import Footer from "./Footer";

export const VideoSection = () => {
  const [user, setUser] = useState([]);

  const [mobileMenu, setmobileMenu] = useState(false);

  const toggle = () => {
    setmobileMenu(!mobileMenu);
  };

  const fetchdata = () => {
    fetch("https://dev.to/api/videos")
      .then((res) => {
        return res.json();
        // console.log(res)
      })
      .then((data) => {
        setUser(data);
        console.log(data);
      });
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
      <Navigation openMenu={toggle} />
      <div className="MainDiv_Videos">
        <Hamburger burgerMenu={mobileMenu} closeMenu={toggle} />
        {user.map((data) => (
          <div className="insideDiv_Videos" key={data.id}>
            <img src={data.cloudinary_video_url} alt="" />
            {/* <iframe src={data.video_source_url} frameborder="0"></iframe> */}

            <div className="insideDiv_Videos_Durantion">
              <p>{data.video_duration_in_minutes}</p>
            </div>

            <p>{data.title}</p>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};
