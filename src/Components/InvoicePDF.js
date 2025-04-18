import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

// Currency formatter
const formatCurrency = (amount) =>
  typeof amount === "number" ? `${amount.toFixed(2)}` : "0.00";

// Convert number to words
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

  const helper = (n) => {
    if (n < 20) return a[n];
    if (n < 100) return b[Math.floor(n / 10)] + (n % 10 ? " " + a[n % 10] : "");
    if (n < 1000)
      return (
        a[Math.floor(n / 100)] +
        " Hundred" +
        (n % 100 ? " " + helper(n % 100) : "")
      );
    if (n < 100000)
      return (
        helper(Math.floor(n / 1000)) +
        " Thousand" +
        (n % 1000 ? " " + helper(n % 1000) : "")
      );
    if (n < 10000000)
      return (
        helper(Math.floor(n / 100000)) +
        " Lakh" +
        (n % 100000 ? " " + helper(n % 100000) : "")
      );
    return (
      helper(Math.floor(n / 10000000)) +
      " Crore" +
      (n % 10000000 ? " " + helper(n % 10000000) : "")
    );
  };

  const numInt = Math.floor(num);
  if (numInt === 0) return "Zero Rupees Only";

  return helper(numInt) + " Rupees Only";
}

// Styles
const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 11,
    lineHeight: 1.5,
    backgroundColor: "#fff",
  },
  header: {
    textAlign: "center",
    marginBottom: 10,
  },
  hotelName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  contactInfo: {
    fontSize: 10,
    marginTop: 4,
  },
  invoiceTitle: {
    fontSize: 14,
    marginTop: 5,
    padding: 20,
    textDecoration: "underline",
  },
  sectionRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 5,
    borderTop: "1px solid #ccc",
    marginTop: 20,
  },
  section: {
    width: "48%",
    marginTop: 10,
  },
  sectionTitle: {
    fontWeight: "bold",
    marginBottom: 8,
    fontSize: 12,
    textDecoration: "underline",
  },
  rowText: {
    marginBottom: 4,
  },
  box: {
    padding: 10,
    backgroundColor: "#f2f2f2",
    width: "48%",
    borderRadius: 4,
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#f1f1f1",
    padding: 8,
    marginTop: 20,
    fontWeight: "bold",
  },
  tableRow: {
    flexDirection: "row",
    padding: 8,
    borderBottom: "1px solid #ccc",
  },
  col: {
    width: "25%",
  },
  wideCol: {
    width: "40%",
  },
  amountRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 6,
  },
  amountLabel: {
    width: "75%",
    textAlign: "right",
    fontWeight: "bold",
  },
  amountValue: {
    width: "46%",
    textAlign: "right",
  },
  summary: {
    marginTop: 20,
    alignSelf: "flex-end",
    width: "50%",
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottom: "1px solid #ccc",
    paddingVertical: 4,
  },
  notes: {
    marginTop: 12,
    fontStyle: "italic",
    padding: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 4,
  },
  bold: {
    fontWeight: "bold",
  },
  paidStatus: {
    marginTop: 50,
    fontSize: 11,
  },
  amountInWords: {
    marginTop: 20,
    fontStyle: "italic",
    fontSize: 10,
  },
  footer: {
    position: "absolute",
    bottom: 30,
    left: 30,
    fontSize: 10,
  },
});

export default function InvoicePDF({ booking }) {
  const {
    _id,
    name,
    NoofRoom,
    email,
    mobilenumber,
    address,
    razorpayPaymentId,
    roomName,
    checkInDate,
    checkOutDate,
    numberofNights,
    subtotal,
    gstAmount,
    total,
    status,
    receipt,
  } = booking || {};

  const checkIn = new Date(checkInDate).toLocaleDateString();
  const checkOut = new Date(checkOutDate).toLocaleDateString();
  const date = new Date().toLocaleDateString();
  // const invoiceId = _id || "N/A";
  const receiptId = `REC-${receipt}`;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <View
            style={{ alignItems: "center", marginBottom: 5, marginTop: -10 }}
          >
            <Image
              src="/images/zeenath-logo.png"
              style={{
                width: "50px",
                height: "50px",
                margin: "5px",
              }}
              alt="Zeenath Taj Garden Logo"
            />
          </View>
          <Text style={styles.hotelName}>ZEENATH TAJ GARDEN</Text>
          <Text style={styles.invoiceTitle}>INVOICE</Text>

          <Text style={styles.contactInfo}>
            Kottaiyur Village, Yelagiri Hills, Yelagiri, Tamil Nadu-635853.
          </Text>
          <Text style={styles.contactInfo}>
            Phone: 04179-245 231 | Mobile: 9715657458 / 9840083576 / 9840029445
          </Text>
          <Text style={styles.contactInfo}>
            Email: info@zeenathtajgardens.com
          </Text>
        </View>

        {/* From & To */}
        <View style={styles.sectionRow}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>INVOICE DETAILS</Text>
            <Text style={styles.rowText}>Invoice No: {_id}</Text>
            <Text style={styles.rowText}>Date: {date}</Text>
            <Text style={styles.rowText}>Check-In: {checkIn}</Text>
            <Text style={styles.rowText}>Check-Out: {checkOut}</Text>
            <Text style={styles.rowText}>Receipt No: {receiptId}</Text>
            <Text style={styles.rowText}>Booked Rooms: {NoofRoom}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>GUEST DETAILS</Text>
            <Text style={styles.rowText}>Name: {name}</Text>
            <Text style={styles.rowText}>Email: {email}</Text>
            <Text style={styles.rowText}>Phone: {mobilenumber}</Text>
            <Text style={styles.rowText}>Address: {address}</Text>
          </View>
        </View>

        {/* Details */}
        <View style={styles.tableHeader}>
          <Text style={styles.wideCol}>Description</Text>
          <Text style={styles.col}>Nights</Text>
          <Text style={styles.col}>Rate</Text>
          <Text style={styles.col}>Amount</Text>
        </View>

        <View style={styles.tableRow}>
          <Text style={styles.wideCol}>{roomName || "Room"}</Text>
          <Text style={styles.col}>
            {String(numberofNights).padStart(2, "0")}
          </Text>

          <Text style={styles.col}>
            {formatCurrency(subtotal / numberofNights)}
          </Text>
          <Text style={styles.col}>{formatCurrency(subtotal)}</Text>
        </View>

        <View style={styles.tableRow}>
          <Text style={styles.wideCol}>Subtotal</Text>
          <Text style={styles.amountValue}>{formatCurrency(subtotal)}</Text>
        </View>

        <View style={styles.tableRow}>
          <Text style={styles.wideCol}>GST (12%)</Text>
          <Text style={styles.amountValue}>{formatCurrency(gstAmount)}</Text>
        </View>

        <View style={styles.tableHeader}>
          <Text style={[styles.wideCol, styles.bold]}>Total</Text>
          <Text style={[styles.amountValue, styles.bold]}>
            {formatCurrency(total)}
          </Text>
        </View>

        <View style={styles.paidStatus}>
          <Text>
            Payment Status: <Text style={{ color: "green" }}>{status}</Text>
          </Text>
          <Text>Payment ID: {razorpayPaymentId}</Text>
        </View>

        {/* Amount in Words */}
        <Text style={styles.amountInWords}>
          Amount in Words: {numberToWords(total)}
        </Text>

        {/* Paid Stamp */}
        {status === "paid" && <Text style={styles.paidStamp}>PAID</Text>}

        {/* Footer */}
        <Text style={styles.footer}>Thank You For Your Stay</Text>
      </Page>
    </Document>
  );
}
