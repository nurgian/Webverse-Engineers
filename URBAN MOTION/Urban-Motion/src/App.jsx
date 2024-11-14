import Tentangkami from "./assets/Tentangkami";
import Masuk from "./assets/Masuk";
import Daftar from "./assets/Daftar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";


function App() {
  return (
    <div>
      <Router>
        {/* Halaman Login tidak menampilkan Navbar dan Footer */}
        <Routes>
          <Route path="/Masuk" element={<Masuk />} />
          <Route path="/Daftar" element={<Daftar />} />

          {/* Halaman lainnya, menampilkan Navbar dan Footer */}
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Tentangkami />
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
