
import { Link } from "react-router-dom";
import { MessageCircle, Phone, Mail, FileText, Users, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

type FormData = z.infer<typeof formSchema>;

const Support = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      // Add your API call here
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      setSubmitSuccess(true);
      form.reset();
    } catch (error) {
      setSubmitError('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // ...existing return statement and JSX...
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              How can we <span className="text-blue-600">help</span> you?
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get support for all your trading and investment needs. We're here to help you succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Support Portal</h3>
                <p className="text-gray-600 mb-4">
                  Get instant answers to common questions and raise support tickets.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Visit Portal
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Support</h3>
                <p className="text-gray-600 mb-4">
                  Speak directly with our support team for urgent issues.
                </p>
                <div className="text-lg font-semibold text-green-600">080-40400400</div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Support</h3>
                <p className="text-gray-600 mb-4">
                  Send us an email and we'll get back to you within 24 hours.
                </p>
                <div className="text-lg font-semibold text-yellow-600">support@zerodha.com</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>



      {/* Help Resources */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Help Resources
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Knowledge Base</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive guides and tutorials for all our products.
                </p>
                <Button variant="outline" className="text-purple-600 border-purple-600">
                  Browse Articles
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Community Forum</h3>
                <p className="text-gray-600 mb-4">
                  Connect with other traders and get answers from the community.
                </p>
                <Button variant="outline" className="text-blue-600 border-blue-600">
                  Join Forum
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Status Page</h3>
                <p className="text-gray-600 mb-4">
                  Check the current status of all our services and platforms.
                </p>
                <Button variant="outline" className="text-green-600 border-green-600">
                  View Status
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
<section className="py-20 bg-white">
  <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-10">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
      <p className="text-gray-600">
        Fill out the form below and our team will get back to you soon.
      </p>
    </div>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="name">Full Name</Label>
          <Input 
            id="name" 
            {...form.register("name")} 
            placeholder="Enter your full name"
            className={form.formState.errors.name ? "border-red-500" : ""}
          />
          {form.formState.errors.name && (
            <span className="text-red-500 text-sm">{form.formState.errors.name.message}</span>
          )}
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input 
            id="email" 
            type="email" 
            {...form.register("email")}
            placeholder="Enter your email"
            className={form.formState.errors.email ? "border-red-500" : ""}
          />
          {form.formState.errors.email && (
            <span className="text-red-500 text-sm">{form.formState.errors.email.message}</span>
          )}
        </div>
      </div>
      
      <div>
        <Label htmlFor="subject">Subject</Label>
        <Input 
          id="subject" 
          {...form.register("subject")}
          placeholder="What's this about?"
          className={form.formState.errors.subject ? "border-red-500" : ""}
        />
        {form.formState.errors.subject && (
          <span className="text-red-500 text-sm">{form.formState.errors.subject.message}</span>
        )}
      </div>
      
      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea 
          id="message" 
          {...form.register("message")}
          placeholder="Describe your issue or question in detail..." 
          rows={6}
          className={form.formState.errors.message ? "border-red-500" : ""}
        />
        {form.formState.errors.message && (
          <span className="text-red-500 text-sm">{form.formState.errors.message.message}</span>
        )}
      </div>
      
      {submitError && (
        <div className="text-red-500 text-sm">{submitError}</div>
      )}
      
      {submitSuccess && (
        <div className="text-green-500 text-sm">Message sent successfully!</div>
      )}
      
      <Button 
        type="submit" 
        className="w-full bg-blue-600 hover:bg-blue-700"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  </div>
</section>


      {/* Support Hours */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Support Hours
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Trading Days</h3>
                <p className="text-gray-600">Monday to Friday</p>
                <p className="text-lg font-semibold text-blue-600">9:00 AM - 6:00 PM</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Non-Trading Days</h3>
                <p className="text-gray-600">Weekends & Holidays</p>
                <p className="text-lg font-semibold text-orange-600">Limited Support</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      <Footer />
  </div>
  );
};

export default Support;
