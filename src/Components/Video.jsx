import "../Styles/Video.css";
import { useEffect, useState } from "react";

export const VideoSection = () => {
  const [user, setUser] = useState([]);

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
    <div className="MainDiv_Videos">
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
  );
};
