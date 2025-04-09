import { useState } from "react";
//alter code
import { useLocation } from "react-router-dom";
import { rooms } from "./roomsData";
import "./css/booking.css";
import Header from "./Header";
export default function Booking() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const roomId = queryParams.get("roomId");
  const checkInDate = queryParams.get("checkInDate");
  const checkOutDate = queryParams.get("checkOutDate");
  const room = rooms.find((r) => r.id === parseInt(roomId));
  const [roomQuantity, setRoomQuantity] = useState(0);
  const [bedQuantity, setBedQuantity] = useState(0);
  const [numberOfAdults, setNumberOfAdults] = useState(0);
  const [numberOfChildren, setNumberOfChildren] = useState(0);
  const [data, setData] = useState([]);
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    mobilenumber: "",
    address: "",
    NoofRoom: "",
    extraBed: "",
    adults: "",
    children: "",
  });

  // calculate the number of nights

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
    const roomTotal = roomQuantity * room.rate * numberofNights;
    const bedTotal = bedQuantity * room.extraBedRate * numberofNights;
    const subTotal = roomTotal + bedTotal;
    const gstAmount = subTotal * (parseInt(room.gst) / 100);
    return {
      roomTotal,
      bedTotal,
      gstAmount,
      subTotal,
      total: subTotal + gstAmount,
    };
  };

  const totals = calculateTotal();
  const [editIndex, setEditIndex] = useState(null);

  const handleRoomDecrement = () => {
    if (roomQuantity > 0) {
      setRoomQuantity(roomQuantity - 1);
    }
  };
  const handleRoomIncrement = () => {
    setRoomQuantity(roomQuantity + 1);
  };

  const handleExtraBedDecrement = () => {
    if (bedQuantity > 0) {
      setBedQuantity(bedQuantity - 1);
    }
  };
  const handleExtraBedIncrement = () => {
    if (bedQuantity < 1) {
      setBedQuantity(bedQuantity + 1);
    }
  };

  const handleAdultsDecrement = () => {
    if (numberOfAdults > 0) {
      setNumberOfAdults(numberOfAdults - 1);
    }
  };
  const handleAdultsIncrement = () => {
    setNumberOfAdults(numberOfAdults + 1);
  };

  const handleChildrenDecrement = () => {
    if (numberOfAdults > 0) {
      setNumberOfChildren(numberOfChildren - 1);
    }
  };
  const handleChildrenIncrement = () => {
    setNumberOfChildren(numberOfChildren + 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
    console.log(inputs);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex === null) {
      setData([
        ...data,
        {
          ...inputs,
          NoofRoom: roomQuantity,
          extraBed: bedQuantity,
          adults: numberOfAdults,
          children: numberOfChildren,
        },
      ]);
    } else {
      const updatedData = [...data];
      updatedData[editIndex] = { ...inputs, NoofRoom: roomQuantity };
      updatedData[editIndex] = { ...inputs, extraBed: bedQuantity };
      updatedData[editIndex] = { ...inputs, adults: numberOfAdults };
      updatedData[editIndex] = { ...inputs, children: numberOfChildren };
      setData(updatedData);
      setEditIndex(null);
    }

    console.log(data);

    setInputs({
      name: "",
      email: "",
      mobilenumber: "",
      address: "",
      NoofRoom: "",
      extraBed: "",
      adults: "",
      children: "",
    });
    setRoomQuantity(0);
    setBedQuantity(0);
    setNumberOfChildren(0);
    setNumberOfAdults(0);
  };

  return (
    <>
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
                <form onSubmit={handleSubmit} className="booking-form">
                  <div
                    className="BannerBookingSection"
                    style={{
                      backgroundImage: `url(${room.gallery[0]})`,
                    }}
                  >
                    <div className="BookingNameSectionflexconatiner">
                      <img
                        src={require("../images/booking-form-images/Booking-DeluxeChalet.png")}
                        
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
                        placeholder="Name"
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
                        placeholder="abcdefghi@gmail.com"
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
                        placeholder="9551091354"
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
                        placeholder="NO 1, 1st Street, Chandru Apartment, Porur, Chennai-82."
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
                          >
                            -
                          </button>
                          <input
                            type="number"
                            className="form-control"
                            id="room-quantity"
                            min="0"
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
                          >
                            +
                          </button>
                        </div>
                      </div>
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
                        INR {totals.roomTotal.toFixed(2)}.00
                      </span>
                    </div>
                    <div className="pricelistflex mb-4">
                      <span className="bookingCottage">
                        Extra Bed x {numberofNights} night{" "}
                      </span>
                      <span className="bookingPrice">
                        INR {totals.bedTotal.toFixed(2)}.00
                      </span>
                    </div>
                    <div className="pricelistflex mb-4">
                      <span className="bookingCottage">GST {room.gst}</span>
                      <span className="bookingPrice">
                        INR {totals.gstAmount.toFixed(2)}00
                      </span>
                    </div>
                    <div className="pricelistflex mt-3 pt-3 border-bottom">
                      <strong className="bookingCottage">Sub Total</strong>
                      <strong className="bookingPrice">
                        INR {totals.total.toFixed(2)}00
                      </strong>
                    </div>
                  </div>
                </div>

                <div className="ProceedTocheckoutFlex">
                  <button className="ProceedTocheckout" onClick={handleSubmit}>
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
