"use client";
import React from "react";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="m-9 flex flex-col justify-center px-6 py-12">
      {/* Title */}
      <div className="w-full max-w-md mx-auto">
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-black">
          Login to your account
        </h2>
      </div>

      {/* Form */}
      <div className="mt-10 w-full max-w-md mx-auto">
        <form action="#" method="POST" className="space-y-6">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-blue-500"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="Enter your email"
                className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-black placeholder-gray-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-blue-500"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-500 hover:text-indigo-400"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                placeholder="Enter your password"
                className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-black placeholder-gray-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          {/* Submit button */}
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1"
            >
              Sign in
            </button>
          </div>
        </form>

        {/* Footer link */}
        <p className="mt-10 text-center text-sm text-gray-600">
          Not a member?{" "}
          <Link
            href="/sign"
            className="font-semibold text-indigo-500 hover:text-indigo-400"
          >
            SigIn
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
