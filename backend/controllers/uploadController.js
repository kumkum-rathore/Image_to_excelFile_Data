
const multer = require("multer");
const path = require("path");   

// const Tesseract = require("tesseract.js");

// const uploadImage = async (req, res) => {
//   try {
//     const imagePath = req.file.path;

//     // OCR process
//     const result = await Tesseract.recognize(
//       imagePath,
//       "eng", // language
//       {
//         logger: (m) => console.log(m), // progress log
//       }
//     );

//     const extractedText = result.data.text;

//     res.json({
//       message: "Text extracted successfully ✅",
//       text: extractedText,
//     });
//   } catch (error) {
//     res.status(500).json({
//       error: "OCR failed ❌",
//       details: error.message,
//     });
//   }
// };

// module.exports = { uploadImage };

// const Tesseract = require("tesseract.js");

// const uploadImage = async (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({
//         error: "No file uploaded ❌",
//       });
//     }

//     const imagePath = req.file.path;

//     const result = await Tesseract.recognize(imagePath, "eng");

//     const extractedText = result.data.text;

//     const rows = extractedText
//       .split("\n")
//       .filter((line) => line.trim() !== "")
//       .map((line) => line.split(/\s+/));

//     res.json({
//       message: "Success ✅",
//       tableData: rows,
//     });
//   } catch (error) {
//     res.status(500).json({
//       error: "OCR processing failed ❌",
//       details: error.message,
//     });
//   }
// };

// module.exports = { uploadImage };


const Tesseract = require("tesseract.js");

const uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded ❌" });
    }

    // Cloudinary URL
    const imageUrl = req.file.path;

    const result = await Tesseract.recognize(imageUrl, "eng");

    const extractedText = result.data.text;

    const rows = extractedText
      .split("\n")
      .filter((line) => line.trim() !== "")
      .map((line) => line.split(/\s+/));

    res.json({
      message: "Success ✅",
      imageUrl,
      tableData: rows,
    });
  } catch (error) {
    res.status(500).json({
      error: "OCR failed ❌",
      details: error.message,
    });
  }
};

module.exports = { uploadImage };