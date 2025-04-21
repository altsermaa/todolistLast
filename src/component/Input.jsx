export const Input = ({ value, onChange }) => {
  return (
    <input
      onChange={onChange}
      value={value}
      type="text"
      placeholder="Add a new task..."
      style={{
        padding: "15px",
        borderRadius: "15px",
        border: "1px solid #efefef",
        flex: 1,
      }}
    />
  );
};
