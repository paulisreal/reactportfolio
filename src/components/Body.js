import React from "react";
import "./Body.css";

function Body() {
  return (
    <div class="home">
      <h2 className="home1">Home.</h2>
      <div className="all-body">
        <div className="right-body">
          <h1 className="intro-body">
            I am <edit>Paul,</edit> a{" "}
            <edit>
              front end developer
              <br /> and UI/UX designer
            </edit>{" "}
            <br /> based in Ghana{" "}
          </h1>
          <h5 className="sub-intro-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor . <br />
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi <br />
            ut aliquip ex ea commodo consequat.
          </h5>
          <button className="btn-body">Hire me</button>
          <button className="btn-body">Explore</button>
        </div>

        <div className="left-body">
          <img
            className="home-img"
            src={process.env.PUBLIC_URL + "/ricky2.png"}
            alt="logo"
          />
        </div>
      </div>
      <ul className="features1">
        <li>Website Design</li>
        <li>Graphic Design</li>
        <li>UI/UX</li>
      </ul>
    </div>
  );
}

export default Body;
