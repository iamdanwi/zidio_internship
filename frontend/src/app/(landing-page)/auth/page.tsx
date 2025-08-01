"use client"
import React from "react";
import { User, Shield, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const AuthPage = () => {
  const router = useRouter();
  const handleUserLogin = () => {
    router.push("/user-auth/login");
    // window.location.href = "/user-auth/login";
  };

  const handleAdminLogin = () => {
    router.push("/admin-auth/login");
    // window.location.href = "/admin-auth/login";
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">

        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl mb-4">
            <Shield className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Welcome Back
          </h1>
          <p className="text-muted-foreground">
            Choose your login type to continue
          </p>
        </div>

        <div className="space-y-4">
          <div
            onClick={handleUserLogin}
            className="group relative bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-200 cursor-pointer hover:shadow-lg hover:shadow-primary/10"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground text-lg">
                    User Login
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Access your account
                  </p>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </div>
          </div>

          <div
            onClick={handleAdminLogin}
            className="group relative bg-card rounded-2xl p-6 border border-border hover:border-accent-foreground/50 transition-all duration-200 cursor-pointer hover:shadow-lg hover:shadow-accent/10"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center group-hover:bg-accent-foreground/10 transition-colors">
                  <Shield className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground text-lg">
                    Admin Login
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Administrative access
                  </p>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent-foreground group-hover:translate-x-1 transition-all" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
