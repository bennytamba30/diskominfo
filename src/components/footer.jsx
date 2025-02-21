import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import logo from "../assets/diskominfosergei.png";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 py-10 px-5 ">
      <div className="container mx-auto px-6 2xl:px-0 xl:max-w-7xl">
        
        {/* Bagian Atas: Logo & Informasi Kontak */}
        <div className="w-[fit-content] nuxt-link-exact-active nuxt-link-active gap-10">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={logo} alt="Logo Diskominfo" className="w-100 h-20 mr-8 mb-10" />
          </div>
          
          {/* Informasi Kontak */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 flex-grow text-gray-800">
            <div>
              <h3 className="font-bold text-lg flex items-center">
                <MdLocationOn className="mr-2 text-l" />
                DINAS KOMUNIKASI DAN INFORMATIKA SERDANG BEDAGAI
              </h3>
              <p className="text-sm">
                Jl. Negara No.300, Firdaus, Kec. Sei Rampah, Kabupaten Serdang Bedagai, Sumatera Utara, 20995
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg flex items-center">
                <MdPhone className="mr-2 text-xl" />
                Telepon
              </h4>
              <p className="text-sm">Telp. 022-25028986</p>
            </div>
            <div>
              <h4 className="font-bold text-lg flex items-center">
                <MdEmail className="mr-2 text-xl" />
                Surel
              </h4>
              <p className="text-sm">diskominfo@sergei.go.id</p>
            </div>
            <div>
              <h4 className="font-bold text-lg flex items-center">
                🌐 Media Sosial
              </h4>
              <div className="flex space-x-4 mt-2 items-center">
                <FaFacebook className="text-2xl cursor-pointer " />
                <FaInstagram className="text-2xl cursor-pointer" />
                <FaTwitter className="text-2xl cursor-pointer" />
                <FaYoutube className="text-2xl cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

        {/* Garis Pemisah */}
        <hr className="my-8 border-gray-300" />

        {/* Bagian Sitemap */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
          <FooterSection title="Berita Serdang Bedagai" links={[
            "Ekonomi", "Kesehatan", "Pendidikan", "Pemerintahan", "Infrastruktur", "Sosial", "Teknologi"
          ]} basePath="/berita?kategori=" />

          
          
          <FooterSection title="PPID" links={[
            { title: "Profil PPID", link: "#" },
            { title: "Alur Layanan Informasi", link: "#" },
            { title: "Permohonan Informasi", link: "#" },
            { title: "Pengajuan Keberatan", link: "#" },
            { title: "Penyelesaian Sengketa", link: "#" },
            { title: "Informasi Tersedia Setiap Saat", link: "#" },
            { title: "Informasi Berkala", link: "#" },
            { title: "Informasi Dikecualikan", link: "#" },
            { title: "Informasi Serta Merta", link: "#" },
            { title: "SOP PPID", link: "/ppid/sop" },
            { title: "Kontak", link: "#" },
          ]} />
          
          <FooterSection title="Profil Diskominfo" links={[
            { title: "Sejarah", link: "/profil?tab=sejarah" },
            { title: "Tugas Pokok dan Fungsi", link: "#" },
            { title: "Struktur Organisasi", link: "#" },
            { title: "Profil Pimpinan", link: "#" }
          ]} />
        </section>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-600 mt-8">
          &copy; 2025 Pemerintah Daerah Kabupaten Serdang Bedagai. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

// Komponen untuk bagian Sitemap
function FooterSection({ title, links, basePath = "" }) {
  return (
    <div>
      <h3 className="font-roboto text-base leading-6 font-bold mb-2 whitespace-nowrap">
        {title}
      </h3>
      <ul className="grid grid-cols-1 md:grid-cols-2 mt-2 gap-2">
        {links.map((item, index) => (
          <li key={index} className="min-w-[95px]">
            <a href={typeof item === "string" ? `${basePath}${item.toLowerCase()}` : item.link} className="text-sm font-normal leading-6">
              {typeof item === "string" ? item : item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
