import { Link } from "react-router-dom";
import { Menu } from "react-feather";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    console.log("bitch");
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  const navbarRoutes = [
    { link: "/movies", name: "Movies" },
    { link: "/watchlist", name: "Watch List" },
  ];
  const loginWithGoogle = () => {
    window.open("http://localhost:5000/auth/google/callback", "_self");
  };
  return (
    <header className="sticky top-0 z-50 shadow-md w-full">
      <nav className="h-14 lg:flex items-center justify-between bg-neutral-900 text-white font-rubik max-[1024px]:pt-3 relative">
        <Link to="/">
          <h1 className="ml-4 sm:ml-6 lg:ml-16 font-extrabold text-xl tracking-widest max-[425px]:text-base max-[425px]:w-[90px] max-[425px]:px-2 bg-yellow-500 text-black rounded  px-3 w-[120px] ">
            WiMovie
          </h1>
        </Link>
        <div
          onClick={toggleMenu}
          className="absolute right-8 top-4 cursor-pointer lg:hidden"
        >
          <Menu size={20} />
        </div>
        <ul
          className={`lg:flex lg:ml-auto lg:space-x-12 lg:mr-16 max-[1024px]:bg-neutral-900/85 max-[1024px]:w-36 
                max-[1024px]:py-3 max-[1024px]:pl-4 transition-all duration-300 ease-in lg:right-0  
                absolute z-[-1] lg:z-50 max-[1024px]:right-0 mr-6    ${
                  isOpen ? "max-[1024px]:top-14" : "max-[1024px]:top-[-200px]"
                }`}
        >
          {navbarRoutes.map((route, index) => {
            return (
              <li className="hover:text-amber-300" key={index}>
                <Link to={route.link}>{route.name}</Link>
              </li>
            );
          })}
          <li>
            <button onClick={loginWithGoogle}>Login with Google</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
