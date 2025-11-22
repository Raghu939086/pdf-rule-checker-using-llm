import React, { useState } from "react";
import UploadPDF from "../components/UploadPdf";
import RulesForm from "../components/RulesForm";
import ResultsTable from "../components/ResultTable";
import { checkPDF } from "../apiServices/api";

const Home = () => {
  const [pdf, setPdf] = useState(null);
  const [rules, setRules] = useState(["", "", ""]);
  const [results, setResults] = useState([]);

  const handleCheck = async () => {
    if (!pdf) {
      alert("Please upload a PDF first");
      return;
    }

    const formData = new FormData();
    formData.append("pdf", pdf);
    formData.append("rules", JSON.stringify(rules));

    const response = await checkPDF(formData);
    setResults(response);
  };

  return (
    <div className="container">
      <h1 className="title">PDF Rule Checker</h1>

      <UploadPDF onFileSelect={setPdf} />
      <RulesForm rules={rules} setRules={setRules} />

      <button className="btn" onClick={handleCheck}>
        Check Document
      </button>

      <ResultsTable results={results} />
    </div>
  );
};

export default Home;
