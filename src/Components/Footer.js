import "./css/footer.css";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <footer>
        <section className="footer-section">
          <div className="bg-black-color-for-footer">
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <Link to="/">
                    <div className="footer-logo">
                      <img src={require("../images/zeenath-logo.svg")} alt="" />
                    </div>
                  </Link>
                </div>
                <div className="col-md-3">
                  <ul className="footer-links">
                    <li className="FooterLinksHover">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="FooterLinksHover">
                      <Link to="/accomodation">Rooms & Cottages</Link>
                    </li>
                    <li className="FooterLinksHover">
                      <Link to="/fun-filled-activites">
                        Activities & Facilities
                      </Link>
                    </li>
                    <li className="FooterLinksHover">
                      <Link to="/dining">Dining</Link>
                    </li>
                    <li className="FooterLinksHover">
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-3">
                  <div className="fulladresss">
                    <p>Contact Info</p>
                    <ul className="list-unstyled" id="footer-addres-gap">
                      <li>
                        <img
                          src={
                            require("../images/shapes/fluent_location-16-filled.svg")
                              .default
                          }
                          alt=""
                        />
                        ZEENATH TAJ GARDENS,
                        <br />
                        Kottaiyur Village & Post,
                        <br />
                        Yelagiri Hills, Tirupathur Dist,
                        <br />
                        Tamil Nadu-635853
                      </li>
                      <li>
                        <a href="callto:9751657458">
                          <img
                            src={
                              require("../images/shapes/fa_mobile.svg").default
                            }
                            alt=""
                          />
                          9751657458 | 9840083576 | 9840029445
                        </a>
                      </li>
                      <li>
                        <a href="mailto:info@zeenathtaigardens.com">
                          <img
                            src={
                              require("../images/shapes/famicons_mail.svg")
                                .default
                            }
                            alt=""
                          />
                          info@zeenathtajgardens.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="socialmeida">
                    <p>Connect with Us</p>
                    <ul className="list-unstyled mb-3" id="social-link-icons">
                      <li>
                        <a
                          href="https://www.facebook.com/zeenathtajgardens/"
                          className="social-link"
                        >
                          <img
                            src={require("../images/shapes/Vector.svg").default}
                            alt=""
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com/zeenattajgardens/"
                          className="social-link"
                        >
                          <img
                            src={
                              require("../images/shapes/Vector (1).svg").default
                            }
                            alt=""
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://youtube.com/@zeenattaj2928?feature=shared"
                          className="social-link"
                        >
                          <img
                            src={
                              require("../images/shapes/Vector (2).svg").default
                            }
                            alt=""
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://in.linkedin.com/in/zeenath-taj-gardens-587398138"
                          className="social-link"
                        >
                          <img
                            src={
                              require("../images/shapes/Vector (3).svg").default
                            }
                            alt=""
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}
