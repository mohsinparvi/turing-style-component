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
const StyleTableWrapper = styled.div`
  width: 100%;
  position: relative;
  height: calc(100dvh + 30px);
  display: flex;
  flex-direction: column;

  /* Mobile first: smallest screens first */
  @media (max-width: 480px) {
    height: calc(100dvh + 700px);
  }

  @media (min-width: 481px) and (max-width: 768px) {
    height: calc(100dvh + 670px);
  }
  @media (min-width: 769px) {
    height: calc(100dvh + 600px);
  }
  @media (min-width: 1024px) {
    height: calc(100dvh + 20px);
  }
`;

const TableWrapper = styled.div`
  flex-grow: 1;
  overflow-x: auto;
  margin-top: 1rem;
  @media (max-width: 768px) {
    overflow-x: auto;
  }
  @media (max-width: 480px) {
    overflow-x: auto;
  }
`;

const StylePaginationWrapper = styled.div`
  display: flex;
  position: absolute;
  margin-top: 1rem;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 50;
  background: white;
  padding: 1rem;
  border-radius: 0.5rem;
`;

export {
  StyledButton,
  StyleTags,
  StyleText,
  StyleTableWrapper,
  StylePaginationWrapper,
  TableWrapper,
};
