import React, { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [alert, setAlert] = useState("");

  const handleRegister = () => {
    // Check email domain
    if (!email.endsWith("@berkeley.edu")) {
      setAlert("Email must have a Berkeley domain.");
      return;
    }

    // Check password criteria
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,23}$/;
    if (!passwordRegex.test(password)) {
      setAlert(
        "Password must be 8-23 characters, with 1 uppercase, 1 lowercase, and 1 special character."
      );
      return;
    }

    // Check password confirmation
    if (password !== confirmPassword) {
      setAlert("Passwords do not match.");
      return;
    }

    // Registration logic (send data to server, etc.)

    // Clear form and alerts
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setAlert("Registration successful.");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-6 space-y-6 bg-white rounded-md shadow-lg">
        <h2 className="text-2xl font-semibold text-center">Register</h2>

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

        <div>
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-700"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        <button
          type="button"
          onClick={handleRegister}
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
