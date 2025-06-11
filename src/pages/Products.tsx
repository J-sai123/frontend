
import { Link } from "react-router-dom";
import { Smartphone, BarChart3, PieChart, Award, TrendingUp, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import kite from "@/assets/images/Kite.png";
import consoleImg from "@/assets/images/Console.png";
import coinImg from "@/assets/images/coin.png";
import kiteconnectImg from "@/assets/images/kiteconnect.png";
import varsitymobile from "@/assets/images/varsitymobile.png";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import React from 'react';

const Product = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="py-40 text-center">
        <div className="container mx-auto px-7 ">
          <h1 className="text-6xl md:text-7xl font-bold-muted/50 text-foreground mb-8 mt-19  pt-19">
            Zerodha Products
          </h1>
          <p className="text-3xl text-muted-foreground mb-5">
            Sleek, modern, and intuitive trading platforms
          </p>
          <p className="text-3xl  text-muted-foreground">
            Check out our <a href="https://zerodha.com/investments" className="text-[#387ED1] hover:underline">investment offerings →</a>
          </p>
        </div>
      </section>

      {/* Kite Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <a href="https://zerodha.com/products/kite" target="_blank" rel="noopener noreferrer">
              <img 
                src={kite}
                alt="Kite trading platform interface"
                className="w-full "
              />
              </a>
            </div>
            <div>
              <h2 className="text-5xl font-bold text-foreground mb-6">Kite</h2>
              <p className=" text-xl text-muted-foreground mb-6 leading-relaxed">
                Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.
              </p>
              <div className="space-y-3 mb-6">
                <p className="text-xl text-muted-foreground" >
                  <a href="https://kite-demo.zerodha.com/dashboard" className="text-[#387ED1] hover:underline">Try demo →</a>
                 </p>
                <p className="text-xl text-muted-foreground">
                  <a href="https://zerodha.com/products/kite" className="text-[#387ED1] hover:underline">Learn More →</a>
                  </p>
              </div>
              <div className="flex space-x-4">
                <Button className="bg-black text-white hover:bg-gray-800">
                  <span className="mr-2">📱</span>
                  Google Play
                </Button>
                <Button className="bg-black text-white hover:bg-gray-800">
                  <span className="mr-2">🍎</span>
                  App Store
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Console Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold text-foreground mb-6">Console</h2>
              <p className=" text-xl text-muted-foreground mb-6 leading-relaxed">
                The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.
              </p>
              <p className="text-xl text-muted-foreground mb-6">
              <a href="https://zerodha.com/products/console" className="text-[#387ED1] hover:underline">Learn more →
              </a></p>
            </div>
            <div className="relative">
              <a href="https://zerodha.com/products/console" target="_blank" rel="noopener noreferrer">
              <img 
                src={consoleImg}
                alt="Console dashboard interface"
                className="w-full"
              />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Coin Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <a href="https://coin.zerodha.com/" target="_blank" rel="noopener noreferrer">
              <img 
                src={coinImg}
                alt="Coin mutual funds platform"
                className="w-full "
              />
              </a>
            </div>
            <div>
              <h2 className="text-5xl font-bold text-foreground mb-6">Coin</h2>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.
              </p>
              <div className="space-y-3 mb-6">
                <p className="text-xl text-muted-foreground">
                  <a href="https://coin.zerodha.com/" className="text-[#387ED1] hover:underline">Coin →</a>
                  </p>
              </div>
              <div className="flex space-x-4">
                <Button className="bg-black text-white hover:bg-gray-800">
                  <span className="mr-2">📱</span>
                  Google Play
                </Button>
                <Button className="bg-black text-white hover:bg-gray-800">
                  <span className="mr-2">🍎</span>
                  App Store
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kite Connect Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold text-foreground mb-6">Kite Connect API</h2>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.
              </p>
              <p className="text-xl text-muted-foreground">
                <a href="https://zerodha.com/products/kite-connect" className="text-[#387ED1] hover:underline">
                Kite Connect → </a></p>
            </div>
            <div className="relative">
              <a href="https://zerodha.com/products/api/" target="_blank" rel="noopener noreferrer">
              <img 
                src={kiteconnectImg}
                alt="Kite Connect API code interface"
                className="w-full"
              />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Varsity Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <a href="https://play.google.com/store/apps/details?id=com.zerodha.varsity" target="_blank" rel="noopener noreferrer">
              <img 
                src={varsitymobile}
                alt="Varsity mobile learning app"
                className="w-full "
              />
              </a>
            </div>
            <div>
              <h2 className="text-5xl font-bold text-foreground mb-6">Varsity mobile</h2>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.
              </p>
              <div className="flex space-x-4">
                <Button className="bg-black text-white hover:bg-gray-800">
                  <span className="mr-2">📱</span>
                  Google Play
                </Button>
                <Button className="bg-black text-white hover:bg-gray-800">
                  <span className="mr-2">🍎</span>
                  App Store
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 bg-muted/30 text-center">
        <div className="container mx-auto px-4">
          <p className="text-2xl text-muted-foreground mb-4">
            Want to know more about our technology stack? Check out the <a href="https://zerodha.tech/" className="text-[#387ED1] hover:underline">Zerodha.tech</a> blog.
          </p>
        </div>
      </section>

      {/* Universe Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl text-foreground mb-14">The Zerodha Universe</h2>
          <p className=" text-xl text-foreground mb-16 max-w-4xl mx-auto">
            Extend your trading and investment experience even further with our partner platforms
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <a href="https://www.zerodhafundhouse.com/" target="_blank" rel="noopener noreferrer">
              <div className="mb-4">
                <div className="w-16 h-16 mx-auto bg-muted rounded-lg flex items-center justify-center text-2xl font-bold">
                  ZFH
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Zerodha Fund House</h3>
              <p className="text-xl text-muted-foreground">
                Our asset management venture that is creating simple and transparent index funds to help you save for your goals.
              </p>
              </a>
            </div>
            
            <div className="text-center">
              <a href="https://sensibull.com/" target="_blank" rel="noopener noreferrer">
              <div className="mb-4">
                <div className="w-16 h-16 mx-auto bg-orange-100 rounded-lg flex items-center justify-center text-2xl font-bold text-orange-600">
                  S
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Sensibull</h3>
              <p className="text-xl text-muted-foreground">
                Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.
              </p>
              </a>
            </div>
            
            <div className="text-center">
              <a href="https://www.tijorifinance.com/ideas-dashboard/" target="_blank" rel="noopener noreferrer">
              <div className="mb-4">
                <div className="w-16 h-16 mx-auto bg-gray-100 rounded-lg flex items-center justify-center text-2xl font-bold text-gray-600">
                  T
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Tijori</h3>
              <p className="text-xl text-muted-foreground">
                Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.
              </p>
              </a>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <a href="hhttps://www.streak.tech/home" target="_blank" rel="noopener noreferrer">
              <div className="mb-4">
                <div className="w-16 h-16 mx-auto bg-blue-100 rounded-lg flex items-center justify-center text-2xl font-bold text-blue-600">
                  S
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Streak</h3>
              <p className="text-xl text-muted-foreground">
                Systematic trading platform that allows you to create and backtest strategies without coding.
              </p>
              </a>
            </div>
            
            <div className="text-center">
              <a href="https://smallcase.zerodha.com/" target="_blank" rel="noopener noreferrer">
              <div className="mb-4">
                <div className="w-16 h-16 mx-auto bg-green-100 rounded-lg flex items-center justify-center text-2xl font-bold text-green-600">
                  S
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Smallcase</h3>
              <p className="text-xl text-muted-foreground">
                Thematic investing platform that helps you invest in diversified baskets of stocks on NSE & BSE.
              </p>
              </a>
            </div>
            
            <div className="text-center">
              <a href="https://joinditto.in/" target="_blank" rel="noopener noreferrer">
              <div className="mb-4">
                <div className="w-16 h-16 mx-auto bg-purple-100 rounded-lg flex items-center justify-center text-2xl font-bold text-purple-600">
                  D
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Ditto</h3>
              <p className="text-xl text-muted-foreground">
                Personalized advice on life and health insurance. No spam and no mis-selling.
              </p>
              </a>
            </div>
          </div>
          
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
};

export default Product;