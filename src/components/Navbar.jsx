import { useState, useEffect } from "react";
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

  // Menutup dropdown ketika klik di luar menu
  useEffect(() => {
    function handleClickOutside(event) {
      if (!event.target.closest(".dropdown-pengaduan")) {
        setIsPengaduanOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white shadow-md py-5">
      <div className="ccontainer mx-auto flex items-center justify-between px-11">
        {/* Logo */}
        <div>
          <Link to="/">
            <img src={logo} alt="Diskominfo Sergai" className="h-10 w-auto ml-4" />
          </Link>
        </div>

        {/* Menu Navbar */}
        <ul className="flex space-x-6 text-black relative">
          <li><Link to="/profil" className="hover:text-gray-500">Profil</Link></li>
          <li><Link to="/berita" className="hover:text-gray-500">Berita</Link></li>
          <li><Link to="../Informasi" className="hover:text-gray-500">Informasi</Link></li>
          <li><Link to="/ppid" className="hover:text-gray-500">PPID</Link></li>

          {/* Dropdown Pengaduan */}
          <li className="relative dropdown-pengaduan">
            <button
              className="hover:text-gray-500 focus:outline-none"
              onClick={(e) => {
                e.stopPropagation(); // Mencegah event bubbling
                setIsPengaduanOpen(!isPengaduanOpen);
              }}
            >
              Pengaduan ▾
            </button>
            {isPengaduanOpen && (
              <ul className="absolute bg-white shadow-lg p-4 mt-2 w-72 right-0 border rounded-md z-50 top-full transition-all duration-200 ease-in-out">
                {pengaduanOptions.map((option, index) => (
                  <li key={index} className="py-2 flex items-start">
                    <span className="bg-blue-100 text-blue-500 p-2 rounded-full">ℹ️</span>
                    <div className="ml-2">
                      <Link to={option.path} className="hover:text-gray-500 font-bold">{option.title}</Link>
                      <p className="text-sm text-gray-600">{option.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
