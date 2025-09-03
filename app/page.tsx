const BRAND = {
  name: "TradePricer",
  app: "app.tradepricer.ai",
};

// A tiny helper component to keep sections centered and padded consistently.
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
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <Container className="py-3 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <img src="https://placehold.co/32x32/3b82f6/white?text=TP" alt="TradePricer logo" width={32} height={32} className="rounded-md" />
            <span className="font-semibold">{BRAND.name}</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#how-it-works" className="hover:text-blue-700 transition-colors">How it works</a>
            <a href="#features" className="hover:text-blue-700 transition-colors">Features</a>
            <a href="#pricing" className="hover:text-blue-700 transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-blue-700 transition-colors">FAQ</a>
            <a href="/contact" className="hover:text-blue-700 transition-colors">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a className="hidden sm:inline px-4 py-2 rounded-lg border text-sm font-medium hover:bg-gray-50 transition-colors" href={`https://${BRAND.app}`}>
              Sign in
            </a>
            <a className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors" href={`https://${BRAND.app}/Signup`}>
              Start free
            </a>
          </div>
        </Container>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50">
        <Container className="py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-blue-800 text-sm font-medium">
              New: AI quotes from drawings
            </div>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight">
              Quote jobs with AI, manage work, and get paid faster
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              Upload a PDF drawing or describe the scope. TradePricer builds a professional quote
              using your staff day rates and realistic materials. Send it, take a deposit, and schedule the job.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="px-5 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors" href={`https://${BRAND.app}/Signup`}>
                Start free
              </a>
              <a className="px-5 py-3 rounded-lg border bg-white hover:bg-gray-50 transition-colors" href="#how-it-works">
                Watch demo
              </a>
            </div>
            <p className="mt-2 text-sm text-gray-500">No card required. Cancel any time.</p>
          </div>
          <div className="relative">
            <div className="rounded-2xl border bg-white shadow-lg overflow-hidden">
              <img
                src="https://placehold.co/1200x800/e0e7ff/334155?text=App+Screenshot"
                alt="Quote and margin view"
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Social Proof Bar */}
      <section>
        <Container className="py-8">
          <div className="text-center">
            <p className="text-lg text-gray-700">
              Built for trades: <span className="font-semibold text-gray-900">plumbing, heating, electrical, plastering, roofing, landscaping</span> and more.
            </p>
          </div>
        </Container>
      </section>

      {/* How It Works / Video Section */}
      <section id="how-it-works" className="scroll-mt-24 py-12 md:py-24 bg-gray-50">
        <Container className="text-center">
          <h2 className="text-3xl font-bold">See {BRAND.name} in action</h2>
          <p className="mt-2 text-lg text-gray-700 max-w-2xl mx-auto">
            Watch this quick demo to see how you can quote jobs, manage your team, and get paid faster.
          </p>
          <div className="mt-8 relative max-w-4xl mx-auto rounded-2xl border shadow-xl overflow-hidden group">
            <div className="aspect-video bg-gray-900 relative">
              <img
                src="https://placehold.co/1280x720/111827/e0e7ff?text=Demo+Video"
                alt="TradePricer demo video thumbnail"
                className="absolute top-0 left-0 w-full h-full object-cover"
            	/>
              <button className="absolute inset-0 flex items-center justify-center w-full h-full">
                <div className="bg-white/20 p-5 rounded-full backdrop-blur-sm transition-transform group-hover:scale-110">
                  <svg className="h-12 w-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* Detailed Features Section */}
      <section id="features" className="scroll-mt-24 py-12 md:py-16">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold">Everything you need to run your business</h2>
            <p className="text-gray-700 mt-2 max-w-3xl mx-auto">
              Stop juggling multiple apps and endless paperwork. TradePricer gives you all the tools to streamline your workflow.
            </p>
          </div>
          <div className="mt-16 space-y-24">
            <DetailedFeature
              title="Instant, accurate quotes"
              text="Our AI Job Pricer uses your staff day rates and realistic material costs to generate a professional, line-item quote in seconds. Upload a PDF or just describe the job."
              img="https://placehold.co/1200x900/e0e7ff/334155?text=AI+Quoting"
              benefits={["Save hours on every quote", "Live margin and profit tracking", "Win more jobs with professional PDFs"]}
              align="right"
            />
            <DetailedFeature
              title="Effortless job management"
              text="From scheduling your team to logging site progress, TradePricer keeps you organised. The Smart Site Diary and customer portal keep everyone in the loop."
              img="https://placehold.co/1200x900/dbeafe/334155?text=Scheduling"
              benefits={["Drag-and-drop scheduling", "Automated reminders via SMS/email", "Dispute-ready records with photos & weather"]}
              align="left"
            />
            <DetailedFeature
              title="Streamlined finances"
              text="No more chasing payments. Send professional invoices with online payment links and take deposits instantly. Track profitability and export data to your accounting software."
              img="https://placehold.co/1200x900/bfdbfe/334155?text=Invoicing"
              benefits={["Accept online deposits and payments", "Integrates with Stripe & Open Banking", "Export to Xero or QuickBooks"]}
              align="right"
            />
          </div>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="scroll-mt-24 py-12 md:py-16 bg-blue-50">
        <Container className="text-center">
          <h2 className="text-3xl font-bold">Don't just take our word for it</h2>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Testimonial
              quote="The AI quoting is a game-changer. I used to spend entire evenings on quotes. Now I get them done in minutes."
              name="John D."
              title="Electrical Contractor"
            />
            <Testimonial
              quote="Our team is so much more organised. We've gone from messy WhatsApp groups to a single, clear schedule."
              name="Sarah P."
              title="Plumber & Heating Engineer"
            />
            <Testimonial
              quote="Getting deposits online has completely changed our cash flow. Plus, the customer portal makes us look so professional."
              name="Mark T."
              title="General Builder"
            />
          </div>
        </Container>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="scroll-mt-24">
        <Container className="py-12 md:py-16">
          <h2 className="text-3xl font-bold text-center">Simple monthly pricing</h2>
          <p className="text-gray-700 text-center mt-2">Prices are per company per month. VAT not included.</p>
          <div className="mt-8 grid lg:grid-cols-3 gap-6 items-start">
            <Plan
              name="Free"
              price="£0"
              badge="For sole traders"
              cta={{ label: "Start free", href: `https://${BRAND.app}/Signup` }}
              features={["1 user", "3 active jobs", "10 quotes & 10 invoices/mo", "3 certificates/mo", "AI Job Pricer (3 runs/mo)", "1 GB storage", "Basic customer portal"]}
            />
            <Plan
              name="Pro"
              price="£19"
              badge="For small teams"
              highlight
              cta={{ label: "Upgrade now", href: `https://${BRAND.app}/Billing` }}
              features={["3 users included", "Unlimited jobs & quotes", "30 certificates/mo", "AI Job Pricer (100 runs/mo)", "50 GB storage", "Branded portal & deposits", "Stripe & Open Banking", "Xero/QuickBooks export", "Scheduling & checklists"]}
            />
            <Plan
              name="Premium"
              price="£39"
              badge="For growing firms"
              cta={{ label: "Book demo", href: `/contact` }}
              features={["10 users included", "Everything in Pro", "Unlimited certificates", "AI Job Pricer (500 runs/mo)", "200 GB storage", "Live Xero/QuickBooks sync", "Asset register & reminders", "Advanced RAMS library", "Priority support"]}
              footnote="Annual billing gives 2 months free"
            />
          </div>
        </Container>
      </section>
      
      {/* FAQ Section */}
      <section id="faq" className="scroll-mt-24 bg-gray-50">
        <Container className="py-12 md:py-16 max-w-4xl">
          <h2 className="text-3xl font-bold text-center">Frequently asked questions</h2>
          <div className="mt-8 space-y-4">
            <Faq q="Is there a free plan?" a="Yes. The Free plan is perfect for getting started. You can use it with some limits and upgrade any time." />
            <Faq q="Does the AI use my own staff wages?" a="Yes. You can add your staff in Settings with their day rates, and the AI will use your rates to calculate labour costs." />
            <Faq q="Can I take deposits online?" a="Yes. The Pro and Premium plans include Stripe and Open Banking links on quotes and invoices so you can get paid faster." />
            <Faq q="Do you integrate with accounting software?" a="The Pro plan can export data to Xero or QuickBooks. The Premium plan offers a live, two-way sync." />
          </div>
        </Container>
      </section>

      {/* Pre-footer CTA */}
      <section className="py-12 md:py-16 bg-blue-600 text-white">
        <Container className="text-center">
          <h2 className="text-3xl font-bold">Ready to take control of your business?</h2>
          <p className="mt-2 text-lg text-blue-100 max-w-2xl mx-auto">
            Stop wasting time on paperwork and start winning more jobs. Join hundreds of tradespeople streamlining their workflow.
          </p>
          <a className="mt-6 inline-block px-8 py-3 rounded-lg bg-white text-blue-600 font-semibold hover:bg-gray-100 transition-colors" href={`https://${BRAND.app}/Signup`}>
            Start your free trial
          </a>
        </Container>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white">
        <Container className="py-8 text-sm text-gray-600 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-start gap-2">
            <img src="https://placehold.co/20x20/3b82f6/white?text=TP" alt="TradePricer logo" width={20} height={20} className="rounded-sm" />
            <div>
              <p className="font-semibold text-gray-800">© {new Date().getFullYear()} {BRAND.name}</p>
              <p className="mt-1 text-gray-500">Smart quoting and job management for trades.</p>
            </div>
          </div>
          <div>
            <h3 className="text-gray-800 font-semibold mb-3">Quick links</h3>
            <ul className="space-y-2">
              <li><a href="/privacy" className="hover:text-gray-900">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-gray-900">Terms of Service</a></li>
              <li><a href="/contact" className="hover:text-gray-900">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-800 font-semibold mb-3">Contact</h3>
            <p>Email: <a className="text-blue-600 hover:text-blue-700" href="mailto:email@tradepricer.ai">email@tradepricer.ai</a></p>
            <p className="mt-1">Phone: Coming soon</p>
          </div>
        </Container>
      </footer>
    </main>
  );
}

