import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

export  interface ButtonProps {
  children: React.ReactNode;
  type: "button" | "submit" | "reset";
  ariaLabel: string;
  id: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  ariaPressed?: boolean;
  className?: string;
  style?: React.CSSProperties;
  tabIndex?: number;
  onFocus?: (event: React.FocusEvent<HTMLButtonElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLButtonElement>) => void;
  onMouseEnter?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseLeave?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
  onKeyUp?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  type = "button",
  ariaLabel,
  ariaPressed,
  className,
  style,
  id,
  tabIndex,
  onFocus,
  onBlur,
  onMouseEnter,
  onMouseLeave,
  onKeyDown,
  onKeyUp,
  ...rest
}) => {

  const theme = useContext(ThemeContext);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled && onClick) {
      onClick(event);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      type={type}
      aria-label={ariaLabel}
      aria-pressed={ariaPressed}
      className={className}
      style={{...style, ...{...(theme === 'dark' ? {background: 'black', color: 'white'} : {background: 'white', color: 'black'})}}}
      id={id}
      tabIndex={tabIndex}
      onFocus={onFocus}
      onBlur={onBlur}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onKeyDown={onKeyDown}
      onKeyUp={onKeyUp}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
