import React from "react";
import { Link, replace } from "react-router-dom";

const ResetPasswordEmailSent = () => {
  return (
    <main className="min-h-[calc(100vh-172px)] mt-[20px] mb-[20px] flex items-center justify-center bg-gray-300 dark:bg-gray-900 px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center space-y-4">
        <div className="text-4xl">📩</div>

        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">
          Check Your Email
        </h1>

        <p className="text-gray-600 dark:text-gray-400 text-sm">
          We have sent you a password reset link.  
          Please check your inbox and follow the instructions.
        </p>

        <Link
          to="/login"
          className="mt-4 w-full h-11 bg-black text-white font-medium rounded-xl flex items-center justify-center hover:bg-gray-900 active:scale-[0.98] transition"
        >
          Back to Login
        </Link>
      </div>
    </main>
  );
};

export default ResetPasswordEmailSent;