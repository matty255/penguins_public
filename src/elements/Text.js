import React from "react";
import styled from "styled-components";
import tw from "tailwind-styled-components";

const P = tw.p`
  text-base text-yellow-800 font-sanss2
`;

const Text = (props) => {
  const { children, size, margin, width, bold, _onClick, is_click, center } =
    props;

  const styles = {
    size,
    children,
    margin,
    width,
    bold,
    is_click,
    center,
  };
  return (
    <P {...styles} onClick={_onClick}>
      {children}
    </P>
  );
};

Text.defaultProps = {
  children: null,
  size: "14px",
  margin: false,
  bold: false,
  _onClick: () => {},
  is_click: false,
  width: false,
  center: false,
};



export default Text;
