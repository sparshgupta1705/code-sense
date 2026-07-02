import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-gray-900 text-white">

      <Link to="/">
        <h1 className="text-2xl font-bold">
          CodeSense AI
        </h1>
      </Link>

      <div className="flex gap-6">

        <Link to="/">Home</Link>

        <Link to="/login">Login</Link>

        <Link to="/register">Register</Link>

        <Link to="/dashboard">Dashboard</Link>

      </div>

    </nav>
  );
}

export default Navbar;