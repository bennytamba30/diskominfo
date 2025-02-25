import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/diskominfosergei.png";

// Array daftar pengaduan
const pengaduanOptions = [
  { path: "/pengaduan/tata-cara", title: "Tata Cara", description: "Informasi tata cara pengaduan terkait Diskominfo Jabar" },
  { path: "/pengaduan/jabarprov-csirt", title: "JabarProv-CSIRT Aduan Siber", description: "Butuh penanganan siber segera? Lapor di sini" },
  { path: "/pengaduan/sp4n-lapor", title: "SP4N Lapor", description: "Jika ada pelanggaran kode etik, lapor melalui SP4N-Lapor di sini" },
  { path: "/pengaduan/wbs", title: "Whistle Blowing System (WBS)", description: "Mengetahui pegawai Diskominfo Jabar yang melanggar kode etik? Lapor di sini" },
];

function Navbar() {
  const [isPengaduanOpen, setIsPengaduanOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Menutup dropdown saat klik di luar menu
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsPengaduanOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white shadow-md py-3">
      <div className="container mx-auto flex items-center justify-between px-7">
        {/* Logo */}
        <div className=" ml-2 flex items-center">
          <Link to="/">
            <img src={logo} alt="Diskominfo Jabar" className="h-12 w-auto" />
          </Link>
        </div>

        {/* Menu Navbar */}
        <ul className="flex space-x-6 text-black">
          <li><Link to="/profil" className="hover:text-gray-500">Profil</Link></li>
          <li><Link to="/berita" className="hover:text-gray-500">Berita</Link></li>
          <li><Link to="/informasi" className="hover:text-gray-500">Informasi</Link></li>
          <li><Link to="/ppid" className="hover:text-gray-500">PPID</Link></li>

          {/* Dropdown Pengaduan */}
          <li className="relative" ref={dropdownRef}>
            <button
              className="hover:text-gray-500 focus:outline-none"
              onClick={(e) => {
                e.stopPropagation();
                setIsPengaduanOpen(!isPengaduanOpen);
              }}
              aria-expanded={isPengaduanOpen}
              aria-label="Buka menu pengaduan"
            >
              Pengaduan ▾
            </button>

            {isPengaduanOpen && (
              <div className="absolute bg-white shadow-lg p-6 mt-3 w-[600px] right-0 border rounded-md z-50 top-full transition-all duration-200 ease-in-out">
                <button 
                  className="absolute top-3 right-4 text-gray-600 hover:text-red-500 text-xl"
                  onClick={() => setIsPengaduanOpen(false)}
                >
                  ✕
                </button>
                <h3 className="text-xl font-semibold mb-4">Pengaduan</h3>
                <div className="grid grid-cols-2 gap-4">
                  {pengaduanOptions.map((option, index) => (
                    <div key={index} className="flex items-start bg-gray-100 p-3 rounded-md">
                      <span className="bg-blue-100 text-blue-500 p-3 rounded-full text-lg">ℹ️</span>
                      <div className="ml-3">
                        <Link to={option.path} className="hover:text-gray-500 font-bold">{option.title}</Link>
                        <p className="text-sm text-gray-600">{option.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
