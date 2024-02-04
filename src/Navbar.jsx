import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <nav className="h-14 flex items-center bg-slate-900 text-white font-rubik ">
            <Link to="/"><h1 className="ml-16 font-extrabold text-xl tracking-widest bg-yellow-500 text-black rounded px-2">WiMovie</h1></Link>
            <ul className="flex ml-auto space-x-12 mr-16">
                <li><Link to="/watchlist">Watch List</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
            </ul>
        </nav >
    )
}