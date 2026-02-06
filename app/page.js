"use client";
import toast, { Toaster } from "react-hot-toast";

const notify = () => {
  toast.success("✅ Logged out successfully!", {
    duration: 3000,
    position: "top-right",
    style: {
      background: "#1e40af", 
      color: "#fff",
      padding: "12px 20px",
      borderRadius: "10px",
      fontWeight: "600",
      fontSize: "15px",
    },
    iconTheme: {
      primary: "#3b82f6", 
      secondary: "#fff",
    },
  });
};

export default function Home() {
  // const handleClick = () => { // // Success toast // toast.succes('Logged out successfully!'); // // Error toast // // toast.error('Something went wrong'); // // Custom toast // // toast('Hello! I am a custom toast', { icon: '🎉' }); // };
  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-white mb-6">
          🎉 Toast Notification Try
        </h1>
        <button
          onClick={notify}
          className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-lg 
                     hover:bg-blue-700 hover:scale-110 transition-all duration-300"
        >
          Make me a toast
        </button>
      </div>

     
      <Toaster
        toastOptions={{
          success: {
            style: {
              background: "#16a34a", 
              color: "#fff",
              borderRadius: "8px",
              fontWeight: "600",
            },
          },
          error: {
            style: {
              background: "#dc2626",
              color: "#fff",
              borderRadius: "8px",
              fontWeight: "600",
            },
          },
        }}
      />
    </div>
  );
}
