"use client";
import styled from "styled-components";

const LoginStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f2f5;
  padding: 20px;
  box-sizing: border-box;
  @media (max-width: 768px) {
    padding: 10px;
  }
  @media (max-width: 480px) {
    padding: 5px;
  }
`;

export default LoginStyle;
