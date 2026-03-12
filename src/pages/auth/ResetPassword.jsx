import React, { useState } from "react";
import { useParams } from "react-router-dom";

const ResetPassword = () => {
  const { token } = useParams();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    password: "",
    confirm_password: "",
  });

  const passwordRules = {
    length: formData.password.length >= 8,
    uppercase: /[A-Z]/.test(formData.password),
    lowercase: /[a-z]/.test(formData.password),
    number: /[0-9]/.test(formData.password),
    special: /[!@#$%^&*(),.?":{}|<>]/.test(formData.password),
  };

  const isPasswordStrong =
    passwordRules.length &&
    passwordRules.uppercase &&
    passwordRules.lowercase &&
    passwordRules.number &&
    passwordRules.special;

  const passwordsMatch =
    formData.password === formData.confirm_password &&
    formData.confirm_password !== "";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isPasswordStrong || !passwordsMatch) return;

    setLoading(true);

    // TODO: send token + new password to backend
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <main className="min-h-[calc(100vh-172)] mb-[20px] mt-[20px] flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 space-y-5"
      >
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">
          Reset Password
        </h1>

        {/* Password */}
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="New Password"
            required
            onChange={handleChange}
            className="w-full h-11 px-4 pr-12 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-black/40 transition"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500"
          >
            👁
          </button>
        </div>

        {/* Confirm Password */}
        <div className="relative">
          <input
            type={showConfirm ? "text" : "password"}
            name="confirm_password"
            placeholder="Confirm Password"
            required
            onChange={handleChange}
            className="w-full h-11 px-4 pr-12 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-black/40 transition"
          />
          <button
            type="button"
            onClick={() => setShowConfirm(!showConfirm)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500"
          >
            👁
          </button>
        </div>

        {/* Password Validation */}
        <div className="text-sm space-y-1">
          <Rule valid={passwordRules.length} text="At least 8 characters" />
          <Rule valid={passwordRules.uppercase} text="At least one uppercase letter" />
          <Rule valid={passwordRules.lowercase} text="At least one lowercase letter" />
          <Rule valid={passwordRules.number} text="At least one number" />
          <Rule valid={passwordRules.special} text="At least one special character" />
          {!passwordsMatch && formData.confirm_password && (
            <p className="text-red-500">Passwords do not match</p>
          )}
        </div>

        <button
          type="submit"
          disabled={!isPasswordStrong || !passwordsMatch || loading}
          className="w-full h-11 bg-black text-white font-medium rounded-xl flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-900 active:scale-[0.98] transition"
        >
          {loading ? "Updating..." : "Update Password"}
        </button>
      </form>
    </main>
  );
};

function Rule({ valid, text }) {
  return (
    <p className={`flex items-center gap-2 ${valid ? "text-green-500" : "text-gray-500"}`}>
      {valid ? "✔" : "•"} {text}
    </p>
  );
}

export default ResetPassword;