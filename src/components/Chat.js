import style from "../components/Chat.module.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteMessage } from "../redux/chat/chat-reducers";

export default function Chat() {
  const messages = useSelector((state) => state.chat.messages);
  const dispatch = useDispatch();

  return (
    <section className={style.chatSection}>
      <ul className={style.messageList}>
        {messages.map(({ id, message }) => {
          return (
            <li key={id} onClick={() => dispatch(deleteMessage(id))}>
              <div className={style.messageDiv}>
                <p className={style.text}>{message}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
