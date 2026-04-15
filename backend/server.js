const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const upload = require("./config/multerConfig");

const uploadRoutes = require("./routes/uploadRoutes");

const app = express();

const corsOptions = {
  origin:process.env.CORS_ORIGIN,
  // origin: 'https://your-frontend-domain.com', // Yha apne live frontend ka link dalein
  optionsSuccessStatus: 200 
};

app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use("/api", uploadRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});