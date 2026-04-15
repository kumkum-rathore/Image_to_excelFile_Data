const express = require("express");
const router = express.Router();

const upload = require("../config/multerConfig");
const { uploadImage } = require("../controllers/uploadController");

// Route
router.post("/upload", upload.single("image"), uploadImage);

module.exports = router;