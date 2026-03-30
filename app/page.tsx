'use client';

import { Button } from '@/components/ui/button';
import { BarChart3, Target, Share2, Settings, PieChart, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0F0E10] text-white flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#0F0E10] border-b border-[#1D1B1E]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-white">Portl</div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-purple-400 border-b-2 border-purple-400 pb-1">Solutions</a>
            <a href="#" className="text-gray-400 hover:text-white">Features</a>
            <a href="#" className="text-gray-400 hover:text-white">Pricing</a>
            <a href="#" className="text-gray-400 hover:text-white">About</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-gray-400 hover:text-white">Login</button>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 text-sm font-medium rounded-lg">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-[#0F0E10]">
        {/* Background with venue imagery effect */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: 'linear-gradient(135deg, rgba(88, 28, 135, 0.4) 0%, rgba(15, 14, 16, 0.9) 40%, rgba(15, 14, 16, 1) 100%)',
            }}
          />
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: 'radial-gradient(circle at 30% 20%, rgba(168, 85, 247, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(236, 72, 153, 0.1) 0%, transparent 60%)',
          }} />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <div className="text-xs sm:text-sm font-medium mb-8 tracking-widest uppercase text-gray-400">
              Credence Marketplace
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight text-white">
              Fill Your Venue
              <br />
              Every Night
              <br />
              Predict, Target, and Convert{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                High-Value
              </span>
              <br />
              Guests
            </h1>

            <p className="text-sm sm:text-base text-gray-300 mb-8 max-w-xl leading-relaxed">
              Drive bookings, increase table spend, and turn first-time guests into regulars — all from one platform
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 text-sm font-medium rounded-lg">
                Start Filling Your Venue
              </Button>
              <Button variant="outline" className="border border-gray-600 text-white hover:bg-gray-900/50 px-6 py-3 text-sm font-medium rounded-lg bg-transparent">
                See How It Works
              </Button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 pt-8 border-t border-[#1D1B1E]">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">94,000+</div>
                <div className="text-xs sm:text-sm text-gray-400">Total Platform Venues</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">Dubai</div>
                <div className="text-xs sm:text-sm text-gray-400">HQ Location</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-1">+32%</div>
                <div className="text-xs sm:text-sm text-gray-400">Avg Revenue Increase</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-1">+18%</div>
                <div className="text-xs sm:text-sm text-gray-400">Avg Guest Frequency</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Portl Makes You Money */}
      <section className="py-16 sm:py-24 px-6 sm:px-8 lg:px-12 bg-[#0F0E10]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 max-w-2xl mx-auto">
            <p className="text-sm sm:text-base text-gray-400 mb-8">
              Turn every data point into a revenue stream with tools designed for the modern venue operator.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            {/* Fill Empty Nights */}
            <div className="bg-[#1D1B1E] border border-[#1D1B1E] rounded-3xl p-8 sm:p-10 hover:border-purple-700/50 transition-colors h-64 flex flex-col">
              <div className="w-10 h-10 rounded-lg bg-[#2A2629] flex items-center justify-center mb-6 flex-shrink-0">
                <Settings className="w-5 h-5 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Fill Empty Nights</h3>
              <p className="text-sm text-gray-400 flex-grow">
                Activate high-intent users looking for plans tonight. Turn slow nights into full houses.
              </p>
            </div>

            {/* Increase Table Spend */}
            <div className="bg-[#1D1B1E] border border-[#1D1B1E] rounded-3xl p-8 sm:p-10 hover:border-purple-700/50 transition-colors h-64 flex flex-col relative overflow-hidden">
              <div className="w-10 h-10 rounded-lg bg-[#2A2629] flex items-center justify-center mb-6 flex-shrink-0">
                <PieChart className="w-5 h-5 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Increase Table Spend</h3>
              <p className="text-sm text-gray-400 flex-grow">
                Target high-value guests likely to book tables and spend more per visit.
              </p>
              {/* Gradient visualization */}
              <div className="absolute bottom-0 right-0 w-48 h-48 opacity-40">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#4c1d95" />
                      <stop offset="50%" stopColor="#ea580c" />
                      <stop offset="100%" stopColor="#0891b2" />
                    </linearGradient>
                  </defs>
                  <path d="M100,20 Q150,50 180,100 Q150,150 100,180 Q50,150 20,100 Q50,50 100,20" fill="url(#grad1)" />
                </svg>
              </div>
            </div>
          </div>

          {/* Turn Guests Into Regulars */}
          <div className="bg-[#1D1B1E] border border-[#1D1B1E] rounded-3xl p-8 sm:p-10 grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#2A2629] flex items-center justify-center mb-6">
                <Zap className="w-5 h-5 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Turn Guests Into Regulars</h3>
              <p className="text-sm text-gray-400">
                Re-engage VIPs and lapsed customers automatically with personalized offers and loyalty rewards.
              </p>
            </div>
            <div className="bg-[#2A2629] rounded-2xl p-6 border border-[#2A2629] flex flex-col justify-center items-center text-center">
              <div className="text-sm font-semibold text-gray-400 mb-1">Automated</div>
              <div className="text-lg font-bold text-white">Retention Campaigns</div>
            </div>
          </div>
        </div>
      </section>

      {/* Your Venue, Tonight */}
      <section className="py-16 sm:py-24 px-6 sm:px-8 lg:px-12 bg-[#0F0E10]">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#1D1B1E] border border-[#1D1B1E] rounded-3xl p-6 sm:p-8 lg:p-12">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <div>
                <div className="text-xs font-medium mb-3 tracking-widest uppercase text-gray-500">
                  Live Dashboard
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
                  Your Venue, Tonight
                </h3>
                <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8">
                  Real-time visibility into your bookings, guest profiles, and revenue metrics. Make smarter decisions instantly.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full flex-shrink-0" />
                    <span className="text-sm text-gray-300">Current Capacity: 112</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full flex-shrink-0" />
                    <span className="text-sm text-gray-300">Premium Bookings: 34</span>
                  </div>
                </div>

                <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 text-sm font-medium rounded-lg">
                  Fill Remaining Tables
                </Button>
              </div>

              <div className="bg-[#0F0E10] rounded-2xl p-6 border border-[#1D1B1E]">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xs sm:text-sm text-gray-400">Expected Tonight</span>
                    <span className="text-2xl sm:text-3xl font-bold text-white">112</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs sm:text-sm text-gray-400">Capacity Remaining</span>
                    <span className="text-2xl sm:text-3xl font-bold text-cyan-400">48</span>
                  </div>
                  <div className="h-px bg-[#1D1B1E]" />
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-xs sm:text-sm text-gray-400">Revenue Potential</span>
                    <span className="text-2xl sm:text-3xl font-bold text-red-400">AED 14,000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-24 px-6 sm:px-8 lg:px-12 bg-[#0F0E10]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-12 sm:mb-16">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#1D1B1E] border border-[#1D1B1E] flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3">1. List your events & tables</h3>
              <p className="text-sm text-gray-400">
                Easily add your events, tables, and pricing. Set availability and table configurations instantly.
              </p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#1D1B1E] border border-[#1D1B1E] flex items-center justify-center mx-auto mb-6">
                <Target className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3">2. Target high-value users</h3>
              <p className="text-sm text-gray-400">
                Let AI intelligently identify and reach your best-fit guests based on spending and booking patterns.
              </p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#1D1B1E] border border-[#1D1B1E] flex items-center justify-center mx-auto mb-6">
                <Share2 className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3">3. Fill your venue & track revenue</h3>
              <p className="text-sm text-gray-400">
                Watch your bookings fill in real-time. Maximize revenue with data-driven insights and automation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Invest in Excellence */}
      <section className="py-16 sm:py-24 px-6 sm:px-8 lg:px-12 bg-[#0F0E10]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-3 sm:mb-4">
            Invest in Excellence.
          </h2>
          <p className="text-lg sm:text-xl text-cyan-400 text-center mb-2">
            Start free. Only pay more when you want more bookings.
          </p>
          <p className="text-sm sm:text-base text-gray-400 text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            Flexible tiers tailored for single venues or global groups.
          </p>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {/* Starter */}
            <div className="bg-[#1D1B1E] border border-[#1D1B1E] rounded-3xl p-6 sm:p-8 flex flex-col">
              <h3 className="text-sm sm:text-base font-bold text-white mb-1 uppercase tracking-widest">Merchant Starter</h3>
              <div className="text-xs text-gray-400 mb-4">For small venues testing demand</div>
              <div className="mb-6">
                <span className="text-3xl sm:text-4xl font-bold text-white">AED 1,500</span>
                <span className="text-xs sm:text-sm text-gray-400"> /month</span>
              </div>
              <ul className="space-y-3 mb-8 text-gray-300 flex-grow">
                <li className="flex items-center gap-2 text-xs sm:text-sm">
                  <span className="w-4 h-4 rounded-full border border-[#2A2629] flex items-center justify-center flex-shrink-0">
                    <span className="w-2 h-2 bg-[#2A2629] rounded-full"></span>
                  </span>
                  Basic CRM (up to 1k guests)
                </li>
                <li className="flex items-center gap-2 text-xs sm:text-sm">
                  <span className="w-4 h-4 rounded-full border border-[#2A2629] flex items-center justify-center flex-shrink-0">
                    <span className="w-2 h-2 bg-[#2A2629] rounded-full"></span>
                  </span>
                  Core Analytics Dashboard
                </li>
                <li className="flex items-center gap-2 text-xs sm:text-sm">
                  <span className="w-4 h-4 rounded-full border border-[#2A2629] flex items-center justify-center flex-shrink-0">
                    <span className="w-2 h-2 bg-[#2A2629] rounded-full"></span>
                  </span>
                  Email Support
                </li>
              </ul>
              <Button variant="outline" className="w-full border-gray-700 text-white hover:bg-gray-900/50 text-sm font-medium rounded-full bg-transparent">
                Select Plan
              </Button>
            </div>

            {/* Growth (Highlighted) */}
            <div className="bg-[#1D1B1E] border-2 border-gray-400 rounded-3xl p-6 sm:p-8 relative flex flex-col">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white text-xs px-4 py-1.5 rounded-full font-bold">
                BEST VALUE
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white mb-1 uppercase tracking-widest">Merchant Growth</h3>
              <div className="text-xs text-gray-400 mb-4">For venues scaling bookings (Most Popular)</div>
              <div className="mb-6">
                <span className="text-3xl sm:text-4xl font-bold text-white">AED 3,500</span>
                <span className="text-xs sm:text-sm text-gray-400"> /month</span>
              </div>
              <ul className="space-y-3 mb-8 text-gray-300 flex-grow">
                <li className="flex items-center gap-2 text-xs sm:text-sm">
                  <span className="w-4 h-4 rounded-full border border-cyan-400 flex items-center justify-center flex-shrink-0">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  </span>
                  Advanced CRM (Unlimited)
                </li>
                <li className="flex items-center gap-2 text-xs sm:text-sm">
                  <span className="w-4 h-4 rounded-full border border-cyan-400 flex items-center justify-center flex-shrink-0">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  </span>
                  Automated Campaigns
                </li>
                <li className="flex items-center gap-2 text-xs sm:text-sm">
                  <span className="w-4 h-4 rounded-full border border-cyan-400 flex items-center justify-center flex-shrink-0">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  </span>
                  Real-time Heatmaps
                </li>
                <li className="flex items-center gap-2 text-xs sm:text-sm">
                  <span className="w-4 h-4 rounded-full border border-cyan-400 flex items-center justify-center flex-shrink-0">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  </span>
                  24/7 Priority Support
                </li>
              </ul>
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-full">
                Get Started
              </Button>
            </div>

            {/* Pro */}
            <div className="bg-[#1D1B1E] border border-[#1D1B1E] rounded-3xl p-6 sm:p-8 flex flex-col">
              <h3 className="text-sm sm:text-base font-bold text-white mb-1 uppercase tracking-widest">Merchant Pro</h3>
              <div className="text-xs text-gray-400 mb-4">For multi-venue operators maximizing revenue</div>
              <div className="mb-6">
                <span className="text-3xl sm:text-4xl font-bold text-white">AED 7,500</span>
                <span className="text-xs sm:text-sm text-gray-400"> /month</span>
              </div>
              <ul className="space-y-3 mb-8 text-gray-300 flex-grow">
                <li className="flex items-center gap-2 text-xs sm:text-sm">
                  <span className="w-4 h-4 rounded-full border border-[#2A2629] flex items-center justify-center flex-shrink-0">
                    <span className="w-2 h-2 bg-[#2A2629] rounded-full"></span>
                  </span>
                  Multi-venue Management
                </li>
                <li className="flex items-center gap-2 text-xs sm:text-sm">
                  <span className="w-4 h-4 rounded-full border border-[#2A2629] flex items-center justify-center flex-shrink-0">
                    <span className="w-2 h-2 bg-[#2A2629] rounded-full"></span>
                  </span>
                  API Access & Integrations
                </li>
                <li className="flex items-center gap-2 text-xs sm:text-sm">
                  <span className="w-4 h-4 rounded-full border border-[#2A2629] flex items-center justify-center flex-shrink-0">
                    <span className="w-2 h-2 bg-[#2A2629] rounded-full"></span>
                  </span>
                  Dedicated Account Manager
                </li>
                <li className="flex items-center gap-2 text-xs sm:text-sm">
                  <span className="w-4 h-4 rounded-full border border-[#2A2629] flex items-center justify-center flex-shrink-0">
                    <span className="w-2 h-2 bg-[#2A2629] rounded-full"></span>
                  </span>
                  Custom Reporting
                </li>
              </ul>
              <Button variant="outline" className="w-full border-gray-700 text-white hover:bg-gray-900/50 text-sm font-medium rounded-full bg-transparent">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-16 sm:py-24 px-6 sm:px-8 lg:px-12 overflow-hidden bg-[#0F0E10]">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: 'linear-gradient(135deg, rgba(88, 28, 135, 0.3) 0%, rgba(15, 14, 16, 0.95) 50%, rgba(15, 14, 16, 1) 100%)',
            }}
          />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Start Filling Your Venue
            <br />
            Tonight
          </h2>
          <p className="text-sm sm:text-base text-gray-300 mb-8 sm:mb-10">
            Join thousands of venues filling bookings, tables, and venues with Portl
          </p>

          <Button className="bg-white text-black hover:bg-gray-100 px-6 sm:px-8 py-3 text-sm sm:text-base font-medium rounded-full">
            Get Started
          </Button>
        </div>
      </section>
    </div>
  );
}
