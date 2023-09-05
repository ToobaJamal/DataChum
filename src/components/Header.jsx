import Logo from "../assets/logo.svg"
import { Link } from "react-router-dom"
export const Header = () => {
  return (
    <nav className="border-gray-200 bg-gray-50">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to={"/"} className="flex items-center">
            <img src={Logo} className="h-8 mr-3" alt="DataChum Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">DataChum</span>
        </Link>
        
        <div className="w-full block md:w-auto" id="navbar-solid-bg">
        <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent">
            <li>
            <a href="https://github.com/ToobaJamal/DataChum#usage" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Docs</a>
            </li>
            <li>
            <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Contact</a>
            </li>
        </ul>
        </div>
    </div>
    </nav>
  )
}
