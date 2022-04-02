import Navigation from "./Navigate";
import "../Styles/Login.css";
import { RiAppleFill } from "react-icons/ri";
import { ImGoogle2 } from "react-icons/im";
import { AiOutlineGithub } from "react-icons/ai";
import { GrTwitter } from "react-icons/gr";
import Footer from "./Footer";
import { useState } from "react";
import axios from "axios";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "../Redux/action";
import { Navigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();

  const { token } = useSelector((state) => state, shallowEqual);
  //console.log(token);

  const [ldetails, setLdetails] = useState({ email: "", password: "" });
  const [lswtch, setLswtch] = useState(false);
  //console.log('details:', ldetails);

  const handleChange = (e) => {
    //console.log(e.name);
    setLdetails({ ...ldetails, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://dev-to-backend.herokuapp.com/login", ldetails)
      .then((res) => {
        console.log(res.data);
        if (res.data.message) {
          alert(res.data.message);
        } else {
          alert("Logged in successfully");
          const action = loginSuccess(res.data.token); // logoutsuccess("token")
          // console.log("action:", action);
          dispatch(action);
          setLswtch(true);
        }
      });
  };

  if (lswtch) {
    return <Navigate to={"/"} />;
  }

  return (
    <div>
      <Navigation />
      <div className="l-container">
        <div className="l-welcome">
          <h1>Welcome to DEV Community</h1>
          <p>
            {" "}
            <span className="bluetxt">DEV Community</span> is a community of
            823,581 amazing developers
          </p>
          <div className="btns">
            <button className="apple">
              <RiAppleFill /> &nbsp; Continue with Apple
            </button>
            <button className="google">
              <ImGoogle2 /> &nbsp; Continue with Google
            </button>
            <button className="git">
              <AiOutlineGithub /> &nbsp; Continue with Github
            </button>
            <button className="twit">
              <GrTwitter /> &nbsp; Continue with Twitter
            </button>
          </div>
          <p className="txt">
            <span>--------------</span> Have a password? Continue with your
            email address <span>--------------</span>
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
                value={ldetails.email}
              />
              <p>Password</p>
              <input
                className="inp"
                type="password"
                required
                onChange={(e) => handleChange(e)}
                name="password"
                value={ldetails.password}
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

export default Login;
