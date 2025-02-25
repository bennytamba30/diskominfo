import { useEffect } from "react";

function SP4N() {
  useEffect(() => {
    window.location.href = "https://www.lapor.go.id/";
  }, []);

  return null; // Tidak menampilkan apa pun, langsung redirect
}

export default SP4N;
