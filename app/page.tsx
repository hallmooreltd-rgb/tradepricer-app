// app/page.tsx
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

const BRAND = {
  name: "TradePricer",
  app: "app.tradepricer.ai",
};

// tiny helper to avoid repeating max width and padding
function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`max-w-7xl mx-auto px-6 ${className}`}>{children}</div>;
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-sm border-b">
        <Container className="py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/logo-32.png" alt="TradePricer logo" width={32} height={32} priority />
            <span className="font-semibold">{BRAND.name}</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="hover:text-blue-700">Features</a>
            <a href="#how-it-works" className="hover:text-blue-700">How It Works</a>
            <a href="#pricing" className="hover:text-blue-700">Pricing</a>
            <a href="#faq" className="hover:text-blue-700">FAQ</a>
            <Link href="/contact" className="hover:text-blue-700">Contact</Link>
          </nav>
          <div className="flex items-center gap-3">
            <a className="hidden sm:inline px-4 py-2 rounded-lg border text-sm hover:bg-gray-50" href={`https://${BRAND.app}`}>
              Sign in
            </a>
            <a className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700" href={`https://${BRAND.app}/Signup`}>
              Start for free
            </a>
          </div>
        </Container>
      </header>

      {/* REVISED: Hero section with punchier, benefit-focused copy */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50">
        <Container className="py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-blue-800 text-sm font-semibold">
              <SparkleIcon /> New: AI quotes from drawings
            </div>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight">
              AI Quoting & Job Management for Trades
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              Win more work, manage jobs effortlessly, and get paid faster. Go from a PDF drawing or a simple brief to a professional, profitable quote in minutes.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="px-5 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700" href={`https://${BRAND.app}/Signup`}>
                Start Your Free Trial
              </a>
              <a className="px-5 py-3 rounded-lg border bg-white/50 hover:bg-white" href="#how-it-works">
                See How It Works
              </a>
            </div>
            <p className="mt-3 text-sm text-gray-500">No credit card required. Cancel any time.</p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-3 text-sm text-gray-700">
              <li className="flex gap-2"><Check /> Instantly price jobs from drawings</li>
              <li className="flex gap-2"><Check /> Manage profit margin in real-time</li>
              <li className="flex gap-2"><Check /> Professional certificates & e-signatures</li>
              <li className="flex gap-2"><Check /> Customer portal for payments & updates</li>
            </ul>
          </div>

          <div className="relative">
            <div className="rounded-2xl border bg-white shadow-lg overflow-hidden">
              <Image
                src="/landing-hero-mock.png"
                alt="Quote and margin view"
                width={1200}
                height={800}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </Container>
      </section>

      {/* NEW: Testimonials section for social proof */}
      <section>
        <Container className="py-12 md:py-16">
          <h2 className="text-3xl font-bold text-center">Trusted by hundreds of trade professionals</h2>
          <p className="text-gray-700 text-center mt-2">From sole traders to growing firms, TradePricer is the secret weapon.</p>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Testimonial
              quote="The AI quoting is a game-changer. I priced up a full rewire from architect's drawings in 20 minutes instead of 3 hours. Won the job the same day."
              name="John P."
              title="Director, SparkRight Electrics"
            />
            <Testimonial
              quote="Clients love the portal. They accept the quote, pay the deposit, and see photos all in one place. Makes us look so much more professional."
              name="Sarah K."
              title="Owner, SK Plumbing & Heating"
            />
            <Testimonial
              quote="Finally, all our job info isn't scattered across WhatsApp and notebooks. The site diary has already saved us from a dispute with a tricky customer."
              name="Mike D."
              title="Foreman, BuildWell Construction"
            />
          </div>
        </Container>
      </section>
      
      {/* NEW: How it Works section to explain the AI process */}
      <section id="how-it-works" className="scroll-mt-24 bg-gray-50 border-y">
        <Container className="py-12 md:py-16">
            <h2 className="text-3xl font-bold text-center">From Plan to Paid in 3 Simple Steps</h2>
            <p className="text-gray-700 text-center mt-2">Spend less time on paperwork and more time on the tools.</p>
            <div className="mt-10 grid md:grid-cols-3 gap-8 text-center">
              <HowItWorksStep
                step="1"
                title="Upload & Describe"
                description="Upload PDF drawings, plans, or just type out the job scope. Our AI gets to work instantly."
                Icon={UploadIcon}
              />
              <HowItWorksStep
                step="2"
                title="Review & Send"
                description="The AI generates a detailed line-item quote using your rates and live material costs. Adjust anything you need, then send it."
                Icon={WandIcon}
              />
              <HowItWorksStep
                step="3"
                title="Manage & Get Paid"
                description="Once approved, schedule the job, track progress with the site diary, and get paid faster with online payment links."
                Icon={CalendarIcon}
              />
            </div>
        </Container>
      </section>


      {/* REVISED: Features section with more benefit-driven text */}
      <section id="features" className="scroll-mt-24">
        <Container className="py-12 md:py-16">
          <h2 className="text-3xl font-bold text-center">A Smarter Way to Run Your Business</h2>
          <p className="text-gray-700 text-center mt-2">One platform to quote, schedule, communicate, and get paid.</p>

          <div className="mt-10 grid lg:grid-cols-3 gap-6">
            <Feature
              title="Stop Under-Quoting"
              text="Our AI Job Pricer turns drawings and briefs into profitable, line-item quotes. It uses your staff wages and live material prices so you're always protected."
              img="/screen-quote.png"
            />
            <Feature
              title="End Disputes Before They Start"
              text="The Smart Site Diary creates an indisputable record of your work. Log labour, notes, and photos with automatic local weather data. Export a dispute-ready PDF in seconds."
              img="/screen-diary.png"
            />
            <Feature
              title="Look Professional & Stay Compliant"
              text="Issue digital Gas Safe, Electrical, and custom certificates. Capture client e-signatures on-site and send branded PDFs instantly."
              img="/screen-cert.png"
            />
          </div>

          <div className="mt-6 grid lg:grid-cols-3 gap-6">
            <Feature
              title="Give Clients a Premium Experience"
              text="Let customers view and accept quotes, pay deposits, and see progress photos in their own private portal. Automatically request Google or Trustpilot reviews on completion."
              img="/screen-portal.png"
            />
            <Feature
              title="End the Scheduling Chaos"
              text="Our drag-and-drop calendar makes scheduling jobs and assigning staff simple. Send automatic SMS or email reminders to clients and keep the whole team in sync."
              img="/screen-schedule.png"
            />
            <Feature
              title="Know Your Numbers, Instantly"
              text="Track your projected vs. actual profit on every job. See your company's financial health at a glance and export everything to Xero or QuickBooks."
              img="/screen-report.png"
            />
          </div>
        </Container>
      </section>

      {/* Screens grid (largely unchanged, it's a good section) */}
      <section id="screens" className="scroll-mt-24 bg-gray-50 border-y">
        <Container className="py-12 md:py-16">
          <h3 className="text-2xl font-bold">A Look Inside</h3>
          <p className="text-gray-700 mt-1">Clean, simple, and powerful workflows designed for the trades.</p>
          <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Shot title="Quote builder with margin" src="/screen-quote.png" />
            <Shot title="Site diary with weather" src="/screen-diary.png" />
            <Shot title="Certificates and signatures" src="/screen-cert.png" />
            <Shot title="Customer portal" src="/screen-portal.png" />
            <Shot title="Schedule jobs and staff" src="/screen-schedule.png" />
            <Shot title="Reports and exports" src="/screen-report.png" />
          </div>
        </Container>
      </section>

      {/* REVISED: Pricing section with checkmark icons for better readability */}
      <section id="pricing" className="scroll-mt-24">
        <Container className="py-12 md:py-16">
          <h2 className="text-3xl font-bold text-center">Simple, transparent pricing</h2>
          <p className="text-gray-700 text-center mt-2">Start for free, upgrade when you're ready. All plans are per company, per month (ex. VAT).</p>
          <div className="mt-8 grid lg:grid-cols-3 gap-6 items-start">
            <Plan
              name="Free"
              price="£0"
              badge="For getting started"
              cta={{ label: "Start free", href: `https://${BRAND.app}/Signup` }}
              features={[
                "1 user",
                "3 active jobs",
                "10 quotes / 10 invoices per month",
                "3 certificates per month",
                "AI Job Pricer (3 runs per month)",
                "Basic customer portal",
                "1 GB storage",
                "Watermark on PDFs"
              ]}
            />
            <Plan
              name="Pro"
              price="£19"
              badge="Most popular"
              highlight
              cta={{ label: "Start Pro Trial", href: `https://${BRAND.app}/Billing` }}
              features={[
                "3 users included (£4/extra)",
                "Unlimited jobs, quotes & invoices",
                "30 certificates per month",
                "AI Job Pricer (100 runs per month)",
                "Branded portal with online payments",
                "Google & Trustpilot review booster",
                "Xero or QuickBooks export",
                "Scheduling & reminders",
                "50 GB storage, no watermarks",
              ]}
            />
            <Plan
              name="Premium"
              price="£39"
              badge="For growing firms"
              cta={{ label: "Book a Demo", href: `/contact` }}
              features={[
                "10 users included (£4/extra)",
                "Everything in Pro, plus:",
                "Unlimited certificates",
                "AI Job Pricer (500 runs per month)",
                "Live sync with Xero or QuickBooks",
                "Custom domain for customer portal",
                "Asset register with service reminders",
                "Advanced RAMS/COSHH library",
                "Priority support",
              ]}
              footnote="Save with annual billing (2 months free)"
            />
          </div>
        </Container>
      </section>

      {/* REVISED: FAQ section with more questions */}
      <section id="faq" className="scroll-mt-24">
        <Container className="py-12 md:py-16 max-w-4xl">
          <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>
          <div className="mt-6 space-y-4">
            <Faq q="Is there a free plan?" a="Yes! The Free plan is perfect for sole traders or anyone wanting to try out the core features. You can upgrade any time without losing your data." />
            <Faq q="How does the AI Job Pricer actually work?" a="You upload a PDF or describe the job. Our AI reads the document, identifies the scope (e.g., 'install 5 double sockets'), and breaks it down into labour and materials. It uses your preset staff wages and live material prices from major UK suppliers to build an accurate quote." />
            <Faq q="Can I take deposits online?" a="Yes. The Pro and Premium plans integrate with Stripe and Open Banking. You can add a payment link directly to your quotes and invoices to take deposits or full payments online." />
            <Faq q="What trades is this designed for?" a="TradePricer is built for a wide range of trades, including electrical, plumbing, heating, plastering, roofing, landscaping, construction, and more. The certificate and materials libraries are customizable for your specific trade." />
            <Faq q="Do you integrate with accounting software?" a="Yes. The Pro plan allows you to export data in a format compatible with Xero and QuickBooks. The Premium plan offers a live, two-way sync to keep your books updated automatically." />
            <Faq q="Is my and my customer's data secure?" a="Absolutely. We use industry-standard security practices, including encryption for data at rest and in transit. Your data is stored securely on servers within the UK." />
          </div>
        </Container>
      </section>

      {/* Footer (largely unchanged, it's good) */}
      <footer className="border-t bg-white">
        <Container className="py-8 text-sm text-gray-600 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Branding */}
          <div className="flex items-start gap-2">
            <Image src="/logo-32.png" alt="TradePricer logo" width={20} height={20} className="mt-0.5" />
            <div>
              <p className="font-semibold text-gray-800">{BRAND.name}</p>
              <p className="mt-1">© {new Date().getFullYear()}. All rights reserved.</p>
              <p className="mt-1 text-gray-500">Smart quoting and job management for trades.</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-800 font-semibold mb-3">Quick links</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="hover:text-gray-900">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-gray-900">Terms of Service</Link></li>
              <li><Link href="/contact" className="hover:text-gray-900">Contact</Link></li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-gray-800 font-semibold mb-3">Contact</h3>
            <p>Email: <a className="text-blue-600 hover:text-blue-700" href="mailto:hello@tradepricer.ai">hello@tradepricer.ai</a></p>
            <p className="mt-1">Phone: Coming soon</p>
          </div>
        </Container>
      </footer>
    </main>
  );
}


