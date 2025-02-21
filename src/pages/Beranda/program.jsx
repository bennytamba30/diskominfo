import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import EkosistemDataJabar from "../../assets/ekosistem-data-jabar.svg";
import PortalJabar from "../../assets/portal-jabar.svg";
import SapaWarga from "../../assets/sapawarga.svg";
import DesaDigital from "../../assets/desa-digital.svg";
import SadarkaJabar from "../../assets/sadarkajabar.svg";
import JabarCommandCenter from "../../assets/command-center.svg";
import JabarSaberHoaks from "../../assets/jabar-saber-hoaks.svg";

// Tambahkan semua logo lainnya...


const programs = [
  { title: "Ekosistem Data Jabar", description: "Portal terintegrasi untuk pengelolaan data.", icon: EkosistemDataJabar },
  { title: "Portal Jabar", description: "Portal informasi layanan Jawa Barat.", link: "#", icon: PortalJabar },
  { title: "Sapawarga", description: "Aplikasi layanan publik digital di Jawa Barat.", link: "#", icon: SapaWarga },
  { title: "Desa Digital", description: "Program desa digital hadir sebagai upaya mempersempit kesenjangan digital di Jawa Barat.", link: "#", icon: DesaDigital },
  { title: "Sadarka Jabar", description: "Satu Data Terpadu Keluarga Jawa Barat.", link: "#", icon: SadarkaJabar },
  { title: "Jabar Command Center", description: "Pusat visualisasi dan integrasi data Jawa Barat.", link: "#", icon: JabarCommandCenter },
  { title: "Jabar Saber Hoaks", description: "Jabar Saber Hoaks adalah satuan unit kerja dibawah pemerintahan Daerah Provinsi Jawa Barat.", link: "#", icon: JabarSaberHoaks },
  { title: "Jabar Command Center", description: "Pusat komando digital Jawa Barat.", link: "#", icon: "/logos/jcc.png" },
  { title: "Desa Digital", description: "Transformasi digital untuk desa.", link: "#", icon: "/logos/desa-digital.png" },
  { title: "Jabar Quick Response", description: "Layanan darurat dan bantuan cepat.", link: "#", icon: "/logos/jqr.png" }
];

export default function FeaturedPrograms() {
  return (
    <div className="max-w-6xl mx-auto py-10">
      <h2 className="text-3xl font-bold text-blue-900 mb-6">Program Unggulan</h2>
      <div className="border-t border-gray-300 mb-6"></div>

      {/* Grid untuk tampilan desktop */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {programs.slice(0, 6).map((program, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md flex flex-col h-full">
            <img src={program.icon} alt={program.title} className="w-16 h-16 mb-4 mx-auto" />
            <h3 className="text-xl font-bold text-blue-900 text-center">{program.title}</h3>
            <p className="text-gray-600 mt-2 flex-grow text-center">{program.description}</p>
            <a href={program.link} className="mt-4 text-blue-600 font-semibold flex justify-center items-center">Selengkapnya →</a>
          </div>
        ))}
      </div>

      {/* Swiper untuk menampilkan 4 kotak lainnya */}
      <div className="md:hidden mt-6">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
        >
          {programs.slice(6).map((program, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 rounded-xl shadow-md flex flex-col h-full">
                <img src={program.icon} alt={program.title} className="w-16 h-16 mb-4 mx-auto" />
                <h3 className="text-xl font-bold text-blue-900 text-center">{program.title}</h3>
                <p className="text-gray-600 mt-2 flex-grow text-center">{program.description}</p>
                <a href={program.link} className="mt-4 text-blue-600 font-semibold flex justify-center items-center">Selengkapnya →</a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Tombol Navigasi Swiper */}
        <div className="flex justify-between items-center mt-4">
          <button className="swiper-button-prev bg-gray-200 p-3 rounded-full shadow-md">
            <IoIosArrowBack className="text-blue-900 text-2xl" />
          </button>
          <button className="swiper-button-next bg-gray-200 p-3 rounded-full shadow-md">
            <IoIosArrowForward className="text-blue-900 text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
}
