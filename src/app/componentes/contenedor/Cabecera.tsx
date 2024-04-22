import { NavLink } from "react-router-dom";
import miLogo from '../../../assets/img/logoReact.png'

export const Cabecera = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img src={miLogo} alt="El Logo" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="*">
                  Canciones
                </NavLink>
              </li>
              

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle show"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="true"
                >
                  Canciones
                </a>
                <ul className="dropdown-menu show" data-bs-popper="static">
                  <li>
                    <NavLink className="dropdown-item" to="/songscre">
                      Crear Canciones
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/songslis">
                      Listar Canciones
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/songsadm">
                      Administrar Canciones
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/acer">
                  Acerca de...
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
{/* <nav class="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-light" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav> */}