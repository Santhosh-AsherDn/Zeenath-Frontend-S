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
                    <img src="/images/Fun-Filled-Activity4.jpg" alt="fun" />
                  </div>
                  <div className="ActivityCardsName">Trekking</div>
                  <div className="ActivityContent">
                    Zeenath Taj Gardens is a great base for exploring Yelagiri’s
                    scenic trekking routes. Take a short walk through the forest
                    to Kosiguda, also known as Sunset Point. For a longer
                    adventure, trek to Pulachikottai from the Tamil Nadu
                    Information Centre. You might even spot deer along the
                    way—carry snacks and water. Drive to YMCA for a flexible
                    trail through peaceful surroundings. Or head to Mangalam and
                    begin the popular Swamimalai trek from the Silk Farm. Each
                    trail offers fresh air, forest views, and a refreshing
                    connection to nature.
                  </div>
                </div>
                <div
                  className="ActivityCards"
                  data-aos="fade-up"
                  data-aos-duration="900"
                >
                  <div className="ActivityCardsImage">
                    <img src="/images/Fun-Filled-Activity2.png" alt="fun" />
                  </div>
                  <div className="ActivityCardsName">Bird Watching</div>
                  <div className="ActivityContent">
                    Wake up to the sound of birds at Zeenath Taj Gardens, a
                    peaceful spot for bird lovers. The garden and surrounding
                    trees attract a variety of colorful species. You’ll often
                    spot bulbuls, sunbirds, mynas, and more fluttering nearby.
                    Bring your binoculars and camera to capture these beautiful
                    moments. Early mornings are perfect for birdwatching in the
                    quiet, fresh air. It’s a relaxing activity for all ages and
                    a treat for nature enthusiasts. Every visit brings a new
                    feathered friend to admire.
                  </div>
                </div>
                <div
                  className="ActivityCards"
                  data-aos="fade-up"
                  data-aos-duration="900"
                >
                  <div className="ActivityCardsImage">
                    <img src="/images/Fun-Filled-Activity5.png" alt="fun" />
                  </div>
                  <div className="ActivityCardsName">Nature Trail</div>
                  <div className="ActivityContent">
                    Zeenath Taj Gardens offers relaxing nature trails for slow
                    walks and gentle exploration. Surrounded by greenery, the
                    paths wind through trees and garden spaces. These trails are
                    perfect for those who want to reconnect with nature at a
                    calm pace. Enjoy the sounds of chirping birds, rustling
                    leaves, and fresh mountain breeze. There’s no rush—just a
                    peaceful journey through a natural setting. Ideal for solo
                    walkers, families, or couples looking for quiet time
                    outdoors. Each trail invites you to pause, breathe, and
                    enjoy the moment.
                  </div>
                </div>
                <div
                  className="ActivityCards"
                  data-aos="fade-up"
                  data-aos-duration="1100"
                >
                  <div className="ActivityCardsImage">
                    <img src="/images/Fun-Filled-Activity3.png" alt="fun" />
                  </div>
                  <div className="ActivityCardsName">Bonfire with Music</div>
                  <div className="ActivityContent">
                    Evenings at Zeenath Taj Gardens come alive with warm
                    bonfires and soft music. Gather around the fire with your
                    friends or family after a day of exploring. Enjoy the cozy
                    atmosphere under a starlit sky, surrounded by nature. Music
                    adds a soothing vibe, making it perfect for storytelling or
                    quiet chats. It’s a great way to relax, laugh, and create
                    memories together. Bonfires can be arranged upon request,
                    making each night special. It’s the perfect end to an
                    adventurous day in the hills.
                  </div>
                </div>
                <div
                  className="ActivityCards"
                  data-aos="fade-up"
                  data-aos-duration="1100"
                >
                  <div className="ActivityCardsImage">
                    <img src="/images/Fun-Filled-Activity1.png" alt="fun" />
                  </div>
                  <div className="ActivityCardsName">Fundera Bird Park</div>
                  <div className="ActivityContent">
                    Just a short drive from Zeenath Taj Gardens is the colorful
                    Fundera Bird Park. Home to exotic and native birds, it’s a
                    must-visit for nature and animal lovers. Walk through
                    well-kept paths as birds fly freely around you. You can
                    interact, feed, and take photos with many of the birds. The
                    park also features small animals and family-friendly spaces.
                    It’s an educational and fun experience for both kids and
                    adults. A lively extension of your nature-filled stay in
                    Yelagiri.
                  </div>
                </div>
                <div
                  className="ActivityCards"
                  data-aos="fade-up"
                  data-aos-duration="1100"
                >
                  <div className="ActivityCardsImage">
                    <img src="/images/Fun-Filled-Activity6.png" alt="fun" />
                  </div>
                  <div className="ActivityCardsName">Adventure Sports</div>
                  <div className="ActivityContent">
                    For thrill-seekers, Yelagiri has exciting adventure options
                    near Zeenath Taj Gardens. Try zip-lining over treetops or
                    challenge yourself with rock climbing. Go mountain biking
                    through rugged trails or test your skills on obstacle
                    courses. These activities are safe, guided, and suited for
                    all experience levels. They add excitement to your stay and
                    get your adrenaline pumping. Perfect for groups, friends, or
                    families looking for outdoor fun. Adventure and nature go
                    hand in hand here!
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
