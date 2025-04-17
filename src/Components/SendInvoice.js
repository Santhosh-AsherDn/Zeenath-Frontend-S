import { pdf } from "@react-pdf/renderer";
import InvoicePDF from "./InvoicePDF"; // Your InvoicePDF component

const sendInvoiceToBackend = async (booking) => {
  try {
    // 1. Generate PDF blob from the component
    const blob = await pdf(<InvoicePDF booking={booking} />).toBlob();

    // 2. Convert to FormData for sending to backend
    const formData = new FormData();
    formData.append("booking", JSON.stringify(booking));
    formData.append("invoice", blob, `invoice_${booking._id}.pdf`);

    // 3. Send to backend
    const response = await fetch("http://localhost:5000/api/send-invoice", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();
    if (response.ok) {
      console.log("Invoice sent successfully");
    } else {
      console.error("Failed to send invoice", result.message);
    }
  } catch (error) {
    console.error("Error generating or sending PDF:", error);
  }
};

export default sendInvoiceToBackend;