/* Helper Components */

function Check() {
  return (
    <svg className="mt-1 h-5 w-5 text-blue-600 shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  );
}

function DetailedFeature({ title, text, img, benefits, align }: { title: string; text: string; img: string; benefits: string[]; align: "left" | "right" }) {
  const content = (
    <div>
      <h3 className="text-3xl font-bold">{title}</h3>
      <p className="mt-4 text-lg text-gray-700">{text}</p>
      <ul className="mt-6 space-y-3 text-gray-700">
        {benefits.map((b, i) => (
          <li key={i} className="flex gap-3 items-start">
            <Check />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  const image = (
    <div className="relative rounded-2xl border bg-white shadow-lg overflow-hidden">
      <img src={img} alt={title} width={1200} height={900} className="w-full h-auto" />
    </div>
  );
  
  const orderClass = align === 'left' ? 'md:col-start-2' : '';
  const imageOrderClass = align === 'left' ? 'md:col-start-1 md:row-start-1' : '';

  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className={orderClass}>{content}</div>
      <div className={imageOrderClass}>{image}</div>
    </div>
  );
}

function Testimonial({ quote, name, title }: { quote: string; name: string; title: string }) {
  return (
    <div className="bg-white p-6 rounded-2xl border shadow-sm flex flex-col items-center text-center">
      <StarRating />
      <blockquote className="mt-4 text-gray-700 italic">"{quote}"</blockquote>
      <p className="mt-4 font-semibold text-gray-900">{name}</p>
      <p className="text-sm text-gray-500">{title}</p>
    </div>
  );
}

function StarRating() {
  return (
    <div className="flex items-center gap-0.5 text-yellow-400">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
}

function Plan(props: { name: string; price: string; badge?: string; footnote?: string; features: string[]; cta: { label: string; href: string }; highlight?: boolean; }) {
  const { name, price, badge, features, cta, highlight, footnote } = props;
  return (
    <div className={`rounded-2xl border bg-white p-6 shadow-sm flex flex-col ${highlight ? "ring-2 ring-blue-600" : ""}`}>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{name}</h3>
        {badge && <span className="text-xs px-2 py-1 rounded-full bg-blue-50 text-blue-700 font-medium">{badge}</span>}
      </div>
      <div className="mt-2">
        <span className="text-3xl font-bold">{price}</span>
        <span className="text-base font-normal text-gray-500">/mo</span>
      </div>
      <a className={`mt-5 w-full text-center rounded-lg px-4 py-2 ${highlight ? "bg-blue-600 text-white hover:bg-blue-700" : "border hover:bg-gray-50"} transition-colors`} href={cta.href}>
        {cta.label}
      </a>
      <ul className="mt-5 space-y-3 text-sm text-gray-700 flex-grow">
        {features.map((f, i) => (
          <li key={i} className="flex gap-2">
            <span className="text-blue-600">•</span><span>{f}</span>
          </li>
        ))}
      </ul>
      {footnote && <p className="mt-4 text-xs text-gray-500 text-center">{footnote}</p>}
    </div>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <details className="rounded-xl border bg-white p-4 shadow-sm group">
      <summary className="cursor-pointer font-medium flex justify-between items-center">
        {q}
        <svg className="h-5 w-5 text-gray-500 transition-transform duration-200 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </summary>
      <p className="mt-2 text-sm text-gray-700">{a}</p>
    </details>
  );
}
