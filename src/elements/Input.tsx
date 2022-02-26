import React, { KeyboardEvent } from "react";
import { Text } from "../elements";
import tw from "tailwind-styled-components";

interface InputProps {
  label?: boolean,
  type: string,
  placeholder: string,
  value: string,
  is_submit?: boolean,
  key?: string;
  is_upload?: boolean,
  textarea?: boolean,
  _onChange: ()=> void;
  _onSubmit: (e: KeyboardEvent<HTMLInputElement>)=> void;
}

const InputStyles = tw.input`
    w-full px-3 py-2 leading-tight text-yellow-700 text-lg
    border-1 rounded-md shadow-md hover:ring-4 hover:ring-yellow-300
    focus-visible:ring-yellow-200 outline-none
`
const TextAreaField = tw.textarea`
  w-full box-border px-5 py-4 text-yellow-700 text-lg
  border-1 rounded-md shadow-md hover:ring-4 hover:ring-yellow-300
    focus-visible:ring-yellow-200 outline-none
`;

const Input: React.FC<InputProps> = (props) => {
  const {
    label,
    type,
    placeholder,
    value,
    _onChange,
    is_submit,
    _onSubmit,
    textarea,
  } = props;

  if (is_submit) {
    return (
      <label>
        <Text>{label}</Text>
        <InputStyles
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={_onChange}
          onKeyPress={(e: KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter") {
              _onSubmit(e);
            }
          }}
        />
      </label>
    );
  } else if (textarea) {
    return (
      <label>
        <Text>{label}</Text>
        <TextAreaField
          value={value}
          rows={10}
          placeholder={placeholder}
          onChange={_onChange}
        />
      </label>
    );
  } else {
    return (
      <label>
        <Text>{label}</Text>
        <InputStyles
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={_onChange}
        />
      </label>
    );
  }
};

Input.defaultProps = {
  label: false,
  type: "text",
  placeholder: "입력해주세요!",
  value: "",
  is_submit: false,
  is_upload: false,
  _onChange: () => {},
  _onSubmit: () => {},
};




export default Input;
