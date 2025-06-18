import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Phone, Shield, ArrowRight, CheckCircle } from 'lucide-react';

const SignupPage: React.FC = () => {
  const [form, setForm] = useState<{
    username: string;
    email: string;
    password: string;
    mobileNumber: string;
  }>({
    username: '',
    email: '',
    password: '',
    mobileNumber: '',
  });

  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleInputChange = (field: keyof typeof form, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (error) setError('');
  };

  const handleSignup = async () => {
    if (!form.username || !form.email || !form.password || !form.mobileNumber) {
      setError('All fields are required');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      await axios.post('http://localhost:3002/register', form);
      alert('Signup successful!');
      navigate('/login');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error(err);
      setError(err.response?.data?.message || 'Signup failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gentle-50 via-blue-50 to-purple-50 flex items-center justify-center p-4 font-inter">
      {/* Background Blur Circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-pink-200/30 to-blue-200/30 rounded-full blur-3xl"></div>
      </div>

      {/* Signup Card */}
      <div className="relative w-full max-w-md">
        {/* Header Section */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6 shadow-lg">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gentle-800 mb-2">Create Account</h1>
          <p className="text-gentle-600 text-lg">Join us today and start your journey</p>
        </div>

        {/* Form Card */}
        <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-2xl animate-slide-in">
          <CardHeader className="space-y-1 pb-6">
            <CardTitle className="text-2xl font-semibold text-center">Sign Up</CardTitle>
            <CardDescription className="text-center text-gentle-600">
              Fill in your details to get started
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            {error && (
              <Alert className="border-red-200 bg-red-50 animate-fade-in">
                <AlertDescription className="text-red-700">{error}</AlertDescription>
              </Alert>
            )}

            {/* Input Fields */}
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Username</label>
                <Input
                  placeholder="Choose a username"
                  value={form.username}
                  onChange={(e) => handleInputChange('username', e.target.value)}
                  disabled={isLoading}
                />
              </div>

              <div>
                <label className="text-sm font-medium">Email</label>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  disabled={isLoading}
                />
              </div>

              <div>
                <label className="text-sm font-medium">Password</label>
                <Input
                  type="password"
                  placeholder="Create a strong password"
                  value={form.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  disabled={isLoading}
                />
              </div>

              <div>
                <label className="text-sm font-medium">Mobile Number</label>
                <Input
                  type="tel"
                  placeholder="Enter your mobile number"
                  value={form.mobileNumber}
                  onChange={(e) => handleInputChange('mobileNumber', e.target.value)}
                  disabled={isLoading}
                />
              </div>
            </div>

            {/* Data Security Note */}
            <div className="bg-gentle-50/50 rounded-lg p-4 space-y-3">
              <h4 className="text-sm font-medium flex items-center gap-2 text-gentle-700">
                <Shield className="w-4 h-4" />
                Your data is secure
              </h4>
              <div className="space-y-2 text-xs text-gentle-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 text-green-500" />
                  <span>End-to-end encryption</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 text-green-500" />
                  <span>GDPR compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3 h-3 text-blue-500" />
                  <span>24/7 support available</span>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <Button
              onClick={handleSignup}
              disabled={
                isLoading ||
                !form.username ||
                !form.email ||
                !form.password ||
                !form.mobileNumber
              }
              className="w-full h-12 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Creating Account...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  Create Account
                  <ArrowRight className="w-4 h-4" />
                </div>
              )}
            </Button>

            {/* Redirect to Login */}
            <div className="text-center pt-4 border-t border-gentle-200">
              <p className="text-sm text-gentle-600">
                Already have an account?{' '}
                <button
                  onClick={() => navigate('/login')}
                  className="text-blue-600 hover:text-blue-700 font-medium hover:underline"
                  disabled={isLoading}
                >
                  Sign in here
                </button>
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-8 text-xs text-gentle-500 animate-fade-in">
          <p>By signing up, you agree to our Terms of Service and Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
