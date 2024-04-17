import { render } from "@testing-library/react";
import Button from "./ButtonWithTheme";
import "@testing-library/jest-dom/vitest";
import { Theme, ThemeContext } from "../ThemeContext";
import { ButtonProps } from "../Button/Button";

describe("Button", () => {
  const defaultProps: ButtonProps = {
    type: "button",
    ariaLabel: "Click me to increase the count",
    id: "count_button",
    onClick: vi.fn(),
    children: "Click Me",
  };

  const renderButton = (
    theme: Theme = 'light',
    overriddenButtonProps: Partial<ButtonProps> = {}
  ) => {
    return render(
      <ThemeContext.Provider value={theme}>
        <Button {...{ ...defaultProps, ...overriddenButtonProps }} />
      </ThemeContext.Provider>
    );
  };

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
    const { getByRole } = renderButton("dark", { type: "submit" });

    const button = getByRole("button", {
      name: "Click me to increase the count",
    });

    expect(button).toHaveStyle("background: black");
    expect(button).toHaveStyle("color: white");
  });
});
