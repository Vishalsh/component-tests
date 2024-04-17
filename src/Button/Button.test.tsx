import { fireEvent, render } from "@testing-library/react";
import Button from "./Button";
import '@testing-library/jest-dom/vitest';

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

    expect(
      getByRole("button", { name: "Click me to increase the count" })
    ).toBeInTheDocument();
  });

  it('sets the button type', () => {
    const { getByRole } = render(
      <Button
        type="submit"
        ariaLabel="Click me to increase the count"
        id="count_button"
        onClick={vi.fn()}
      >
        Click Me
      </Button>
    );

    expect(
      getByRole("button", { name: "Click me to increase the count" })
    ).toHaveAttribute('type', 'submit');
  });

  it('disables the button when set', () => {
    const { getByRole } = render(
      <Button
        type="submit"
        ariaLabel="Click me to increase the count"
        id="count_button"
        onClick={vi.fn()}
        disabled
      >
        Click Me
      </Button>
    );

    expect(
      getByRole("button", { name: "Click me to increase the count" })
    ).toBeDisabled();
  });

  it('sets the tabindex on the button', () => {
    const { getByRole } = render(
      <Button
        type="submit"
        ariaLabel="Click me to increase the count"
        id="count_button"
        onClick={vi.fn()}
        tabIndex={0}
      >
        Click Me
      </Button>
    );

    expect(
      getByRole("button", { name: "Click me to increase the count" })
    ).toHaveAttribute('tabIndex', '0');
  });

  it('sets the styles on the button', () => {
    const { getByRole } = render(
      <Button
        type="submit"
        ariaLabel="Click me to increase the count"
        id="count_button"
        onClick={vi.fn()}
        style={{ 'background': 'red' }}
      >
        Click Me
      </Button>
    );

    expect(
      getByRole("button", { name: "Click me to increase the count" })
    ).toHaveStyle('background: red');
  });

  it('executes onClick function when clicked', () => {
    const onClickMock = vi.fn();

    const { getByRole } = render(
      <Button
        type="submit"
        ariaLabel="Click me to increase the count"
        id="count_button"
        onClick={onClickMock}
      >
        Click Me
      </Button>
    );

    const button = getByRole("button", { name: "Click me to increase the count" });
    fireEvent.click(button);

    expect(onClickMock).toHaveBeenCalled();
  });

  it('executes onFocus function when focussed', async () => {
    const onFocusMock = vi.fn();

    const { getByRole } = render(
      <Button
        type="submit"
        ariaLabel="Click me to increase the count"
        id="count_button"
        onClick={vi.fn()}
        onFocus={onFocusMock}
      >
        Click Me
      </Button>
    );

    const button = getByRole("button", { name: "Click me to increase the count" });

    fireEvent.focus(button);

    expect(onFocusMock).toHaveBeenCalled();
  });

  it('executes onBlur function when focussed', () => {
    const onBlurMock = vi.fn();

    const { getByRole } = render(
      <Button
        type="submit"
        ariaLabel="Click me to increase the count"
        id="count_button"
        onClick={vi.fn()}
        onBlur={onBlurMock}
      >
        Click Me
      </Button>
    );

    const button = getByRole("button", { name: "Click me to increase the count" });

    fireEvent.blur(button);

    expect(onBlurMock).toHaveBeenCalled();
  });

  it('executes onMouseEnter function', () => {
    const onMouseEnterMock = vi.fn();

    const { getByRole } = render(
      <Button
        type="submit"
        ariaLabel="Click me to increase the count"
        id="count_button"
        onClick={vi.fn()}
        onMouseEnter={onMouseEnterMock}
      >
        Click Me
      </Button>
    );

    const button = getByRole("button", { name: "Click me to increase the count" });

    fireEvent.mouseEnter(button);

    expect(onMouseEnterMock).toHaveBeenCalled();
  });

  it('executes onMouseLeave function', () => {
    const onMouseLeaveMock = vi.fn();

    const { getByRole } = render(
      <Button
        type="submit"
        ariaLabel="Click me to increase the count"
        id="count_button"
        onClick={vi.fn()}
        onMouseLeave={onMouseLeaveMock}
      >
        Click Me
      </Button>
    );

    const button = getByRole("button", { name: "Click me to increase the count" });

    fireEvent.mouseLeave(button);

    expect(onMouseLeaveMock).toHaveBeenCalled();
  });

  it('executes onKeyDown function', () => {
    const onKeyDownMock = vi.fn();

    const { getByRole } = render(
      <Button
        type="submit"
        ariaLabel="Click me to increase the count"
        id="count_button"
        onClick={vi.fn()}
        onKeyDown={onKeyDownMock}
      >
        Click Me
      </Button>
    );

    const button = getByRole("button", { name: "Click me to increase the count" });

    fireEvent.keyDown(button);

    expect(onKeyDownMock).toHaveBeenCalled();
  });

  it('executes onKeyUp function', () => {
    const onKeyUpMock = vi.fn();

    const { getByRole } = render(
      <Button
        type="submit"
        ariaLabel="Click me to increase the count"
        id="count_button"
        onClick={vi.fn()}
        onKeyUp={onKeyUpMock}
      >
        Click Me
      </Button>
    );

    const button = getByRole("button", { name: "Click me to increase the count" });

    fireEvent.keyUp(button);

    expect(onKeyUpMock).toHaveBeenCalled();
  });
});
