import Header from "./Header";

const Login = () => {
  return (
    <div
      className="relative flex flex-col items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/netflix-login.jpg')" }}
    >
      <Header />

      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

      <div className="relative z-10 w-full max-w-md px-8 py-10 bg-black bg-opacity-75 text-white rounded-md shadow-md">
        <h2 className="text-3xl font-bold mb-6">Sign In</h2>
        <form>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              placeholder="Email or phone number"
              className="w-full px-4 py-3 rounded bg-gray-700 text-white placeholder-gray-300 focus:outline-none"
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded bg-gray-700 text-white placeholder-gray-300 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded"
          >
            Sign In
          </button>

          <div className="flex justify-between items-center mt-4 text-sm text-gray-400">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <a href="#" className="hover:underline">Need help?</a>
          </div>

          <div className="mt-8 text-sm text-gray-400">
            New to Netflix?{" "}
            <a href="#" className="text-white hover:underline">
              Sign up now
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
