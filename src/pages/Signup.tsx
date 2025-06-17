import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Navbar from '@/components/layout/Navbar';
import S from '@/assets/images/S.png';    
import Benefits from '@/assets/images/Benefits.png'; 
import { Link } from 'lucide-react';
import Footer from '@/components/layout/Footer';
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Signup = () => {
  const location = useLocation();
  const [mobileNumber, setMobileNumber] = useState('');
  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate('/SignupPage' );
  };

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="py-20 bg-background">
        <div className="container mx-auto px-18">
          <div className="text-center">
            <h1 className="text-15xl md:text-5xl text-foreground mt-7 mb-4">
              Open a free demat and trading account online
            </h1>
            <p className="text-2xl text-muted-foreground mb-6 mt-7">
             Start investing brokerage free and join a community of 1.6+ crore investors and traders
            </p>
          </div>
        </div>
      </section>

{/* Signup Form Section */}

  <div className="container mx-auto px-4">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* Left side image */}
      <div className="flex justify-center">
        <img
          src={S}
          alt="Signup Illustration"
          className=""
        />
      </div>

      {/* Right side signup form */}
 
      <div className="bg-white p-10">
        <div className="mb-6">
          <h3 className="text-4xl font-semibold mb-5">Signup now</h3>
          <p className="text-xl text-muted-foreground mb-6">
            Or track your existing application
          </p>
        </div>
        <div className="space-y-6">
          <Button
            onClick={handleSignupClick}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-xl rounded-lg"
          >
            Signup
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            By proceeding, I accept the terms and conditions
          </p>
        </div>
      </div>
      </div>
  
    </div>

     {/* Investment Options Section */}
<section className="py-20 bg-background">
  <div className="container mx-auto px-5">
    <h2 className="text-5xl font-semibold text-center text-foreground mb-16">
      Investment options with Zerodha demat account
    </h2>
    <div className=" text-xl max-w-6xl mx-auto">
      <div className="grid grid-cols-2 gap-12 mb-16">
        <div className="text-center">
          <div className="mb-6">
            <div className="w-36 h-36 mx-auto bg-blue-100 rounded-xl flex items-center justify-center">
              <span className="text-8xl">📈</span>
            </div>
          </div>
          <h3 className="text-2xl font-semibold mb-3">Stocks</h3>
          <p className="text-lg text-muted-foreground">
            Invest in NSE and BSE listed stocks and build wealth for the long term.
          </p>
        </div>
        
        <div className="text-center">
          <div className="mb-6">
            <div className="w-36 h-36 mx-auto bg-green-100 rounded-xl flex items-center justify-center">
              <span className="text-8xl">💰</span>
            </div>
          </div>
          <h3 className="text-2xl font-semibold mb-3">Mutual funds</h3>
          <p className="text-lg text-muted-foreground">
            Invest in hundreds of mutual funds from top AMCs commission-free.
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-12">
        <div className="text-center">
          <div className="mb-6">
            <div className="w-36 h-36 mx-auto bg-purple-100 rounded-xl flex items-center justify-center">
              <span className="text-8xl">🏢</span>
            </div>
          </div>
          <h3 className="text-2xl font-semibold mb-3">IPO</h3>
          <p className="text-lg text-muted-foreground">
            Apply for IPOs direct from the app in seconds and track the status.
          </p>
        </div>
        
        <div className="text-center">
          <div className="mb-6">
            <div className="w-36 h-36 mx-auto bg-orange-100 rounded-xl flex items-center justify-center">
              <span className="text-8xl">⚡</span>
            </div>
          </div>
          <h3 className="text-2xl font-semibold mb-3">Futures & options</h3>
          <p className="text-lg text-muted-foreground">
            Trade derivatives and use advanced strategies to hedge and earn.
          </p>
        </div>
      </div>
    </div>
          <div className="text-center mt-8 pt-8 border-t border-muted">
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 text-lg rounded-lg ">
          <a href="https://zerodha.com/investments/" target="_blank" rel="noopener noreferrer">
          Explore investments
          </a>
  </Button>
</div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="text-3xl py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold text-center text-foreground mb-12">
            Steps to open a demat account with Zerodha
          </h2>
          <div className="max-w-md mx-auto space-y-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Enter the requested details</h3>
                <p className="text-sm text-muted-foreground">
                  Provide your basic information to get started.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Complete e-sign & verification</h3>
                <p className="text-sm text-muted-foreground">
                  Digitally sign documents and complete your verification.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Start investing!</h3>
                <p className="text-sm text-muted-foreground">
                  Your account is ready and you can start investing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* Benefits Section */}
