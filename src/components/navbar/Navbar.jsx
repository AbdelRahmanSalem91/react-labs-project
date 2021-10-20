import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="d-flex justify-content-between align-items-center position-fixed w-100 bg-primary text-white p-3 fw- fs-5">
      <Link className="link fw-bolder fs-4" to="/">
        Logo
      </Link>
      <ul className="list-unstyled d-flex justify-content-center align-items-center mb-0">
        <li className="me-3">
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li className="me-3">
          <Link className="link" to="/shop">
            Shop
          </Link>
        </li>
        <li>
          <Link className="link" to="/counter">
            Counter
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
