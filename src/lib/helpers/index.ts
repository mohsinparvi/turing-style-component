import { LoginFormData } from "../types";

const validateForm = (data: LoginFormData) => {
  const errors: Partial<LoginFormData> = {};

  // Email validation
  if (!data.email) {
    errors.email = "Email is required.";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "Email is not valid.";
  }

  // Password validation
  if (!data.password) {
    errors.password = "Password is required.";
  } else if (data.password.length < 6) {
    errors.password = "Password must be at least 6 characters.";
  }

  return errors;
};

function formatDuration(seconds: number): string {
  const totalMinutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return `${totalMinutes} minute${
    totalMinutes !== 1 ? "s" : ""
  } ${remainingSeconds} second${remainingSeconds !== 1 ? "s" : ""}`;
}
const formatDate = (date: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  return new Date(date).toLocaleString("en-US", options);
};

export { validateForm, formatDuration, formatDate };
