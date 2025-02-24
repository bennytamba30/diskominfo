import { useState } from "react";

export default function WBSForm() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (

  
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-3xl w-full">
        <h2 className="text-2xl font-bold text-blue-700 text-center mb-4">
          FORMULIR PELAPORAN WHISTLE BLOWING SYSTEM
        </h2>
        <p className="text-sm text-gray-600 text-center mb-6">
          DINAS KOMUNIKASI DAN INFORMATIKA PROVINSI JAWA BARAT
        </p>

        {/* Scrollable Form */}
        <div className="max-h-[500px] overflow-y-auto p-4 border rounded-lg shadow-md">
          <form className="space-y-4">
            {/* Nama Pelapor */}
            <div>
              <label className="block text-gray-700 font-semibold">Nama Lengkap Pelapor (Sesuai KTP)</label>
              <input type="text" className="w-full p-2 border rounded-md" placeholder="Nama lengkap" />
            </div>

            {/* No. Telepon */}
            <div>
              <label className="block text-gray-700 font-semibold">No. Telepon Pelapor</label>
              <input type="text" className="w-full p-2 border rounded-md" placeholder="08XXXXXXXXXX" />
            </div>

            {/* Email Pelapor */}
            <div>
              <label className="block text-gray-700 font-semibold">Email Pelapor</label>
              <input type="email" className="w-full p-2 border rounded-md" placeholder="example@email.com" />
            </div>

            {/* Nama Terlapor */}
            <div>
              <label className="block text-gray-700 font-semibold">Nama Lengkap Terlapor</label>
              <input type="text" className="w-full p-2 border rounded-md" placeholder="Nama lengkap terlapor" />
            </div>

            {/* Jabatan Terlapor */}
            <div>
              <label className="block text-gray-700 font-semibold">Jabatan Terlapor</label>
              <input type="text" className="w-full p-2 border rounded-md" placeholder="Jabatan" />
            </div>

            {/* Tindakan yang dilakukan */}
            <div>
              <label className="block text-gray-700 font-semibold">Tindakan/Perbuatan yang Dilakukan</label>
              <textarea className="w-full p-2 border rounded-md" placeholder="Jelaskan tindakan/perbuatan..." rows="3"></textarea>
            </div>

            {/* Waktu Kejadian */}
            <div>
              <label className="block text-gray-700 font-semibold">Waktu Terjadi Kasus</label>
              <input type="date" className="w-full p-2 border rounded-md" />
            </div>

            {/* Lokasi Kejadian */}
            <div>
              <label className="block text-gray-700 font-semibold">Lokasi Kejadian</label>
              <input type="text" className="w-full p-2 border rounded-md" placeholder="Lokasi kejadian" />
            </div>

            {/* Kronologis */}
            <div>
              <label className="block text-gray-700 font-semibold">Kronologis Kejadian</label>
              <textarea className="w-full p-2 border rounded-md" placeholder="Jelaskan kronologi kejadian..." rows="4"></textarea>
            </div>

            {/* Upload Bukti */}
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

            {/* Submit Button */}
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
