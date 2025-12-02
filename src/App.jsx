import "./App.css";
import Password from "./components/password";
import ProgressBar from "./components/ProgressBar";
import Signal from "./components/signal";

/*

Copy deeply nested object

values
- numbers
- functions
- array
- object

*/
function App() {
  let obj = {
    a: "vasant",
    b: 1,
    c: false,
    d: [1, 2, 3],
    e: function () {
      console.log("abc");
    },
    f: {
      q: "a",
      m: {
        foo: "bar",
        don: "vm",
      },
    },
  };

  /*

  const newObj = {};
  const deepCopy = (val) => {
    console.log("=== val", val)
    for (let key in val) {
      if (["boolean", "string", "number"].includes(typeof val[key])) {
        newObj[key] = val[key];
      }

      if (typeof val[key] === "object") {
        if (Array.isArray(val[key])) {
          const newArr = [...val[key]];
          newObj[key] = newArr;
        } else {
          console.log(val[key]);
          const temp = deepCopy(val[key]);
          newObj[key] = temp;
        }
      }

      1;
      if (typeof val[key] === "function") {
        newObj[key] = val[key];
      }
    }

    return val;
  };

  const obj2 = deepCopy(obj);
  obj.d[2] = 9;
  obj.d[3] = 29;
  obj.f["m"] = "vasant";

  console.log("obj2", obj2);

  */

  const deepCopy = (val) => {
    if (val === null || typeof val !== "object") {
      return val;
    }

    if (typeof val === "function") {
      return val;
    }

    if (Array.isArray(val)) {
      const arr = [];
      val.forEach((item, i) => {
        arr[i] = deepCopy(item);
      });
      return arr;
    }

    if (typeof val === "object") {
      const obj = {};
      for (let key in val) {
        obj[key] = deepCopy(val[key]);
      }

      return obj;
    }
  };

  const result = deepCopy(obj);

  obj.d[2] = 9;
  obj.d[3] = 29;
  obj.f["m"] = "vasant";

  console.log(result);

  const bars = [5, 10, 25, 50, 70, 100];

  return (
    <div>
      {/* <Signal /> */}
      {/* <Password /> */}

      {/* <pre>{JSON.stringify(obj)}</pre>
      <pre>{JSON.stringify(result)}</pre> */}

      {bars.map((value) => (
        <ProgressBar progress={value} key={value} />
      ))}
    </div>
  );
}

export default App;
