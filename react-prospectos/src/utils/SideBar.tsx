import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

export default function SideBar() {
  return (
    <>
      <aside className="col-auto col-md-3 col-xl-2 pt-2 text-white bg-dark min-vh-100">
        <NavLink
          to="/"
          className="mb-3 mb-md-0 mx-md-3 text-white text-decoration-none"
        >
          <span className="fs-4">Proyecto Eval.</span>
        </NavLink>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <NavLink
              to="/"
              className="nav-link text-white isActive"
              aria-current="page"
            >
              Promotor
            </NavLink>
          </li>
          <li>
            <NavLink to="/prospectos" className="nav-link text-white isActive">
              <span className="me-2">Prospectos</span>
              <FontAwesomeIcon icon={faUsers} className="nav-icon" />
            </NavLink>
          </li>
        </ul>
      </aside>
    </>
  );
}
