import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Phone, Shield, ArrowRight, CheckCircle } from 'lucide-react';

const SignupPage = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSendOTP = async () => {
    if (!mobileNumber.trim()) {
      setError('Please enter a valid mobile number');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await axios.post('http://localhost:3002/api/auth/signup', {
        mobileNumber,
      });

      if (response.data.message === 'OTP sent successfully') {
        setOtpSent(true);
        setError('');
        alert(`OTP: ${response.data.otp}`); // In production, remove alert
      }
    } catch (error) {
      setError(error.response?.data?.message || 'Failed to send OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOTP = async () => {
    if (!otp.trim()) {
      setError('Please enter the OTP');
      return;
    }

    setLoading(true);
    setError('');

    try {
      await axios.post(
        'http://localhost:3002/api/auth/verify-otp',
        { mobileNumber, otp },
        { withCredentials: true }
      );
      setError('');
      navigate('/Dashboard');
    } catch (error) {
      setError(error.response?.data?.message || 'Invalid OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleResendOTP = async () => {
    await handleSendOTP();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Secure Signup</h1>
          <p className="text-gray-600">Verify your mobile number to get started</p>
        </div>

        <Card className="shadow-xl border-0">
          <CardHeader className="text-center pb-4">
            <CardTitle className="flex items-center justify-center gap-2 text-xl">
              {!otpSent ? (
                <>
                  <Phone className="w-5 h-5" />
                  Enter Mobile Number
                </>
              ) : (
                <>
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Verify OTP
                </>
              )}
            </CardTitle>
            <CardDescription>
              {!otpSent 
                ? "We'll send you a verification code" 
                : `Code sent to ${mobileNumber}`
              }
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            {!otpSent ? (
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="mobile" className="text-sm font-medium text-gray-700">
                    Mobile Number
                  </label>
                  <Input
                    id="mobile"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    className="text-lg"
                    disabled={loading}
                  />
                </div>

                <Button 
                  onClick={handleSendOTP} 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg"
                  disabled={loading}
                >
                  {loading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      Send OTP
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  )}
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="otp" className="text-sm font-medium text-gray-700">
                    Enter OTP
                  </label>
                  <Input
                    id="otp"
                    type="text"
                    placeholder="000000"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    maxLength={6}
                    className="text-lg text-center tracking-widest"
                    disabled={loading}
                  />
                </div>

                <Button 
                  onClick={handleVerifyOTP} 
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg"
                  disabled={loading}
                >
                  {loading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Verifying...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      Verify & Continue
                      <CheckCircle className="w-4 h-4" />
                    </div>
                  )}
                </Button>

                <div className="text-center">
                  <button
                    onClick={handleResendOTP}
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                    disabled={loading}
                  >
                    Didn't receive? Resend OTP
                  </button>
                </div>

                <div className="text-center">
                  <button
                    onClick={() => {
                      setOtpSent(false);
                      setOtp('');
                      setError('');
                    }}
                    className="text-gray-500 hover:text-gray-700 text-sm"
                    disabled={loading}
                  >
                    Change mobile number
                  </button>
                </div>
              </div>
            )}

            {error && (
              <Alert className="border-red-200 bg-red-50">
                <AlertDescription className="text-red-700">
                  {error}
                </AlertDescription>
              </Alert>
            )}
          </CardContent>
        </Card>

        <div className="text-center mt-6 text-sm text-gray-500">
          By continuing, you agree to our Terms of Service and Privacy Policy
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
