import { Input } from "@/component/Input";
import { Button } from "@/component/Button";
import { CheckBox } from "@/component/CheckBox";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const Container = () => {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

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

  const btnText = ["All", "Active", "Completed"];
  const [clickedBtn, setClikedBtn] = useState("All");

  const handleButtonClick = (text) => {
    setClikedBtn(text);
  };

  const clearCompletedHandler = () => {
    setList((prev) => prev.filter((el) => !el.isChecked));
  };

  // return list.length < 1 && "No tasks yet. Add one above!";

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
      <div style={{ marginTop: "20px", display: "flex", gap: "6px" }}>
        {btnText.map((btn) => {
          return (
            <Button
              key={btn}
              text={btn}
              onClick={() => handleButtonClick(btn)}
              color={clickedBtn === btn ? "white" : "black"}
              backgroundColor={clickedBtn === btn ? "#3586f9" : "lightgrey"}
            />
          );
        })}
      </div>
      {clickedBtn === "Active" &&
        list
          .filter((el) => !el.isChecked)
          .map((el, index) => {
            return (
              <CheckBox
                key={index}
                text={el.taskName}
                id={el.id}
                isChecked={el.isChecked}
                handleDone={handleDone}
                handleDeleteBtn={handleDeleteBtn}
              />
            );
          })}
      {clickedBtn === "Completed" &&
        list
          .filter((el) => el.isChecked)
          .map((el, index) => {
            return (
              <CheckBox
                key={index}
                text={el.taskName}
                id={el.id}
                isChecked={el.isChecked}
                handleDone={handleDone}
                handleDeleteBtn={handleDeleteBtn}
              />
            );
          })}
      {clickedBtn === "All" &&
        list.map((el, index) => {
          return (
            <CheckBox
              key={index}
              text={el.taskName}
              id={el.id}
              isChecked={el.isChecked}
              handleDone={handleDone}
              handleDeleteBtn={handleDeleteBtn}
            />
          );
        })}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>
          {list.filter((el) => el.isChecked).length} of {list.length} tasks
          completed
        </p>
        <p style={{ color: "red" }} onClick={clearCompletedHandler}>
          Clear completed
        </p>
      </div>
      <div
        style={{
          display: "flex",
          gap: "5px",
          justifyContent: "center",
          marginTop: "40px",
        }}
      >
        <p>Powered by</p>
        <p style={{ color: "blue" }}>Pinecone academy</p>
      </div>
    </div>
  );
};
