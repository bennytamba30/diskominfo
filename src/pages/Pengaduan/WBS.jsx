import { useState } from "react";
import { FaHome } from "react-icons/fa";
import bgImage from "../../assets/office.jpg";

export default function WBSForm() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
     <div className="bg-gray-100 min-h-screen">
              {/* Header Section */}
              <section
                className="relative w-full bg-gradient-to-r from-blue-800 to-blue-600 bg-cover bg-center shadow-lg"
                style={{ backgroundImage: `url(${bgImage})` }}
              >
                <div className="absolute inset-0 bg-blue-900 bg-opacity-50 backdrop-blur-lg"></div>
                <div className="container mx-auto px-6 2xl:px-0 xl:max-w-7xl relative pt-10 pb-44 z-10 text-white">
                  <nav className="flex items-center gap-3 text-gray-200 text-sm">
                  <a href="/" className="flex items-center hover:underline">
                <FaHome className="w-4 h-4 mr-1" /> Beranda
                  </a>
                <span>&gt;</span>
                  <a href="/pengaduan" className="flex items-center hover:underline">
                <span className="text-gray-100 font-semibold">Pengaduan</span>
                  </a>
                <span>&gt;</span>
                <span className="text-gray-100 font-semibold">WBS</span>
                  </nav>
                  <h1 className="font-extrabold text-4xl mt-6 tracking-wide">Pengaduan</h1>
                  <p className="text-base mt-4 text-gray-200 max-w-2xl leading-relaxed">
                  Apakah Anda mengetahui ada pelanggaran yang dilakukan Pegawai Diskominfo Jabar? Laporkan segala bentuk penyimpangan Perundang-undangan, penyalagunaan jabatan, pemerasan, perbuatan curang, benturan kepentingan, gratifikasi dan KKN!
                  </p>
                </div>
              </section>

      <div className="max-w-7xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg relative -top-32 z-10 pb-10">
        <h2 className="text-2xl font-bold text-blue-700 text-center mb-4">
          FORMULIR PELAPORAN WHISTLE BLOWING SYSTEM
        </h2>
        <p className="text-sm text-gray-600 text-center mb-6">
          DINAS KOMUNIKASI DAN INFORMATIKA KABUPATEN SERDANG BEDAGAI
        </p>

        <div className="max-h-[500px] overflow-y-auto p-4 border rounded-lg shadow-md w-full">
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold">Nama Lengkap Pelapor (Sesuai KTP)</label>
              <input type="text" className="w-full p-2 border rounded-md" placeholder="Nama lengkap" />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold">No. Telepon Pelapor</label>
              <input type="text" className="w-full p-2 border rounded-md" placeholder="08XXXXXXXXXX" />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold">Email Pelapor</label>
              <input type="email" className="w-full p-2 border rounded-md" placeholder="example@email.com" />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold">Nama Lengkap Terlapor</label>
              <input type="text" className="w-full p-2 border rounded-md" placeholder="Nama lengkap terlapor" />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold">Jabatan Terlapor</label>
              <input type="text" className="w-full p-2 border rounded-md" placeholder="Jabatan" />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold">Tindakan/Perbuatan yang Dilakukan</label>
              <textarea className="w-full p-2 border rounded-md" placeholder="Jelaskan tindakan/perbuatan..." rows="3"></textarea>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold">Waktu Terjadi Kasus</label>
              <input type="date" className="w-full p-2 border rounded-md" />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold">Lokasi Kejadian</label>
              <input type="text" className="w-full p-2 border rounded-md" placeholder="Lokasi kejadian" />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold">Kronologis Kejadian</label>
              <textarea className="w-full p-2 border rounded-md" placeholder="Jelaskan kronologi kejadian..." rows="4"></textarea>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold">Dokumen Pendukung Bukti</label>
              <div className="border-dashed border-2 p-4 text-center rounded-md">
                <input type="file" className="hidden" id="fileUpload" onChange={handleFileChange} />
                <label htmlFor="fileUpload" className="cursor-pointer text-blue-600">
                  Browse Files
                </label>
                <p className="text-sm text-gray-500 mt-2">Drag and drop files here</p>
                {selectedFile && <p className="mt-2 text-gray-700">{selectedFile.name}</p>}
              </div>
            </div>

            <div className="text-center">
              <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
