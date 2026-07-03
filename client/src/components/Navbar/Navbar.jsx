import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link
          to="/"
          className="text-2xl font-bold"
        >
          CodeSense AI
        </Link>

        <div className="flex gap-6">

          <Link to="/">Home</Link>

          <Link to="/problems">Problems</Link>

          <Link to="/compiler">Compiler</Link>

          <Link to="/dashboard">Dashboard</Link>

          <Link to="/login">Login</Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;