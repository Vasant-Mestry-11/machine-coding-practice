const Checkboxes = ({ checked, handleCheckboxClick, data }) => {
  return (
    <div className="checkbox__main">
      {data.map(({ id, name, children }) => (
        <div className="parent" key={id}>
          <input
            type="checkbox"
            id={id}
            onChange={() => handleCheckboxClick(id)}
            checked={checked[id] || false}
          />
          <label htmlFor={id}>{name}</label>
          {children && (
            <Checkboxes
              data={children}
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
