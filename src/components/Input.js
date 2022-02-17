import { ReactComponent as IconSend } from "../icons/iconSend.svg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addMessage } from "../redux/chat/chat-reducers";
import style from "../components/Input.module.css";

export default function Input() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  function handleMessage(e) {
    const { value } = e.currentTarget;
    setText(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (text === "") {
      alert("Enter text");
    }
    const message = {
      id: Math.random(),
      message: text,
    };
    dispatch(addMessage(message));
    setText("");
  }

  return (
    <div style={{ marginBottom: 10 }}>
      <form style={{ display: "flex" }} onSubmit={handleSubmit}>
        <input
          type="text"
          className={style.input}
          value={text}
          onChange={handleMessage}
        />
        <button className={style.btn} type="submit">
          <IconSend />
        </button>
      </form>
    </div>
  );
}
