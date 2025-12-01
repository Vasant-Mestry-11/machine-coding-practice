import { useEffect, useState } from "react";

function Signal() {
  const [light, setLight] = useState("red");

  useEffect(() => {
    const timer = setTimeout(
      () => {
        setLight((prev) => {
          if (prev === "red") return "yellow";
          if (prev === "yellow") return "green";
          return "red";
        });
      },
      light === "red" ? 3000 : light === "yellow" ? 1000 : 2000
    );

    return () => {
      clearTimeout(timer);
    };
  }, [light]);

  return (
    <div className="container">
      <div className={`signal ${light === "red" && "red"}`}></div>
      <div className={`signal ${light === "yellow" && "yellow"}`}></div>
      <div className={`signal ${light === "green" && "green"}`}></div>
    </div>
  );
}

export default Signal;
