

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // simulate API
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <main
      className="
        min-h-[calc(100vh-130px)]
        flex items-center justify-center
        bg-gray-100 dark:bg-gray-900
        px-4 sm:px-6 lg:px-8
      "
    >
      <form
        onSubmit={handleSubmit}
        className="
          w-full max-w-sm sm:max-w-md
          bg-white dark:bg-gray-800
          rounded-2xl
          shadow-lg
          p-6 sm:p-8
          space-y-5
        "
      >
        <h1 className="text-2xl font-semibold text-left text-gray-800 dark:text-white">
          Forgot my password
        </h1>
        <p
            className="
                text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition
                text-left
            "
        >
            Enter your email and we’ll send you a link to reset your password.
        </p>

        <div className="space-y-4">
          <input
            type="email"
            required
            placeholder="Email"
            className="
              w-full h-11
              px-4
              rounded-xl
              bg-gray-100 dark:bg-gray-700
              text-gray-800 dark:text-white
              placeholder-gray-400
              focus:outline-none
              focus:ring-2 focus:ring-black/40
              transition
            "
          />

        </div>

        <button
          type="submit"
          disabled={loading}
          className="
            w-full h-11
            bg-black
            text-white
            font-medium
            rounded-xl
            shadow-sm
            flex items-center justify-center gap-2
            hover:bg-gray-900
            active:scale-[0.98]
            transition-all duration-200
            focus:outline-none
            focus:ring-2 focus:ring-black/40
            disabled:opacity-50 disabled:cursor-not-allowed
          "
        >
          {loading ? (
            <>
              <Spinner />
              Sending...
            </>
          ) : (
            'Send Reset Link'
          )}
        </button>
      </form>
    </main>
  );
};

function Spinner() {
  return (
    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
  );
}

export default ForgotPassword;