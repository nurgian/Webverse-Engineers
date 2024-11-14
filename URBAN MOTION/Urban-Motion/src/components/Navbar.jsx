import React from "react";

class Navbar extends React.Component {
  render() {
    const navbarStyle = {
      fontFamily: "'Open Sans', sans-serif",
    };

    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        style={{ backgroundColor: "#0B2E34", ...navbarStyle }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="/image/logo.png"
              alt="Webverse Studio Logo"
              style={{
                height: "35px",
                width: "110px",
                marginLeft: "30px",
              }}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{
              border: "none",
              backgroundColor: "transparent",
            }}
          >
            <span
              className="navbar-toggler-icon"
              style={{ color: "#F3ECDC" }}
            ></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-current="page"
                  href="#"
                  style={{ color: "#F3ECDC" }}
                >
                  Beranda
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  style={{
                    backgroundColor: "#f3ecdc",
                    padding: "0.5rem 1rem",
                    borderRadius: "9999px",
                    color: "#0B2E34",
                  }}
                >
                  Tentang Kami
                </a>
              </li>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav ms-auto">
                  {/* Other nav items */}
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{ color: "#F3ECDC" }}
                    >
                      Transportasi Umum
                    </a>
                    <ul
                      className="dropdown-menu dropdown-menu-end"
                      style={{
                        backgroundColor: "#0B2E34",
                        textAlign: "center",
                      }}
                    >
                      <li>
                        <a
                          className="dropdown-item"
                          href="#"
                          style={{ color: "#F3ECDC" }}
                        >
                          Stasiun KRL
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="#"
                          style={{ color: "#F3ECDC" }}
                        >
                          Stasiun MRT & LRT
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="#"
                          style={{ color: "#F3ECDC" }}
                        >
                          Halte Transjakarta
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{ color: "#F3ECDC" }}>
                  Daftar Harga
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{ color: "#F3ECDC" }}>
                  Sewa
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{ color: "#F3ECDC" }}>
                  Kontak
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="Masuk">
                  <img
                    src="/image/akun.png"
                    alt="My Account"
                    style={{ height: "25px", marginRight: "50px" }}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
