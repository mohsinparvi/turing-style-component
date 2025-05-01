"use client";
import { useAuth } from "@/lib/hooks/use-auth";
import { usePathname } from "next/navigation";
import { Button } from "../styles";

const Logout = () => {
  const { logout, isAuthenticated } = useAuth();
  const pathname = usePathname();

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      {isAuthenticated && pathname !== "/auth/login" && (
        <Button color="blue" onClick={handleLogout}>
          Logout
        </Button>
      )}
    </>
  );
};

export default Logout;
