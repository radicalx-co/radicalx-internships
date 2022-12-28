import React from "react";
import styled from "styled-components";

const CustomButton = styled.button`
  font-family: inherit;
  width: auto;
  height: auto;
  background-color: ${(props) => (props.bgColor ? props.bgColor : "white")};
  color: ${(props) => (props.textColor ? props.textColor : "black")};
  border: none;
  padding: .7em 2em;
  margin-right:.5em;
  border-radius:8px;
  display: flex;
  align-items: center;
  & > * {
    margin-right: 0.5em;
  }

  &:hover {
    cursor: pointer;
    filter: brightness(90%);
  }
`;

const Button = ({ children, className, bgColor, textColor }) => {
  return (
    <CustomButton className={className} bgColor={bgColor} textColor={textColor}>
      {children}
    </CustomButton>
  );
};

export default Button;
