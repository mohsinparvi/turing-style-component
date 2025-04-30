"use client";
import React from "react";
import HeaderStyle from "./header.style";
import { TuringLogo } from "@/assets/images";
import { Button, LogoStyle, Container } from "@/components/styles";
// import logoStyle frpm '@/'
// import {}
// 155DFC
const Header = () => {
  return (
    <HeaderStyle>
      <Container>
        <LogoStyle src={TuringLogo.src} alt="Logo" width={"20%"} />
        <Button>Logout</Button>
      </Container>
    </HeaderStyle>
  );
};

export default Header;
