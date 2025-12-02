import { useEffect, useState } from "react";
import "./progress.css";

function ProgressBar({ progress }) {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    setTimeout(() => setAnimatedProgress(progress), 500);
  }, [progress]);

  return (
    <div className="outer">
      <div
        className="inner"
        style={{
          transform: `translatex(${animatedProgress - 100}%)`,
          color: animatedProgress < 5 ? "black" : "white",
        }}
      >
        {progress}%
      </div>
    </div>
  );
}

export default ProgressBar;
