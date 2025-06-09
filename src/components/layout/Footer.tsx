import React from "react";
import { Link } from "react-router-dom";
const Footer: React.FC = () => {
  return (
    // Footer
    <footer className="bg-muted/50 pt-16 pb-8">
        <div className="container mx-auto ">
          <div className="grid md:grid-cols-5 gap-8 mb-12">
            <div>
            <div>
            <img src="https://zerodha.com/static/images/logo.svg" alt="Zerodha" className="h-6 mb-4" />
            <p className="text-sm text-gray-600">© 2010-2025, Zerodha Brokaring LTD. All rights reserved.</p>
          </div>
              
              <div className="flex space-x-2">
                <span className="text-xs">📧</span>
                <span className="text-xs">🐦</span>
                <span className="text-xs">📘</span>
                <span className="text-xs">📺</span>
                <span className="text-xs">📸</span>
                <span className="text-xs">💼</span>
              </div>
            </div>

            <div className="md:col-span-4">
        <div className="grid md:grid-cols-4 gap-8">           
            <div>
              <h4 className="text-3xl font-semibold mb-4">Account</h4>
              <ul className="space-y-2 text-xl text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Open an account</a></li>
                <li><a href="#" className="hover:text-foreground">Fund transfer</a></li>
                <li><a href="#" className="hover:text-foreground">60 day challenge</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-3xl font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-xl text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Contact us</a></li>
                <li><a href="#" className="hover:text-foreground">Support portal</a></li>
                <li><a href="#" className="hover:text-foreground">Z-Connect blog</a></li>
                
                <li><a href="#" className="hover:text-foreground">List of charges</a></li>
                <li><a href="#" className="hover:text-foreground">Downloads & resources</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-3xl font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-xl text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">About</a></li>
                <li><a href="#" className="hover:text-foreground">Products</a></li>
                <li><a href="#" className="hover:text-foreground">Pricing</a></li>
                <li><a href="#" className="hover:text-foreground">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-3xl font-semibold mb-4">Quick links</h4>
              <ul className="space-y-2 text-xl text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">AMC track</a></li>
                <li><a href="#" className="hover:text-foreground">Corporate actions</a></li>
                <li><a href="#" className="hover:text-foreground">IPO</a></li>
                <li><a href="#" className="hover:text-foreground">FPO</a></li>
              </ul>
            </div>
          </div>
          </div>
          </div>
          
          <div className="text-sm text-gray-500 space-y-4 mt-8 border-t pt-8">
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <a href="mailto:complaints@zerodha.com" className="text-blue-600">complaints@zerodha.com</a>, for DP related to <a href="mailto:dp@zerodha.com" className="text-blue-600">dp@zerodha.com</a>. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
          </p>
          <p>
            Procedure to file a complaint on <a href="#" className="text-blue-600">SEBI SCORES</a>: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances
          </p>
          <p>
            <a href="#" className="text-blue-600">Smart Online Dispute Resolution</a> | <a href="#" className="text-blue-600">Grievances Redressal Mechanism</a>
          </p>
          <p>
            Investments in securities market are subject to market risks; read all the related documents carefully before investing.
          </p>
          <p>
            Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
          </p>
          <p>
            "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please <a href="#" className="text-blue-600">create a ticket here</a>.
          </p>
          <div className="flex space-x-4 mt-4 text-gray-600">
            <a href="#" className="hover:text-gray-900">NSE</a>
            <a href="#" className="hover:text-gray-900">BSE</a>
            <a href="#" className="hover:text-gray-900">MCX</a>
            <a href="#" className="hover:text-gray-900">Terms & conditions</a>
            <a href="#" className="hover:text-gray-900">Policies & procedures</a>
            <a href="#" className="hover:text-gray-900">Privacy policy</a>
            <a href="#" className="hover:text-gray-900">Disclosure</a>
            <a href="#" className="hover:text-gray-900">For investor's attention</a>
            <a href="#" className="hover:text-gray-900">Investor charter</a>
          </div>
        </div>
        </div>
        
      </footer>
  );
};

export default Footer;