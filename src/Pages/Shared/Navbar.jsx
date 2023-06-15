import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/">
        <p>Home</p>
      </Link>
      <Link to="/about">
        <p>About</p>
      </Link>
    </div>
  );
};

export default Navbar;
