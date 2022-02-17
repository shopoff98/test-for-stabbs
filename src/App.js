import Input from "./components/Input";
import Chat from "./components/Chat";
export default function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        paddingRight: 10,
        paddingLeft: 10,
        backgroundColor: "#212121",
        height: "100vh",
      }}
    >
      <Chat />
      <Input />
    </div>
  );
}
