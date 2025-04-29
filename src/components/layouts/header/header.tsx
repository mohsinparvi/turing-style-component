"use client";
import React from "react";
import HeaderStyle from "./header.style";
import { Container } from "@/components/styles/container.style";
import { TuringLogo } from "@/assets/images";
import { LogoStyle } from "@/components/styles/logo.style";
// import logoStyle frpm '@/'
// import {}
// 155DFC
const Header = () => {
  return (
    <HeaderStyle>
      <Container>
        <LogoStyle src={TuringLogo.src} alt="Logo" width={"30%"} />
        <button>Logout</button>
      </Container>
    </HeaderStyle>
  );
};

export default Header;
