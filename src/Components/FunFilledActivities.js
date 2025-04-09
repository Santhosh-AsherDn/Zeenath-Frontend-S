import { useEffect } from "react";
import "./css/fun-filled-activities.css";
import Header from "./Header";
import AOS from "aos";
import "aos/dist/aos.css";
export default function FunFilledActivities() {
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
        <section className="deluxe-chalet-banner funfilledactivityBanner">
          <Header />
          {/* <!-- header end --> */}
          <div className="container">
            <div className="row">
              <div className="col-xlg-10 col-lg-10 col-md-10 col-sm-12">
                <h1>Fun Filled Activities</h1>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- banner section end --> */}
        {/* Experiences at Zeenath Taj Gardens */}
        <section data-aos="fade-up" data-aos-duration="600">
          <div className="experienceAtZeenath">
            Experiences at Zeenath Taj Gardens
          </div>
          <div className="yourStayAtZeenath">
            Your Stay at Zeenath Taj Gardens will be filled with unique
            experiences and Nature based activities. For more information,
            Please contact resort’s front desk during your stay. We Hope the
            experiences and activities we offer will make your vacation with us
            a memorable one.
          </div>
        </section>
        {/* Experiences at Zeenath Taj Gardens */}

        {/* Activities*/}
        <section>
          <div className="activtyContainer">
            <div className="activityMainDiv">
              <div className="ActivityCrdFle">
                <div
                  className="ActivityCards"
                  data-aos="fade-up"
                  data-aos-duration="900"
                >
                  <div className="ActivityCardsImage">
                    <img
                      src={require("../images/Fun-Filled-Activity4.jpg")}
                      alt="fun"
                    />
                  </div>
                  <div className="ActivityCardsName">Trekking</div>
                  <div className="ActivityContent">
                    Borem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis. className aptent taciti sociosqu ad litora torquent
                    per conubia nostra, per inceptos himenaeos.
                  </div>
                </div>
                <div
                  className="ActivityCards"
                  data-aos="fade-up"
                  data-aos-duration="900"
                >
                  <div className="ActivityCardsImage">
                    <img
                      src={require("../images/Fun-Filled-Activity2.png")}
                      alt="fun"
                    />
                  </div>
                  <div className="ActivityCardsName">Bird Watching</div>
                  <div className="ActivityContent">
                    Borem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis. className aptent taciti sociosqu ad litora torquent
                    per conubia nostra, per inceptos himenaeos.
                  </div>
                </div>
                <div
                  className="ActivityCards"
                  data-aos="fade-up"
                  data-aos-duration="900"
                >
                  <div className="ActivityCardsImage">
                    <img
                      src={require("../images/Fun-Filled-Activity5.png")}
                      alt="fun"
                    />
                  </div>
                  <div className="ActivityCardsName">Nature Trail</div>
                  <div className="ActivityContent">
                    Borem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis. className aptent taciti sociosqu ad litora torquent
                    per conubia nostra, per inceptos himenaeos.
                  </div>
                </div>
                <div
                  className="ActivityCards"
                  data-aos="fade-up"
                  data-aos-duration="1100"
                >
                  <div className="ActivityCardsImage">
                    <img
                      src={require("../images/Fun-Filled-Activity3.png")}
                      alt="fun"
                    />
                  </div>
                  <div className="ActivityCardsName">Bonfire with Music</div>
                  <div className="ActivityContent">
                    Borem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis. className aptent taciti sociosqu ad litora torquent
                    per conubia nostra, per inceptos himenaeos.
                  </div>
                </div>
                <div
                  className="ActivityCards"
                  data-aos="fade-up"
                  data-aos-duration="1100"
                >
                  <div className="ActivityCardsImage">
                    <img
                      src={require("../images/Fun-Filled-Activity1.png")}
                      alt="fun"
                    />
                  </div>
                  <div className="ActivityCardsName">Fundera Bird Park</div>
                  <div className="ActivityContent">
                    Borem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis. className aptent taciti sociosqu ad litora torquent
                    per conubia nostra, per inceptos himenaeos.
                  </div>
                </div>
                <div
                  className="ActivityCards"
                  data-aos="fade-up"
                  data-aos-duration="1100"
                >
                  <div className="ActivityCardsImage">
                    <img
                      src={require("../images/Fun-Filled-Activity6.png")}
                      alt="fun"
                    />
                  </div>
                  <div className="ActivityCardsName">Adventure Sports</div>
                  <div className="ActivityContent">
                    Borem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis. className aptent taciti sociosqu ad litora torquent
                    per conubia nostra, per inceptos himenaeos.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Activities*/}
      </div>
    </>
  );
}
