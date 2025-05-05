import styled from "styled-components";

export const LogoStyle = styled.img`
  width: ${(props) => props.width || "100%"};
  @media (max-width: 768px) {
    width: 50%;
  }
  @media (max-width: 480px) {
    width: 60%;
  }
`;
