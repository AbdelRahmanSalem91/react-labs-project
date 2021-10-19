import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="d-flex justify-content-between align-items-center">
      <h1>Logo</h1>
      <ul className="list-unstyled d-flex justify-content-around">
        <li className="me-3">
          <Link to="/">Home</Link>
        </li>
        <li className="me-3">
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
