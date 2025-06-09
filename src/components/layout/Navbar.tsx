import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "@/assets/images/logoImg.png";

const Navbar = () => {
  return (
    <nav className="py-6 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3">
            <img src={Logo} alt="Zerodha" className="h-11 w-11" />
            <span className="text-2xl font-bold text-blue-600">ZERODHA</span>
          </Link>
          <div className="flex items-center space-x-12">
            <Link to="/signup" className="text-lg text-gray-600 hover:text-gray-900">Signup</Link>
            <Link to="/about" className="text-lg text-gray-600 hover:text-gray-900">About</Link>
            <Link to="/products" className="text-lg text-gray-600 hover:text-gray-900">Products</Link>
            <Link to="/pricing" className="text-lg text-gray-600 hover:text-gray-900">Pricing</Link>
            <Link to="/support" className="text-lg text-gray-600 hover:text-gray-900">Support</Link>
            <button className="text-gray-600 hover:text-gray-900">
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;