import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import komponen utama
import Navbar from "./components/Navbar";
import Footer from "./components/footer";

// Import halaman utama (Beranda)
import Home from "./pages/Beranda/Home";
import Program from "./pages/Beranda/program";

// Import halaman Informasi
import LegalDocuments from "./pages/Informasi/LegalDocuments";

// Import halaman Pengaduan (Menggunakan index.js untuk ekspor)
import Pengaduan from "./pages/Pengaduan";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            {/* Halaman Beranda sebagai halaman utama */}
            <Route path="/" element={<Home />} />

            {/* Halaman lainnya di Navbar */}
            <Route path="/program" element={<Program />} />
            <Route path="/informasi" element={<LegalDocuments />} />

            {/* Halaman Pengaduan */}
            <Route path="/pengaduan/csirt" element={<Pengaduan.CSIRT />} />
            <Route path="/pengaduan/sp4n-lapor" element={<Pengaduan.SP4N />} />
            <Route path="/pengaduan/tata-cara" element={<Pengaduan.TataCara />} />
            <Route path="/pengaduan/wbs" element={<Pengaduan.WBS />} />

            {/* Tambahkan halaman lainnya jika diperlukan */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
