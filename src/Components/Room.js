import "./css/superdeluxe.css";
import Header from "./Header";
import Carousel from "react-bootstrap/Carousel";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { rooms } from "./roomsData";

export default function Room() {
  const { roomPath } = useParams();
  const navigate = useNavigate();
  const room = rooms.find((r) => r.path.toString() === roomPath);
  const [currentDate, setCurrentDate] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [dateError, setDateError] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });

    // Set today's date as the default and minimum
    const today = new Date();
    const formattedDate = today.toISOString().split("T")[0];
    setCurrentDate(formattedDate);
    setCheckInDate(formattedDate);

    // Set default checkout to tomorrow
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setCheckOutDate(tomorrow.toISOString().split("T")[0]);
  }, []);

  if (!room) return <div>Room not found</div>;

  const handleDateChange = (e) => {
    const { id, value } = e.target;

    if (id === "checkInDate") {
      setCheckInDate(value);

      // Ensure checkout is after checkin
      const checkIn = new Date(value);
      const checkOut = new Date(checkOutDate);

      if (checkOut <= checkIn) {
        // Set checkout to the day after checkin
        const nextDay = new Date(checkIn);
        nextDay.setDate(nextDay.getDate() + 1);
        setCheckOutDate(nextDay.toISOString().split("T")[0]);
      }
    } else if (id === "checkOutDate") {
      const newCheckOut = new Date(value);
      const checkIn = new Date(checkInDate);

      if (newCheckOut <= checkIn) {
        setDateError("Check-out date must be after check-in date");
      } else {
        setDateError("");
        setCheckOutDate(value);
      }
    }
  };

  const handleBook = (e) => {
    e.preventDefault();

    // Validate dates
    const startDate = new Date(checkInDate);
    const endDate = new Date(checkOutDate);

    if (startDate >= endDate) {
      setDateError("Check-out date must be after check-in date");
      return;
    }

    navigate(
      `/booking?roomPath=${room.path}&checkInDate=${checkInDate}&checkOutDate=${checkOutDate}`
    );
  };

  return (
    <div id="DeluxeChaletId">
      <section
        className="dining-banner-img"
        style={{ backgroundImage: `url(${room.image})` }}
      >
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-xlg-10 col-lg-10 col-md-10 col-sm-12">
              <h1>{room.name}</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="diningaboutstart">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-xlg-6 col-lg-6 col-md-6 col-sm-12">
              <div className="diningaboutpara">
                <p
                  className="mb-3"
                  data-aos="fade-right"
                  data-aos-duration="500"
                >
                  {room.description}
                </p>
                <div
                  className="flex1"
                  data-aos="fade-right"
                  data-aos-duration="600"
                >
                  <div className="diningparalis1">
                    <p>
                      <img
                        src={require("../images/icon/diningaboutimg-1.png")}
                        alt=""
                        style={{ marginRight: "8px" }}
                      />
                      Suitable for {room.occupancy}
                    </p>
                  </div>
                  <div className="diningparalis1">
                    <p>
                      <img
                        src={require("../images/icon/diningaboutimg-2.png")}
                        alt=""
                        style={{ marginRight: "8px" }}
                      />
                      {room.size}
                    </p>
                  </div>
                  <div
                    className="flex2 mb-4"
                    data-aos="fade-right"
                    data-aos-duration="700"
                  >
                    <div className="diningparalis1">
                      <p>
                        <img
                          src={require("../images/icon/diningaboutimg-3.png")}
                          alt=""
                          style={{ marginRight: "8px" }}
                        />
                        Complementary Breakfast
                      </p>
                    </div>
                  </div>
                  <div className="diningparalis1">
                    <p>
                      <img
                        src={require("../images/icon/diningaboutimg-4.png")}
                        alt=""
                        style={{ marginRight: "8px" }}
                      />
                      Pet Friendly
                    </p>
                  </div>
                </div>
                <div
                  className="diningaboutul"
                  data-aos="fade-right"
                  data-aos-duration="800"
                >
                  <p>
                    <strong>Rate per night:</strong> ₹{room.rate} + {room.gst}{" "}
                    GST
                  </p>
                  <p>
                    <strong>Extra Bed Rate:</strong> ₹{room.extraBedRate} +{" "}
                    {room.gst}
                    {" GST"}
                  </p>
                  <p>
                    <strong>{room.cancel}</strong>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xlg-6 col-lg-6 col-md-6 col-sm-12">
              <div className="diningaboutimg">
                <img src={room.gallery[1]} alt={room.name} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ameneties-section-start">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div
              className="col-xlg-6 col-lg-6 col-md-6 col-sm-12"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <div className="ameneties-title mb-5">
                <h2>Amenities</h2>
              </div>

              {(() => {
                const chunkArray = (arr, size) => {
                  const chunks = [];
                  for (let i = 0; i < arr.length; i += size) {
                    chunks.push(arr.slice(i, i + size));
                  }
                  return chunks;
                };

                const amenityRows = chunkArray(room.amenities, 3);

                return amenityRows.map((row, rowIndex) => (
                  <div
                    className="col-xlg-12 col-lg-12 col-md-4 col-sm-12"
                    key={rowIndex}
                  >
                    <div className="amenetiesflex">
                      {row.map((amenity, i) => (
                        <div className="amenetiesone" key={i}>
                          {typeof amenity === "string" ? (
                            <>
                              <i
                                className="fa fa-check-circle"
                                aria-hidden="true"
                              ></i>
                              <p>{amenity}</p>
                            </>
                          ) : (
                            <>
                              <img
                                src={amenity.icon}
                                alt={amenity.label || "Amenity"}
                                style={{
                                  width: "50px",
                                  height: "50px",
                                  marginRight: "8px",
                                }}
                              />
                              <p>{amenity.label}</p>
                            </>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ));
              })()}
            </div>

            <div
              className="col-xlg-6 col-lg-6 col-md-6 col-sm-12"
              id="checkincheckout"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <form
                className=" align-items-center gap-4 mb-5"
                onSubmit={handleBook}
              >
                <div className="ameneties-check">
                  <div className="check-in align-items-center gap-2">
                    <p className="mb-0">Check In</p>
                    <input
                      type="date"
                      min={currentDate}
                      required
                      id="checkInDate"
                    />
                  </div>
                  <div className="check-out align-items-center gap-2">
                    <p className="mb-0">Check Out</p>
                    <input
                      type="date"
                      min={currentDate}
                      required
                      id="checkOutDate"
                    />
                  </div>
                  <button type="submit" className="diningbooknowbtn">
                    Book Now
                  </button>
                </div>
              </form>
              <p className="booknowbutton">
                {" "}
                For any further assistant please contact the Reservation at
              </p>
              <div className="callbtnno">
                <a href="tel:9751657458"> 9751657458 |</a>
                <a href="tel:9840083576"> 9840083576 |</a>
                <a href="tel:9840029445"> 9840029445</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-xlg-6 col-lg-6 col-md-6 col-sm-12"></div>
            <div className="col-xlg-6 col-lg-6 col-md-6 col-sm-12"></div>
          </div>
        </div>
        <div className="deluxeChLAETfLEX">
          <div
            id="deluxeChaletGallery1"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            <div className="dlewxusdjdjf">
              <h4 className="gallwerytext">Gallery</h4>
              <p className="galleryCaption">
                Discover the beauty of our exclusive accommodation
              </p>
            </div>
          </div>
          <div id="SuperDeluxeGallery2">
            <Carousel>
              {room.gallery.map((img, index) => (
                <Carousel.Item key={index} interval={1500}>
                  <img src={img} alt={`Slide ${index + 1}`} />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      </section>
    </div>
  );
}
