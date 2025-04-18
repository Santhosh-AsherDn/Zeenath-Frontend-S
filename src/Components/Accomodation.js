import "./css/accomodation.css";
import Header from "./Header";
import { rooms } from "./roomsData";
import { useNavigate } from "react-router-dom";

export default function Accomodation() {
  const navigate = useNavigate();

  return (
    <>
      <div id="DiningId">
        {/* Header and Banner Section */}
        <section className="banner-bg-img">
          <Header />
          <div className="container">
            <div className="row">
              <div className="col-xlg-10 col-lg-10 col-md-10 col-sm-12">
                <h1>Accommodation</h1>
              </div>
            </div>
          </div>
        </section>

        {/* Accommodation Description */}
        <section className="accommodation-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center mb-5">
                <div className="accommodation-para">
                  <p>
                    Choose from our array of seven different categories of Rooms
                    and Cottages as per your choice. All our rooms offer a
                    spectacular view of the surrounding greenery, while the
                    interiors reflect the serenity of nature.
                  </p>
                </div>
              </div>
            </div>

            {/* Dynamic Room Cards */}
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
                        <button
                          className="viewmore-btn"
                          onClick={() => navigate(`/room/${room.path}`)}
                        >
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
      </div>
    </>
  );
}
