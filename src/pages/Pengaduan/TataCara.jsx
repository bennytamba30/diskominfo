import alurPengaduan from "../../assets/alur-pengaduan.jpeg";
import sopPengaduan from "../../assets/SOP-Pengaduan.png";

import { Download } from "lucide-react";

export default function TataCara() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <section className="relative w-full bg-blue-700 text-white">
        <div className="container mx-auto px-6 2xl:px-0 xl:max-w-7xl relative  pb-40 z-10">
          
       
          <nav className="breadcrumb pb-10 pt-3">
            <a href="/" className="text-gray-200 hover:underline">Beranda</a> &gt;
            <span className="text-gray-50 font-semibold"> Pengaduan</span>
          </nav>

          {/* Judul & Deskripsi */}
          <h1 className="font-lato font-bold text-3xl leading-relaxed text-white mb-2">Pengaduan</h1>
          <p className="text-base">
            Pengaduan dan penyampaian aspirasi terkait permasalahan Diskominfo Jabar dapat dilakukan dengan tata cara berikut.
          </p>
        </div>
      </section>

      {/* Konten Utama */}
      <div className="max-w-7xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg relative -top-32 z-10 pb-10">
        <h2 className="text-4xl font-bold text-blue-700 text-center md:text-left mb-12  ">Alur Pengaduan</h2>

        {/* Scrollable Image Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 mt-6">
        <h2 className="text-2xl font-bold text-blue-600">Alur Pengaduan</h2>

        {/* Scrollable Container */}
        <div className="mt-4 h-[500px] overflow-y-auto border rounded-lg shadow-md">
          <img src={alurPengaduan} alt="Alur Pengaduan" className="block w-auto mx-auto" />
        </div>
      </div>

{/* Description and Download Section */}
<div className="mt-6 bg-blue-100 p-4 rounded-lg flex justify-between items-center shadow-md">
  <p className="text-sm font-semibold text-blue-900">
    Tata cara penyalahgunaan wewenang atau pelanggaran oleh pihak yang mendapatkan izin atau perjanjian kerja dari Badan Publik yang bersangkutan
  </p>
  
  {/* Tombol Unduh dengan link langsung */}
  <a 
    href={sopPengaduan} 
    target="_blank" 
    rel="noopener noreferrer"
    download="SOP-Pengaduan.png"
    className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600 transition"
  >
    <Download size={18} />
    Unduh
  </a>
</div>

      </div>
    </div>
  );
}