/* --- NEW & UPDATED COMPONENTS --- */

// A simple sparkle icon for the "New Feature" badge
function SparkleIcon() {
    return <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.622L16.125 21.75l-.773-1.128a2.25 2.25 0 00-1.465-1.465L12.75 18.75l1.128-.773a2.25 2.25 0 001.465-1.465L16.125 15l.773 1.128a2.25 2.25 0 001.466 1.465l1.127.773-1.127.773a2.25 2.25 0 00-1.466 1.465z" /></svg>
}

// Check icon (updated to be more reusable)
function Check({ className = "h-5 w-5 text-green-600" }: { className?: string }) {
  return (
    <svg className={`shrink-0 ${className}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden>
      <path fillRule="evenodd" d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.25 7.333a1 1 0 0 1-1.44.01L3.29 9.6a1 1 0 1 1 1.42-1.408l3.044 3.072 6.53-6.6a1 1 0 0 1 1.42.026z" clipRule="evenodd"/>
    </svg>
  );
}

// How it works step icons
function UploadIcon() { return <svg className="w-8 h-8 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l-3.75 3.75M12 9.75l3.75 3.75M3 17.25V6.75A2.25 2.25 0 015.25 4.5h13.5A2.25 2.25 0 0121 6.75v10.5A2.25 2.25 0 0118.75 19.5H5.25A2.25 2.25 0 013 17.25z" /></svg>; }
function WandIcon() { return <svg className="w-8 h-8 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c.251.023.501.05.75.082a.75.75 0 01.75.75v5.714a2.25 2.25 0 00.659 1.591L14.25 14.5M14.25 14.5h5.25m-5.25 0l-1.06-1.06a2.25 2.25 0 010-3.182l5.25-5.25a2.25 2.25 0 013.182 0l1.06 1.06a2.25 2.25 0 010 3.182l-5.25 5.25a2.25 2.25 0 01-3.182 0z" /></svg>; }
function CalendarIcon() { return <svg className="w-8 h-8 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18M-4.5 12h22.5" /></svg>; }

// NEW: HowItWorksStep component
function HowItWorksStep({ step, title, description, Icon }: { step: string, title: string, description: string, Icon: () => JSX.Element }) {
  return (
    <div>
        <div className="flex items-center justify-center w-16 h-16 mx-auto bg-blue-100 text-blue-600 rounded-full font-bold text-2xl">
          {step}
        </div>
        <h3 className="font-bold text-lg mt-4">{title}</h3>
        <p className="mt-1 text-gray-700 text-sm">{description}</p>
    </div>
  )
}

// NEW: Testimonial component
function Testimonial({ quote, name, title }: { quote: string; name: string; title: string; }) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <p className="text-gray-800">"{quote}"</p>
      <div className="mt-4 pt-4 border-t">
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-gray-500">{title}</p>
      </div>
    </div>
  );
}

function Feature({ title, text, img }: { title: string; text: string; img: string }) {
  return (
    <div className="rounded-2xl border bg-white shadow-sm overflow-hidden flex flex-col">
      <div className="aspect-[16/10] bg-gray-100">
        <Image src={img} alt={title} width={1200} height={750} className="w-full h-full object-cover" />
      </div>
      <div className="p-5 flex-grow">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="mt-1 text-gray-700 text-sm">{text}</p>
      </div>
    </div>
  );
}

function Shot({ title, src }: { title: string; src: string }) {
  return (
    <figure className="rounded-2xl border bg-white shadow-sm overflow-hidden">
      <Image src={src} alt={title} width={1200} height={750} className="w-full h-auto" />
      <figcaption className="px-4 py-2 text-sm text-gray-700 border-t">{title}</figcaption>
    </figure>
  );
}

// UPDATED: Plan component using Check icons
function Plan(props: {
  name: string; price: string; badge?: string; footnote?: string;
  features: string[]; cta: { label: string; href: string }; highlight?: boolean;
}) {
  const { name, price, badge, features, cta, highlight, footnote } = props;
  return (
    <div className={`rounded-2xl border bg-white p-6 shadow-sm flex flex-col ${highlight ? "ring-2 ring-blue-600" : ""}`}>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{name}</h3>
        {badge ? <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${highlight ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-700'}`}>{badge}</span> : null}
      </div>
      <div className="mt-2 text-3xl font-bold">
        {price}<span className="text-base font-normal text-gray-500">/mo</span>
      </div>
      <ul className="mt-4 space-y-3 text-sm text-gray-700 flex-grow">
        {features.map((f, i) => (
          <li key={i} className="flex gap-2.5">
            <Check className="mt-0.5 h-5 w-5 text-blue-600" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <a className={`mt-6 inline-flex w-full items-center justify-center rounded-lg px-4 py-2 font-semibold ${highlight ? "bg-blue-600 text-white hover:bg-blue-700" : "border hover:bg-gray-50"}`} href={cta.href}>
        {cta.label}
      </a>
      {footnote ? <p className="mt-3 text-xs text-gray-500 text-center">{footnote}</p> : null}
    </div>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <details className="rounded-2xl border bg-white p-4 shadow-sm group">
      <summary className="cursor-pointer font-medium list-none flex items-center justify-between">
        {q}
        <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
      </summary>
      <p className="mt-3 text-sm text-gray-700 leading-relaxed">{a}</p>
    </details>
  );
}
