import styled from "styled-components";

interface ButtonProps {
  width?: string;
}

const Button = styled.button<ButtonProps>`
  background-color: #155dfc;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  width: ${(props) => (props.width ? props.width : "auto")};
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #0f4c9d;
  }
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }
  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 12px;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

export { Button, ButtonContainer };
