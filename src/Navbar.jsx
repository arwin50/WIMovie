import { Link } from "react-router-dom"
import { Menu } from "react-feather"
import { useState } from "react"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        console.log('bitch')
        setIsOpen(!isOpen)
        console.log(isOpen)
    }
    return (
        <header className="sticky top-0 z-50 shadow-md w-full">
            <nav className="h-14 lg:flex items-center justify-between bg-neutral-900 text-white font-rubik max-[1024px]:pt-3 relative">
                <Link to="/"><h1 className="ml-4 sm:ml-6 lg:ml-16 font-extrabold text-xl tracking-widest max-[425px]:text-base max-[425px]:w-[90px] max-[425px]:px-2 bg-yellow-500 text-black rounded  px-3 w-[120px] ">WiMovie</h1></Link>
                <div onClick={toggleMenu} className="absolute right-8 top-4 cursor-pointer lg:hidden">
                    <Menu size={20} />
                </div>
                <ul className={`lg:flex lg:ml-auto lg:space-x-12 mr-16 max-[1024px]:bg-neutral-900/85 max-[1024px]:w-full max-[1024px]:py-3 max-[1024px]:pl-9 transition-all duration-300 ease-in lg:right-0  absolute z-[-1] lg:z-50 ${isOpen ? 'max-[1024px]:top-12' : 'max-[1024px]:top-[-200px]'}`}>
                    <li><Link to="/watchlist">Watch List</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/signup">Sign Up</Link></li>
                </ul>

            </nav >
        </header>
    )
}