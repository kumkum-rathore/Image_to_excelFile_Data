import { useState } from "react";

const ImageUpload = ({ setTableData }) => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!image) {
      alert("Please select an image");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);

    try {
      setLoading(true); // 🔥 start loader
      setError("");

      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/upload`, {
  method: "POST",
  body: formData,
});

      const data = await res.json();

      if (!res.ok) {
    throw new Error(data.error || "Upload failed");
  }
      setTableData(data.tableData);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false); // 🔥 stop loader
    }
  };

  return (
    <div>
      <input type="file" onChange={handleChange} />

      <br /><br />

      <button
        onClick={handleUpload}
        disabled={loading}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >

        {loading ? "Processing..." : "Upload Image"}
      </button>
      {loading && <p className="mt-2 text-gray-600">Extracting text... please wait ⏳</p>}
      {error && (
  <p className="text-red-500 mt-2">{error}</p>
)}
    </div>
  );
};

export default ImageUpload;