import "./css/accomodation.css";
import Header from "./Header";
import { rooms } from "./roomsData";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Accomodation() {
  const navigate = useNavigate();
  const [availableRooms, setAvailableRooms] = useState({});

  useEffect(() => {
    // Fetch initial availability for all rooms
    const fetchInitialAvailability = async () => {
      const today = new Date().toISOString().split("T")[0];
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const tomorrowStr = tomorrow.toISOString().split("T")[0];

      const availabilityPromises = rooms.map(async (room) => {
        try {
          const response = await fetch(
            "http://localhost:5000/api/rooms/availability",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                roomId: room.id,
                checkInDate: today,
                checkOutDate: tomorrowStr,
              }),
            }
          );
          const data = await response.json();
          return {
            roomId: room.id,
            available: data.availableRooms > 0,
            message: "Today Available",
            // message: `${data.availableRooms} of ${data.totalRooms} available`,
          };
        } catch (error) {
          console.error(
            `Error checking availability for room ${room.id}:`,
            error
          );
          return {
            roomId: room.id,
            available: true,
            message: "Availability check failed",
          };
        }
      });

      const results = await Promise.all(availabilityPromises);
      const availabilityMap = results.reduce((acc, curr) => {
        acc[curr.roomId] = {
          available: curr.available,
          message: curr.message,
        };
        return acc;
      }, {});

      setAvailableRooms(availabilityMap);
    };

    fetchInitialAvailability();
  }, []);

  return (
    <div id="DiningId">
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

          <div className="row">
            {rooms.map((room) => (
              <div
                key={room.id}
                className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-4"
              >
                <div
                  className={`hover_color ${
                    !availableRooms[room.id]?.available
                      ? "room-unavailable"
                      : ""
                  }`}
                >
                  <img
                    src={room.image}
                    alt={room.name}
                    style={{
                      height: "444px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                  {!availableRooms[room.id]?.available ? (
                    <div className="unavailable-badge">
                      Today Currently Unavailable
                    </div>
                  ) : (
                    <div className="availability-badge">
                      {availableRooms[room.id]?.message}
                    </div>
                  )}
                  <div className="hover_color-inner">
                    <div className="hover_title">
                      <h4>{room.name}</h4>
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
  );
}
