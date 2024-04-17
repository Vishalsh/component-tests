import { fireEvent, render } from "@testing-library/react";
import Button from "./Button";
import type { ButtonProps } from "./Button";
import "@testing-library/jest-dom/vitest";

describe("Button", () => {
  const defaultProps: ButtonProps = {
    type: "button",
    ariaLabel: "Click me to increase the count",
    id: "count_button",
    onClick: vi.fn(),
    children: "Click Me"
  };

  const renderButton = (overriddenProps: Partial<ButtonProps> = {}) => {
    return render(
      <Button {...{...defaultProps, ...overriddenProps}} />
    );
  }

  it("renders correctly", () => {
    const { getByRole } = renderButton();

    expect(
      getByRole("button", { name: "Click me to increase the count" })
    ).toBeInTheDocument();
  });

  it("sets the button type", () => {
    const { getByRole } = renderButton({ type: 'submit' });

    expect(
      getByRole("button", { name: "Click me to increase the count" })
    ).toHaveAttribute("type", "submit");
  });

  it("disables the button when set", () => {
    const { getByRole } = renderButton({ disabled: true });

    expect(
      getByRole("button", { name: "Click me to increase the count" })
    ).toBeDisabled();
  });

  it("sets the tabindex on the button", () => {
    const { getByRole } = renderButton({ tabIndex: 0 });

    expect(
      getByRole("button", { name: "Click me to increase the count" })
    ).toHaveAttribute("tabIndex", "0");
  });

  it("sets the styles on the button", () => {
    const { getByRole } = renderButton({ style: { background: "red" } });
    
    expect(
      getByRole("button", { name: "Click me to increase the count" })
    ).toHaveStyle("background: red");
  });

  it("executes onClick function when clicked", () => {
    const onClickMock = vi.fn();

    const { getByRole } = renderButton({ onClick: onClickMock });

    const button = getByRole("button", {
      name: "Click me to increase the count",
    });
    fireEvent.click(button);

    expect(onClickMock).toHaveBeenCalled();
  });

  it("executes onFocus function when focussed", async () => {
    const onFocusMock = vi.fn();

    const { getByRole } = renderButton({ onFocus: onFocusMock });

    const button = getByRole("button", {
      name: "Click me to increase the count",
    });

    fireEvent.focus(button);

    expect(onFocusMock).toHaveBeenCalled();
  });

  it("executes onBlur function when focussed", () => {
    const onBlurMock = vi.fn();

    const { getByRole } = renderButton({ onBlur: onBlurMock });

    const button = getByRole("button", {
      name: "Click me to increase the count",
    });

    fireEvent.blur(button);

    expect(onBlurMock).toHaveBeenCalled();
  });

  it("executes onMouseEnter function", () => {
    const onMouseEnterMock = vi.fn();

    const { getByRole } = renderButton({ onMouseEnter: onMouseEnterMock });

    const button = getByRole("button", {
      name: "Click me to increase the count",
    });

    fireEvent.mouseEnter(button);

    expect(onMouseEnterMock).toHaveBeenCalled();
  });

  it("executes onMouseLeave function", () => {
    const onMouseLeaveMock = vi.fn();

    const { getByRole } = renderButton({ onMouseLeave: onMouseLeaveMock });

    const button = getByRole("button", {
      name: "Click me to increase the count",
    });

    fireEvent.mouseLeave(button);

    expect(onMouseLeaveMock).toHaveBeenCalled();
  });

  it("executes onKeyDown function", () => {
    const onKeyDownMock = vi.fn();

    const { getByRole } = renderButton({ onKeyDown: onKeyDownMock });

    const button = getByRole("button", {
      name: "Click me to increase the count",
    });

    fireEvent.keyDown(button);

    expect(onKeyDownMock).toHaveBeenCalled();
  });

  it("executes onKeyUp function", () => {
    const onKeyUpMock = vi.fn();

    const { getByRole } = renderButton({ onKeyUp: onKeyUpMock });

    const button = getByRole("button", {
      name: "Click me to increase the count",
    });

    fireEvent.keyUp(button);

    expect(onKeyUpMock).toHaveBeenCalled();
  });
});
