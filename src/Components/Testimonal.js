import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";
import "./css/testimonal.css";

function Responsive() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="testimaindiv">
      <div className="slider-container" id="testimonalSection">
        <Slider {...settings}>
          <div className="testimonalMainSection">
            <div className="col-xlg-4 col-lg-4 col-md-4 col-sm-12">
              <div className="testimonal-section-box">
                <div className="commaone">
                  <img
                    src={require("../images/home-page/comma-1.svg")}
                    alt=""
                  />
                </div>
                <div className="testimonal-section-borderline">
                  <div className="testimonial-profile">
                    <div className="profile-img">
                      <img
                        src={require("../images/home-page/profile-1.svg")}
                        alt="Jennifer Chris Profile"
                        className="profile-img"
                      />
                    </div>
                    <h3>Jennifer Chris</h3>
                    <div className="rating">
                      <span style={{ color: "gold" }}>★</span>
                      <span style={{ color: "gold" }}>★</span>
                      <span style={{ color: "gold" }}>★</span>
                      <span style={{ color: "gold" }}>★</span>
                      <span style={{ color: "gold" }}>★</span>
                    </div>
                    <p>
                      Exceptional Hospitality and a Perfect Family Getaway! Our
                      stay at Zeenath Taj Gardens in Yelagiri was truly
                      unforgettable! The location is absolutely stunning,
                      surrounded by lush greenery and offering a peaceful
                      retreat from the hustle and bustle. The hospitality was
                      top-notch—the staff were incredibly warm.
                    </p>
                  </div>
                </div>
                <div className="source">
                  <span>Source : </span>
                  <img
                    src={require("../images/home-page/google-review.png")}
                    alt="Google Review"
                  />
                </div>
                <div className="commatwo">
                  <img
                    src={require("../images/home-page/comma-2.svg")}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="testimonalMainSection">
            <div className="col-xlg-4 col-lg-4 col-md-4 col-sm-12">
              <div className="testimonal-section-box">
                <div className="commaone">
                  <img
                    src={require("../images/home-page/comma-1.svg")}
                    alt=""
                  />
                </div>
                <div className="testimonal-section-borderline">
                  <div className="testimonial-profile">
                    <div className="profile-img">
                      <img
                        src={require("../images/home-page/profile-2.svg")}
                        alt="Jennifer Chris Profile"
                        className="profile-img"
                      />
                    </div>
                    <h3>Kumar Saran</h3>
                    <div className="rating">
                      <span style={{ color: "gold" }}>★</span>
                      <span style={{ color: "gold" }}>★</span>
                      <span style={{ color: "gold" }}>★</span>
                      <span style={{ color: "gold" }}>★</span>
                      <span style={{ color: "gold" }}>★</span>
                    </div>
                    <p>
                      Exceptional Hospitality and a Perfect Family Getaway! Our
                      stay at Zeenath Taj Gardens in Yelagiri was truly
                      unforgettable! The location is absolutely stunning,
                      surrounded by lush greenery and offering a peaceful
                      retreat from the hustle and bustle. The hospitality was
                      top-notch—the staff were incredibly warm.
                    </p>
                  </div>
                </div>
                <div className="source">
                  <span>Source : </span>
                  <img
                    src={require("../images/home-page/booking.png")}
                    alt="Google Review"
                  />
                </div>
                <div className="commatwo">
                  <img
                    src={require("../images/home-page/comma-2.svg")}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="testimonalMainSection">
            <div className="col-xlg-4 col-lg-4 col-md-4 col-sm-12">
              <div className="testimonal-section-box">
                <div className="commaone">
                  <img
                    src={require("../images/home-page/comma-1.svg")}
                    alt=""
                  />
                </div>
                <div className="testimonal-section-borderline">
                  <div className="testimonial-profile">
                    <div className="profile-img">
                      <img
                        src={require("../images/home-page/profile-3.svg")}
                        alt="Jennifer Chris Profile"
                        className="profile-img"
                      />
                    </div>
                    <h3>Veena G</h3>
                    <div className="rating">
                      <span style={{ color: "gold" }}>★</span>
                      <span style={{ color: "gold" }}>★</span>
                      <span style={{ color: "gold" }}>★</span>
                      <span style={{ color: "gold" }}>★</span>
                      <span style={{ color: "gold" }}>★</span>
                    </div>
                    <p>
                      Exceptional Hospitality and a Perfect Family Getaway! Our
                      stay at Zeenath Taj Gardens in Yelagiri was truly
                      unforgettable! The location is absolutely stunning,
                      surrounded by lush greenery and offering a peaceful
                      retreat from the hustle and bustle. The hospitality was
                      top-notch—the staff were incredibly warm.
                    </p>
                  </div>
                </div>
                <div className="source">
                  <span>Source : </span>
                  <img
                    src={require("../images/home-page/google-review.png")}
                    alt="Google Review"
                  />
                </div>
                <div className="commatwo">
                  <img
                    src={require("../images/home-page/comma-2.svg")}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="testimonalMainSection">
            <div className="col-xlg-4 col-lg-4 col-md-4 col-sm-12">
              <div className="testimonal-section-box">
                <div className="commaone">
                  <img
                    src={require("../images/home-page/comma-1.svg")}
                    alt=""
                  />
                </div>
                <div className="testimonal-section-borderline">
                  <div className="testimonial-profile">
                    <div className="profile-img">
                      <img
                        src={require("../images/home-page/profile-3.svg")}
                        alt="Jennifer Chris Profile"
                        className="profile-img"
                      />
                    </div>
                    <h3>Veena G</h3>
                    <div className="rating">
                      <span style={{ color: "gold" }}>★</span>
                      <span style={{ color: "gold" }}>★</span>
                      <span style={{ color: "gold" }}>★</span>
                      <span style={{ color: "gold" }}>★</span>
                      <span style={{ color: "gold" }}>★</span>
                    </div>
                    <p>
                      Exceptional Hospitality and a Perfect Family Getaway! Our
                      stay at Zeenath Taj Gardens in Yelagiri was truly
                      unforgettable! The location is absolutely stunning,
                      surrounded by lush greenery and offering a peaceful
                      retreat from the hustle and bustle. The hospitality was
                      top-notch—the staff were incredibly warm.
                    </p>
                  </div>
                </div>
                <div className="source">
                  <span>Source : </span>
                  <img
                    src={require("../images/home-page/google-review.png")}
                    alt="Google Review"
                  />
                </div>
                <div className="commatwo">
                  <img
                    src={require("../images/home-page/comma-2.svg")}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="testimonalMainSection">
            <div className="col-xlg-4 col-lg-4 col-md-4 col-sm-12">
              <div className="testimonal-section-box">
                <div className="commaone">
                  <img
                    src={require("../images/home-page/comma-1.svg")}
                    alt=""
                  />
                </div>
                <div className="testimonal-section-borderline">
                  <div className="testimonial-profile">
                    <div className="profile-img">
                      <img
                        src={require("../images/home-page/profile-3.svg")}
                        alt="Jennifer Chris Profile"
                        className="profile-img"
                      />
                    </div>
                    <h3>Veena G</h3>
                    <div className="rating">
                      <span style={{ color: "gold" }}>★</span>
                      <span style={{ color: "gold" }}>★</span>
                      <span style={{ color: "gold" }}>★</span>
                      <span style={{ color: "gold" }}>★</span>
                      <span style={{ color: "gold" }}>★</span>
                    </div>
                    <p>
                      Exceptional Hospitality and a Perfect Family Getaway! Our
                      stay at Zeenath Taj Gardens in Yelagiri was truly
                      unforgettable! The location is absolutely stunning,
                      surrounded by lush greenery and offering a peaceful
                      retreat from the hustle and bustle. The hospitality was
                      top-notch—the staff were incredibly warm.
                    </p>
                  </div>
                </div>
                <div className="source">
                  <span>Source : </span>
                  <img
                    src={require("../images/home-page/google-review.png")}
                    alt="Google Review"
                  />
                </div>
                <div className="commatwo">
                  <img
                    src={require("../images/home-page/comma-2.svg")}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Responsive;
