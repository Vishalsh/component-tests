import { useState } from "react";
import "./App.css";
import ButtonWithTheme from "./ButtonWithTheme/ButtonWithTheme";
import { ThemeContext } from "./ThemeContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeContext.Provider value={'dark'}>
      <ButtonWithTheme
        type="button"
        ariaLabel="Click me to increase the count"
        id="count_button"
        onClick={() => setCount((count) => count + 1)}
      >
        count is {count}
      </ButtonWithTheme>
    </ThemeContext.Provider>
  );
}

export default App;
