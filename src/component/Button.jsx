export const Button = ({ text, color, backgroundColor, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        width: "fit-content",
        padding: "8.5px",
        borderRadius: "10px",
        border: "none",
        color: color,
        backgroundColor: backgroundColor,
        cursor: "pointer",
      }}
    >
      {text}
    </button>
  );
};
