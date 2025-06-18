
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Signup from "./pages/Signup";
import Products from "./pages/Products";
import Pricing from "./pages/Pricing";
import Support from "./pages/Support";
import NotFound from "./pages/NotFound";
import { Helmet } from "react-helmet";
import SignupPage from "./pages/Signuppage";
import Login from "./pages/Login";
import Dashboard from '@/Dashboard/src/components/Dashboard'; 

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
       <Helmet>
        <Helmet>
  <link rel="png" type="image/png" href="%PUBLIC_URL%/logoImg.png" />
</Helmet>
      </Helmet>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Signuppage" element={<SignupPage />} />
          <Route path="/login" element={<Login />} />
           <Route path="/Dashboard" element={<Dashboard />} />
          {/* ADD ALL CUSTOM ROUTES BELOW THE CATCH-ALL "*" ROUTE */}
          <Route path="/products" element={<Products />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/support" element={<Support />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
