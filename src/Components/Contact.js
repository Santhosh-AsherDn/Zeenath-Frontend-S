import "./css/contact.css";
import Header from "./Header";
export default function Contact() {
  return (
    <>
      <div id="ContactId">
        <section className="contactfullpage-bg">
          {/* <!-- header start --> */}
          <section id="ContactPageId">
            <Header />
            {/* <!-- header end -->
            <!-- banner section start --> */}
            <div className="container">
              <div className="row">
                <div className="col-xlg-10 col-lg-10 col-md-10 col-sm-12"></div>
              </div>
            </div>
          </section>
          {/* <!-- banner section end -->

        <!-- contact us box section start --> */}
          <section className="contact-box">
            <div className="container contactus-box">
              <div className="row d-flex justify-content-between align-items-center mobileFlexDiv">
                <div className="col-xlg-5 col-lg-5 col-md-6 col-sm-12">
                  <div className="contactus">
                    <h2>Contact Us</h2>
                    <div className="flex-contact-details mb-3">
                      <img
                        src="/images/contactus-page/contactus-bg-icon-1.png"
                        alt=""
                      />
                      <p>
                        ZEENATH TAJ GARDENS,
                        <br />
                        Kottaiyur Village & Post,
                        <br />
                        Yelagiri Hills, Tirupathur Dist,
                        <br />
                        Tamil Nadu-635853
                      </p>
                    </div>
                    <div className="flex-contact-details mb-3">
                      <img
                        src="/images/contactus-page/contactus-bg-icon-2.png"
                        alt=""
                      />
                      <div className="contactpage-number">
                        <a href="tel:9751657458">9751657458</a>
                        <a href="tel:9840083576">9840083576</a>
                        <a href="tel:9840029445">9840029445</a>
                      </div>
                    </div>
                    <div className="flex-contact-details mb-3">
                      <img
                        src="/images/contactus-page/contactus-bg-icon-3.png"
                        alt=""
                      />
                      <div className="contactpage-number">
                        <a href="mailto:info@zeenathtajgardens.com">
                          info@zeenathtajgardens.com
                        </a>
                        <a href="mailto:zeenathtajgardens@gmail.com">
                          zeenathtajgardens@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xlg-7 col-lg-7 col-md-6 col-sm-12">
                  <div className="contactus-img">
                    <img
                      src="/images/contactus-page/contactus-bg-about.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- contact us box section start -->


        <!-- contact page map section start --> */}
          <section className="contact-page-map">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="contact-page-map-title">
                    <h2>Click below for our Location</h2>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 mt-3 mapsSectionMobile">
                  <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3893.783733552595!2d78.62770447366472!3d12.596500122993938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3badaaf21acddda7%3A0x649f3e06540798bf!2sZeenath%20Taj%20Gardens!5e0!3m2!1sen!2sin!4v1740921536940!5m2!1sen!2sin"
                    className="contactpagemap"
                    style={{ border: "20px" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- contact page map section end --> */}
        </section>
      </div>
    </>
  );
}
