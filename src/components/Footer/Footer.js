import React from "react";
import footerStyles from "./footer.module.scss";

function Footer(props) {
  return (
    <div className={footerStyles.footerContainer}>
      <div className={footerStyles.content}>
        <p>Disclaimers And Stuff</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed risus
          pretium quam vulputate dignissim suspendisse. Massa placerat duis
          ultricies lacus sed turpis. Velit euismod in pellentesque massa
          placerat. Nunc pulvinar sapien et ligula. Turpis egestas pretium
          aenean pharetra magna ac placerat vestibulum. Arcu risus quis varius
          quam quisque id diam. Nullam ac tortor vitae purus faucibus ornare
          suspendisse sed nisi. Mi eget mauris pharetra et ultrices. Placerat
          vestibulum lectus mauris ultrices eros in. Purus in massa tempor nec
          feugiat nisl pretium fusce id. Aliquam purus sit amet luctus venenatis
          lectus magna.
        </p>
      </div>
    </div>
  );
}

export default Footer;
