import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PDFDownloadLink } from "@react-pdf/renderer";
import InvoicePDF from "./InvoicePDF";
import "./css/PaymentSuccess.css";

export default function PaymentSuccess() {
  const location = useLocation();
  const navigate = useNavigate();
  const [booking, setBooking] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (location.state?.booking) {
      setBooking(location.state.booking);
      setLoading(false);
    } else {
      const paymentId = new URLSearchParams(location.search).get("payment_id");
      if (paymentId) {
        fetchBooking(paymentId);
      } else {
        setError("No booking data found");
        setLoading(false);
      }
    }
  }, [location.state]);

  const fetchBooking = async (paymentId) => {
    try {
      const res = await fetch(`/api/bookings?payment_id=${paymentId}`);
      if (!res.ok) {
        throw new Error("Failed to fetch booking details");
      }
      const data = await res.json();
      setBooking(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="loading">Loading booking details...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  if (!booking)
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading booking details...</p>
      </div>
    );

  return (
    <div className="invoice-container">
      <div className="invoice-header">
        <h1>Booking Confirmed</h1>
        <p>Your reservation at Zeenath Taj Garden is confirmed</p>
      </div>

      <div className="invoice-preview">
        <div className="hotel-info">
          <img
            src="./images/zeenath-logo.svg"
            alt="Zeenath Taj Garden"
            style={{ width: "100px", margin: "20px", height: "100px" }}
          />
          <h2>ZEENATH TAJ GARDEN</h2>
          <p>Kottaiyur Village, Yelagiri Hills, Yelagiri,</p>
          <p>Tamil Nadu-635853.</p>
          <p>
            Phone: 04179-245 231 | Mobile: 9751657458 / 9840083576 / 9840029445
          </p>
          <p> Email: info@zeenathtajgardens.com</p>
        </div>

        <div className="invoice-details">
          <div className="detail-section">
            <h3>INVOICE DETAILS</h3>
            <p>
              <strong>Invoice No:</strong> {booking._id}
            </p>
            <p>
              <strong>Date:</strong> {new Date().toLocaleDateString()}
            </p>
            <p>
              <strong>Check-In:</strong>{" "}
              {new Date(booking.checkInDate).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
            <p>
              <strong>Check-Out:</strong>{" "}
              {new Date(booking.checkOutDate).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
            <p>
              <strong>Booked Rooms:</strong> {booking.NoofRoom}
            </p>
          </div>

          <div className="guest-section">
            <h3>GUEST DETAILS</h3>
            <p>
              <strong>Name:</strong> {booking.name}
            </p>
            <p>
              <strong>Email:</strong> {booking.email}
            </p>
            <p>
              <strong>Phone:</strong> {booking.mobilenumber}
            </p>
            {booking.address && (
              <p>
                <strong>Address:</strong> {booking.address}
              </p>
            )}
          </div>
        </div>

        <div className="booking-summary">
          <table>
            <thead>
              <tr>
                <th>Description</th>
                <th>Nights</th>
                <th>Rate</th>
                <th>Amount (₹)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{booking.roomName}</td>
                <td>{booking.numberofNights}</td>
                <td>
                  ₹
                  {(
                    (booking.subtotal || 0) /
                    (booking.numberofNights || 1) /
                    (booking.NoofRoom || 1)
                  ).toFixed(2)}
                </td>
                <td>₹{(booking.subtotal || 0).toFixed(2)}</td>
              </tr>
              {booking.extraBed > 0 && (
                <tr>
                  <td>Extra Bed ({booking.extraBed})</td>
                  <td>{booking.numberofNights}</td>
                  <td>₹600.00</td>
                  <td>
                    ₹
                    {(
                      (booking.extraBed || 0) *
                      600 *
                      (booking.numberofNights || 1)
                    ).toFixed(2)}
                  </td>
                </tr>
              )}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="3">
                  <strong>Subtotal</strong>
                </td>
                <td>
                  <strong>₹{(booking.subtotal || 0).toFixed(2)}</strong>
                </td>
              </tr>
              <tr>
                <td colSpan="3">
                  <strong>GST ({booking.gstPercentage || 12}%)</strong>
                </td>
                <td>
                  <strong>₹{(booking.gstAmount || 0).toFixed(2)}</strong>
                </td>
              </tr>
              <tr className="total-row">
                <td colSpan="3">
                  <strong>Total</strong>
                </td>
                <td>
                  <strong>₹{(booking.total || 0).toFixed(2)}</strong>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div className="payment-info">
          <p>
            <strong>Payment Status:</strong>{" "}
            <span className="status-paid">Paid</span>
          </p>
          <p>
            <strong>Payment ID:</strong> {booking.razorpayPaymentId}
          </p>
        </div>

        <div className="notes">
          <p>
            <strong>Amount in words:</strong> {numberToWords(booking.total)}{" "}
            Rupees Only
          </p>
        </div>
      </div>

      <div className="invoice-actions">
        <PDFDownloadLink
          document={<InvoicePDF booking={booking} />}
          fileName={`Zeenath-Taj-Invoice-${booking._id}.pdf`}
          className="download-btn"
        >
          {({ loading }) => (
            <button className="btn-primary">
              {loading ? "Generating PDF..." : "Download Invoice"}
            </button>
          )}
        </PDFDownloadLink>
        <button onClick={() => navigate("/")} className="btn-secondary">
          Back to Home
        </button>
      </div>
    </div>
  );
}

function numberToWords(num) {
  if (typeof num !== "number" || isNaN(num) || num < 0) return "Invalid amount";

  const a = [
    "",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ];
  const b = [
    "",
    "",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ];

  const numberToWordsHelper = (n) => {
    if (n < 20) return a[n];
    if (n < 100) return b[Math.floor(n / 10)] + (n % 10 ? " " + a[n % 10] : "");
    if (n < 1000)
      return (
        a[Math.floor(n / 100)] +
        " Hundred" +
        (n % 100 ? " " + numberToWordsHelper(n % 100) : "")
      );
    if (n < 100000)
      return (
        numberToWordsHelper(Math.floor(n / 1000)) +
        " Thousand" +
        (n % 1000 ? " " + numberToWordsHelper(n % 1000) : "")
      );
    if (n < 10000000)
      return (
        numberToWordsHelper(Math.floor(n / 100000)) +
        " Lakh" +
        (n % 100000 ? " " + numberToWordsHelper(n % 100000) : "")
      );
    return (
      numberToWordsHelper(Math.floor(n / 10000000)) +
      " Crore" +
      (n % 10000000 ? " " + numberToWordsHelper(n % 10000000) : "")
    );
  };

  const numInt = Math.floor(num);
  if (numInt === 0) return "Zero Rupees Only";

  return numberToWordsHelper(numInt) + " Rupees Only";
}
