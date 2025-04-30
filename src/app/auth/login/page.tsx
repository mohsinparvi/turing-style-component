import LoginForn from "@/components/layouts/pages/login/login-forn";
import LoginStyle from "@/components/layouts/pages/login/login.style";
import { CardHeader, Card, CardContent } from "@/components/styles";
import React from "react";

const page = () => {
  return (
    <LoginStyle>
      <Card>
        <CardHeader>Login</CardHeader>

        <CardContent>Login to your account</CardContent>
        <LoginForn />
      </Card>
    </LoginStyle>
  );
};

export default page;
