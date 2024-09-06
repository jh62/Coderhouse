/* eslint-disable no-unused-vars */
import { useState } from "react";

function Input() {
  const [input, setInput] = useState("");

  return <input type="text" onChange={(e) => setInput(e.target.value)} />;
}

export default Input;
