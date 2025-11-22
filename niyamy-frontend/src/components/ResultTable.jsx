import React from "react";

const ResultsTable = ({ results }) => {
  if (!results.length) return null;

  return (
    <table className="results-table">
      <thead>
        <tr>
          <th>Rule</th>
          <th>Status</th>
          <th>Evidence</th>
          <th>Reasoning</th>
          <th>Confidence</th>
        </tr>
      </thead>

      <tbody>
        {results.map((r, i) => (
          <tr key={i}>
            <td>{r.rule}</td>
            <td>{r.status}</td>
            <td>{r.evidence}</td>
            <td>{r.reasoning}</td>
            <td>{r.confidence}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ResultsTable;
