/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const UserDashboard = () => {
   const router = useRouter();
  const handleLogout = async () => {
    try {
      await axios.post("/api/auth/logout");
      router.push("/user-auth/login");
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err: any) {
      toast.error("Logout failed", {
        position: "top-right",
        duration: 2000,
        style: { backgroundColor: "red", color: "white" },
      });
    }
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <h1>User Dashboard</h1>
      <Button type="button" variant="destructive" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};

export default UserDashboard;
