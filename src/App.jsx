import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import komponen utama
import Navbar from "./components/Navbar";
import Footer from "./components/footer";

// Import halaman utama (beranda)
import Home from "./pages/Beranda/Home";

// Import halaman lainnya
import Program from "./pages/Beranda/program";
import LegalDocuments from "./pages/Informasi/LegalDocuments";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            {/* Beranda sebagai halaman utama */}
            <Route path="/" element={<Home />} />

            {/* Halaman lain yang ada di navbar */}
            <Route path="/program" element={<Program />} />
            <Route path="/informasi" element={<LegalDocuments />} />

            {/* Tambahkan halaman lainnya */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
