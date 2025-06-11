import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "@/assets/images/logoImg.png";
import ProuctDropDown from "./ProductDropDown"; // Ensure this path is correct
import React from "react";

const Navbar = () => {
  return (
    <nav className="py-6 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3">
            <img src={Logo} alt="Zerodha" className="h-12 w-12" /> {/* Increased size */}
            <span className="text-[2.04rem] font-bold text-blue-600">ZERODHA</span> {/* Increased font size */}
          </Link>
          <div className="flex items-center space-x-14"> {/* Increased spacing */}
            <Link to="/signup" className="text-xl text-gray-600 hover:text-gray-900">Signup</Link> {/* Increased font size */}
            <Link to="/about" className="text-xl text-gray-600 hover:text-gray-900">About</Link>
            <Link to="/products" className="text-xl text-gray-600 hover:text-gray-900">Products</Link>
            <Link to="/pricing" className="text-xl text-gray-600 hover:text-gray-900">Pricing</Link>
            <Link to="/support" className="text-xl text-gray-600 hover:text-gray-900">Support</Link>
            
            <button className="text-gray-600 hover:text-gray-900
             onClick={ProuctDropDown}">
            
              
               {/* Increased icon size */}
              <ProuctDropDown />
              

            </button>
            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;