import React from "react";
import styled from "styled-components";

interface InputProps {
  icon: React.ReactNode;
  children: React.ReactNode;
}

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
  width: 100%;
`;

const IconWrapper = styled.div`
  margin-right: 0.5rem;
  color: #aaa;
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  flex: 1;
  font-size: 1rem;
  color: #333;

  &::placeholder {
    color: #ccc;
  }
`;

const InputGroup: React.FC<InputProps> = ({ icon, children }) => {
  return (
    <InputWrapper>
      <IconWrapper>{icon}</IconWrapper>
      {children}
    </InputWrapper>
  );
};

export default InputGroup;
