import { useNavigate } from "react-router-dom";

const Home = () => {
  // This component serves as the home page of the application
  // It can include a welcome message, navigation links, or other introductory content

  const navigate = useNavigate();
  const userLogin = () => {
    // Logic for user login can be added here
    console.log("User clicked Get Started");
    navigate("/login");
  };

  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/netflix-gpt.png')" }}
    >
      <h1 className="text-4xl font-bold mb-4 text-white drop-shadow-md">
        Welcome to Netflix GPT
      </h1>
      <p className="text-lg text-white mb-8 drop-shadow-sm">
        Your AI-powered Netflix experience
      </p>
      <button
        onClick={userLogin}
        className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300"
      >
        Get Started
      </button>
    </div>
  );
};

export default Home;
