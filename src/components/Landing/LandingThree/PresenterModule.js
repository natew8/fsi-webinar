import React, { useContext } from "react";
import { Context } from "../../context/WebinarContext";
//Components
import presenters from "./presenters";
//style Modules
import landingStylesThree from "./landingThree.module.scss";

function PresenterModule() {
  const { setPresenter, presenter, presenters } = useContext(Context);

  return (
    <div className={landingStylesThree.landingContainer}>
      <h1 className={landingStylesThree.landingHeader}>About your host</h1>
      <span className={landingStylesThree.presenterBox}>
        <img alt="headshot" />
        <div>
          <h2 className={landingStylesThree.presenterName}>David Gates</h2>
          <p className={landingStylesThree.bio}>
            As National Social Security Advisor, David’s knowledge in Social
            Security makes him a very valuable resource when planning for
            retirement. David has developed a love for retirement planning with
            individuals who are looking to create an income stream from various
            sources including 401(k)’s. He is quickly able to identify any
            planning gaps to secure lifestyle planning after retirement. With a
            skill of public speaking, David enjoys running seminars on various
            topics in retirement planning.
          </p>
        </div>
      </span>
      <p className={landingStylesThree.bio}>
        David has adopted the philosophy of the firm as he focuses on creating
        realistic plans for his clients to help them in their financial goals.
        As you will find out when meeting with him, David has a sincere concern
        for the well-being of his clients. As a fiduciary he will be sure that
        he puts his clients' interests first
      </p>
    </div>
  );
}

export default PresenterModule;
