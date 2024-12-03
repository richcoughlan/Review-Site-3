import React from 'react';
import { Link } from 'react-router-dom';
import { Star, QrCode, BarChart2, MessageSquare, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Navbar } from '../components/layout/Navbar';
import { PricingSection } from '../components/pricing/PricingSection';

export const Home = () => {
  return (
    <div className="bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
            <div className="flex items-center gap-x-4">
              <Star className="h-8 w-8 text-blue-600" />
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                ReviewBoost Pro
              </h1>
            </div>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Transform your customer feedback into business growth. Our smart review management platform helps you collect, monitor, and leverage customer reviews to build a stronger online presence.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link to="/dashboard">
                <Button size="lg" className="text-lg px-8">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/about" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
            <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                alt="Dashboard preview"
                className="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Grow Faster</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to manage your online reputation
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our comprehensive suite of tools helps you collect and manage customer reviews, analyze feedback, and build a stronger online presence.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-blue-600/10 p-2 ring-1 ring-blue-600/20">
                <QrCode className="h-6 w-6 text-blue-600" />
              </div>
              <dt className="mt-4 font-semibold text-gray-900">Smart QR Codes</dt>
              <dd className="mt-2 leading-7 text-gray-600">
                Generate custom QR codes for each location to easily collect customer reviews and feedback.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-blue-600/10 p-2 ring-1 ring-blue-600/20">
                <BarChart2 className="h-6 w-6 text-blue-600" />
              </div>
              <dt className="mt-4 font-semibold text-gray-900">Analytics Dashboard</dt>
              <dd className="mt-2 leading-7 text-gray-600">
                Track review trends and monitor customer sentiment across all your locations.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-blue-600/10 p-2 ring-1 ring-blue-600/20">
                <MessageSquare className="h-6 w-6 text-blue-600" />
              </div>
              <dt className="mt-4 font-semibold text-gray-900">Feedback Management</dt>
              <dd className="mt-2 leading-7 text-gray-600">
                Efficiently manage and respond to customer feedback in one centralized platform.
              </dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Pricing Section */}
      <PricingSection />

      {/* CTA Section */}
      <div className="bg-blue-600">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to boost your online reputation?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Join thousands of businesses using ReviewBoost Pro to build trust and grow their customer base.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link to="/dashboard">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  Get Started Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};