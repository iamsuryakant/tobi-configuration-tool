import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import React from "react";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md p-8 space-y-6 bg-white rounded-md shadow-md">
        <div className="flex justify-center">
          <svg
            width={24}
            height={24}
            viewBox="0 0 378 380"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            data-testid="vf-tobi-logo"
          >
            <g>
              <path
                fill="#e60000"
                d="M 119.441406 14.328125 C 166.90625 -4.589844 222.195312 -3.28125 268.394531 18.691406 C 255.230469 16.691406 241.839844 18.199219 228.808594 20.402344 C 193.417969 27.085938 159.785156 43.738281 133.496094 68.476562 C 108.289062 93.253906 90.625 126.128906 85.636719 161.300781 C 82.335938 186.222656 85.394531 212.363281 96.578125 235.046875 C 108.101562 258.847656 128.386719 278.367188 152.835938 288.441406 C 176.394531 298.410156 203.722656 298.300781 227.585938 289.402344 C 263.390625 276.261719 289.117188 240.78125 292.058594 202.875 C 293.910156 178.03125 287.867188 151.601562 271.175781 132.546875 C 255.242188 113.894531 231.9375 103.621094 208.617188 97.773438 C 207.367188 74.773438 218.203125 52.050781 235.386719 37.09375 C 244.929688 28.488281 256.773438 23.003906 269.019531 19.492188 L 269.949219 19.171875 C 305.007812 35.984375 334.796875 63.710938 353.777344 97.75 C 370.039062 126.730469 378.519531 160.125 377.679688 193.390625 C 377.519531 236.40625 361.441406 278.996094 333.878906 311.886719 C 307.816406 343.253906 271.363281 365.816406 231.632812 374.851562 C 191.796875 384.042969 148.9375 380.078125 111.65625 363.148438 C 75.175781 346.855469 44.269531 318.53125 24.609375 283.691406 C 8.253906 254.738281 -0.398438 221.355469 0.320312 188.050781 C 0.398438 146.554688 15.132812 105.378906 40.859375 72.929688 C 61.410156 47.019531 88.671875 26.417969 119.441406 14.328125 Z M 119.441406 14.328125 "
              ></path>
              <path
                fill="#ffffff"
                d="M 228.808594 20.402344 C 241.839844 18.199219 255.230469 16.691406 268.394531 18.691406 L 270.285156 19.011719 L 269.019531 19.492188 C 256.773438 23.003906 244.929688 28.488281 235.386719 37.09375 C 218.203125 52.050781 207.367188 74.773438 208.617188 97.773438 C 231.9375 103.621094 255.242188 113.894531 271.175781 132.546875 C 287.867188 151.601562 293.910156 178.03125 292.058594 202.875 C 289.117188 240.78125 263.390625 276.261719 227.585938 289.402344 C 203.722656 298.300781 176.394531 298.410156 152.835938 288.441406 C 128.386719 278.367188 108.101562 258.847656 96.578125 235.046875 C 85.394531 212.363281 82.335938 186.222656 85.636719 161.300781 C 90.625 126.128906 108.289062 93.253906 133.496094 68.476562 C 159.785156 43.738281 193.417969 27.085938 228.808594 20.402344 Z M 228.808594 20.402344 "
              ></path>
            </g>
          </svg>
        </div>
        <CardTitle className="text-xl font-bold text-center text-red-600">
          Sign in your account
        </CardTitle>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              required
              placeholder="someone@vodafone.com"
              className="w-full px-3 py-2 mt-2 border border-gray-300 rounded-md focus:outline-red-600"
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
              name="password"
              required
              placeholder="********"
              className="w-full px-3 py-2 mt-2 border border-gray-300 rounded-md focus:outline-red-600"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Checkbox id="remember me" className="text-primary" />
              <label
                htmlFor="remember-me"
                className="ml-2 text-sm text-gray-700"
              >
                Remember me
              </label>
            </div>
            <Link href="#" className="text-sm text-red-600">
              Forgot Password?
            </Link>
          </div>
          <Button
            type="submit"
            className="w-full py-2 text-white bg-red-600 rounded-md hover:bg-red-500"
          >
            Sign in
          </Button>
        </form>
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-700">
            Don&apos;t have an account?{" "}
            <Link href="#" className="text-red-600">
              Sign up
            </Link>
          </p>
        </div>
        <div className="flex items-center justify-center">
          <span className="text-sm text-gray-700">Or</span>
        </div>
        <Button className="w-full py-2 text-white bg-red-600 rounded-md hover:bg-red-500">
          Sigin in with company email (SSO)
        </Button>
      </Card>
    </div>
  );
}
