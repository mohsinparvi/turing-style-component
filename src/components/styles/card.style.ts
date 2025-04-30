import styled from "styled-components";

const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
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
