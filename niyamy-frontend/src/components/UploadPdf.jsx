import React from "react";

const UploadPDF = ({ onFileSelect }) => {
  return (
    <div className="section">
      <label className="label">Upload PDF</label>
      <input
        type="file"
        accept="application/pdf"
        onChange={(e) => onFileSelect(e.target.files[0])}
      />
    </div>
  );
};

export default UploadPDF;
