import React, { useState, useRef, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import KiteLogo from "@/assets/images/kiteLogo.png"; 
import ConsoleLogo from "@/assets/images/ConsoleLogo.png";
import C from"@/assets/images/C.png"; // Assuming you have a C logo image
 // Assuming you have a Console logo image
interface ProductDropdownProps {
  className?: string;
}

const ProductDropdown: React.FC<ProductDropdownProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={cn("relative", className)}>
      <button
        ref={buttonRef}
        onClick={toggleDropdown}
        className="p-2 rounded-md hover:bg-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        aria-label="Product menu"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-foreground" />
        ) : (
          <Menu className="h-6 w-6 text-foreground" />
        )}
      </button>

      {isOpen && (
        <div
          ref={dropdownRef}
          className={cn(
            "absolute right-0 mt-2 w-96 bg-popover border border-border rounded-lg shadow-lg z-50",
            "animate-in fade-in-0 zoom-in-95 duration-200",
            "md:w-[500px] lg:w-[600px]"
          )}
        >
          <div className="p-6">
            {/* Main Products Section - Changed to horizontal layout */}
            <div className="grid grid-cols-2 gap-4 mb-6">
                <a href="https://kite.zerodha.com/" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-accent transition-colors duration-200 cursor-pointer group">
<ProductItem
    icon={<img src={KiteLogo} alt="Kite Logo" className="h-8 w-8" />} // Use the Kite logo image
    title="Kite"
    subtitle="Trading platform"
    color="text-red-500"
    
  />
  </a>
  <a href="https://console.zerodha.com/" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-accent transition-colors duration-200 cursor-pointer group">
              <ProductItem
                icon={<img src={ConsoleLogo} alt="ConsoleLogo" className="h-8 w-8" />} 
                title="Console"
                subtitle="Backoffice"
                color="text-blue-500"
              />
              </a>
              <a href="https://kite.trade/connect/v3#apps" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-accent transition-colors duration-200 cursor-pointer group">
              <ProductItem
                icon={<img src={C} alt="C" className="h-8 w-8" />} 
                title="Kite Connect"
                subtitle="Trading APIs"
                color="text-gray-600"
              />
                </a>
                <a href="https://coin.zerodha.com/" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-accent transition-colors duration-200 cursor-pointer group">
              <ProductItem
                icon="🪙"
                title="Coin"
                subtitle="Mutual funds"
                color="text-yellow-500"
              />
                </a>        
            </div>

            {/* Divider */}
            <div className="border-t border-border mb-6"></div>

            {/* Sub-sections - Changed to horizontal layout */}
            <div className="grid grid-cols-3 gap-6">
              <SubSection
                title="Utilities"
                items={[
                  "Calculators",
                  "Brokerage calculator",
                  "Margin calculator",
                  "SIP calculator"
                ]}
              />
              
              <SubSection
                title="Updates"
                items={[
                  "Z-Connect blog",
                  "Circulars / Bulletin",
                  "IPOs",
                  "Markets"
                ]}
              />
              
              <SubSection
                title="Education"
                items={[
                  "Varsity",
                  "Trading Q&A"
                ]}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

import type { ReactNode } from 'react';

interface ProductItemProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
  color: string;
}

const ProductItem: React.FC<ProductItemProps> = ({ icon, title, subtitle, color }) => {
  return (
    <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-accent transition-colors duration-200 cursor-pointer group">
      <div className={cn("text-2xl", color)}>
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

interface SubSectionProps {
  title: string;
  items: string[];
}

const SubSection: React.FC<SubSectionProps> = ({ title, items }) => {
  return (
    <div>
      <h4 className="font-semibold text-foreground mb-2">
        {title}
      </h4>
      <ul className="space-y-1">
        {items.map((item, index) => (
          <li key={index}>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 block py-1"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductDropdown;
