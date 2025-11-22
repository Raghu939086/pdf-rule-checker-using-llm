const express = require("express");
const multer = require("multer");
const { handlePDFCheck } = require("../controllers/pdfController");

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post("/", upload.single("pdf"), handlePDFCheck);

module.exports = router;
