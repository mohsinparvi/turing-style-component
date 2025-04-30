import LoginForn from "@/components/layouts/pages/login/login-forn";
import LoginStyle from "@/components/layouts/pages/login/login.style";
import { Card } from "@/components/styles";
import React from "react";

const page = () => {
  return (
    <LoginStyle>
      <Card>
        <LoginForn />
      </Card>
    </LoginStyle>
  );
};

export default page;
