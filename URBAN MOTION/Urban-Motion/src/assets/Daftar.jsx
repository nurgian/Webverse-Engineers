import React from "react";

class Daftar extends React.Component {
  handleRegister = (event) => {
    event.preventDefault();
    document.getElementById("popupOverlay").style.display = "block";
    document.getElementById("successPopup").style.display = "block";
  };

  closePopup = () => {
    window.location.href = "Masuk";
  };

  render() {
    return (
      <div
        className="container"
        style={{
          display: "flex",
          width: "200vw",
          height: "100%",
          fontFamily: "Open Sans, sans-serif",
          padding: 0,
          margin: 0,
        }}
      >
        <div
          className="left"
          style={{
            background: "linear-gradient(#0B2E34, #235347)",
            color: "white",
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
          }}
        >
          <img
            alt="Webverse Studio Logo"
            height="200"
            src="/image/logo.png"
            width="600"
            style={{ marginBottom: "20px" }}
          />
        </div>
        <div
          className="right"
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
            marginLeft: "100px",
            marginRight: "-100px",
          }}
        >
          <div
            className="login-form"
            style={{
              width: "100%",
              maxWidth: "400px",
            }}
          >
            <h2
              style={{
                fontSize: "24px",
                marginBottom: "10px",
                textAlign: "center",
              }}
            >
              Daftar
            </h2>
            <p
              style={{
                fontSize: "14px",
                color: "#666",
                marginBottom: "20px",
                textAlign: "center",
              }}
            >
              Daftar untuk mengakses akun Urban Motion anda.
            </p>
            <label
              htmlFor="username"
              style={{
                display: "block",
                fontSize: "14px",
                marginBottom: "5px",
              }}
            >
              Nama Pengguna
            </label>
            <input
              id="username"
              name="username"
              type="text"
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "20px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            />
            <label
              htmlFor="email"
              style={{
                display: "block",
                fontSize: "14px",
                marginBottom: "5px",
              }}
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="text"
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "20px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            />
            <label
              htmlFor="nohp"
              style={{
                display: "block",
                fontSize: "14px",
                marginBottom: "5px",
              }}
            >
              Nomor handphone
            </label>
            <input
              id="nohp"
              name="nohp"
              type="text"
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "20px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            />
            <label
              htmlFor="password"
              style={{
                display: "block",
                fontSize: "14px",
                marginBottom: "5px",
              }}
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "20px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            />
            <div
              className="checkbox-label"
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <input
                id="terms"
                name="terms"
                type="checkbox"
                style={{ marginRight: "10px" }}
              />
              <label htmlFor="terms">
                Saya menerima syarat &amp; ketentuan yang berlaku
              </label>
            </div>
            <button
              type="submit"
              id="registerButton"
              onClick={this.handleRegister}
              style={{
                width: "100%",
                padding: "10px",
                backgroundColor: "#235347",
                color: "white",
                border: "none",
                borderRadius: "5px",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Daftar
            </button>
            <div
              className="register"
              style={{ textAlign: "center", marginTop: "20px" }}
            >
              <p>
                Sudah punya akun?{" "}
                <a
                  href="Masuk"
                  style={{ color: "#235347", textDecoration: "none" }}
                >
                  Masuk
                </a>
              </p>
              <p>Atau</p>
              <div
                className="google-login"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  cursor: "pointer",
                  marginTop: "5px",
                }}
              >
                <img
                  alt="Google Logo"
                  height="20"
                  src="/image/google.png"
                  width="20"
                  style={{ marginRight: "10px" }}
                />
                <span>Masuk dengan Google</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pop-up */}
        <div
          className="popup-overlay"
          id="popupOverlay"
          style={{
            display: "none",
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 999,
          }}
        ></div>
        <div
          className="popup"
          id="successPopup"
          style={{
            display: "none",
            position: "fixed",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            padding: "15px",
            backgroundColor: "white",
            border: "1px solid #ccc",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
            zIndex: 1000,
            borderRadius: "8px",
            textAlign: "center",
            width: "200px",
          }}
        >
          <img
            src="/image/daftarBerhasil.png"
            alt="Gambar Berhasil Daftar"
            style={{ maxWidth: "100%", height: "auto", borderRadius: "5px" }}
          />
          <button
            id="closePopup"
            onClick={this.closePopup}
            style={{
              marginTop: "10px",
              padding: "8px 15px",
              border: "none",
              backgroundColor: "#0B2E34",
              color: "white",
              borderRadius: "5px",
              cursor: "pointer",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              transition: "background-color 0.3s",
            }}
          >
            Tutup
          </button>
        </div>
      </div>
    );
  }
}

export default Daftar;
