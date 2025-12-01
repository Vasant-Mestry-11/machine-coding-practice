import { useState } from "react";

function Password({ min = 4, max = 20 }) {
  const [range, setRange] = useState(min);

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
        <div className="controls">
          <div className="control">
            <input type="checkbox" name="numbers" id="number" />
            <label htmlFor="number">Include Numbers</label>
          </div>
          <div className="control">
            <input type="checkbox" name="special" id="special" />
            <label htmlFor="special">Include Special Characters</label>
          </div>
        </div>
        <div className="controls">
          <div className="control">
            <input type="checkbox" name="small" id="small" />
            <label htmlFor="small">Include Small Letters</label>
          </div>
          <div className="control">
            <input type="checkbox" name="capital" id="capital" />
            <label htmlFor="capital">Include Capital Letters</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Password;
