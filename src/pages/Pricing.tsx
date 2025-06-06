
import { Link } from "react-router-dom";
import { Check, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Pricing = () => {
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
              Simple, <span className="text-blue-600">transparent</span> pricing
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No hidden charges. No gimmicks. Just straightforward pricing that puts you first.
            </p>
          </div>
        </div>
      </section>

      {/* Main Pricing */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="border-2 border-green-200 shadow-xl">
              <CardHeader className="text-center bg-green-50">
                <CardTitle className="text-3xl font-bold text-green-600">₹0</CardTitle>
                <p className="text-xl font-semibold text-gray-900">Equity Delivery</p>
              </CardHeader>
              <CardContent className="p-8">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>Free equity delivery trades</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>Free direct mutual funds</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>No AMC charges</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>No hidden fees</span>
                  </li>
                </ul>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Start Investing
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 shadow-xl">
              <CardHeader className="text-center bg-blue-50">
                <CardTitle className="text-3xl font-bold text-blue-600">₹20</CardTitle>
                <p className="text-xl font-semibold text-gray-900">Intraday & F&O</p>
              </CardHeader>
              <CardContent className="p-8">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-blue-500 mr-3" />
                    <span>Flat ₹20 per executed order</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-blue-500 mr-3" />
                    <span>Or 0.03% (whichever is lower)</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-blue-500 mr-3" />
                    <span>All segments included</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-blue-500 mr-3" />
                    <span>Advanced trading tools</span>
                  </li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Start Trading
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Pricing Table */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Detailed Pricing
            </h2>
          </div>
          
          <Card className="shadow-xl">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b">
                    <tr>
                      <th className="text-left p-6 font-semibold text-gray-900">Product</th>
                      <th className="text-left p-6 font-semibold text-gray-900">Charges</th>
                      <th className="text-left p-6 font-semibold text-gray-900">Details</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="p-6 font-medium text-gray-900">Equity Delivery</td>
                      <td className="p-6 text-green-600 font-bold">₹0</td>
                      <td className="p-6 text-gray-600">No brokerage on delivery trades</td>
                    </tr>
                    <tr>
                      <td className="p-6 font-medium text-gray-900">Equity Intraday</td>
                      <td className="p-6 text-blue-600 font-bold">₹20 or 0.03%</td>
                      <td className="p-6 text-gray-600">Whichever is lower per executed order</td>
                    </tr>
                    <tr>
                      <td className="p-6 font-medium text-gray-900">Equity Futures</td>
                      <td className="p-6 text-blue-600 font-bold">₹20 or 0.03%</td>
                      <td className="p-6 text-gray-600">Whichever is lower per executed order</td>
                    </tr>
                    <tr>
                      <td className="p-6 font-medium text-gray-900">Equity Options</td>
                      <td className="p-6 text-blue-600 font-bold">₹20</td>
                      <td className="p-6 text-gray-600">Flat per executed order</td>
                    </tr>
                    <tr>
                      <td className="p-6 font-medium text-gray-900">Currency Futures</td>
                      <td className="p-6 text-blue-600 font-bold">₹20 or 0.03%</td>
                      <td className="p-6 text-gray-600">Whichever is lower per executed order</td>
                    </tr>
                    <tr>
                      <td className="p-6 font-medium text-gray-900">Currency Options</td>
                      <td className="p-6 text-blue-600 font-bold">₹20</td>
                      <td className="p-6 text-gray-600">Flat per executed order</td>
                    </tr>
                    <tr>
                      <td className="p-6 font-medium text-gray-900">Commodity Futures</td>
                      <td className="p-6 text-blue-600 font-bold">₹20 or 0.03%</td>
                      <td className="p-6 text-gray-600">Whichever is lower per executed order</td>
                    </tr>
                    <tr>
                      <td className="p-6 font-medium text-gray-900">Mutual Funds</td>
                      <td className="p-6 text-green-600 font-bold">₹0</td>
                      <td className="p-6 text-gray-600">Free for direct plans</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Additional Charges */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Additional Charges
            </h2>
            <p className="text-gray-600">
              Transparent about all costs. No surprises.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Opening</h3>
                <div className="text-2xl font-bold text-green-600 mb-2">₹0</div>
                <p className="text-gray-600">Free account opening for all segments</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Maintenance</h3>
                <div className="text-2xl font-bold text-blue-600 mb-2">₹300</div>
                <p className="text-gray-600">Annual maintenance charge</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Call & Trade</h3>
                <div className="text-2xl font-bold text-orange-600 mb-2">₹50</div>
                <p className="text-gray-600">Per executed order via phone</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
