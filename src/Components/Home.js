import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import "./css/home.css";
import { rooms } from "./roomsData";
import Header from "./Header";
import Carousel from "react-bootstrap/Carousel";

export default function Home() {
  const [temperature, setTemperature] = useState(null);
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/weather/yelagiri"
        );
        setTemperature(response.data.temperature);
      } catch (error) {
        console.error("Failed to fetch weather:", error);
      }
    };

    fetchWeather();
    const interval = setInterval(fetchWeather, 10 * 60 * 1000); //refresh every 10 mins
    return () => clearInterval(interval);
  }, []);

  const navigate = useNavigate();
  const handleShow = () => {
    navigate("/accomodation");
  };
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return (
    <>
      <div id="HomeId">
        <Header />
        <Carousel>
          <Carousel.Item interval={3000}>
            <img
              src="/images/banner/Home1.png"
              alt="First slide"
              className="d-block w-100 h-50"
            />
            <Carousel.Caption>
              <div className="col-xlg-12 col-lg-12 col-md-12 col-sm-12 text-center z-index-99">
                <h1 className="titleofhomebanner">
                  EXPERIENCE NATURE’S <br />
                  ABUNDANCE WITH LUXURY
                </h1>

                <button className="button" onClick={handleShow}>
                  BOOK NOW
                </button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              src="/images/banner/Home2.png"
              alt="First slide"
              className="d-block w-100 h-50"
              id="imageslider-image"
            />
            <Carousel.Caption>
              <div className="col-xlg-12 col-lg-12 col-md-12 col-sm-12 text-center z-index-99">
                <h1 className="titleofhomebanner">
                  EXPERIENCE NATURE’S <br />
                  ABUNDANCE WITH LUXURY
                </h1>

                <button className="button" onClick={handleShow}>
                  BOOK NOW
                </button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              src="/images/banner/Home3.png"
              alt="First slide"
              className="d-block w-100 h-50"
              id="imageslider-image"
            />
            <Carousel.Caption>
              <div className="col-xlg-12 col-lg-12 col-md-12 col-sm-12 text-center z-index-99">
                <h1 className="titleofhomebanner">
                  EXPERIENCE NATURE’S <br />
                  ABUNDANCE WITH LUXURY
                </h1>

                <button className="button" onClick={handleShow}>
                  BOOK NOW
                </button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              src="/images/banner/Home4.png"
              alt="First slide"
              className="d-block w-100 h-50"
              id="imageslider-image"
            />
            <Carousel.Caption>
              <div className="col-xlg-12 col-lg-12 col-md-12 col-sm-12 text-center z-index-99">
                <h1 className="titleofhomebanner">
                  EXPERIENCE NATURE’S <br />
                  ABUNDANCE WITH LUXURY
                </h1>

                <button className="button" onClick={handleShow}>
                  BOOK NOW
                </button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              src="/images/banner/Home5.png"
              alt="First slide"
              className="d-block w-100 h-50"
              id="imageslider-image"
            />
            <Carousel.Caption>
              <div className="col-xlg-12 col-lg-12 col-md-12 col-sm-12 text-center z-index-99">
                <h1 className="titleofhomebanner">
                  EXPERIENCE NATURE’S <br />
                  ABUNDANCE WITH LUXURY
                </h1>

                <button className="button" onClick={handleShow}>
                  BOOK NOW
                </button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <section className="smallstrip">
          <div className="container">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-xlg-4 col-lg-4 col-md-4 col-sm-4">
                <div className="strippara">
                  <img
                    src="/images/shapes/streamline_pet-paw-solid.svg"
                    alt=""
                  />
                  <p>Pet friendly</p>
                </div>
              </div>
              <div className="col-xlg-4 col-lg-4 col-md-4 col-sm-4">
                <div className="strippara">
                  <img
                    src="/images/shapes/solar_temperature-line-duotone.svg"
                    alt="Temperature Icon"
                  />
                  <p>
                    {temperature !== null ? `${temperature}°C` : "Loading..."}
                  </p>
                </div>
              </div>
              <div className="col-xlg-4 col-lg-4 col-md-4 col-sm-4">
                <div className="strippara">
                  <img src="/images/shapes/fa_mobile.svg" alt="" />
                  <p> 9751657458 | 9840083576 | 9840029445</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- strip  end-->

    <!-- about section start --> */}
        <section className="homeaboutsection">
          <div className="container">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-xlg-6 col-lg-6 col-md-6 col-sm-12">
                <div className="homeaboutsectiontext">
                  <h2 data-aos="fade-right" data-aos-duration="500">
                    ZEENATH TAJ GARDENS
                  </h2>
                  <h3
                    data-aos="fade-right"
                    data-aos-duration="600"
                    className="mb-4"
                  >
                    LUXURY NATURE RESORT
                  </h3>
                  <p data-aos="fade-right" data-aos-duration="700">
                    Welcome to Zeenath Taj Gardens, Yelagiri – where serenity
                    meets sophistication. Spread across 11 acres and nestled in
                    the lap of nature, our resort offers a delightful escape
                    from the hustle and bustle of city life.{" "}
                  </p>
                  <p data-aos="fade-right" data-aos-duration="700">
                    Zeenath Taj Gardens is a perfect destination to unwind and
                    relax and is conveniently located just 2Km before the
                    centre. This beautiful family resort offers a choice of 33
                    rooms and most of them provide scenic views of the garden
                    and hill slopes.
                  </p>
                </div>
              </div>
              <div
                className="col-xlg-6 col-lg-6 col-md-6 col-sm-12"
                data-aos="fade-left"
                data-aos-duration="500"
              >
                <div className="homeaboutimg">
                  <img src="/images/home-page/home-about-img.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- about section end -->

    <!-- Accommodation section start --> */}

        <section className="accommodation-section-home">
          <div className="container">
            <div className="row">
              <div className=" col-xl-12 col-lg-12 col-md-12 col-sm-12 text-center mb-5">
                <div
                  className="accommodation-para"
                  data-aos="fade-up"
                  data-aos-duration="500"
                >
                  <h2 className="mb-3">Elegant Accommodation Choices</h2>
                  <p>
                    Step into your own private space within our lush paradise
                    with our seven exquisite accommodations options. Book your
                    escape today and let Zeenath Taj Gardens redefine your
                    perception of luxury and tranquility.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              {rooms.map((room) => (
                <div
                  key={room.id}
                  className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-4"
                >
                  <div className="hover_color">
                    <img
                      src={room.image}
                      alt={room.name}
                      style={{
                        height: "444px",
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                    <div className="hover_color-inner">
                      <div className="hover_title">
                        <h3>{room.name}</h3>
                        <p
                          style={{
                            WebkitLineClamp: 4,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            display: "-webkit-box",
                          }}
                        >
                          {room.description}
                        </p>
                        <button className="viewmore-btn" onClick={handleShow}>
                          View More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* <!-- Accommodation section end --> */}

        {/* <!-- dining section start --> */}
        <section className="diningsection">
          <div className="container">
            <div className="row mb-5">
              <div
                className="col-xlg-12 col-lg-12 col-md-12 col-sm-12 text-center"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                <h2>Dining</h2>
              </div>
            </div>
            <div className="row">
              <div
                className="col-xlg-6 col-lg-6 col-md-6 col-sm-12"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                <div className="dining-img-1 text-center">
                  <img src="/images/home-page/home-dining-img.png" alt="" />
                  <div className="dining-popup">
                    <div className="inner-dining-popup">
                      <h4>Complimentary Breakfast</h4>
                      <p>
                        Indulge in a wholesome breakfast at our indoor or
                        outdoor restaurant
                      </p>
                    </div>
                  </div>
                  <div className="dining-img-text">
                    <h3>The Glass house</h3>
                    <p>
                      The authentic local cuisine restaurant offering sumptuous
                      breakfast lunch & dinner buffet and alacarte fare infused
                      with a homely touch
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-xlg-6 col-lg-6 col-md-6 col-sm-12"
                data-aos="fade-up"
                data-aos-duration="700"
              >
                <div className="dining-img-1 text-center">
                  <img src="/images/home-page/home-dining-img-2.png" alt="" />
                  <div className="dining-popup">
                    <div className="inner-dining-popup">
                      <h4>Complimentary Breakfast</h4>
                      <p>
                        Indulge in a wholesome breakfast at our indoor or
                        outdoor restaurant
                      </p>
                    </div>
                  </div>
                  <div className="dining-img-text">
                    <h3>Garden Bistro</h3>
                    <p>
                      Nestled under the expansive canopy of banyan tree, Garden
                      Bistro offers café-style dishes that are irresistibly
                      delicious.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- dining section end -->
    <!-- dining third img start --> */}
        <section
          className="diningthiredimg"
          style={{
            backgroundImage: `url("/images/home-page/home-dining-img-3.png")`,
          }}
        >
          <div className="dining-popup2">
            <div className="inner-dining-popup2">
              <h4>Events at Zeenath Taj Gardens</h4>
              <p className="inner-dining-popup2-spl">
                Destination for any event, function or celebration
              </p>
              <p>
                Whether it is a small destination wedding, family function or a
                corporate outing, Zeenath Taj Gardens provides a relaxed,
                memorable experience set amongst natural surroundings for a very
                reasonable package.
              </p>
            </div>
          </div>
          <div className="diningthiredimg-img"></div>
        </section>
        {/* <!-- dining third img end --> */}

        {/* <!-- Fun Filled Activities start --> */}
        <section className="fun-filled-activities">
          <div className="container">
            <div className="row mb-4">
              <div
                className="col-xlg-12 col-lg-12 col-md-12 col-sm-12 text-center"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                <h2 className="mb-3">Fun Filled Activities</h2>
                <p>
                  Zeenath Garden is the perfect getaway for fun and relaxation
                  amidst nature. Guests can enjoy bonfire nights, outdoor games
                  like badminton and archery, nature walks, and scenic treks.
                  There’s a kids’ play area, pet-friendly grounds, and indoor
                  games like carrom and chess. Don’t miss the chance to stroll
                  through fruit orchards and spot exotic birds. With cozy picnic
                  spots and hammocks in lush green surroundings, Zeenath Garden
                  promises a refreshing, activity-filled experience for all.
                </p>
              </div>
            </div>
            <div className="row">
              <div
                className="col-xlg-6 col-lg-6 col-md-6 col-sm-12 mb-3"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                <div className="fun-filled-activities-imgs">
                  <img
                    src="/images/home-page/FunfilledActivities-1.png"
                    alt=""
                  />
                </div>
                <div className="fun-filled-activities-a">
                  <p className="fun-activity">Indoor Games</p>
                </div>
              </div>
              <div
                className="col-xlg-6 col-lg-6 col-md-6 col-sm-12 mb-3"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <div className="fun-filled-activities-imgs">
                  <img
                    src="/images/home-page/trip.png"
                    alt=""
                    // style={{
                    //   height: "317.68px",
                    //   objectFit: "cover",
                    // }}
                  />
                </div>
                <div className="fun-filled-activities-a">
                  <p className="fun-activity">Nature Trail & Trekking</p>
                </div>
              </div>
              <div
                className="col-xlg-6 col-lg-6 col-md-6 col-sm-12 mb-3"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                <div className="fun-filled-activities-imgs">
                  <img
                    src="/images/home-page/FunfilledActivities-3.png"
                    alt=""
                  />
                </div>
                <div className="fun-filled-activities-a">
                  <p className="fun-activity">Outdoor Sport</p>
                </div>
              </div>
              <div
                className="col-xlg-6 col-lg-6 col-md-6 col-sm-12 mb-3"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <div className="fun-filled-activities-imgs">
                  <img
                    src="/images/home-page/FunfilledActivities-4.png"
                    alt=""
                  />
                </div>
                <div className="fun-filled-activities-a">
                  <p className="fun-activity">Bonfire with Music</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Fun Filled Activities end --> */}

        {/* <!-- Flora & Fauna start --> */}
        <section className="flora-fauna">
          <div className="container">
            <div className="row">
              <div className="col-xlg-6 col-lg-6 col-md-6 col-sm-12">
                {/* <div className="flora-faunaimg"> */}
                <img
                  src="/images/home-page/flora-fauna-img.png"
                  alt=""
                  className="smallscreenimgforflorafauna"
                />
                {/* </div> */}
              </div>
              <div
                className="col-xlg-6 col-lg-6 col-md-6 col-sm-12"
                id="flora-fauna-bg"
              >
                <div className="flora-fauna-content">
                  <h2 className="mb-4">Flora & Fauna</h2>
                  <h3 className="mb-4">An Avian Haven</h3>
                  <p>
                    For bird enthusiasts, Zeenath Taj garden is a paradise
                    beyond compare. The melodious trills of countless bird
                    species fill the air, turning our resort into a symphony of
                    avian music. With its prime location nestled amidst nature,
                    our resort provides a safe haven for numerous bird species,
                    offering guests the opportunity to witness these majestic
                    creatures in their natural habitat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Flora & Fauna end --> */}

        {/* <!-- testimonals section start --> */}
        <section
          className="hometestimonalsec"
          style={{
            backgroundImage: `url("/images/home-page/testimonals-bg.png")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container">
            <div className="row mb-5">
              <div className="col-xlg-12 col-lg-12 col-md-4 col-sm-12 text-center">
                <h2>Hear from our Guests</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-xlg-4 col-lg-4 col-md-4 col-sm-12">
                <div className="testimonal-section-box">
                  <div className="commaone">
                    <img src="/images/home-page/comma-1.svg" alt="" />
                  </div>
                  <div className="testimonal-section-borderline">
                    <div className="testimonial-profile">
                      <div className="profile-img">
                        <img
                          src="/images/home-page/profile-1.svg"
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
                        Exceptional Hospitality and a Perfect Family Getaway!
                        Our stay at Zeenath Taj Gardens in Yelagiri was truly
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
                      src="/images/home-page/google-review.png"
                      alt="Google Review"
                    />
                  </div>
                  <div className="commatwo">
                    <img src="/images/home-page/comma-2.svg" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-xlg-4 col-lg-4 col-md-4 col-sm-12">
                <div className="testimonal-section-box">
                  <div className="commaone">
                    <img src="/images/home-page/comma-1.svg" alt="" />
                  </div>
                  <div className="testimonal-section-borderline">
                    <div className="testimonial-profile">
                      <div className="profile-img">
                        <img
                          src="/images/home-page/profile-2.svg"
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
                        Exceptional Hospitality and a Perfect Family Getaway!
                        Our stay at Zeenath Taj Gardens in Yelagiri was truly
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
                      src="/images/home-page/booking.png"
                      alt="Google Review"
                    />
                  </div>
                  <div className="commatwo">
                    <img src="/images/home-page/comma-2.svg" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-xlg-4 col-lg-4 col-md-4 col-sm-12">
                <div className="testimonal-section-box">
                  <div className="commaone">
                    <img src="/images/home-page/comma-1.svg" alt="" />
                  </div>
                  <div className="testimonal-section-borderline">
                    <div className="testimonial-profile">
                      <div className="profile-img">
                        <img
                          src="/images/home-page/profile-3.svg"
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
                        Exceptional Hospitality and a Perfect Family Getaway!
                        Our stay at Zeenath Taj Gardens in Yelagiri was truly
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
                      src="/images/home-page/google-review.png"
                      alt="Google Review"
                    />
                  </div>
                  <div className="commatwo">
                    <img src="/images/home-page/comma-2.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- testimonals section start --> */}
      </div>
    </>
  );
}
