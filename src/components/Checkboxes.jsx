const Checkboxes = ({ checked, handleCheckboxClick, data }) => {
  return (
    <div className="checkbox__main">
      {data.map((node) => (
        <div className="parent" key={node.id}>
          <input
            type="checkbox"
            id={node.id}
            onChange={(e) => handleCheckboxClick(node, e.target.checked)}
            checked={checked[node.id] || false}
          />
          <label htmlFor={node.id}>{node.name}</label>
          {node.children && (
            <Checkboxes
              data={node.children}
              handleCheckboxClick={handleCheckboxClick}
              checked={checked}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Checkboxes;
