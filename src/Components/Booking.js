import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Razorpay from 'razorpay';
import { rooms } from "./roomsData";
import "./css/booking.css";
import Header from "./Header";
import sendInvoiceToBackend from "./SendInvoice";
export default function Booking() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const roomPath = queryParams.get("roomPath");
  const checkInDate = queryParams.get("checkInDate");
  const checkOutDate = queryParams.get("checkOutDate");
  const room = rooms.find((r) => r.path === roomPath);

  const [roomQuantity, setRoomQuantity] = useState(1); // Default to 1 room
  const [bedQuantity, setBedQuantity] = useState(0);
  const [numberOfAdults, setNumberOfAdults] = useState(
    room?.capacity?.adults > 0 ? 1 : 0
  ); // Default to 1 adult if possible
  const [numberOfChildren, setNumberOfChildren] = useState(0);
  const [isAvailable, setIsAvailable] = useState(true);
  const [availabilityMessage, setAvailabilityMessage] = useState("");
  const [maxAvailableRooms, setMaxAvailableRooms] = useState(
    room?.numberOfRooms || 0
  );
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    mobilenumber: "",
    address: "",
    NoofRoom: "", // Default to 1 room
    extraBed: "0",
    adults: room?.capacity?.adults > 0 ? "1" : "0", // Default to 1 adult if possible
    children: "0",
  });

  // Check availability on component mount and when dates or room change
  useEffect(() => {
    const checkAvailability = async () => {
      if (!room || !checkInDate || !checkOutDate) {
        console.log("Missing required data for availability check:", {
          room,
          checkInDate,
          checkOutDate,
        });
        return;
      }

      try {
        console.log("Checking availability for:", {
          roomId: room.id,
          checkInDate,
          checkOutDate,
        });

        const response = await fetch(
          "http://localhost:5000/api/rooms/availability",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              roomId: room.id,
              checkInDate,
              checkOutDate,
            }),
          }
        );

        const data = await response.json();
        console.log("Availability response:", data);

        if (!response.ok) {
          throw new Error(
            data.message || `HTTP error! status: ${response.status}`
          );
        }

        if (data.availableRooms === undefined) {
          throw new Error("Invalid response format from server");
        }

        // Update state with availability info
        setMaxAvailableRooms(data.availableRooms);

        if (data.availableRooms <= 0) {
          setIsAvailable(false);
          setAvailabilityMessage("No rooms available for selected dates");
          setRoomQuantity(0);
        } else {
          setIsAvailable(true);
          setAvailabilityMessage(`${data.availableRooms} rooms available`);

          // Ensure roomQuantity is valid
          if (roomQuantity > data.availableRooms) {
            setRoomQuantity(data.availableRooms);
          }
        }

        // Update input fields to match state
        setInputs((prev) => ({
          ...prev,
          NoofRoom: roomQuantity.toString(),
          extraBed: bedQuantity.toString(),
          adults: numberOfAdults.toString(),
          children: numberOfChildren.toString(),
        }));
      } catch (error) {
        console.error("Availability check failed:", error);
        setIsAvailable(false);
        setAvailabilityMessage(`Error checking availability: ${error.message}`);
      }
    };

    checkAvailability();
  }, [room, checkInDate, checkOutDate]);

  // Calculate the number of nights
  const calculateNights = () => {
    if (checkInDate && checkOutDate) {
      const start = new Date(checkInDate);
      const end = new Date(checkOutDate);
      const diffTime = Math.abs(end - start);
      return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    }
    return 0;
  };

  const numberofNights = calculateNights();

  // Calculate Total price
  const calculateTotal = () => {
    if (!room)
      return {
        roomTotal: 0,
        bedTotal: 0,
        gstAmount: 0,
        gstPercentage: 0,
        subTotal: 0,
        total: 0,
      };

    // Convert all values to numbers
    const roomRate = Number(room.rate);
    const extraBedRate = Number(room.extraBedRate);
    const gstPercentage = Number(room.gstPercentage);
    const roomTotal = roomQuantity * roomRate * numberofNights;
    const bedTotal = bedQuantity * extraBedRate * numberofNights;
    const subTotal = roomTotal + bedTotal;
    const gstAmount = subTotal * (gstPercentage / 100);

    return {
      roomTotal,
      bedTotal,
      gstAmount,
      gstPercentage,
      subTotal,
      total: subTotal + gstAmount,
    };
  };

  const totals = calculateTotal();

  const handleRoomDecrement = () => {
    if (roomQuantity > 0) {
      const newValue = roomQuantity - 1;
      setRoomQuantity(newValue);
      setInputs((prev) => ({ ...prev, NoofRoom: newValue.toString() }));
    }
  };

  const handleRoomIncrement = () => {
    if (roomQuantity < maxAvailableRooms) {
      const newValue = roomQuantity + 1;
      setRoomQuantity(newValue);
      setInputs((prev) => ({ ...prev, NoofRoom: newValue.toString() }));
    } else {
      toast(`Only ${maxAvailableRooms} rooms available for selected dates`);
    }
  };

  const handleExtraBedDecrement = () => {
    if (bedQuantity > 0) {
      const newValue = bedQuantity - 1;
      setBedQuantity(newValue);
      setInputs((prev) => ({ ...prev, extraBed: newValue.toString() }));
    }
  };

  const handleExtraBedIncrement = () => {
    if (bedQuantity < roomQuantity) {
      // Only allow one extra bed per room
      const newValue = bedQuantity + 1;
      setBedQuantity(newValue);
      setInputs((prev) => ({ ...prev, extraBed: newValue.toString() }));
    } else {
      toast("Maximum one extra bed per room allowed");
    }
  };

  const handleAdultsDecrement = () => {
    if (numberOfAdults > 1) {
      // Always keep at least 1 adult
      const newValue = numberOfAdults - 1;
      setNumberOfAdults(newValue);
      setInputs((prev) => ({ ...prev, adults: newValue.toString() }));
    }
  };

  const handleAdultsIncrement = () => {
    if (!room) return;

    const maxAdults = room.capacity.adults * roomQuantity; // e.g., 2 adults per room
    if (numberOfAdults < maxAdults) {
      const newValue = numberOfAdults + 1;
      setNumberOfAdults(newValue);
      setInputs((prev) => ({ ...prev, adults: newValue.toString() }));
    } else {
      toast(`Maximum ${maxAdults} adults allowed for ${roomQuantity} room(s)`);
    }
  };

  const handleChildrenDecrement = () => {
    if (numberOfChildren > 0) {
      const newValue = numberOfChildren - 1;
      setNumberOfChildren(newValue);
      setInputs((prev) => ({ ...prev, children: newValue.toString() }));
    }
  };

  const handleChildrenIncrement = () => {
    if (!room) return;

    const maxChildren = room.capacity.children * roomQuantity; // e.g., 1 child per room
    if (numberOfChildren < maxChildren) {
      const newValue = numberOfChildren + 1;
      setNumberOfChildren(newValue);
      setInputs((prev) => ({ ...prev, children: newValue.toString() }));
    } else {
      toast(
        `Maximum ${maxChildren} children allowed for ${roomQuantity} room(s)`
      );
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));

    // Also update state values for controlled components
    switch (name) {
      case "NoofRoom":
        const roomVal = parseInt(value) || 0;
        if (roomVal >= 0 && roomVal <= maxAvailableRooms) {
          setRoomQuantity(roomVal);
        }
        break;
      case "extraBed":
        const bedVal = parseInt(value) || 0;
        if (bedVal >= 0) {
          setBedQuantity(bedVal);
        }
        break;
      case "adults":
        const adultsVal = parseInt(value) || 0;
        if (adultsVal >= 0) {
          setNumberOfAdults(adultsVal);
        }
        break;
      case "children":
        const childrenVal = parseInt(value) || 0;
        if (childrenVal >= 0) {
          setNumberOfChildren(childrenVal);
        }
        break;
    }
  };

  const handleBooking = async () => {
    if (
      !inputs.name ||
      !inputs.email ||
      !inputs.mobilenumber ||
      !inputs.address
    ) {
      toast(
        "Please fill in all required fields: Name, Email, Mobile Number and Address"
      );
      return;
    }

    if (!room) {
      toast("Room information not available. Please try again.");
      return;
    }

    if (roomQuantity <= 0) {
      toast("Please select at least one room.");
      return;
    }

    if (numberOfAdults <= 0) {
      toast("Please select at least one adult.");
      return;
    }

    const maxAdults = room.capacity.adults * roomQuantity;
    if (numberOfAdults > maxAdults) {
      toast(`Maximum ${maxAdults} adults allowed for ${roomQuantity} room(s)`);
      return;
    }

    // Prepare payment payload
    const payload = {
      name: inputs.name,
      email: inputs.email,
      mobilenumber: inputs.mobilenumber,
      address: inputs.address || "",
      roomId: room.id,
      roomName: room.name,
      checkInDate: checkInDate,
      checkOutDate: checkOutDate,
      numberofNights: numberofNights,
      NoofRoom: roomQuantity,
      extraBed: bedQuantity,
      adults: numberOfAdults,
      children: numberOfChildren,
      subtotal: totals.subTotal,
      gstPercentage: totals.gstPercentage,
      gstAmount: totals.gstAmount,
      total: totals.total,
      amount: Math.round(totals.total * 100), // Amount in paisa for Razorpay
      currency: "INR",
      receipt: `order_${Date.now()}`,
      notes: {
        bookingDetails: JSON.stringify({
          roomId: room.id,
          checkInDate,
          checkOutDate,
          roomName: room.name,
        }),
      },
    };

    try {
      // Verify again that rooms are available
      const availabilityResponse = await fetch(
        "http://localhost:5000/api/rooms/availability",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            roomId: room.id,
            checkInDate,
            checkOutDate,
          }),
        }
      );

      const availabilityData = await availabilityResponse.json();
      if (
        !availabilityResponse.ok ||
        availabilityData.availableRooms < roomQuantity
      ) {
        toast(
          `Only ${availabilityData.availableRooms} rooms available. Please adjust your selection.`
        );
        setMaxAvailableRooms(availabilityData.availableRooms);
        return;
      }

      // Request for payment order details
      const res = await fetch(
        "http://localhost:5000/api/payments/create-order",
        {
          method: "POST",
          body: JSON.stringify(payload),
          headers: { "Content-Type": "application/json" },
        }
      );

      const data = await res.json();

      if (!res.ok) {
        console.error("Backend error response:", data);
        throw new Error(data.message || "Failed to create booking");
      }

      // Initialize RazorPay with the payment data
      const options = {
        key: data.paymentData.key,
        amount: data.paymentData.amount,
        currency: data.paymentData.currency,
        order_id: data.orderId,
        name: "Zeenath Taj Garden",
        description: `Booking for ${room.name}`,
        handler: async (response) => {
          // Payment successful, send the payment data to your server
          try {
            const verificationResponse = await fetch(
              "http://localhost:5000/api/payments/payment-success",
              {
                method: "POST",
                body: JSON.stringify({
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_signature: response.razorpay_signature,
                  email: inputs.email,
                  bookingDetails: {
                    name: inputs.name,
                    email: inputs.email,
                    mobilenumber: inputs.mobilenumber,
                    address: inputs.address,
                    roomId: room.id,
                    roomName: room.name,
                    checkInDate: checkInDate,
                    checkOutDate: checkOutDate,
                    numberofNights: numberofNights,
                    NoofRoom: roomQuantity,
                    extraBed: bedQuantity,
                    adults: numberOfAdults,
                    children: numberOfChildren,
                    subtotal: totals.subTotal,
                    gstAmount: totals.gstAmount,
                    gstPercentage: totals.gstPercentage,
                    total: totals.total,
                  },
                }),
                headers: { "Content-Type": "application/json" },
              }
            );

            if (!verificationResponse.ok) {
              const errorData = await verificationResponse.json();
              throw new Error(
                errorData.message || "Payment verification failed"
              );
            }

            const booking = await verificationResponse.json();

            // After receiving success response from verifyPayment
            const completeBooking = {
              ...payload,
              _id: booking.bookingId,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpayOrderId: response.razorpay_order_id,
              razorpaySignature: response.razorpay_signature,
              status: "Confirmed",
              paymentDate: new Date().toISOString(),
            };

            // Generate and send invoice
            await sendInvoiceToBackend(completeBooking);

            // Navigate to success page with data
            navigate("/payment-success", {
              state: {
                booking: completeBooking,
              },
            });
          } catch (error) {
            console.error("Payment Verification Failed:", error);
            toast(
              "Payment successful but verification failed. Please contact support with your payment ID: " +
                response.razorpay_payment_id
            );
          }
        },
        modal: {
          ondismiss: () => {
            toast("Payment Cancelled. Please Try Again.");
          },
        },
        prefill: {
          name: inputs.name,
          email: inputs.email,
          contact: inputs.mobilenumber,
        },
        theme: {
          color: "#F37254",
        },
      };

      // Make sure Razorpay is loaded
      if (window.Razorpay) {
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
      } else {
        toast("Payment gateway not available. Please try again later.");
      }
    } catch (error) {
      console.error("Booking failed:", error);
      toast(`Booking failed: ${error.message}`);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!room) {
    return (
      <div className="container text-center mt-5">
        <h2>Room not found</h2>
        <p>Please go back and choose a valid room.</p>
        <button className="btn btn-primary mt-3" onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div id="BookingId">
        {/* <!-- banner section start --> */}
        <section className="deluxe-chalet-banner1">
          <Header />
          {/* <!-- header end --> */}
          <div className="container">
            <div className="row"></div>
          </div>
        </section>
        {/* <!-- banner section end --> */}

        {/* <!-- booking form start --> */}
        <section className="booking-form-section py-5">
          <div className="bookingdetails">
            <h2>Booking Details</h2>
          </div>
          <div className="container" id="bookingform-bg-color">
            <div className="row justify-content-center">
              <div className="col-8">
                <form className="booking-form">
                  <div
                    className="BannerBookingSection"
                    style={{
                      backgroundImage: `url(${room.gallery[0]})`,
                    }}
                  >
                    <div className="BookingNameSectionflexconatiner">
                      <img
                        src="/images/booking-form-images/Booking-DeluxeChalet.png"
                        alt="booking-image"
                      />
                      <div className="BookingNameSection">
                        <div className="bookingcONTENTcHALET">{room.name}</div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-3">
                      <label>Name</label>
                    </div>
                    <div className="col-md-9">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Your Name"
                        name="name"
                        onChange={handleChange}
                        value={inputs.name}
                      />
                    </div>

                    <div className="col-md-3">
                      <label>Email Id</label>
                    </div>
                    <div className="col-md-9">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter Your Email ID"
                        name="email"
                        onChange={handleChange}
                        value={inputs.email}
                      />
                    </div>

                    <div className="col-md-3">
                      <label>Mobile No</label>
                    </div>
                    <div className="col-md-9">
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="9876543210"
                        name="mobilenumber"
                        onChange={handleChange}
                        value={inputs.mobilenumber}
                      />
                    </div>

                    <div className="col-md-3">
                      <label>Address</label>
                    </div>
                    <div className="col-md-9">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Your Address"
                        name="address"
                        onChange={handleChange}
                        value={inputs.address}
                      />
                    </div>
                    <div className="col-md-3">
                      <label>Room</label>
                    </div>
                    <div className="col-md-3">
                      <div className="form-group row">
                        <div className="col-sm-10 d-flex align-items-center">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            id="room-decrement"
                            onClick={handleRoomDecrement}
                            disabled={roomQuantity <= 0 || !isAvailable}
                          >
                            -
                          </button>
                          <input
                            type="number"
                            className="form-control"
                            id="room-quantity"
                            min="0"
                            max={room.numberOfRooms}
                            readOnly
                            value={roomQuantity}
                            onChange={handleChange}
                            name="NoofRoom"
                          />
                          <button
                            type="button"
                            className="btn btn-secondary"
                            id="room-increment"
                            onClick={handleRoomIncrement}
                            disabled={!isAvailable}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      {availabilityMessage && (
                        <div
                          className={`alert ${
                            isAvailable ? "alert-success" : "alert-danger"
                          }`}
                        >
                          {availabilityMessage}
                        </div>
                      )}
                    </div>
                    <div className="col-md-3">
                      <label>Extra Bed</label>
                    </div>
                    <div className="col-md-3">
                      <div className="form-group row">
                        <div className="col-sm-10 d-flex align-items-center">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            id="extra-bed-decrement"
                            onClick={handleExtraBedDecrement}
                          >
                            -
                          </button>
                          <input
                            type="number"
                            className="form-control"
                            id="extra-bed-quantity"
                            min="0"
                            readOnly
                            value={bedQuantity}
                            onChange={handleChange}
                            name="extraBed"
                          />
                          <button
                            type="button"
                            className="btn btn-secondary"
                            id="extra-bed-increment"
                            onClick={handleExtraBedIncrement}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <label className="thisonlymargintop">Person</label>
                    </div>
                    <div className="col-md-9">
                      <div className="row">
                        <div className="col-md-6">
                          <label className="small">Adults</label>
                          <div className="form-group row">
                            <div className="col-sm-10 d-flex align-items-center">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                id="adult-decrement"
                                onClick={handleAdultsDecrement}
                              >
                                -
                              </button>
                              <input
                                type="number"
                                className="form-control "
                                id="adult-quantity"
                                min="0"
                                readOnly
                                value={numberOfAdults}
                                onChange={handleChange}
                                name="adults"
                              />
                              <button
                                type="button"
                                className="btn btn-secondary"
                                id="adult-increment"
                                onClick={handleAdultsIncrement}
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <label className="small">
                            Children (0 - 12 Years)
                          </label>
                          <div className="col-md-6">
                            <div className="form-group row">
                              <div className="col-sm-10 d-flex align-items-center childrensWidth">
                                <button
                                  type="button"
                                  className="btn btn-secondary"
                                  id="children-decrement"
                                  onClick={handleChildrenDecrement}
                                >
                                  -
                                </button>
                                <input
                                  type="number"
                                  className="form-control "
                                  id="children-quantity"
                                  min="0"
                                  readOnly
                                  value={numberOfChildren}
                                  onChange={handleChange}
                                  name="children"
                                />
                                <button
                                  type="button"
                                  className="btn btn-secondary"
                                  id="children-increment"
                                  onClick={handleChildrenIncrement}
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="container" id="room1details">
            <div className="row">
              <div className="col-lg-12">
                <div className="booking-summary p-5">
                  <h2 className="mb-2">Room 1</h2>
                  <h3>{room.name}</h3>
                  <p className="text-success">Including Breakfast</p>

                  <div className="booking-dates my-4">
                    <div className="">
                      <h4>Check In</h4>
                      <p>{checkInDate}</p>
                    </div>
                    <div className="">
                      <h4>Check Out</h4>
                      <p>{checkOutDate}</p>
                    </div>
                    <div className="nights">
                      <h4>No of Nights</h4>
                      <p>{numberofNights}</p>
                    </div>
                  </div>

                  <div className="pricing-details mt-4">
                    <div className="pricelistflex mb-4 marginPriceFlex">
                      <span className="bookingCottage">
                        Cottage {roomQuantity} x {numberofNights} Nights
                      </span>
                      {/* <span className="bookingPrice">INR 5500.00</span> */}
                      <span className="bookingPrice">
                        INR {totals.roomTotal.toFixed(2)}
                      </span>
                    </div>
                    <div className="pricelistflex mb-4">
                      <span className="bookingCottage">
                        Extra Bed x {numberofNights} night{" "}
                      </span>
                      <span className="bookingPrice">
                        INR {totals.bedTotal.toFixed(2)}
                      </span>
                    </div>
                    <div className="pricelistflex mb-4">
                      <span className="bookingCottage">GST {room.gst}</span>
                      <span className="bookingPrice">
                        INR {totals.gstAmount.toFixed(2)}
                      </span>
                    </div>
                    <div className="pricelistflex mt-3 pt-3 border-bottom">
                      <strong className="bookingCottage">Sub Total</strong>
                      <strong className="bookingPrice">
                        INR {totals.total.toFixed(2)}
                      </strong>
                    </div>
                  </div>
                </div>

                <div className="ProceedTocheckoutFlex">
                  <button className="ProceedTocheckout" onClick={handleBooking}>
                    Proceed to Check out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- booking form end --> */}
      </div>
    </>
  );
}
