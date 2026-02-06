"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <h2 className="text-7xl font-extrabold mb-4 animate-pulse">404</h2>
      <p className="text-lg text-gray-300 mb-6">
        Could not find the requested resource.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg transition-all duration-300 hover:scale-110"
      >
        Return Home
      </Link>
    </div>
  );
}
