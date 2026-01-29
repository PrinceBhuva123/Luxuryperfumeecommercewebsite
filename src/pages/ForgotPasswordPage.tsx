import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { toast } from 'sonner@2.0.3';

export function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    toast.success('Password reset link sent to your email!');
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-12">
      <div className="max-w-md w-full mx-auto px-4">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-[#FAF8F5] rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="w-8 h-8 text-[#C9A86A]" />
          </div>
          <h1 className="text-4xl mb-2" style={{ fontFamily: 'serif' }}>
            Forgot Password?
          </h1>
          <p className="text-gray-600">
            {sent
              ? "We've sent you a reset link"
              : 'Enter your email to reset your password'}
          </p>
        </div>

        {!sent ? (
          <div className="bg-white border border-[#E8DED3] rounded-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-[#FAF8F5] border-[#E8DED3]"
                  placeholder="your@email.com"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-black text-white hover:bg-[#C9A86A]"
                size="lg"
              >
                Send Reset Link
              </Button>
            </form>

            <div className="mt-6 text-center">
              <Link to="/login" className="text-sm text-[#C9A86A] hover:underline">
                ← Back to login
              </Link>
            </div>
          </div>
        ) : (
          <div className="bg-[#FAF8F5] border border-[#E8DED3] rounded-lg p-8 text-center">
            <p className="text-gray-600 mb-6">
              We've sent a password reset link to <strong>{email}</strong>
            </p>
            <p className="text-sm text-gray-500 mb-6">
              Didn't receive the email? Check your spam folder or try again.
            </p>
            <div className="flex flex-col gap-3">
              <Button
                onClick={() => setSent(false)}
                variant="outline"
                className="border-black"
              >
                Resend Link
              </Button>
              <Button asChild className="bg-black text-white hover:bg-[#C9A86A]">
                <Link to="/login">Back to Login</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
