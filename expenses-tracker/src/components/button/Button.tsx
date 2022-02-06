import React from "react";
import { CSSProperties } from "styled-components";
import { ButtonComponent } from "./_button";

interface ButtonProps {
  type: "button" | "submit" | "reset";
  buttonOnClick?: () => void;
  children: any;
  style?: CSSProperties;
}

export const Button = ({
  type,
  style,
  buttonOnClick,
  children,
}: ButtonProps) => {
  return (
    <ButtonComponent type={type} style={style} onClick={buttonOnClick}>
      {children}
    </ButtonComponent>
  );
};
