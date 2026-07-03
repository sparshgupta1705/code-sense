import { NavLink } from "react-router-dom";
import { Code2 } from "lucide-react";

function Navbar() {
  const linkStyle = ({ isActive }) =>
    `transition-colors duration-200 ${
      isActive
        ? "text-blue-400"
        : "text-gray-300 hover:text-white"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-gray-800 bg-gray-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <div className="rounded-lg bg-blue-600 p-2">
            <Code2 className="h-5 w-5 text-white" />
          </div>

          <span className="text-xl font-bold text-white">
            CodeSense AI
          </span>
        </NavLink>

        {/* Center */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/problems" className={linkStyle}>
            Problems
          </NavLink>

          <NavLink to="/compiler" className={linkStyle}>
            Compiler
          </NavLink>

          <NavLink to="/ai-review" className={linkStyle}>
            AI Review
          </NavLink>

          <NavLink to="/dashboard" className={linkStyle}>
            Dashboard
          </NavLink>
        </nav>

        {/* Right */}
        <div className="flex items-center gap-3">
          <NavLink
            to="/login"
            className="rounded-lg px-4 py-2 text-gray-300 hover:text-white transition"
          >
            Login
          </NavLink>

          <NavLink
            to="/register"
            className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition"
          >
            Register
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Navbar;