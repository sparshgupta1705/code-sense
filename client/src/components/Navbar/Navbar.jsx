import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-blue-400 font-semibold"
      : "hover:text-blue-300 transition";

  return (
    <nav className="bg-gray-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-400"
        >
          CodeSense AI
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8 text-white">

          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/problems" className={navLinkClass}>
            Problems
          </NavLink>

          <NavLink to="/compiler" className={navLinkClass}>
            Compiler
          </NavLink>

          <NavLink to="/dashboard" className={navLinkClass}>
            Dashboard
          </NavLink>

        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          <NavLink
            to="/login"
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Login
          </NavLink>

          <NavLink
            to="/register"
            className="px-4 py-2 rounded-lg border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition"
          >
            Register
          </NavLink>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;