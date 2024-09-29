import { Link } from "react-router-dom";

const Navbar = () => {
return (
    <div className="w-full bg-white shadow font-poppins">
      <div className="container mx-auto flex justify-between p-2">
        <div className="flex gap-2">
          <Link to="/">Home</Link>
          <Link to="/product">Product</Link>
          <Link to="/about">About</Link>
        </div>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
