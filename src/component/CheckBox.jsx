import { Button } from "./Button";

export const CheckBox = ({
  text,
  id,
  handleDone,
  isChecked,
  handleDeleteBtn,
}) => {
  return (
    <div
      style={{
        backgroundColor: "#f8fafc",
        padding: "21px 16px",
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: "20px",
      }}
    >
      <div style={{ display: "flex", gap: "5px" }}>
        <input
          type="checkbox"
          value={text}
          checked={isChecked}
          onChange={() => handleDone(id)}
        />
        <label for={text}>{text}</label>
      </div>
      {isChecked && (
        <Button
          text="Delete"
          color="red"
          backgroundColor="#fdf3f2"
          onClick={() => handleDeleteBtn(id)}
        />
      )}
    </div>
  );
};
