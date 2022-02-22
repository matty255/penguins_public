import React from "react";
import styled from "styled-components";

const Image = (props) => {
  const { src, size, shape, half } = props;

  const styles = {
    src,
    size,
    half,
  };

  if (shape === "circle") {
    return <CircleImage {...styles} />;
  }

  if (shape === "big_square") {
    return <BigSquareImage {...styles}></BigSquareImage>;
  }

  if (shape === "small_square") {
    return <SmallSquareImage {...styles}></SmallSquareImage>;
  }
};

Image.defaultProps = {
  shape: "circle",
  src: "https://user-images.githubusercontent.com/89088205/155078987-592a07cd-a490-49fc-aabc-bc47cb508963.jpg",
  size: 40,
  half: false,
};

const CircleImage = styled.img`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  min-width: var(--size);
  min-height: var(--size);
  background-image: url(${(props) => props.src});
  background-size: cover;
  border-radius: 50%;
  margin: 10px 0;
`;

const BigSquareImage = styled.img`
  width: 100%;
  ${(props) => (props.half ? `flex-basis: 50%;` : "")}
  min-width: 250px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  margin: 10px 0;
  @media (max-width: 280px) {
    min-width: 150px;
  }
  @media (max-width: 360px) {
    min-width: 180px;
  }
`;

const SmallSquareImage = styled.div`
  --size: ${(props) => props.size}px;
  width: var(--size);
  min-width: var(--size);
  height: var(--size);
  min-height: var(--size);
  background-image: url("${(props) => props.src}");
  background-size: cover;
  margin: 10px 0;
`;

export default Image;
