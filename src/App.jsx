import "./App.css";
import Password from "./components/password";
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
  return (
    <>
      {/* <Signal /> */}
      {/* <Password /> */}

      <pre>{JSON.stringify(obj)}</pre>
      <pre>{JSON.stringify(obj2)}</pre>
    </>
  );
}

export default App;
