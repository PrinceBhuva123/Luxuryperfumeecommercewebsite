import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { toast } from 'sonner@2.0.3';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent successfully! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl mb-4" style={{ fontFamily: 'serif' }}>
            Get In Touch
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a question or feedback? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-[#FAF8F5] rounded-lg p-6 border border-[#E8DED3]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#C9A86A] rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="mb-1">Email</h3>
                  <p className="text-sm text-gray-600">support@essence.com</p>
                  <p className="text-sm text-gray-600">info@essence.com</p>
                </div>
              </div>
            </div>

            <div className="bg-[#FAF8F5] rounded-lg p-6 border border-[#E8DED3]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#C9A86A] rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="mb-1">Phone</h3>
                  <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
                  <p className="text-sm text-gray-600">+1 (555) 987-6543</p>
                </div>
              </div>
            </div>

            <div className="bg-[#FAF8F5] rounded-lg p-6 border border-[#E8DED3]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#C9A86A] rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="mb-1">Address</h3>
                  <p className="text-sm text-gray-600">
                    123 Fragrance Avenue
                    <br />
                    New York, NY 10001
                    <br />
                    United States
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#FAF8F5] rounded-lg p-6 border border-[#E8DED3]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#C9A86A] rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="mb-1">Business Hours</h3>
                  <p className="text-sm text-gray-600">
                    Monday - Friday: 9am - 6pm
                    <br />
                    Saturday: 10am - 4pm
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-[#E8DED3] rounded-lg p-8">
              <h2 className="text-2xl mb-6" style={{ fontFamily: 'serif' }}>
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      className="bg-[#FAF8F5] border-[#E8DED3]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Your Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      className="bg-[#FAF8F5] border-[#E8DED3]"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    required
                    className="bg-[#FAF8F5] border-[#E8DED3]"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    rows={6}
                    className="bg-[#FAF8F5] border-[#E8DED3]"
                  />
                </div>

                <Button
                  type="submit"
                  className="bg-black text-white hover:bg-[#C9A86A]"
                  size="lg"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Map */}
            <div className="mt-8 bg-[#FAF8F5] rounded-lg h-64 flex items-center justify-center border border-[#E8DED3]">
              <p className="text-gray-500">Map placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
