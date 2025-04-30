import { Button, Form, Input, Label } from "@/components/styles";
import React from "react";

const LoginForn = () => {
  return (
    <Form>
      <div>
        <Label>
          <span className="required">*</span>
          User Name
        </Label>
        <Input type="email" placeholder="Email" required />
      </div>
      <div>
        <Label>
          <span className="required">*</span>
          Password
        </Label>
        <Input type="password" placeholder="" required />
      </div>
      <Button type="submit" width="fit-content">
        Login
      </Button>
    </Form>
  );
};

export default LoginForn;
