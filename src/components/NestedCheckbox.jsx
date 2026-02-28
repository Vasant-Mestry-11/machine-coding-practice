import { useState } from "react";
import Checkboxes from "./Checkboxes";

const CHECKBOX_DATA = [
  {
    id: 1,
    name: "Fruits",
    children: [
      {
        id: 2,
        name: "Apple",
        children: [],
      },
      {
        id: 3,
        name: "Banana",
        children: [],
      },
      {
        id: 4,
        name: "Citrus",
        children: [
          {
            id: 5,
            name: "Orange",
            children: [],
          },
          {
            id: 6,
            name: "Lemon",
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: 7,
    name: "Vegitables",
    children: [
      {
        id: 8,
        name: "Carrot",
        children: [],
      },
      {
        id: 9,
        name: "Brocolli",
        children: [],
      },
    ],
  },
];

const NestedCheckbox = () => {
  const [checked, setChecked] = useState({});

  const handleCheckboxClick = (node, isChecked) => {
    setChecked((prev) => {
      const newState = { ...prev };

      const updateChildren = (ele) => {
        newState[ele.id] = isChecked;
        ele.children.forEach((child) => {
          newState[child.id] = isChecked;
          child.children && updateChildren(child);
        });
      };

      updateChildren(node);

      return newState;
    });
  };

  console.log(checked);

  return (
    <div className="checkboxesWrapper">
      <Checkboxes
        data={CHECKBOX_DATA}
        checked={checked}
        handleCheckboxClick={handleCheckboxClick}
      />
    </div>
  );
};

export default NestedCheckbox;
