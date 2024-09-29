import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Navbar from "./components/Navbar";
import About from "./views/about/About";
import Login from "./views/auth/Login";
import Products from "./views/products/Products";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Homepage />} />
      </Routes>
    </Router>
  );
};

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Products />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
