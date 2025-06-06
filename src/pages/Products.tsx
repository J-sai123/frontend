
import { Link } from "react-router-dom";
import { Smartphone, BarChart3, PieChart, Award, TrendingUp, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Products = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center">
              <img 
                src="https://images.unsplash.com/photo-1500673922987-e212871fec22?w=40&h=40&fit=crop&crop=center" 
                alt="Zerodha" 
                className="h-8 w-8 rounded"
              />
              <span className="ml-2 text-xl font-bold text-blue-600">Zerodha</span>
            </Link>
            <Link to="/" className="text-gray-600 hover:text-blue-600">
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-600">Products</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive suite of trading and investment platforms designed for every type of trader and investor.
            </p>
          </div>
        </div>
      </section>

      {/* Main Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Smartphone className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Kite</h2>
                <p className="text-gray-600 mb-6">
                  Our ultra-fast flagship trading platform with streaming market data, advanced charts, and an elegant UI. Trade across equity, currency, and commodity segments.
                </p>
                <ul className="text-gray-600 space-y-2 mb-6">
                  <li>• Real-time market data</li>
                  <li>• Advanced charting tools</li>
                  <li>• Order management</li>
                  <li>• Market depth analysis</li>
                </ul>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <BarChart3 className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Console</h2>
                <p className="text-gray-600 mb-6">
                  The central dashboard for your Zerodha account. Gain insights into your trades and investments with comprehensive reporting and analytics.
                </p>
                <ul className="text-gray-600 space-y-2 mb-6">
                  <li>• Portfolio overview</li>
                  <li>• P&L analysis</li>
                  <li>• Tax reports</li>
                  <li>• Account statements</li>
                </ul>
                <Button className="bg-green-600 hover:bg-green-700">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                  <PieChart className="w-8 h-8 text-yellow-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Coin</h2>
                <p className="text-gray-600 mb-6">
                  Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Track your investments and SIP performance.
                </p>
                <ul className="text-gray-600 space-y-2 mb-6">
                  <li>• Direct mutual funds</li>
                  <li>• SIP investments</li>
                  <li>• Goal-based investing</li>
                  <li>• Fund comparison tools</li>
                </ul>
                <Button className="bg-yellow-600 hover:bg-yellow-700">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <Award className="w-8 h-8 text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Varsity</h2>
                <p className="text-gray-600 mb-6">
                  An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Learn trading and investing fundamentals.
                </p>
                <ul className="text-gray-600 space-y-2 mb-6">
                  <li>• Trading tutorials</li>
                  <li>• Investment guides</li>
                  <li>• Market analysis</li>
                  <li>• Certification courses</li>
                </ul>
                <Button className="bg-purple-600 hover:bg-purple-700">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Tools */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Additional Tools
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Streak</h3>
                <p className="text-gray-600">Algorithmic trading platform for creating and deploying trading strategies.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Smallcase</h3>
                <p className="text-gray-600">Invest in professionally managed portfolios of stocks that reflect an idea or theme.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Sensibull</h3>
                <p className="text-gray-600">Options trading platform with strategy recommendations and risk analysis.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
