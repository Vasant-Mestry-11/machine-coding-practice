import { useMemo, useState } from "react";
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

  const buildParentMap = (data, parent = null, map = {}) => {
    data.forEach((node) => {
      map[node.id] = parent;
      if (node.children.length > 0) {
        buildParentMap(node.children, node, map);
      }
    });
    return map;
  };

  const parentMap = useMemo(() => buildParentMap(CHECKBOX_DATA), []);
  console.log("parentMap", parentMap);

  const handleCheckboxClick = (node, isChecked) => {
    setChecked((prev) => {
      const newState = { ...prev, [node.id]: isChecked };

      const updateChildren = (node) => {
        node.children?.forEach((child) => {
          newState[child.id] = isChecked;
          child.children && updateChildren(child);
        });
      };

      updateChildren(node);

      // if all childrens are checked, mark the parent as checked

      const checkAncestor = (currentNode) => {
        const parent = parentMap[currentNode.id];
        if (!parent) return;
        const isChildChecked = currentNode.children.every(
          (child) => newState[child.id],
        );
        newState[currentNode.id] = isChildChecked;
        console.log("========== parent", parent)
        checkAncestor(parent);
      };

      checkAncestor(node);
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
        parentMap={parentMap}
      />
    </div>
  );
};

export default NestedCheckbox;
