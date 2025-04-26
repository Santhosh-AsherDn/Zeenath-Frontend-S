import { useEffect } from "react";
import "./css/dining.css";
import Header from "./Header";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Dining() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return (
    <>
      <div id="DiningId">
        <section
          class="deluxe-chalet-banner"
          style={{
            backgroundImage:
              "url(./images/deluxe-chalet-page/deluxe-chalet-banner.png)",
          }}
        >
          <Header />
          {/* <!-- header end --> */}
          <div class="container">
            <div class="row">
              <div class="col-xlg-10 col-lg-10 col-md-10 col-sm-12">
                <h1>Dining</h1>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- banner section end --> */}

        <section class="full-bg-dining">
          {/* <!-- about section start --> */}
          <section class="deluxe-chalet-about-1">
            <div class="container">
              <div class="row" id="smallscreenonlyreverse">
                <div class="col-xlg-6 col-lg-6 col-md-6 col-sm-12">
                  <div class="deluxe-chalet-maincontent">
                    <img
                      src="./images/deluxe-chalet-page/deluxe-chalet-about-1.png"
                      alt=""
                    />
                  </div>
                </div>
                <div class="col-xlg-6 col-lg-6 col-md-6 col-sm-12">
                  <div
                    class="deluxe-chalet-content"
                    data-aos="fade-up"
                    data-aos-duration="500"
                  >
                    <h2 class="mb-3">Garden Bistro</h2>
                    <p>
                      Begin your day anew by savouring a steaming cup of tea or
                      coffee in the tranquil embrace of an ageless banyan tree.
                      Indulge in a delightful array of snacks and drinks
                      throughout the day, and wind up in the evening amidst the
                      enchanting atmosphere of the Garden Bistro, accompanied by
                      soulful music and a tempting spread of pizzas, pastas,
                      sizzlers, and desserts.
                    </p>
                    <div class="deluxe-chalet-about-flex-1 mb-5">
                      <div class="deluxe-chalet-1">
                        <img
                          src="./images/deluxe-chalet-page/deluxe-chalet-1.png"
                          alt=""
                          width="20px"
                        />
                        <p>
                          Tea, Coffee & <br />
                          Beverage
                        </p>
                      </div>
                      <div class="deluxe-chalet-1">
                        <img
                          src="./images/deluxe-chalet-page/deluxe-chalet-2.png"
                          alt=""
                          width="20px"
                        />
                        <p>
                          Sandwich , Rolls & <br />
                          Specials
                        </p>
                      </div>
                      <div class="deluxe-chalet-1">
                        <img
                          src="./images/deluxe-chalet-page/deluxe-chalet-3.png"
                          alt=""
                          width="20px"
                        />
                        <p>pizza & pasta</p>
                      </div>
                    </div>
                    <div class="deluxe-chalet-about-button d-flex justify-content-center">
                      <button>MENU CARD</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- about section end -->

    <!-- about section start --> */}
          <section class="deluxe-chalet-about-2">
            <div class="container">
              <div class="row" id="direction-opposite">
                <div
                  class="col-xlg-6 col-lg-6 col-md-6 col-sm-12"
                  data-aos="fade-up"
                  data-aos-duration="800"
                >
                  <div class="deluxe-chalet-content">
                    <h2 class="mb-3">Glass House</h2>
                    <p>
                      Experience the exquisite fusion of homemade culinary
                      delights with a touch of elegance at the Glass House.
                      Indulge in our buffet or a’ la carte options amidst the
                      cozy indoor or refreshing outdoor atmosphere at Terrazzo.
                      Our commitment to providing an exceptional dining
                      experience is reflected in every dish we serve.
                    </p>
                    <div class="deluxe-chalet-about-flex-1 mb-5">
                      <div class="deluxe-chalet-1">
                        <img
                          src="./images/deluxe-chalet-page/deluxe-chalet-6.png"
                          alt=""
                          width="20px"
                        />
                        <p>Dinner</p>
                      </div>
                      <div class="deluxe-chalet-1">
                        <img
                          src="./images/deluxe-chalet-page/deluxe-chalet-5.png"
                          alt=""
                          width="20px"
                        />
                        <p>Lunch</p>
                      </div>
                      <div class="deluxe-chalet-1">
                        <img
                          src="./images/deluxe-chalet-page/deluxe-chalet-4.png"
                          alt=""
                          width="20px"
                        />
                        <p>Breakfast</p>
                      </div>
                    </div>
                    <div class="deluxe-chalet-about-button d-flex justify-content-center">
                      <button>MENU CARD</button>
                    </div>
                  </div>
                </div>
                <div class="col-xlg-6 col-lg-6 col-md-6 col-sm-12">
                  <div class="deluxe-chalet-maincontent-2">
                    <img
                      src="./images/deluxe-chalet-page/deluxe-chalet-about-2.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- about section end --> */}
        </section>
      </div>
    </>
  );
}
