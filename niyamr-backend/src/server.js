const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const pdfRoutes = require("./routes/pdfRoutes");

dotenv.config();
console.log("Loaded key:", process.env.OPENAI_API_KEY ? "YES" : "NO");


const app = express();
app.use(cors());
app.use(express.json());

app.use("/check", pdfRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
