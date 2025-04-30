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
        <Label>Password</Label>
        <Input type="password" placeholder="" required />
      </div>
      <Button type="submit">Login</Button>
    </Form>
  );
};

export default LoginForn;
