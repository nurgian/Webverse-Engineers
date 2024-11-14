import React from "react";
import "font-awesome/css/font-awesome.min.css"; // Import Font Awesome di sini

class Footer extends React.Component {
  render() {
    const footerStyle = {
      fontFamily: "'Open Sans', sans-serif",
    };

    return (
      <section className="footer" style={footerStyle}>
        <div className="footer-container">
          <div className="footer-section">
            <img src="/image/logo.png" alt="logo Urban Motion" />
            <p>
              Website informasi mengenai transportasi umum dan sewa kendaraan
              dengan layanan profesional di DKI Jakarta.
            </p>
            <div
              className="social-icons"
              style={{ marginTop: "20px", textAlign: "left" }}
            >
              <a href="#">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa fa-pinterest"></i>
              </a>
            </div>
          </div>
          <div className="footer-section">
            <h3 style={{ textAlign: "left", marginLeft: "20px" }}>Navigasi</h3>
            <div className="nav-columns">
              <ul>
                <li>
                  <a href="#">
                    <i className="fa fa-caret-right"></i> Beranda
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-caret-right"></i> Tentang Kami
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-caret-right"></i> Transportasi Umum
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="#">
                    <i className="fa fa-caret-right"></i> Daftar Harga
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-caret-right"></i> Sewa
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-caret-right"></i> Kontak
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-section">
            <h3  style={{ textAlign: "left", marginLeft: "45px" }}>Tetap bersama kami</h3>
            <p style={{ margin: "10px 50px" }}>
              <i className="fa fa-map-marker"></i> Surabaya, Indonesia
            </p>
            <p style={{ margin: "10px 50px" }}>
              <i className="fa fa-envelope"></i> UrbanMotion@gmail.com
            </p>
            <p style={{ margin: "10px 50px" }}>
              <i className="fa fa-phone"></i> (+62) 856 0738 5940
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>URBAN MOTION</p>
        </div>
      </section>
    );
  }
}

export default Footer;
