import React from "react";
import "../components/footer.css"

const Footer = () => {
  return (
    <div>
      <footer className="footer-distributed">
        <div className="footer-left">
          <h3>
            DS<span>COLLECTION</span>
          </h3>

          <p className="footer-company-name">DS COLLECTION &copy; 2022</p>
        </div>

        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker"></i>
            <p>
              <span>Krishna Marriage Hall,Krushna Nagar</span> Ambernath West, 421501
            </p>
          </div>

          <div>
            <i className="fa fa-phone"></i>
            <p>8888333221 , 9994445221</p>
          </div>

          <div>
            <i className="fa fa-envelope"></i>
            <p>
              <a href="##">
                <span
                  className="__cf_email__"
                  data-cfemail="4f3c3a3f3f203d3b0f2c20223f2e2136612c2022"
                >
                  {" "}
                  dayyan.shaikh973@gmail.com
                </span>
              </a>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>About Shop</span>
            We sell all types of{" "}
            <b> Mens Wear,Womens wear,Kids wear,Electronics </b>
            <br />
            Etc...
          </p>

          <div className="footer-icons">
            <a
              href="https://www.facebook.com/dayyan.shaikh/"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fa fa-facebook"></i>
            </a>
            <a
              href="https://twitter.com/DayyanShaikh_50"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fa fa-twitter"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/dayyan-shaikh/"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fa fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/dayyan-shaikh"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fa fa-github"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;