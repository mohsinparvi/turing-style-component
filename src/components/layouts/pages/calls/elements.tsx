import styled from "styled-components";
import { Button, Tag } from "antd";
// Extend Ant Design Button and use props for conditional styles
const StyledButton = styled(Button)`
  border-radius: 6px;
  padding: 0 20px;
  height: 40px;
  width: 100%;
`;
const StyleTags = styled(Tag)<{ $isArchived?: boolean }>`
  background-color: ${(props) => (props.$isArchived ? "#edfbfa" : "#f0f0f0")};
  color: ${(props) => (props.$isArchived ? "#42d2c3" : "#4b5563")};
  padding: 0.2rem 0.5rem;
  font-weight: 400;
  cusor: pointer;
`;

const StyleText = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: #000;
  @media (max-width: 768px) {
    text-align: center;
  }
  @media (max-width: 480px) {
    text-align: center;
  }
`;
export { StyledButton, StyleTags, StyleText };
