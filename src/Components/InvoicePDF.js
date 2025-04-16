import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

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
    padding: 30,
    fontSize: 11,
    fontFamily: "Helvetica",
    lineHeight: 1.5,
  },
  header: {
    textAlign: "center",
    marginBottom: 20,
  },
  hotelName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  invoiceTitle: {
    fontSize: 14,
    marginTop: 10,
    textDecoration: "underline",
  },
  sectionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
  },
  box: {
    padding: 10,
    backgroundColor: "#f2f2f2",
    width: "48%",
    borderRadius: 4,
  },
  bold: {
    fontWeight: "bold",
  },
  tableHeader: {
    flexDirection: "row",
    borderBottom: "1px solid #000",
    backgroundColor: "#e0e0e0",
    paddingVertical: 6,
    marginTop: 20,
  },
  tableRow: {
    flexDirection: "row",
    borderBottom: "1px solid #ccc",
    paddingVertical: 6,
  },
  col: { flex: 1, textAlign: "center" },
  colWide: { flex: 3 },
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
  paidStamp: {
    position: "absolute",
    top: 300,
    left: 200,
    fontSize: 40,
    color: "#bfbfbf",
    transform: "rotate(-20deg)",
    opacity: 0.3,
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
    email,
    mobilenumber,
    roomName,
    checkInDate,
    checkOutDate,
    numberofNights,
    subtotal,
    gst,
    gstAmount,
    total,
    status,
    receipt,
  } = booking || {};

  const checkIn = new Date(checkInDate).toLocaleDateString();
  const checkOut = new Date(checkOutDate).toLocaleDateString();
  const invoiceId = _id || "N/A";
  const receiptId = `REC-${receipt}`;

  return (
    <Document>
      <Page style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.hotelName}>Zeenath Taj Garden</Text>
          <Text style={styles.invoiceTitle}>INVOICE</Text>
        </View>

        {/* From & To */}
        <View style={styles.sectionRow}>
          <View style={styles.box}>
            <Text style={styles.bold}>FROM</Text>
            <Text>Zeenath Taj Garden (Residential)</Text>
            <Text>Main Street, Yelagiri Hills</Text>
            <Text>Tamil Nadu, India</Text>
            <Text>+91 98765 43210</Text>
          </View>

          <View style={styles.box}>
            <Text style={styles.bold}>BILL TO</Text>
            <Text>{name || "N/A"}</Text>
            <Text>{email || "N/A"}</Text>
            <Text>{mobilenumber || "N/A"}</Text>
          </View>
        </View>

        {/* Details */}
        <View style={styles.sectionRow}>
          <View style={styles.box}>
            <Text style={styles.bold}>DETAILS</Text>
            <Text>DATE: {checkOut}</Text>
            <Text>INVOICE NO: {invoiceId}</Text>
            <Text>RECEIPT NO: {receiptId}</Text>
            <Text>CHECK-IN: {checkIn}</Text>
            <Text>CHECK-OUT: {checkOut}</Text>
          </View>
        </View>

        {/* Table Header */}
        <View style={styles.tableHeader}>
          <Text style={[styles.colWide, styles.bold]}>DESCRIPTION</Text>
          <Text style={[styles.col, styles.bold]}>NIGHTS</Text>
          <Text style={[styles.col, styles.bold]}>RATE</Text>
          <Text style={[styles.col, styles.bold]}>AMOUNT</Text>
        </View>

        {/* Table Row */}
        <View style={styles.tableRow}>
          <Text style={styles.colWide}>
            Room Booking - {roomName || "Room"}
          </Text>
          <Text style={styles.col}>
            {String(numberofNights).padStart(2, "0")}
          </Text>
          <Text style={styles.col}>
            {formatCurrency(subtotal / numberofNights)}
          </Text>
          <Text style={styles.col}>{formatCurrency(subtotal)}</Text>
        </View>

        {/* Summary */}
        <View style={styles.summary}>
          <View style={styles.summaryRow}>
            <Text>SUBTOTAL</Text>
            <Text>{formatCurrency(subtotal)}</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text>GST ({gst ?? 0}%)</Text>
            <Text>{formatCurrency(gstAmount)}</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.bold}>TOTAL</Text>
            <Text style={styles.bold}>{formatCurrency(total)}</Text>
          </View>
        </View>

        {/* Notes */}
        <Text style={styles.notes}>
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
