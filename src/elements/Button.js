import React from "react";
import styled from "styled-components";
import tw from "tailwind-styled-components";

const Btn = tw.button`
  font-sanss2  shadow-md 
  box-border rounded-md p-2 py-2
  text-white
  ${(props) => (props.disabled ? "bg-gray-300" : "bg-yellow-400")};
  ${(props) => (props.disabled ? "cursor-default" : "cursor-pointer")};
`;

const PlusBtn = tw.button`
  position: fixed;
  bottom: 20px;
  right: 30px;
  cursor: pointer;
  box-sizing: border-box;
  width: ${(props) => props.width};
  height: 48px;
  background-color: ${(props) => (props.disabled ? "yellow" : "yellow")};
  border: none;
  border-radius: 50%;
  color: white;
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")};
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")};
  ${(props) => (props.font_size ? `font-size: ${props.font_size};` : "")};
`;

const Button = (props) => {
  const {
    children,
    width,
    bg,
    margin,
    padding,
    font_size,
    _disabled,
    _onClick,
    is_circle,
  } = props;

  const styles = {
    width,
    bg,
    margin,
    padding,
    font_size,
  };

  if (is_circle) {
    return (
      <PlusBtn {...styles} onClick={_onClick}>
        {children}
      </PlusBtn>
    );
  }

  return (
    <Btn {...styles} disabled={_disabled} onClick={_onClick}>
      {children}
    </Btn>
  );
};

Button.defaultProps = {
  children: null,
  width: "100%",
  margin: false,
  padding: false,
  _disabled: false,
  is_circle: false,
  _onClick: () => {},
};


export default Button;
