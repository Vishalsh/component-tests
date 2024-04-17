import { useState } from "react";
import "./App.css";
import Button from "./Button/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Button
      type="button"
      ariaLabel="Click me to increase the count"
      id="count_button"
      onClick={() => setCount((count) => count + 1)}
    >
      count is {count}
    </Button>
  );
}

export default App;
