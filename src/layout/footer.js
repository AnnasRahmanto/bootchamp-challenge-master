import React from "react";
import Facebook from "../assets/images/icon_facebook.png";
import Twitter from "../assets/images/icon_twitter.png";
import Instagram from "../assets/images/icon_instagram.png";
import Twitch from "../assets/images/icon_twitch.png";
import Mail from "../assets/images/icon_mail.png";
import Logo from "../assets/images/logo.png";


const Footer = () => {
  return (
    <div>
      <footer className="container py-5">
        <div className="row">
          <div className="col-sm">
            <div className="grid row-gap-3">
              <div className="">
                <p className="p-text">
                  Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000
                </p>
              </div>
              <div>
                <p className="p-text">binarcarrental@gmail.com</p>
              </div>
              <div>
                <p className="p-text">081-233-334-808</p>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="grid">
              <div>
                <a href="#">Our services</a>
              </div>
              <div>
                <a href="#">Why Us</a>
              </div>
              <div>
                <a href="#">Testimonial</a>
              </div>
              <div>
                <a href="#">FAQ</a>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="grid">
              <div>
                <p className="p-text p-2">Connect with us</p>
              </div>
              <div className="d-flex flex-row mb-3">
                <div>
                  <a href="#">
                    <img
                      src={Facebook}
                      className="img-fluid"
                      alt="pick-alt"
                    />
                  </a>
                </div>
                <div>
                  <a href="#">
                    <img
                      src={Instagram}
                      className="img-fluid"
                      alt="pick-alt"
                    />
                  </a>
                </div>
                <div>
                  <a href="#">
                    <img
                      src={Twitter}
                      className="img-fluid"
                      alt="pick-alt"
                    />
                  </a>
                </div>
                <div>
                  <a href="#">
                    <img
                      src={Mail}
                      className="img-fluid"
                      alt="pick-alt"
                    />
                  </a>
                </div>
                <div>
                  <a href="#">
                    <img
                      src={Twitch}
                      className="img-fluid"
                      alt="pick-alt"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <p className="p-text">Copyright Binar 2022</p>
            <img src={Logo} className="img-fluid" alt="pick-alt" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
