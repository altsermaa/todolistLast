import { Input } from "@/component/Input";
import { Button } from "@/component/Button";
import { CheckBox } from "@/component/CheckBox";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const Container = () => {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  const btnText = ("All", "Active", "Completed");
  const [clickedBtn, setClikedBtn] = useState("All");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = () => {
    const randomID = uuidv4();
    setList((prev) => [
      ...prev,
      { taskName: text, isChecked: false, id: randomID },
    ]);
    setText("");
  };

  const handleDone = (id) => {
    setList((prev) => {
      return prev.map((el) => {
        return el.id === id ? { ...el, isChecked: !el.isChecked } : el;
      });
    });
  };

  const handleDeleteBtn = (id) => {
    setList((prev) => {
      return prev.filter((el) => el.id !== id);
    });
  };

  // const handleActive = () => {
  //   setActive(el.isChecked === false ? [...prev, { taskName: text, isChecked: false, id: randomID }]);
  // };

  return (
    <div
      style={{
        backgroundColor: "white",
        width: "377px",
        display: "flex",
        flexDirection: "column",
        margin: "60px auto auto auto",
        borderRadius: "10px",
        padding: "24px 16px",
      }}
    >
      <h1 style={{ textAlign: "center" }}>To-Do List</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          gap: "6px",
        }}
      >
        <Input value={text} onChange={handleChange} />
        <Button
          text="Add"
          color="white"
          backgroundColor="#3586f9"
          onClick={handleClick}
        />
      </div>
      {clickedBtn.map((btn) => {
        return <Button text={btnText} />;
      })}

      {/* <div style={{ marginTop: "20px", display: "flex", gap: "6px" }}>
        <Button text="All" />
        <Button text="Active" />
        <Button text="Completed" />
      </div> */}

      {JSON.stringify(list)}

      {list.map((el, index) => {
        return (
          <CheckBox
            key={index}
            // index={index}
            text={el.taskName}
            id={el.id}
            isChecked={el.isChecked}
            handleDone={handleDone}
            handleDeleteBtn={handleDeleteBtn}
          />
        );
      })}

      {active.map((el, index) => {
        return (
          <CheckBox
            key={index}
            // index={index}
            text={el.taskName}
            id={el.id}
            isChecked={el.isChecked}
            handleDone={handleDone}
            handleDeleteBtn={handleDeleteBtn}
          />
        );
      })}
    </div>
  );
};
