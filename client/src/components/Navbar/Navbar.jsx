import { NavLink } from "react-router-dom";
import { Code2 } from "lucide-react";

function Navbar() {

    const linkClass=({isActive})=>
        `transition duration-300 ${
            isActive
            ? "text-blue-400"
            : "text-gray-300 hover:text-white"
        }`;

    return(

<header className="fixed top-0 left-0 w-full z-50 bg-[#030712]/80 backdrop-blur-xl border-b border-gray-800">

<div className="max-w-[1400px] mx-auto h-20 flex justify-between items-center px-8">

{/* Logo */}

<NavLink
to="/"
className="flex items-center gap-3"
>

<div className="bg-blue-600 rounded-xl p-3">

<Code2 size={24}/>

</div>

<div>

<h1 className="text-xl font-bold">

CodeSense AI

</h1>

<p className="text-xs text-gray-400">

Intelligent Coding Platform

</p>

</div>

</NavLink>

{/* Center */}

<nav className="hidden lg:flex items-center gap-10">

<NavLink
to="/problems"
className={linkClass}
>
Problems
</NavLink>

<NavLink
to="/compiler"
className={linkClass}
>
Compiler
</NavLink>

<NavLink
to="/ai-review"
className={linkClass}
>
AI Review
</NavLink>

<NavLink
to="/dashboard"
className={linkClass}
>
Dashboard
</NavLink>

</nav>

{/* Right */}

<div className="flex gap-4">

<NavLink
to="/login"
className="px-5 py-2 rounded-xl border border-gray-700 hover:border-blue-500 transition"
>

Login

</NavLink>

<NavLink
to="/register"
className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 transition"
>

Register

</NavLink>

</div>

</div>

</header>

    )

}

export default Navbar;