import { render } from "@testing-library/react";
import Button from "./ButtonWithTheme";
import "@testing-library/jest-dom/vitest";
import { ThemeContext } from "../ThemeContext";

describe("Button", () => {
  it("renders correctly", () => {
    const { getByRole } = render(
      <Button
        type="button"
        ariaLabel="Click me to increase the count"
        id="count_button"
        onClick={vi.fn()}
      >
        Click Me
      </Button>
    );

    const button = getByRole("button", {
      name: "Click me to increase the count",
    });
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle("background: white");
    expect(button).toHaveStyle("color: black");
  });

  it("sets the button styles according to the theme", () => {
    const { getByRole } = render(
      <ThemeContext.Provider value={"dark"}>
        <Button
          type="button"
          ariaLabel="Click me to increase the count"
          id="count_button"
          onClick={vi.fn()}
        >
          Click Me
        </Button>
      </ThemeContext.Provider>
    );

    const button = getByRole("button", {
      name: "Click me to increase the count",
    });

    expect(button).toHaveStyle("background: black");
    expect(button).toHaveStyle("color: white");
  });
});
