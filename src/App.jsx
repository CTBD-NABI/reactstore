import {
  Route,
  Routes,
  useParams
} from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Details from "./Details";
import NotFound from "./NotFound";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ProductDetails from "./ProductDetails";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/details" element={<Details />} />
        <Route path="/product/:id" element={<ProductDetails />} />

      </Routes>
      {/* <Footer /> */}
    </>
  )
}

export default App
