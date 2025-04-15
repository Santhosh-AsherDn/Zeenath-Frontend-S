import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accomodation from "./Components/Accomodation";
import Contact from "./Components/Contact";
// import DeluxeChalet from "./Components/DeluxeChalet";
// import SuperDeluxe from "./Components/SuperDeluxe";
// import PremiumWH from "./Components/PremiumWH";
import Dining from "./Components/Dining";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Booking from "./Components/Booking";
import PaymentSuccess from "./Components/PaymentSuccess";
import Home from "./Components/Home";
import Room from "./Components/Room";
import FunFilledActivities from "./Components/FunFilledActivities";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accomodation" element={<Accomodation />} />
          {/* <Route path="/deluxechalet" element={<DeluxeChalet />} /> */}
          {/* <Route path="/superdeluxe" element={<SuperDeluxe />} /> */}
          {/* <Route path="/premiumwh" element={<PremiumWH />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/dining" element={<Dining />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="/header" element={<Header />} />
          <Route path="/room/:roomPath" element={<Room />} />
          <Route
            path="/fun-filled-activites"
            element={<FunFilledActivities />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
