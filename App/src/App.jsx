// import React from "react";
import "./App.css";
import useStorage from "./useStorage";
function App() {
  const [text, setText] = useStorage("text", "");
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></input>
    </div>
  );
}

export default App;