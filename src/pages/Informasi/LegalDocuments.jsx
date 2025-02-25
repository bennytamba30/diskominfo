import { useState } from "react";
import { ProdukHukum, DokumenPerencanaan, DokumenEvaluasi } from "../../data";
import { FaCloudDownloadAlt } from "react-icons/fa";
import bgImage from "../../assets/office.jpg";

export default function LegalDocuments() {
  const [activeTab, setActiveTab] = useState("Produk Hukum");

  return (
    <div className="bg-slate-100 min-h-screen">
      {/* Header Section */}
      <section
        className="relative w-full bg-gradient-to-r from-blue-800 to-blue-600 bg-cover bg-center shadow-lg"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-50 backdrop-blur-lg"></div>
        <div className="container mx-auto px-6 2xl:px-0 xl:max-w-7xl relative pt-10 pb-44 z-10 text-white">
          <nav className="flex items-center gap-3 text-gray-200 text-sm">
            <span className="text-gray-100 font-semibold">Informasi</span>
          </nav>
          <h1 className="font-extrabold text-4xl mt-6 tracking-wide">Dokumen Hukum dan Peraturan</h1>
          <p className="text-lg mt-4 text-gray-200 max-w-2xl leading-relaxed">
            Koleksi dokumen hukum, peraturan, dan dokumen lainnya yang relevan dengan kebijakan pemerintah.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg relative -top-32 z-10 pb-10">
        {/* Tab Navigation (Pusatkan tab) */}
        <div className="flex justify-center border-b border-gray-200 mb-6">
          {["Produk Hukum", "Dokumen"].map((tab) => (
            <button
              key={tab}
              className={`px-6 py-3 text-lg font-medium transition-all ${
                activeTab === tab ? "text-blue-600 border-b-4 border-blue-600 font-bold" : "text-gray-600 hover:text-blue-600"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">{activeTab}</h2>
        {activeTab === "Produk Hukum" ? (
          <div className="overflow-x-auto">
            <table className="w-full rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-blue-600 text-white text-base">
                  {["No", "Judul", "Publisher", "Tahun", "Tanggal Arsip", "Aksi"].map((head) => (
                    <th key={head} className="px-4 py-3 text-left">{head}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ProdukHukum.map((item, index) => (
                  <tr key={index} className="text-sm odd:bg-gray-100 even:bg-white">
                    <td className="px-4 py-3 text-center">{index + 1}</td>
                    <td className="px-4 py-3">
                      <p className="font-semibold">{item.title}</p>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </td>
                    <td className="px-4 py-3 text-center">{item.publisher}</td>
                    <td className="px-4 py-3 text-center">{item.year}</td>
                    <td className="px-4 py-3 text-center">{item.archiveDate || "-"}</td>
                    <td className="px-4 py-3 text-center">
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2 transition-all">
                        <FaCloudDownloadAlt /> Unduh
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div>
            {/* Dokumen Perencanaan */}
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Dokumen Perencanaan</h3>
              {DokumenPerencanaan.map((item, index) => (
                <div key={index} className="flex justify-between items-center bg-blue-100 p-4 rounded-lg mb-3 shadow-md">
                  <p className="text-gray-800 font-medium">{item.title}</p>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2 transition-all">
                    <FaCloudDownloadAlt /> Unduh
                  </button>
                </div>
              ))}
            </div>

            {/* Dokumen Evaluasi */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Dokumen Evaluasi</h3>
              {DokumenEvaluasi.map((item, index) => (
                <div key={index} className="flex justify-between items-center bg-blue-100 p-4 rounded-lg mb-3 shadow-md">
                  <p className="text-gray-800 font-medium">{item.title}</p>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2 transition-all">
                    <FaCloudDownloadAlt /> Unduh
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
