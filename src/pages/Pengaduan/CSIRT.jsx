import { Mail, Phone, MapPin } from "lucide-react";
import { FaHome } from "react-icons/fa";
import bgImage from "../../assets/office.jpg"; // Pastikan file benar

export default function IncidentManagement() {
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
                <span className="text-gray-100 font-semibold">CSIRT</span>
              </nav>
              <h1 className="font-extrabold text-4xl mt-6 tracking-wide">Pengaduan Kerentanan/Insiden Keamanan Informasi</h1>
              <p className="text-base mt-4 text-gray-200 max-w-2xl leading-relaxed">
              CSIRT adalah penyedia layanan tim respon insiden keamanan siber. JabarProv-CSIRT akan membantu stakeholders terkait untuk melakukan penanggulangan dan pemulihan insiden keamanan siber dengan aspek-aspek manajemen insiden keamanan siber
              </p>
            </div>
          </section>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg relative -top-32 z-10 pb-10">
        <h2 className="text-4xl font-bold text-blue-700 text-left mb-14">
          Manajemen Insiden Keamanan Siber
        </h2>

        {[
          {
            title: "Triase Insiden (Incident Triage)",
            steps: [
              "Memastikan kebenaran insiden dan pelapor.",
              "Menilai dampak dan prioritas insiden.",
            ],
          },
          {
            title: "Koordinasi Insiden",
            steps: [
              "Mengkoordinasikan insiden dengan konstituen.",
              "Menentukan kemungkinan penyebab insiden.",
              "Memberikan rekomendasi penanggulangan berdasarkan panduan CSIRT.",
              "Mengkoordinasikan insiden dengan pihak terkait.",
            ],
          },
          {
            title: "Resolusi Insiden",
            steps: [
              "Melakukan investigasi dan analisis dampak insiden.",
              "Memberikan rekomendasi teknis untuk pemulihan pasca insiden.",
              "Memberikan rekomendasi teknis untuk memperbaiki kelemahan sistem.",
            ],
          },
        ].map((item, index) => (
          <div key={index} className="bg-gray-50 p-4 mt-4 rounded-lg">
            <h3 className="font-bold text-lg flex items-center">
              <span className="bg-blue-600 text-white w-8 h-8 flex items-center justify-center rounded-full mr-2">
                {index + 1}
              </span>
              {item.title}
            </h3>
            <ul className="list-disc pl-10 mt-2">
              {item.steps.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ul>
          </div>
        ))}

        {/* Mekanisme Pelaporan */}
        <div className="bg-gray-100 p-4 rounded-md mb-6">
          <h3 className="font-bold">
            Untuk pelaporan mengenai insiden siber yang terjadi, tim CSIRT telah
            membuat mekanisme pelaporan berikut:
          </h3>
          <ul className="list-disc list-inside mt-2">
            <li>
              Masyarakat dapat melaporkan insiden siber melalui email{" "}
              <a
                href="mailto:csirt@sumutprov.go.id"
                className="text-blue-600 font-bold"
              >
                csirt@sumutprov.go.id
              </a>
            </li>
            <li>
              Silahkan hubungi kami untuk melakukan aduan siber sesuai dengan
              prosedur pelaporan insiden.
            </li>
          </ul>
        </div>

        {/* Kontak */}
        <div className="mt-6">
          <h3 className="font-bold text-lg">
            Hubungi Kami <span className="text-blue-600">JabarProv-CSIRT</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            {[
              { Icon: Phone, label: "Telepon", value: "(022) 7202898" },
              {
                Icon: Mail,
                label: "Email",
                value: (
                  <a
                    href="mailto:csirt@jabarprov.go.id"
                    className="text-blue-600"
                  >
                    csirt@sumutprov.go.id
                  </a>
                ),
              },
              {
                Icon: MapPin,
                label: "Alamat",
                value:
                  "Jl. Tamansari No. 55, Lb. Siliwangi, Kecamatan Coblong, Kota Bandung, Jawa Barat (40132)",
              },
            ].map(({ Icon, label, value }, idx) => (
              <div key={idx} className="flex items-center space-x-2">
                <Icon className="text-blue-600 w-6 h-6" />
                <div>
                  <p className="font-bold">{label}</p>
                  <p>{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Website CSIRT */}
        <div className="bg-blue-100 p-4 rounded-md mt-6 flex justify-between items-center">
          <p className="font-bold">Website CSIRT</p>
          <a
            href="https://csirt.sumutprov.go.id/"
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Kunjungi
          </a>
        </div>
      </div>
    </div>
  );
}
