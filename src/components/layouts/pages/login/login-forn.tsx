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
        <Input
          type="email"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          }
          placeholder="Email"
        />
      </div>
      <div>
        <Label>
          <span className="required">*</span>
          Password
        </Label>
        <Input
          type="password"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          }
          placeholder="Password"
        />
      </div>
      <Button type="submit" width="fit-content">
        Login
      </Button>
    </Form>
  );
};

export default LoginForn;
