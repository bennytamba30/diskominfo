import { useState } from "react";
import { ProdukHukum, DokumenPerencanaan, DokumenEvaluasi } from "../../data";
import { FaCloudDownloadAlt } from "react-icons/fa";

export default function LegalDocuments() {
  const [activeTab, setActiveTab] = useState("Produk Hukum");

  return (
    <div className=" bg-slate-100 min-h-screen">
      {/* Section Informasi */}
      <section className="relative w-full bg-blue-700">
        <div className="container mx-auto px-6 2xl:px-0 xl:max-w-7xl relative pt-2 pb-48 text-white">
          <nav className="hidden md:flex">
            <a href="/informasi" className="font-bold text-sm text-gray-50 mb-18" aria-current="page">
              Informasi
            </a>
          </nav>
          <nav className="md:hidden">
            <a href="/" className="font-bold text-sm text-blue-50 flex items-center">
              <span className="w-6 h-6 flex items-center justify-start">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.27151 10.7024L12.8463 18.7124C13.0215 18.8979 13.2554 19 13.5047 19C13.7541 19 13.988 18.8979 14.1632 18.7124L14.721 18.1227C15.084 17.7384 15.084 17.1138 14.721 16.7301L8.36027 10.0037L14.7281 3.26988C14.9033 3.08447 15 2.8373 15 2.57374C15 2.30989 14.9033 2.06272 14.7281 1.87716L14.1702 1.28756C13.9949 1.10214 13.7612 0.999999 13.5118 0.999999C13.2624 0.999999 13.0286 1.10214 12.8534 1.28756L5.27151 9.30496C5.0959 9.49096 4.99945 9.7393 5 10.0033C4.99945 10.2683 5.0959 10.5165 5.27151 10.7024Z"></path>
                </svg>
              </span>
              Beranda
            </a>
          </nav>

          <h1 className="font-bold text-3xl mt-6">Informasi</h1>
          <p className="text-sm mt-3">
            Akses informasi produk hukum terpadu dan dokumen resmi yang telah dirancang dan disusun Diskominfo Jabar.
          </p>
        </div>
      </section>

      {/* Konten Utama */}
      <div className="max-w-7xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg relative -top-32 z-10 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className=" rounded-lg text-center md:text-left">
            <h3 className="text-blue-500 font-semibold mb-3">Dokumen dan Produk Hukum</h3>
            {["Produk Hukum", "Dokumen"].map((tab) => (
              <button
                key={tab}
                className={`block w-full text-left p-3 rounded-lg transition-all ${
                  activeTab === tab ? "bg-blue-500 text-white font-bold" : "hover:bg-blue-200 text-gray-700"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Konten */}
          <div className="col-span-3">
            <h2 className="text-4xl text-center md:text-left font-bold text-blue-700 mb-10">{activeTab}</h2>
            {activeTab === "Produk Hukum" ? (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-blue-600 text-white text-base md:text-base">
                      {["No", "Judul", "Publisher", "Tahun", " Tanggal Arsip", "Aksi"].map((head) => (
                        <th key={head} className=" px-4 py-1">{head}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {ProdukHukum.map((item, index) => (
                      <tr key={index} className=" text-sm md:text-base">
                        <td className=" px-4 py-2 text-center">{index + 1}</td>
                        <td className=" px-4 py-2">
                          <p>{item.title}</p>
                          <p className="text-base text-gray-600">{item.description}</p>
                        </td>
                        <td className=" px-1 py-1 text-center">{item.publisher}</td>
                        <td className=" px-4 py-2 text-center">{item.year}</td>
                        <td className=" px-1 py-1 text-center">{item.archiveDate || "-"}</td>
                        <td className=" px-4 py-2 text-center">
                          <button className="bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 flex items-center gap-2">
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
                {[{ title: "Dokumen Perencanaan", data: DokumenPerencanaan }, { title: "Dokumen Evaluasi", data: DokumenEvaluasi }].map((section) => (
                  <div key={section.title}>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">{section.title}</h3>
                    {section.data.map((item, index) => (
                      <div key={index} className="flex justify-between items-center bg-blue-100 p-4 rounded-lg mb-3">
                        <p className="text-gray-800">{item.title}</p>
                        <button className="bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 flex items-center gap-2">
                          <FaCloudDownloadAlt /> Unduh
                        </button>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
