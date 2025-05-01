import styled from "styled-components";
type CardProps = {
  maxWidth?: string;
  maxHeight?: string;
};
const Card = styled.div<CardProps>`
  background-color: #fff;
  border-radius: 8px;
  padding: 40px 20px;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${(props: CardProps) => props.maxWidth || "400px"};

  @media (max-width: 768px) {
    max-width: 100%;
    margin: 10px 0;
  }
  @media (max-width: 480px) {
    padding: 10px;
    margin: 5px 0;
  }
`;

const CardHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  text-align: center;
  color: #333;
`;

const CardContent = styled.p`
  font-size: 16px;
  color: #666;
  text-align: center;
`;

export { Card, CardHeader, CardContent };
