
import { useState } from "react";
import { Menu, X, TrendingUp, Shield, Users, BarChart3, PieChart, Smartphone, Globe, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import landingImg from "@/assets/images/landing.png";
import dittoImg from "@/assets/images/ditto.png";
import Logo from "@/assets/images/logoImg.png";
import IMG from "@/assets/images/Img.png"; 
import Varsity from "@/assets/images/Varsity.png";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
       {/* Navbar */}
      <nav className="py-6 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img src={Logo} alt="Zerodha" className="h-11 w-11" />
              <span className="text-2xl font-bold text-blue-600">ZERODHA</span>
              </Link>
            <div className="flex items-center space-x-12">
              <Link to="/signup" className="text-lg text-gray-600 hover:text-gray-900 ">Signup</Link>
              <Link to="/about" className="text-lg text-gray-600 hover:text-gray-900">About</Link>
              <Link to="/products" className="text-lg text-gray-600 hover:text-gray-900">Products</Link>
              <Link to="/pricing" className=" text-lg text-gray-600 hover:text-gray-900">Pricing</Link>
              <Link to="/support" className=" text-lg text-gray-600 hover:text-gray-900">Support</Link>
              <button className="text-gray-600 hover:text-gray-900">
                <Menu size={28} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <img 
            src={landingImg} 
            alt="Trading Platform" 
            className="mx-auto mb-28 max-w-7xl w-full pb-8 md:pb-12 lg:pb-14xl:pb-12"
          />
          <h1 className="text-5xl font-bold text-gray-900 mb-4 gap-4">
            <TrendingUp className="inline-block mr-2" />
            Invest in everything
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
          </p>
          <Link 
            to="/signup#hero" 
            className="inline-block bg-[#387ED1] text-white px-6 py-3 rounded hover:bg-blue-700"
          >
            Sign up for free
          </Link>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-8">Trust with confidence</h2>
              <div className="space-y-12">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Customer-first always</h3>
                  <p className="textxl text-gray-600">That's why 1M+ crore customers trust Zerodha with ~ ₹ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">No spam or gimmicks</h3>
                  <p className="textxl text-gray-600">No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">The Zerodha universe</h3>
                  <p className=" textxl text-gray-600">Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center1">
              <Link to="/products">
              <img src= {IMG} alt="Ditto" className="w-full max-w-lg" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
<section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid md:grid-cols-2 gap-16 items-center">
      {/* Left side content */}
      <div>
        <h2 className="text-4xl font-bold mb-4">Unbeatable pricing</h2>
        <p className="text-xl text-gray-600 mb-8">
          We believe in transparent and fair pricing. No hidden fees, no surprises.
        </p>
      </div>

      {/* Right side pricing */}
      <div className="flex justify-center space-x-16">
        <div className="text-center">
          <div className="text-5xl font-bold mb-2">₹0</div>
          <p className=" textxl text-gray-600">Free equity delivery and<br />direct mutual funds</p>
        </div>
        <div className="text-center">
          <div className="text-5xl font-bold mb-2">₹20</div>
          <p className=" textxl text-gray-600">Intraday and F&O</p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Education Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <img 
              src={Varsity} 
              alt="Varsity" 
              className="w-full max-w-lg"
            />
            <div>
              <h2 className="text-4xl font-bold mb-4">Free and open market education</h2>
              <p className=" text-xl text-gray-600 mb-4">
                Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
              </p>
              <a href="https://zerodha.com/varsity/" className="text-[#387ED1] hover:underline">Varsity →</a>
              <p className=" text-xl text-gray-600 mb-2 pt-4">
              TradingQ&A, the most active trading and investment community in India for all your market related queries              </p>
            <a href="https://tradingqna.com/" className="text-[#387ED1] hover:underline">TradingQ&A →</a>
            
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-6xl font-bold mb-4">Open a Zerodha account</h2>
          <p className="text-2xl text-gray-600 mb-8">Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
          <Link 
            to="/signup#hero" 
            className="inline-block bg-[#387ED1] text-white px-6 py-3 rounded hover:bg-blue-700"
          >
            Sign up for free
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
export default Index;
