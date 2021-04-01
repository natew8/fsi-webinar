import React from "react";
import footerStyles from "./footer.module.scss";

function Footer(props) {
  return (
    <div className={footerStyles.footerContainer}>
      <div className={footerStyles.content}>
        <p>
          Check the background of your financial professional on FINRA's{" "}
          <a target="_blank" href="https://brokercheck.finra.org/">
            {" "}
            BrokerCheck.
          </a>
        </p>
        <p>
          The content is developed from sources believed to be providing correct
          and accurate information. The information in this material is not
          intended as tax or legal advice. Please consult legal or tax
          professionals for specific information regarding your individual
          situation.
        </p>
        <p>
          We take protecting your data and privacy very seriously. As of January
          1, 2020, the{" "}
          <a target="_blank" href="https://www.caprivacy.org/">
            California Consumer Privacy Act (CCPA)
          </a>{" "}
          suggests the following link as an extra measure to safeguard your
          data:{" "}
          <a
            target="_blank"
            href="https://www.fsiplanners.com/donotsellmypersonalinformation"
          >
            Do not sell my personal information.
          </a>
        </p>
        <p>
          Planners are Registered Representatives of and offer securities
          through Securities America, Inc., member{" "}
          <a target="_blank" href="https://www.finra.org/#/">
            FINRA
          </a>
          /
          <a target="_blank" href="https://www.sipc.org/">
            SIPC.
          </a>{" "}
          Advisory services offered through Securities America Advisors, Inc.,
          an SEC Registered Investment Advisor. Financial Strategies Institute
          is not affiliated with the Securities America companies. Securities
          America and its representatives do not provide tax or legal advice.
          Please consult the appropriate professional regarding your specific
          situation.{" "}
          <a
            href="https://static.fmgsuite.com/media/documents/8396c082-a363-4f08-8c96-ba2f53c093bd.pdf"
            target="_blank"
          >
            CLICK HERE
          </a>{" "}
          for more information.{" "}
        </p>
        <p>
          This site is published for residents of the United States and is for
          informational purposes only and does not constitute an offer to sell
          or a solicitation of an offer to buy any security or product that may
          be referenced herein. Persons mentioned on this website may only offer
          services and transact business and/or respond to inquiries in states
          or jurisdictions in which they have been properly registered or are
          exempt from registration. Not all products and services referenced on
          this site are available in every state, jurisdiction, or from every
          person listed. Securities America and its representatives do not
          provide tax or legal advice; therefore it is important to coordinate
          with your tax or legal advisor regarding your specific situation.
        </p>
      </div>
    </div>
  );
}

export default Footer;
