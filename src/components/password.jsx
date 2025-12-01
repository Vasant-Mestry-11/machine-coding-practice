import { useState } from "react";
import useGeneratePassword from "../hooks/useGeneratePassword";

function Password({ min = 4, max = 20 }) {
  const [range, setRange] = useState(min);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([
    {
      name: "numbers",
      selected: false,
      label: "Include Numbers",
    },
    {
      name: "special",
      selected: false,
      label: "Include Special Characters",
    },
    {
      name: "small",
      selected: false,
      label: "Include Small Letters",
    },
    {
      name: "capital",
      selected: false,
      label: "Include Capital Letters",
    },
  ]);

  const { password, generatePassword } = useGeneratePassword(
    selectedCheckboxes,
    range
  );

  const handleSelect = (e, index) => {
    const temp = [...selectedCheckboxes];
    temp[index].selected = !temp[index].selected;
    setSelectedCheckboxes(temp);
  };

  return (
    <div className="password-container">
      <h2>Password generator</h2>
      <div className="range">
        <input
          type="range"
          min={min}
          max={max}
          value={range}
          onChange={(e) => setRange(e.target.value)}
          step={1}
          className="range"
        />
        <p>Length will be {range}</p>
      </div>

      <div className="password-controls">
        <div>
          {selectedCheckboxes.map((checkbox, index) => {
            const { selected, label, name } = checkbox;
            return (
              <div key={index}>
                <input
                  type="checkbox"
                  name={name}
                  id={name}
                  checked={selected}
                  onChange={(e) => handleSelect(e, index)}
                />
                <label htmlFor={name}>{label}</label>
              </div>
            );
          })}
        </div>
      </div>

      <div className="generate-password-btn">
        <button onClick={generatePassword}>Generate Password</button>
      </div>

      {password && (
        <div>
          <h3>Password Is: {password}</h3>
        </div>
      )}
    </div>
  );
}

export default Password;
