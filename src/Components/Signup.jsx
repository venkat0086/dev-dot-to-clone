import Navigation from "./Navigate";
import "../Styles/Signup.css";
import { RiAppleFill } from "react-icons/ri";
import { ImGoogle2 } from "react-icons/im";
import { AiOutlineGithub } from "react-icons/ai";
import { GrTwitter } from "react-icons/gr";
import Footer from "./Footer";
import { useState } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import { Hamburger } from "./Hamburger";

const Signup = () => {
  const [details, setDetails] = useState({ email: "", password: "" });
  const [swtch, setSwtch] = useState(false);

  const [mobileMenu, setmobileMenu] = useState(false);

  const toggle = () => {
    setmobileMenu(!mobileMenu);
  };

  //console.log('details:', details);

  //const navigate = useNavigate();

  const handleChange = (e) => {
    //console.log(e.name);
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://dev-to-backend.herokuapp.com/register", details)
      .then((res) => {
        console.log(res.data);
        if (res.data.message) {
          alert(res.data.message);
        } else {
          alert("Signed up successfully");
          setSwtch(true);
          // <Navigate to={'/Login'} />
          // return navigate('/Login');
        }
      });
  };

  if (swtch) {
    return <Navigate to={"/Login"} />;
  }

  return (
    <div>
      <Navigation openMenu={toggle} />
      <div className="s-container">
        <Hamburger burgerMenu={mobileMenu} closeMenu={toggle} />
        <div className="welcome">
          <h1>Welcome to DEV Community</h1>
          <p className="comm">
            {" "}
            <span className="bluetxt">DEV Community</span> is a community of
            823,581 amazing developers
          </p>
          <div className="btns">
            <button className="apple">
              <RiAppleFill /> &nbsp; Sign up with Apple
            </button>
            <button className="google">
              <ImGoogle2 /> &nbsp; Sign up with Google
            </button>
            <button className="git">
              <AiOutlineGithub /> &nbsp; Sign up with Github
            </button>
            <button className="twit">
              <GrTwitter /> &nbsp; Sign up with Twitter
            </button>
          </div>
          <p className="txt">
            <span>-----</span> Already Have an Accoount ?{" "}
            <Link to={`/login`} className="sign-to-login">
              {" "}
              Click Here{" "}
            </Link>
            <span>-----</span>
          </p>
          <section className="credentials">
            <form onSubmit={onSubmit}>
              <p>Email</p>
              <input
                className="inp"
                type="email"
                required
                onChange={(e) => handleChange(e)}
                name="email"
                value={details.email}
              />
              <p>Password</p>
              <input
                className="inp"
                type="password"
                required
                onChange={(e) => handleChange(e)}
                name="password"
                value={details.password}
              />
              <p className="rem">
                <span>
                  <input type="checkbox" />
                </span>{" "}
                Remember me
              </p>
              <button className="cont-btn">Continue</button>
            </form>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
