import React from "react";

const RulesForm = ({ rules, setRules }) => {
  const updateRule = (index, value) => {
    const updated = [...rules];
    updated[index] = value;
    setRules(updated);
  };

  return (
    <div className="section">
      <label className="label">Enter 3 Rules</label>

      {rules.map((rule, index) => (
        <input
          key={index}
          type="text"
          placeholder={`Rule ${index + 1}`}
          value={rule}
          onChange={(e) => updateRule(index, e.target.value)}
          className="input"
        />
      ))}
    </div>
  );
};

export default RulesForm;
