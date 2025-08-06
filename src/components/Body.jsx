import Browse from "../Browse";
import Login from "./Login";
import Home from "./Home";
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

const Body = () => {
  // This component renders the main body of the application
  // It includes a background image, a title, a subtitle, and a button
  // The background image is set to cover the entire screen
  // The title and subtitle are styled with a drop shadow for better visibility
  // We are defining Route for the main body of the application
  const appRouter = createBrowserRouter([
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/",
      element: <Home />,
    }
  ]);
  return (
    <div>
      {/* The main content of the application will be rendered here */}
      {/* Additional components or content can be added as needed */}
      
      <RouterProvider router={appRouter} />
    </div>
    // <div
    //   className="flex flex-col items-center justify-center h-screen bg-cover bg-center"
    //   style={{ backgroundImage: "url('/images/netflix-gpt.png')" }}
    // >
    //   <h1 className="text-4xl font-bold mb-4 text-white drop-shadow-md">
    //     Welcome to Netflix GPT
    //   </h1>
    //   <p className="text-lg text-white mb-8 drop-shadow-sm">
    //     Your AI-powered Netflix experience
    //   </p>
    //   <button className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300">
    //     Get Started
    //   </button>
    // </div>
  )
};

export default Body;
