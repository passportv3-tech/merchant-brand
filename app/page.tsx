'use client'

import Image from 'next/image'

/** Keep every section aligned to hero/navbar gutters */
const contentRail = 'w-full px-4 sm:px-6'
const sectionShell = contentRail

export default function Home() {
  return (
    <main className="bg-[var(--page-bg)] text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <Image
          src="/0b260a7cd702e5a87a3f4ddbc4b18a09d6377197.png"
          alt="Crowd and stage lights"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/35" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />

        <header className="relative z-20 border-b border-white/10 bg-[#0a0a0c]/95 backdrop-blur-md">
          <div className="relative flex h-20 w-full items-center justify-between px-4 sm:px-6">
            <div className="relative z-10 shrink-0">
              <span className="text-2xl font-bold leading-none tracking-tight text-white">Portl</span>
            </div>

            <nav className="absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-8 text-sm font-medium md:flex">
              <a
                href="#"
                className="border-b-2 border-[var(--brand-lavender)] pb-1 text-[var(--brand-lavender)]"
              >
                Solutions
              </a>
              <a href="#" className="text-white/65 transition-colors hover:text-white">
                Features
              </a>
              <a href="#" className="text-white/65 transition-colors hover:text-white">
                Pricing
              </a>
              <a href="#" className="text-white/65 transition-colors hover:text-white">
                About
              </a>
            </nav>

            <div className="relative z-10 flex shrink-0 items-center gap-5">
              <button
                type="button"
                className="hidden text-sm font-medium text-white/65 transition-colors hover:text-white sm:block"
              >
                Login
              </button>
              <button
                type="button"
                className="rounded-full bg-[#E9DDFF] px-6 py-2.5 text-sm font-semibold text-[#1a1523]"
              >
                Get Started
              </button>
            </div>
          </div>
        </header>

        {/* Hero: full-bleed rail — copy flush left (viewport inset only); Figma pt/pb 192px, pr 344px on lg */}
        <div className="relative z-10 w-full px-4 pt-12 pb-16 text-left sm:px-6 sm:pb-20 lg:px-6 lg:pb-48 lg:pr-[22vw] lg:pt-48 xl:pr-[344px]">
          <div className="w-full">
            <div className="mb-8 inline-flex rounded-full border border-white/15 bg-[#363437] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#82E9FF]">
              MERCHANT PLATFORM V2.0
            </div>

            <h1 className="font-black tracking-tight text-white">
              <span className="block text-[clamp(2.25rem,8vw,5.5rem)] leading-[0.98] sm:leading-[0.98] lg:text-[96px] lg:leading-[0.95]">
                Fill Your Venue
              </span>
              <span className="mt-1 block text-[clamp(2.25rem,8vw,5.5rem)] leading-[0.98] sm:leading-[0.98] lg:mt-2 lg:text-[96px] lg:leading-[0.95]">
                Every Night
              </span>
              <span className="mt-2 block bg-gradient-to-r from-[#E9DDFF] to-[#82E9FF] bg-clip-text text-[clamp(1.75rem,5.5vw,4.25rem)] leading-[1] text-transparent sm:mt-3 lg:mt-4 lg:text-[72px] lg:leading-[1.02]">
                Predict, Target,
              </span>
              <span className="block bg-gradient-to-r from-[#E9DDFF] to-[#82E9FF] bg-clip-text text-[clamp(1.75rem,5.5vw,4.25rem)] leading-[1] text-transparent lg:text-[72px] lg:leading-[1.02]">
                and Convert High-
              </span>
              <span className="block bg-gradient-to-r from-[#E9DDFF] to-[#82E9FF] bg-clip-text text-[clamp(1.75rem,5.5vw,4.25rem)] leading-[1] text-transparent lg:text-[72px] lg:leading-[1.02]">
                Value Guests
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-relaxed text-white sm:text-lg lg:mt-10 lg:text-xl">
              Drive bookings, increase table spend, and turn one-time guests into regulars — all from one platform.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 lg:mt-10">
              <button
                type="button"
                className="rounded-full bg-[#E9DDFF] px-8 py-3 text-sm font-bold text-[#1a1523] shadow-[0_0_30px_rgba(233,221,255,0.25)] sm:px-10 sm:py-5 sm:text-base"
              >
                Start Filling Your Venue
              </button>
              <button
                type="button"
                className="rounded-full border border-white/25 bg-[rgba(43,41,44,0.4)] px-8 py-3 text-sm font-semibold text-white sm:px-10 sm:py-5 sm:text-base"
              >
                See How It Works
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Proof / results strip — Figma: #0F0E10, 64px vertical / 24px horizontal padding, 1px borders @ white 5% */}
      <section className="border-y border-white/[0.05] bg-[#0F0E10]">
        <div className={`${contentRail} py-16`}>
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 md:gap-x-6">
            {(
              [
                ['94,000+', 'BOOKINGS GENERATED', 'white'],
                ['Dubai', 'USED BY TOP VENUES', 'cyan'],
                ['+32%', 'TABLE BOOKING INCREASE', 'white'],
                ['+18%', 'SPEND PER GUEST', 'cyan'],
              ] as const
            ).map(([value, label, tone]) => (
              <div key={label} className="text-center md:text-center">
                <p
                  className={`text-xl font-bold leading-none sm:text-2xl lg:text-[34px] ${tone === 'cyan' ? 'text-[#82E9FF]' : 'text-white'}`}
                >
                  {value}
                </p>
                <p className="mt-2 text-[10px] font-medium uppercase leading-snug tracking-[0.12em] text-[#9CA3AF] sm:text-[11px]">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value prop — top row 60/40 (grid-cols-5 → span-3 + span-2), bottom 7+5; SVG icons */}
      <section className="bg-[#0B0B0B]">
        <div className={`flex flex-col gap-20 py-32 ${contentRail}`}>
          <header className="relative pr-0 text-left md:pr-24">
            <h2 className="max-w-[20ch] text-4xl font-bold leading-[1.05] tracking-[-0.02em] text-white sm:text-5xl lg:text-[56px] lg:leading-[1.08]">
              How Portl Makes You Money
            </h2>
            <p className="mt-4 max-w-[720px] text-base font-normal leading-relaxed text-[#9CA3AF] sm:text-lg">
              Turn every data point into a revenue stream with tools designed for the modern venue operator.
            </p>
            <div className="absolute right-0 top-2 hidden items-center gap-1.5 md:flex" aria-hidden>
              <span className="h-0.5 w-8 rounded-full bg-white" />
              <span className="h-0.5 w-3 rounded-full bg-white/25" />
              <span className="h-0.5 w-3 rounded-full bg-white/25" />
            </div>
          </header>

          <div className="flex flex-col gap-6 lg:gap-8">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-5 lg:gap-8 [&>*]:min-w-0">
              <article className="relative flex min-h-[320px] flex-col overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#1c1c1c] p-8 sm:min-h-[360px] sm:p-10 lg:col-span-3 lg:min-h-[380px]">
                <div
                  className="pointer-events-none absolute -bottom-24 -right-24 z-0 h-[320px] w-[320px] rounded-full bg-[#E9DDFF] opacity-[0.08]"
                  style={{ filter: 'blur(78px)' }}
                  aria-hidden
                />
                <div className="relative z-10 flex flex-col text-left">
                  <div className="mb-8 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#2A2A2A]">
                    <img
                      src="/fill_empty_nights_icon.svg"
                      alt=""
                      className="h-8 w-8 object-contain"
                      width={32}
                      height={32}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">Fill Empty Nights</h3>
                  <p className="mt-4 max-w-[480px] text-base leading-relaxed text-[#9CA3AF]">
                    Activate high-intent users looking for plans tonight. Turn slow nights into full houses.
                  </p>
                </div>
              </article>

              <article className="relative flex min-h-[320px] flex-col overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#1c1c1c] p-8 sm:min-h-[360px] sm:p-10 lg:col-span-2 lg:min-h-[380px]">
                <div className="relative z-10 flex flex-col text-left">
                  <div className="mb-8 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-[#82E9FF]/45 bg-[#1c1c1c]">
                    <img
                      src="/increas_table_spend_icon.svg"
                      alt=""
                      className="h-8 w-8 object-contain"
                      width={32}
                      height={32}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">Increase Table Spend</h3>
                  <p className="mt-4 max-w-[480px] text-base leading-relaxed text-[#9CA3AF]">
                    Target high-value guests likely to book tables and spend more per visit.
                  </p>
                </div>
                <Image
                  src="/75612b4adea832334b54b779bacf50b16d6875d9.png"
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="pointer-events-none scale-110 object-cover object-left-bottom opacity-50 [transform:translateY(42px)] lg:[transform:translateY(56px)]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1c1c1c] via-[#1c1c1c]/85 to-[#1c1c1c]/40" />
              </article>
            </div>

            <article className="grid gap-8 rounded-[28px] border border-white/[0.08] bg-[#1c1c1c] p-8 sm:gap-10 sm:p-10 lg:grid-cols-12">
              <div className="min-w-0 text-left lg:col-span-7">
                <div className="mb-8 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-rose-400/35 bg-[#2A2A2A]">
                  <img
                    src="/turn_guests_into_regulars_icon.svg"
                    alt=""
                    className="h-8 w-8 object-contain"
                    width={32}
                    height={32}
                  />
                </div>
                <h3 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">Turn Guests Into Regulars</h3>
                <p className="mt-4 max-w-[560px] text-base leading-relaxed text-[#9CA3AF]">
                  Re-engage VIPs and lapsed customers automatically with personalized offers and loyalty rewards.
                </p>
              </div>
              <div className="flex min-h-[220px] min-w-0 flex-col items-center justify-center rounded-[24px] bg-[#252525] px-6 py-10 text-center sm:min-h-[260px] lg:col-span-5">
                <p className="text-4xl font-black leading-none text-[#E9DDFF] sm:text-5xl">Automated</p>
                <p className="mt-3 text-base font-medium text-[#CAC4D0] sm:text-lg">Retention Campaigns</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#0B0B0B]">
        <div className={`${sectionShell} pb-16 pt-4 sm:pb-20`}>
        <div className="mx-auto w-full max-w-[1120px] rounded-[24px] border border-[rgba(233,221,255,0.2)] bg-[rgba(43,41,44,0.4)] p-8 sm:p-12">
          <div className="flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-10 xl:gap-x-12">
            <div className="order-2 min-w-0 lg:order-1 lg:max-w-[28rem] lg:self-center">
              <h3 className="text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[52px] lg:leading-[1.06]">
                Your Venue, Tonight
              </h3>
              <p className="mt-4 max-w-md text-base leading-relaxed text-[#CAC4D0] sm:text-lg">
                Fix this in minutes with Portl and turn potential losses into revenue.
              </p>
              <button
                type="button"
                className="mt-8 inline-flex h-[60px] min-w-[17rem] items-center justify-center rounded-full bg-[#E9DDFF] px-8 text-base font-bold text-[#1a1520] shadow-[0_4px_6px_-4px_rgba(233,221,255,0.2)] transition hover:bg-[#dfd2f5] sm:min-w-[272px] sm:text-lg"
              >
                Fill Remaining Tables
              </button>
            </div>

            <div className="order-1 flex min-w-0 flex-col lg:order-2">
              <div className="mb-4 flex justify-end lg:mb-3">
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--live-red)] sm:text-sm">
                  <span className="inline-block h-2 w-2 shrink-0 rounded-full bg-[var(--live-red)]" aria-hidden />
                  <span>Live dashboard</span>
                </p>
              </div>
              <div className="flex flex-col gap-4 rounded-2xl border border-white/[0.05] bg-black/40 p-6">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/50 sm:text-xs">
                    Inventory status
                  </p>
                  <p className="text-sm font-medium text-white sm:text-base">Today</p>
                </div>

                <div>
                  <div className="flex items-center justify-between gap-3 text-sm text-white/85 sm:text-base">
                    <span>Confirmed Bookings</span>
                    <span className="font-semibold tabular-nums text-white">182</span>
                  </div>
                  <div className="mt-2 h-2.5 rounded-full bg-white/10 sm:h-3">
                    <div
                      className="h-full rounded-full bg-[#E9DDFF]"
                      style={{ width: `${(182 / 300) * 100}%` }}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3 text-sm text-white/85 sm:text-base">
                  <span>Venue Capacity</span>
                  <span className="font-semibold tabular-nums text-white">300</span>
                </div>

                <div className="flex items-end justify-between gap-3 border-t border-white/[0.08] pt-4">
                  <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--live-red)] sm:text-xs">
                    At risk revenue
                  </span>
                  <span className="text-xl font-bold tabular-nums leading-none text-[var(--live-red)] sm:text-2xl">
                    AED 18,000
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>

        <div className={`${sectionShell} pb-16 pt-5 text-center sm:pb-20`}>
        <h2 className="text-[2.5rem] font-black leading-none tracking-tight text-white sm:text-[60px] sm:leading-[60px]">
          How It Works
        </h2>
        <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-3">
          {[
            {
              iconSrc: '/list_your_events_icon.svg',
              iconAlt: 'List events',
              title: '1. List your events & tables',
              description: 'Easily sync your venue schedule and table inventory with our intuitive interface.',
            },
            {
              iconSrc: '/target_high_intent_icon.svg',
              iconAlt: 'Target guests',
              title: '2. Target high-intent users',
              description: 'Our AI matches your venue with guests who are actively looking to spend tonight.',
            },
            {
              iconSrc: '/fill_your_venue.svg',
              iconAlt: 'Track revenue',
              title: '3. Fill your venue & track revenue',
              description: 'Watch bookings come in and monitor your real-time revenue growth from the dashboard.',
            },
          ].map((step) => (
            <article
              key={step.title}
              className="flex min-w-0 flex-col items-center text-center md:px-2"
            >
              <div className="mb-6 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#252525]">
                <img
                  src={step.iconSrc}
                  alt={step.iconAlt}
                  width={32}
                  height={32}
                  className="h-8 w-8 object-contain"
                />
              </div>
              <h3 className="text-lg font-bold leading-7 text-white sm:text-xl">{step.title}</h3>
              <p className="mt-3 max-w-[22rem] text-base font-normal leading-6 text-[#CAC4D0] md:max-w-none">
                {step.description}
              </p>
            </article>
          ))}
        </div>
        </div>
      </section>

      <section className="bg-[#0F0E10] py-16 sm:py-24 lg:py-32">
        <div className={contentRail}>
          <header className="mx-auto mb-12 max-w-3xl text-center sm:mb-16 lg:mb-20">
            <h2 className="text-[2.5rem] font-black leading-none tracking-tight text-white sm:text-[60px] sm:leading-[60px]">
              Invest in Excellence.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg font-bold leading-7 text-[#82E9FF] sm:text-[18px] sm:leading-7">
              Start free. Only pay more when you want{' '}
              <span className="text-[#82E9FF]">more</span> bookings.
            </p>
            <p className="mx-auto mt-3 max-w-md text-base font-normal leading-6 text-[#CAC4D0]">
              Flexible tiers tailored for single venues or global groups.
            </p>
          </header>

          <div className="grid gap-5 md:grid-cols-3 md:gap-6 lg:items-stretch">
            {/* Merchant Starter */}
            <article className="flex flex-col rounded-[32px] border border-white/[0.05] bg-[#141316] p-8 sm:p-10">
              <p className="text-left text-xs font-semibold uppercase tracking-[0.14em] text-[#E9DDFF]">
                Merchant Starter
              </p>
              <p className="mt-2 text-left text-sm leading-relaxed text-[#CAC4D0]">
                For small venues testing demand
              </p>
              <p className="mt-8 flex flex-wrap items-baseline gap-x-2 text-left font-bold text-white">
                <span className="text-lg font-semibold sm:text-xl">AED</span>
                <span className="text-4xl leading-none tracking-tight sm:text-5xl">1,500</span>
                <span className="ml-0.5 text-base font-medium text-[#CAC4D0] sm:text-lg">/month</span>
              </p>
              <ul className="mt-8 flex flex-1 flex-col gap-3.5 text-left">
                {[
                  'Basic CRM (up to 1k guests)',
                  'Core Analytics Dashboard',
                  'Email Support',
                ].map((line) => (
                  <li key={line} className="flex gap-3">
                    <img src="/tick.svg" alt="" width={17} height={17} className="mt-0.5 h-[17px] w-[17px] shrink-0" />
                    <span className="text-base leading-6 text-white">{line}</span>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className="mt-8 w-full rounded-full border border-white/25 bg-transparent py-3.5 text-base font-semibold text-white transition hover:bg-white/5 sm:py-4"
              >
                Select Plan
              </button>
            </article>

            {/* Merchant Growth — featured */}
            <article className="relative flex flex-col rounded-[32px] border-2 border-[#E9DDFF] bg-[#2B292C] p-8 shadow-[0_0_48px_-8px_rgba(233,221,255,0.35)] sm:p-10">
              <span className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#E9DDFF] px-5 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#1a1520] sm:text-[11px]">
                Best value
              </span>
              <p className="mt-2 text-left text-xs font-semibold uppercase tracking-[0.14em] text-[#E9DDFF] sm:mt-0">
                Merchant Growth
              </p>
              <p className="mt-2 text-left text-sm leading-relaxed text-[#CAC4D0]">
                For venues scaling bookings (Most Popular)
              </p>
              <p className="mt-8 flex flex-wrap items-baseline gap-x-2 text-left font-bold text-white">
                <span className="text-lg font-semibold sm:text-xl">AED</span>
                <span className="text-4xl leading-none tracking-tight sm:text-5xl">3,500</span>
                <span className="ml-0.5 text-base font-medium text-[#CAC4D0] sm:text-lg">/month</span>
              </p>
              <ul className="mt-8 flex flex-1 flex-col gap-3.5 text-left">
                <li className="flex gap-3">
                  <img src="/blue_tick.svg" alt="" width={18} height={18} className="mt-0.5 h-[18px] w-[18px] shrink-0" />
                  <span className="text-base leading-6 text-white">Advanced CRM (Unlimited)</span>
                </li>
                <li className="flex gap-3">
                  <img src="/blue_tick.svg" alt="" width={18} height={18} className="mt-0.5 h-[18px] w-[18px] shrink-0" />
                  <span className="text-base leading-6 text-white">
                    <span className="text-[#E9DDFF]">Automated</span> Campaigns
                  </span>
                </li>
                <li className="flex gap-3">
                  <img src="/blue_tick.svg" alt="" width={18} height={18} className="mt-0.5 h-[18px] w-[18px] shrink-0" />
                  <span className="text-base leading-6 text-white">Real-time Heatmaps</span>
                </li>
                <li className="flex gap-3">
                  <img src="/blue_tick.svg" alt="" width={18} height={18} className="mt-0.5 h-[18px] w-[18px] shrink-0" />
                  <span className="text-base leading-6 text-white">24/7 Priority Support</span>
                </li>
              </ul>
              <button
                type="button"
                className="mt-8 w-full rounded-full bg-[#E9DDFF] py-3.5 text-base font-bold text-[#1a1520] transition hover:bg-[#dfd2f5] sm:py-4"
              >
                Get Started
              </button>
            </article>

            {/* Merchant Pro */}
            <article className="flex flex-col rounded-[32px] border border-white/[0.05] bg-[#141316] p-8 sm:p-10">
              <p className="text-left text-xs font-semibold uppercase tracking-[0.14em] text-[#E9DDFF]">
                Merchant Pro
              </p>
              <p className="mt-2 text-left text-sm leading-relaxed text-[#CAC4D0]">
                For multi-venue operators maximizing revenue
              </p>
              <p className="mt-8 flex flex-wrap items-baseline gap-x-2 text-left font-bold text-white">
                <span className="text-lg font-semibold sm:text-xl">AED</span>
                <span className="text-4xl leading-none tracking-tight sm:text-5xl">7,500</span>
                <span className="ml-0.5 text-base font-medium text-[#CAC4D0] sm:text-lg">/month</span>
              </p>
              <ul className="mt-8 flex flex-1 flex-col gap-3.5 text-left">
                {[
                  'Multi-venue Management',
                  'API Access & Integrations',
                  'Dedicated Account Manager',
                  'Custom Reporting',
                ].map((line) => (
                  <li key={line} className="flex gap-3">
                    <img src="/tick.svg" alt="" width={17} height={17} className="mt-0.5 h-[17px] w-[17px] shrink-0" />
                    <span className="text-base leading-6 text-white">{line}</span>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className="mt-8 w-full rounded-full border border-white/25 bg-transparent py-3.5 text-base font-semibold text-white transition hover:bg-white/5 sm:py-4"
              >
                Contact Sales
              </button>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[var(--page-bg)] px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-14 md:pt-16">
        <div className="relative w-full min-h-[420px] overflow-hidden rounded-[24px] sm:min-h-[480px] md:min-h-[540px] md:rounded-[28px]">
          <Image
            src="/fd52fc8ae06096cde5dd8d8ce01a795e570efa2f.png"
            alt="Concert lasers"
            fill
            className="object-cover object-center blur-[2px]"
            sizes="(min-width: 1280px) min(1536px, 100vw), 100vw"
          />
          <div className="absolute inset-0 bg-black/45" />
          <div className="relative z-10 flex min-h-[420px] flex-col items-center justify-center px-5 py-14 text-center sm:min-h-[480px] sm:px-8 sm:py-16 md:min-h-[540px] md:py-20">
            <h2 className="max-w-[56rem] text-[2.5rem] font-black leading-[1.05] tracking-tight text-white sm:text-5xl sm:leading-[1.03] md:text-[72px] md:leading-[72px]">
              <span className="block">Start Filling Your Venue</span>
              <span className="block">Tonight</span>
            </h2>
            <p className="mx-auto mt-6 max-w-[624px] text-base leading-6 text-[#CAC4D0] sm:text-xl sm:leading-7">
              Join venues already driving bookings, tables, and revenue with Portl.
            </p>
            <button
              type="button"
              className="mt-8 rounded-full bg-white px-9 py-3.5 text-[18px] font-black leading-7 text-[#141316] shadow-sm transition hover:bg-white/95 sm:px-10 sm:text-[20px] sm:leading-7"
            >
              Get Started
            </button>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#27272A]/50 bg-[#09090B]">
        <div className={`${contentRail} py-12`}>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start lg:gap-8">
            <div className="flex max-w-[23rem] flex-col">
              <p className="text-2xl font-bold leading-none text-white sm:text-[28px]">Portl</p>
              <p className="mt-4 max-w-[370px] text-[10px] font-normal uppercase leading-[15px] tracking-[0.1em] text-[#71717A]">
                Empowering the nightlife industry through innovative data solutions and seamless guest experiences.
              </p>
              <div className="mt-5 flex items-center gap-4">
                <img src="/earth.svg" alt="" width={20} height={20} className="h-5 w-5 shrink-0" />
                <img src="/volume.svg" alt="" width={17} height={17} className="h-4 w-[17px] shrink-0" />
              </div>
            </div>

            <div className="flex flex-col gap-10 lg:items-stretch">
              <div className="flex flex-wrap gap-x-4 gap-y-2.5 text-[13px] font-normal leading-snug text-[#71717A] sm:gap-x-6 lg:ml-auto lg:w-fit lg:gap-x-8 xl:flex-nowrap">
                <a href="#" className="transition-colors hover:text-[#A1A1AA]">
                  Privacy Policy
                </a>
                <a href="#" className="transition-colors hover:text-[#A1A1AA]">
                  Terms Of Service
                </a>
                <a href="#" className="transition-colors hover:text-[#A1A1AA]">
                  Cookie Policy
                </a>
                <a href="#" className="transition-colors hover:text-[#A1A1AA]">
                  Contact Support
                </a>
              </div>
              <p className="text-[10px] font-normal uppercase leading-[15px] tracking-[0.08em] text-[#71717A] lg:ml-auto lg:text-right">
                © 2024 PORTL TECHNOLOGIES. ALL RIGHTS RESERVED.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
