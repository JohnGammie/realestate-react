import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Buy from "./pages/buy";
import Home from "./pages/home";
import Rent from "./pages/rent";
import SignIn from "./pages/sign-in";
import Join from "./pages/join";
import "./styles.css";
import NotFound from "./pages/NotFound";
import Sold from "./pages/sold";
import SearchResults from "./pages/searchResults";
import Property from "./pages/property";
import HomeLoans from "./pages/homeLoans";
import ContactAgent from "./pages/contactAgent";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/buy" element={<Buy />}></Route>
          <Route path="/rent" element={<Rent />}></Route>
          <Route path="/sold" element={<Sold />}></Route>
          <Route path="/sign-in" element={<SignIn />}></Route>
          <Route path="/join" element={<Join />}></Route>
          <Route path="/searchResults" element={<SearchResults />}></Route>
          <Route path="/property" element={<Property />}></Route>
          <Route path="/home-loans" element={<HomeLoans />}></Route>
          <Route path="/contact-agent" element={<ContactAgent />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