<section className="py-16 bg-background">
  <div className="container mx-auto px-4">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* Left side image */}
      <div className="relative">
        <img 
          src={Benefits}
          alt="Benefits illustration"
          className="w-full max-w-2xl "
        />
      </div>

      {/* Right side content */}
      <div>
       
        <div className="space-y-8">
          <div text-4xl>
            <h3 className="text-2xl font-semibold mb-3">Unbeatable pricing</h3>
            <p className="text-lg text-muted-foreground">
              Zero charges for equity delivery investments. Flat ₹20 for intraday and F&O trades.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-3">Best investing experience</h3>
            <p className="text-lg text-muted-foreground">
              Modern and intuitive trading platform with all features that retail investors and traders need.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-3">No spam or gimmicks</h3>
            <p className="text-lg text-muted-foreground">
              No recommendations, tips, or unwanted calls. Just clean, transparent pricing and platform.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-3">The Zerodha Universe</h3>
            <p className="text-lg text-muted-foreground">
              Not just an app, but a whole ecosystem of money management tools and platforms.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Account Types Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Explore different account types
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 border border-border rounded-lg">
              <a href="https://zerodha.com/open-account" target="_blank" rel="noopener noreferrer">
              <div className="mb-4">
                <div className="w-16 h-16 mx-auto bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">👤</span>
                </div>
              </div>
              <h3 className="font-semibold mb-2">Individual Account</h3>
              <p className="text-sm text-muted-foreground">
                Open individual demat account and receive
              </p>
              </a>
            </div>
            
            <div className="text-center p-6 border border-border rounded-lg">
              <a href="https://support.zerodha.com/category/account-opening/company-partnership-and-huf-account-opening/huf" target="_blank" rel="noopener noreferrer">
              <div className="mb-4">
                <div className="w-16 h-16 mx-auto bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🏛️</span>
                </div>
              </div>
              <h3 className="font-semibold mb-2">HUF Account</h3>
              <p className="text-sm text-muted-foreground">
                Open demat account for Hindu Undivided Family (HUF) entity
              </p>
              </a>
            </div>
            
            <div className="text-center p-6 border border-border rounded-lg">
              <a href="https://support.zerodha.com/category/account-opening/nri-account-opening" target="_blank" rel="noopener noreferrer">
              <div className="mb-4">
                <div className="w-16 h-16 mx-auto bg-purple-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">👥</span>
                </div>
              </div>
              <h3 className="font-semibold mb-2">NRI Account</h3>
              <p className="text-sm text-muted-foreground">
                Open NRI account for non-resident Indians
              </p>
              </a>
            </div>
            
            <div className="text-center p-6 border border-border rounded-lg">
              <a href="https://support.zerodha.com/category/account-opening/minor-account-opening" target="_blank" rel="noopener noreferrer">
              <div className="mb-4">
                <div className="w-16 h-16 mx-auto bg-orange-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
              </div>
              <h3 className="font-semibold mb-2">Minor Account</h3>
              <p className="text-sm text-muted-foreground">
                Minor joint demat account that will be operated by parent
              </p>
              </a>
            </div>
            
            <div className="text-center p-6 border border-border rounded-lg">
              <a href="https://support.zerodha.com/category/account-opening/corporate-account-opening" target="_blank" rel="noopener noreferrer">
              <div className="mb-4">
                <div className="w-16 h-16 mx-auto bg-red-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🏢</span>
                </div>
              </div>
              <h3 className="font-semibold mb-2">Corporate/LLP/Partnership</h3>
              <p className="text-sm text-muted-foreground">
                Open your business corporate/LLP/ partnership entity
              </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">FAQs</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="bg-background p-6 rounded-lg border border-border">
              <h3 className="font-semibold mb-2">What is a Zerodha account?</h3>
              <p className="text-sm text-muted-foreground">
                A Zerodha account is a demat and trading account that allows you to invest in stocks, mutual funds, and other securities.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-lg border border-border">
              <h3 className="font-semibold mb-2">What documents are required to open a demat account?</h3>
              <p className="text-sm text-muted-foreground">
                You need PAN card, Aadhaar card, and bank account details to open a demat account.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-lg border border-border">
              <h3 className="font-semibold mb-2">Is Aadhaar account opening free?</h3>
              <p className="text-sm text-muted-foreground">
                Yes, opening a Zerodha account is completely free with no account opening charges.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-lg border border-border">
              <h3 className="font-semibold mb-2">Are there any maintenance charges for a demat account?</h3>
              <p className="text-sm text-muted-foreground">
                There are annual maintenance charges of ₹300 + GST for demat accounts.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-lg border border-border">
              <h3 className="font-semibold mb-2">Can I open a demat account without a bank account?</h3>
              <p className="text-sm text-muted-foreground">
                No, a bank account is mandatory to open a demat account as it's required for fund transfers.
              </p>
            </div>
          </div>
        </div>
      </section>

      < Footer />
    </div>
  );
};

export default Signup;
