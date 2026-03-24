import React, { useState } from "react";
import toast , { Toaster } from 'react-hot-toast';
import api from '../../api/axios'



const InviteMember = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValidEmail) return;


    const token = localStorage.getItem("access"); // access token

    if (!token) {
      toast.error("Please login first!");
      return;
    }

    setLoading(true);

    try {
      const response = await api.post("auth/staff/invite/", {
            email: email,
          },
      );
      
      toast.success("Succesfully sent!");
      setEmail("");
      setTimeout(() => {
        window.location.reload();
      }, 1500);

    } catch (error) {

      if (error.response?.status === 401) {
        toast.error("Only superuser can invite staff");
      } else {
        toast.error("Something went wrong");
      }

    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-[calc(100vh-172px)] mt-[20px] mb-[20px] flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 space-y-5"
      >
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-white">
          Invite Staff
        </h1>

        <p className="text-sm text-gray-600 dark:text-gray-400">
          Enter staff email address to send registration link.
        </p>

        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="staff@example.com"
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

        {!isValidEmail && email && (
          <p className="text-sm text-red-500">Enter a valid email address</p>
        )}

        {success && (
          <div className="bg-green-100 text-green-700 text-sm p-3 rounded-xl">
            Invitation link sent successfully ✅
          </div>
        )}

        <button
          type="submit"
          disabled={!isValidEmail || loading}
          className="
            w-full h-11
            bg-black
            text-white
            font-medium
            rounded-xl
            flex items-center justify-center
            hover:bg-gray-900
            active:scale-[0.98]
            transition-all duration-200
            focus:outline-none
            focus:ring-2 focus:ring-black/40
            disabled:opacity-50 disabled:cursor-not-allowed
          "
        >
          {loading ? "Sending..." : "Send Invitation"}
        </button>
      </form>
    </main>
  );
};

export default InviteMember;