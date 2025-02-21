import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white p-7 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-black text-xl font-bold">
          <Link to="/">My Website</Link>
        </div>

        {/* Menu Navbar */}
        <ul className="flex space-x-6 text-black">
          <li>
            <Link to="/profil" className="hover:text-gray-300">
              Profil
            </Link>
          </li>
          <li>
            <Link to="/berita" className="hover:text-gray-300">
              Berita
            </Link>
          </li>
          <li>
            <Link to="/informasi" className="hover:text-gray-300">  {/* Perhatikan path huruf kecil */}
              Informasi
            </Link>
          </li>
          <li>
            <Link to="/ppid" className="hover:text-gray-300">
              PPID
            </Link>
          </li>
          <li>
            <Link to="/pengaduan" className="hover:text-gray-300">
              Pengaduan
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
