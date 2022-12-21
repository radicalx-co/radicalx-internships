import React from "react";
import styled from "styled-components";

const CustomButton = styled.button`
  width: 150px;
  height: 50px;
  border: none;
  border-radius: 10px;
`;

const Button = ({ children, className }) => {
  return <CustomButton className={className}>{children}</CustomButton>;
};

export default Button;
