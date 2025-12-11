import { Link } from "react-router-dom";
import { ChevronRight, Menu } from "lucide-react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid px-4 px-lg-5">
        {/* Logo */}
        <Link to="/" className="navbar-brand">
          SQUADFINDER
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <Menu size={28} className="text-cyan" />
        </button>

        {/* Collapsible Content */}
        <div className="collapse navbar-collapse" id="navbarContent">
          {/* Desktop Nav Links */}
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-5 d-none d-lg-flex">
            <li className="nav-item">
              <Link to="/home" className="nav-link">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/teams" className="nav-link">
                null
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/streams" className="nav-link">
                null
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/scrims" className="nav-link d-flex align-items-center gap-2">
                null <span className="badge-glow"></span>
              </Link>
            </li>
          </ul>

          {/* Auth Buttons */}
          <div className="d-flex gap-3 ms-lg-4">
            <button className="btn btn-outline-glow">
              Sign In
            </button>
            <button className="btn btn-glow d-flex align-items-center gap-2">
              Sign Up <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}