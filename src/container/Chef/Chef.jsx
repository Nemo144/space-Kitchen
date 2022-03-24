import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">SK's Beliefs!</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
        <p className="p__opensans">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef and Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
