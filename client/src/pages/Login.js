import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:3001/auth/login", {
        email,
        password,
      });

      // You can customize the response handling as needed
      console.log(response.data);

      // Clear form and alerts
      setEmail("");
      setPassword("");
      setAlert("Login successful.");
    } catch (error) {
      // Handle login errors
      console.error("Login error:", error.response?.data || error.message);
      setAlert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-6 space-y-6 bg-white rounded-md shadow-lg">
        <h2 className="text-2xl font-semibold text-center">Login</h2>

        {alert && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded"
            role="alert"
          >
            {alert}
          </div>
        )}

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        <button
          type="button"
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
