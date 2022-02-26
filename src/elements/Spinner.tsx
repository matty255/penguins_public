import React from "react";
import tw from "tailwind-styled-components";

import AcUnitIcon from '@mui/icons-material/AcUnit';

interface SpinnerProps { 
  type: string; 
  is_dim?: boolean;
}

const Color = tw.div`
  text-yellow-800 animate-spin
`

const SpinnerWrap = tw.div`
  w-full flex justify-center items-center
  pt-3
  ${(props:SpinnerProps) => props.type === "page" ? `h-screen fixed z-50 top-0 left-0`: ""};
  ${(props:SpinnerProps) => props.is_dim ? "h-screen" : ""};
`;


const Spinner: React.FC<SpinnerProps> = (props:SpinnerProps) => {
  const { type, is_dim } = props;

  return (
    <React.Fragment>
      <SpinnerWrap type={type} is_dim={is_dim}>
        <Color>
        <AcUnitIcon />
        </Color>
      </SpinnerWrap>
    </React.Fragment>
  );
};

Spinner.defaultProps = {
  type: "inline", // inline, page
  is_dim: false,
};


export default Spinner;
