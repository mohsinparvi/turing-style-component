import { Button } from "@/components/styles";
import React from "react";

const LoginForn = () => {
  return (
    <div>
      <form>
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
};

export default LoginForn;
