import React, { useContext } from "react";
import { Context } from "../../context/WebinarContext";
//style Modules
import landingStylesThree from "./landingThree.module.scss";

const presentersInfo = [
  {
    name: "David",
    bio: "Something",
  },
  {
    name: "Nathan",
    bio: "Something",
  },
  {
    name: "Derek",
    bio: "Something",
  },
  {
    name: "Lance",
    bio: "Something",
  },
  {
    name: "SetVan",
    bio: "Something",
  },
];

function PresenterBio() {
  const { setPresenter, presenter, presenters } = useContext(Context);

  const query = new URLSearchParams(window.location.search);
  const presenterQuery = query.get("presenter");

  const chosenPresenter = presenters
    .filter(({ name }) =>
      name.toLowerCase().includes(presenterQuery?.toLowerCase())
    )
    .map((pres) => (
      <>
        <img src={pres.picture} />
        <p style={{ color: "#fff" }}>{pres.name}</p>
        <p style={{ color: "#fff" }}>{pres.email}</p>
      </>
    ));

  return (
    <div className={landingStylesThree.landingContainer}>
      {chosenPresenter}
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

export default PresenterBio;
