import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Logo from '@/assets/images/logoImg.png';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Charges = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto ">
          <h1 className="text-10xl md:text-6xl font-inter,serif text-foreground mb-4 pt-8">
            Charges
          </h1>
          <p className="text-2xl text-muted-foreground">
            List of all charges and taxes
          </p>
        </div>
      </section>

      {/* Main Charges Cards */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Free Equity Delivery */}
            <div className="text-center">
              <div className="mb-6">
                <div className="text-8xl font-bold text-orange-500 mb-2">
                  0<span className="text-2xl">₹</span>
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Free equity delivery</h3>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
                </p>
              </div>
            </div>

            {/* Intraday and F&O trades */}
            <div className="text-center">
              <div className="mb-6">
                <div className="text-8xl font-bold text-orange-500 mb-2">
                  20<span className="text-2xl">₹</span>
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Intraday and F&O trades</h3>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Flat ₹ 20 per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹ 20 on all option trades.
                </p>
              </div>
            </div>

            {/* Free direct MF */}
            <div className="text-center">
              <div className="mb-6">
                <div className="text-8xl font-bold text-orange-500 mb-2">
                  0<span className="text-2xl">₹</span>
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Free direct MF</h3>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
     <section className="bg-muted/30 py-12">
  <div className="container mx-auto px-4">
    <div className="flex justify-center space-x-12 border-b border-border">
      <button className="pb-6 border-b-4 border-primary text-primary font-semibold text-xl">
        Equity
      </button>
      <button className="pb-6 text-muted-foreground hover:text-foreground font-semibold text-xl">
        Currency
      </button>
      <button className="pb-6 text-muted-foreground hover:text-foreground font-semibold text-xl ">
        Commodity
      </button>
    </div>
  </div>
</section>

      {/* Detailed Charges Table */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-sm border border-border overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="text-left p-4 font-medium text-foreground">Charges</th>
                  <th className="text-left p-4 font-medium text-foreground">Equity delivery</th>
                  <th className="text-left p-4 font-medium text-foreground">Equity intraday</th>
                  <th className="text-left p-4 font-medium text-foreground">F&O - Futures</th>
                  <th className="text-left p-4 font-medium text-foreground">F&O - Options</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="p-4 font-medium">Brokerage</td>
                  <td className="p-4 text-green-600 font-bold">Zero Brokerage</td>
                  <td className="p-4">0.03% or Rs. 20/executed order whichever is lower</td>
                  <td className="p-4">0.03% or Rs. 20/executed order whichever is lower</td>
                  <td className="p-4">Flat Rs. 20 per executed order</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 font-medium">STT/CTT</td>
                  <td className="p-4">0.1% on buy & sell</td>
                  <td className="p-4">0.025% on the sell side</td>
                  <td className="p-4">0.02% on sell side</td>
                  <td className="p-4">0.1% on sell side (on premium)</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 font-medium">Transaction charges</td>
                  <td className="p-4">NSE: 0.00325% | BSE: 0.00375%</td>
                  <td className="p-4">NSE: 0.00325% | BSE: 0.00375%</td>
                  <td className="p-4">NSE: 0.00173% | BSE: 0%</td>
                  <td className="p-4">NSE: 0.03503% (on premium) | BSE: 0.0325% (on premium)</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 font-medium">GST</td>
                  <td className="p-4">18% on (brokerage + SEBI charges + transaction charges)</td>
                  <td className="p-4">18% on (brokerage + SEBI charges + transaction charges)</td>
                  <td className="p-4">18% on (brokerage + SEBI charges + transaction charges)</td>
                  <td className="p-4">18% on (brokerage + SEBI charges + transaction charges)</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 font-medium">SEBI charges</td>
                  <td className="p-4">₹10 / crore</td>
                  <td className="p-4">₹10 / crore</td>
                  <td className="p-4">₹10 / crore</td>
                  <td className="p-4">₹10 / crore</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Stamp charges</td>
                  <td className="p-4">0.015% or ₹1500 / crore on buy side</td>
                  <td className="p-4">0.003% or ₹300 / crore on buy side</td>
                  <td className="p-4">0.002% or ₹200 / crore on buy side</td>
                  <td className="p-4">0.003% or ₹300 / crore on buy side</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Charges Explained Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-8">Charges explained</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Securities/Commodities transaction taxf</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                 Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.

<br></br>When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Transaction/Turnover Charges</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.

<br></br>BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)

<br></br>BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.

<br></br>BSE has revised transaction charges for group A, B and other non exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.

<br></br>BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Call & trade</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Stamp charges</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">AMC charges</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  ₹300 per year, debited from ledger balance after 365 days from account opening.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Corporate actions</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Open positions may get converted to delivery in case of corporate actions like dividends, splits, bonus, etc.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Kite Connect charges</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  ₹2000 per month, to cover the cost of infrastructure, maintenance, and support.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Charges in units</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  All charges are per executed order unless explicitly mentioned per leg. When you partially fill an order, only the executed quantity is charged for brokerage.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">NRI account (non-PIS)</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  ₹100 per executed order for equity (charges might include stockbroker, exchange, and government taxes).
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">NRI account (PIS)</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  ₹100 per executed order for equity (charges might include stockbroker, exchange, and government taxes).
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h1 className="text-2xl font-semibold text-foreground mb-4">Disclaimer</h1>
            <p className="text-sm text-muted-foreground leading-relaxed">
For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges. Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and assigned options contracts. Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged.
</p>
</div>        </div>
      </section>

      {/* Account Opening Charges */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-8">Charges for account opening</h2>
          <div className="bg-white rounded-lg shadow-sm border border-border overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="text-left p-4 font-medium text-foreground">Type of account</th>
                  <th className="text-center p-4 font-medium text-foreground">Charges</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="p-4">Online account</td>
                  <td className="p-4 text-center text-green-600 font-bold">Free</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4">Offline account</td>
                  <td className="p-4 text-center text-green-600 font-bold">Free</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4">NRI account (offline only)</td>
                  <td className="p-4 text-center">₹500</td>
                </tr>
                <tr>
                  <td className="p-4">Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
                  <td className="p-4 text-center">₹500</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Optional Services */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-8">Charges for optional value added services</h2>
          <div className="bg-white rounded-lg shadow-sm border border-border overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="text-left p-4 font-medium text-foreground">Service</th>
                  <th className="text-left p-4 font-medium text-foreground">Billing frequency</th>
                  <th className="text-center p-4 font-medium text-foreground">Charges</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="p-4">Tickertape</td>
                  <td className="p-4">Monthly (₹249 + GST)</td>
                  <td className="p-4 text-center">₹249</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4">Smallcase</td>
                  <td className="p-4">Per transaction</td>
                  <td className="p-4 text-center">Fre + 2.5% + GST of the transaction value</td>
                </tr>
                <tr>
                  <td className="p-4">Kite Connect API</td>
                  <td className="p-4">Monthly</td>
                  <td className="p-4 text-center">₹2000 + GST</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Charges;
