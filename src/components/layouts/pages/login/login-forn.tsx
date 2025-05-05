"use client";
import {
  Button,
  Form,
  InputGroup,
  Label,
  Input,
  ErrorMessage,
} from "@/components/styles";
import { validateForm } from "@/lib/helpers";
import { useAuth } from "@/lib/hooks/use-auth";
import { LoginFormData } from "@/lib/types";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
const LoginForn = () => {
  const { login, error } = useAuth();
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [validationErrors, setValidationErrors] =
    useState<Partial<LoginFormData>>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetData = () => {
    setFormData({
      email: "",
      password: "",
    });
    setValidationErrors({});
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const errors = validateForm(formData);
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      setIsLoading(false);
      return;
    }

    try {
      await login(formData.email, formData.password);
      router.push("/calls");
      resetData();
    } catch (err) {
      setIsLoading(false);
      if (err instanceof Error) {
        setValidationErrors({ email: err.message });
      } else {
        setValidationErrors({ email: "Login failed. Please try again." });
      }
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <Label>
          <span className="required">*</span>
          User Name
        </Label>
        <InputGroup
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          }
        >
          <Input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </InputGroup>
        {validationErrors?.email && (
          <ErrorMessage>{validationErrors.email}</ErrorMessage>
        )}
      </div>
      <div>
        <Label>
          <span className="required">*</span>
          Password
        </Label>
        <InputGroup
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          }
        >
          <Input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
        </InputGroup>
        {validationErrors?.password && (
          <ErrorMessage>{validationErrors.password}</ErrorMessage>
        )}
      </div>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {isLoading ? (
        <Button type="button" width="fit-content" disabled={isLoading}>
          Loading...
        </Button>
      ) : (
        <Button type="submit" width="fit-content">
          Login
        </Button>
      )}
    </Form>
  );
};

export default LoginForn;
