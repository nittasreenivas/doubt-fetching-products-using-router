import { Link } from "react-router-dom";
import "./index.css";
export default function Navigation() {
  return (
    <div className="nav-conatainer">
      <ul className="nav-list">
        <Link to="/">
          <li> Home </li>
        </Link>
        <Link to="/about">
          <li> About </li>
        </Link>
        <Link to="/products">
          <li> Products </li>
        </Link>
        <Link to="/signin">
          <li> Signin </li>
        </Link>
      </ul>
    </div>
  );
}
