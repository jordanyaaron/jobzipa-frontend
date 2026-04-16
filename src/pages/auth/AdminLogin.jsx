import React, { useState } from 'react';
import { Link , useNavigate } from 'react-router-dom';
import api from '../../api/axios'

const AdminLogin = () => {
  const [loading, setLoading] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  
  const handleChange = (e) => {
    setFormData(
      {
        ...formData ,
        [ e.target.name ] : e.target.value 
      }
    );
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await api.post("auth/login/", formData, { skipAuth: true });
      const { access, refresh, user } = response.data;
      // Store tokens
      localStorage.setItem("access", response.data.access);
      localStorage.setItem("refresh", response.data.refresh);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      // Redirect based on role
      if (response.data.user.is_superuser) {
        navigate("/" , { replace : true } );
      } else if (response.data.user.is_staff) {
        navigate("/" , { replace : true } );
      } else {
        navigate("/" , { replace : true } );
      }
    } catch (err) {
      console.log(err)
      setError(JSON.stringify(err.response?.data))
    }finally {
      setLoading(false);
    }

  }

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
        <h1 className="text-2xl sm:text-3xl font-semibold text-left text-gray-800 dark:text-white">
          Login Here
        </h1>

        <div className="space-y-4">

          <input
            type="email"
            name="email"
            required
            onChange={handleChange}
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
          <div className="relative">
          <input
            type={showConfirm ? "text" : "password"}
            name="password"
            placeholder="Password"
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
        </div>

        <div className="flex justify-end text-sm">
          <Link
            to="/forgot-password"
            className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition"
          >
            Forgot your password?
          </Link>
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
              Loading...
            </>
          ) : (
            'Login'
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

export default AdminLogin;