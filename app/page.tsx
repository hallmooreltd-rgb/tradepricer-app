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
      <header className="sticky top-0 z-40 bg-white border-b">
        <Container className="py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/logo-32.png" alt="TradePricer logo" width={32} height={32} priority />
            <span className="font-semibold">{BRAND.name}</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="hover:text-blue-700">Features</a>
            <a href="#screens" className="hover:text-blue-700">Screens</a>
            <a href="#pricing" className="hover:text-blue-700">Pricing</a>
            <a href="#faq" className="hover:text-blue-700">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <a className="hidden sm:inline px-4 py-2 rounded-lg border hover:bg-gray-50" href={`https://${BRAND.app}`}>
              Sign in
            </a>
            <a className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700" href={`https://${BRAND.app}/Signup`}>
              Start free
            </a>
          </div>
        </Container>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50">
        <Container className="py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-blue-800 text-sm">
              New: AI quotes from drawings
            </div>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight">
              Quote jobs with AI, manage work, send certificates and get paid faster
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              Upload a PDF drawing or describe the scope. TradePricer builds a professional quote
              using your staff day rates and realistic materials. Send it, take a deposit and schedule the job.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="px-5 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700" href={`https://${BRAND.app}/Signup`}>
                Start free
              </a>
              <a className="px-5 py-3 rounded-lg border hover:bg-white" href="#screens">
                See how it looks
              </a>
            </div>
            <p className="mt-2 text-sm text-gray-500">No card required. Cancel any time.</p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm text-gray-700">
              <li className="flex gap-2"><Check /> Instant quotes from drawings or text</li>
              <li className="flex gap-2"><Check /> Live margin and profit</li>
              <li className="flex gap-2"><Check /> Certificates with e signatures</li>
              <li className="flex gap-2"><Check /> Customer portal and deposits</li>
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

      {/* Social proof bar */}
      <section>
        <Container className="py-8">
          <div className="rounded-2xl border bg-white p-6 md:p-8">
            <p className="text-lg md:text-xl text-gray-800">
              Built for trades: plumbing, heating, electrical, plastering, damp proofing, roofing, landscaping and more.
            </p>
          </div>
        </Container>
      </section>

      {/* Features */}
      <section id="features" className="scroll-mt-24">
        <Container className="py-12 md:py-16">
          <h2 className="text-3xl font-bold text-center">Everything in one place</h2>
          <p className="text-gray-700 text-center mt-2">Quote, schedule, certify and communicate in minutes</p>

          <div className="mt-10 grid lg:grid-cols-3 gap-6">
            <Feature
              title="AI Job Pricer"
              text="Turn drawings and briefs into a line item quote. Uses your staff wages and realistic material prices."
              img="/screen-quote.png"
            />
            <Feature
              title="Smart Site Diary"
              text="Daily log of labour, notes and photos with automatic local weather. Export a dispute ready PDF."
              img="/screen-diary.png"
            />
            <Feature
              title="Certificates with e sign"
              text="Gas, Electrical and custom templates. Capture signatures on the phone and issue branded PDFs."
              img="/screen-cert.png"
            />
          </div>

          <div className="mt-6 grid lg:grid-cols-3 gap-6">
            <Feature
              title="Customer portal"
              text="Customers accept quotes, pay deposits and see progress photos. Ask for Google or Trustpilot reviews."
              img="/screen-portal.png"
            />
            <Feature
              title="Scheduling and reminders"
              text="Drag and drop jobs, assign staff and send SMS or email reminders. Keep the day tidy."
              img="/screen-schedule.png"
            />
            <Feature
              title="Profit and reporting"
              text="See projected versus actual. Track margin per job and across the month. Export to Xero or QuickBooks."
              img="/screen-report.png"
            />
          </div>
        </Container>
      </section>

      {/* Screens grid */}
      <section id="screens" className="scroll-mt-24 bg-gray-50 border-y">
        <Container className="py-12 md:py-16">
          <h3 className="text-2xl font-bold">Screens</h3>
          <p className="text-gray-700 mt-1">A quick look at the core workflows</p>
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

      {/* Pricing */}
      <section id="pricing" className="scroll-mt-24">
        <Container className="py-12 md:py-16">
          <h2 className="text-3xl font-bold text-center">Simple monthly pricing</h2>
          <p className="text-gray-700 text-center mt-2">Prices are per company per month. VAT not included.</p>
          <div className="mt-8 grid lg:grid-cols-3 gap-6">
            <Plan
              name="Free"
              price="£0"
              badge="For sole traders"
              cta={{ label: "Start free", href: `https://${BRAND.app}/Signup` }}
              features={[
                "1 user",
                "3 active jobs",
                "10 quotes and 10 invoices per month",
                "3 certificates per month",
                "3 variations per month",
                "30 reminders per month",
                "AI Job Pricer 3 runs per month",
                "1 GB storage, watermark on PDFs",
                "Basic customer portal",
              ]}
            />
            <Plan
              name="Pro"
              price="£19"
              badge="For small teams"
              highlight
              cta={{ label: "Upgrade now", href: `https://${BRAND.app}/Billing` }}
              features={[
                "3 users included, extra users £4",
                "Unlimited jobs, quotes and invoices",
                "30 certificates per month",
                "Unlimited variations",
                "200 reminders per month",
                "AI Job Pricer 100 runs per month",
                "50 GB storage, branding only",
                "Branded portal, deposits and review booster",
                "Stripe or Open Banking payments",
                "Xero or QuickBooks export",
                "Scheduling, checklists, RAMS basic library",
              ]}
            />
            <Plan
              name="Premium"
              price="£39"
              badge="For firms that need integrations and reporting"
              cta={{ label: "Book demo", href: `https://${BRAND.app}/contact` }}
              features={[
                "10 users included, extra users £4",
                "Everything in Pro",
                "Unlimited certificates",
                "1,000 reminders per month",
                "AI Job Pricer 500 runs per month",
                "200 GB storage",
                "Custom domain portal, remove powered by",
                "Live sync with Xero or QuickBooks",
                "Asset register with service reminders",
                "Advanced RAMS and COSHH library",
                "SMS bundle, 100 per month included",
                "Priority support",
              ]}
              footnote="Annual billing gives 2 months free"
            />
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-24">
        <Container className="py-12 md:py-16 max-w-4xl">
          <h2 className="text-3xl font-bold text-center">Frequently asked questions</h2>
          <div className="mt-6 space-y-4">
            <Faq q="Is there a free plan?" a="Yes. Use the Free plan with limits and upgrade any time." />
            <Faq q="Does AI use my staff wages?" a="Yes. Add staff in Settings with daily wages and AI will price labour with your rates first." />
            <Faq q="Can I take deposits online?" a="Yes. Pro and Premium include Stripe or Open Banking pay links on quotes and invoices." />
            <Faq q="Do you integrate with accounting?" a="Pro exports to Xero or QuickBooks. Premium offers live sync." />
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white">
        <Container className="py-8 text-sm text-gray-600 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <Image src="/logo-32.png" alt="TradePricer logo" width={20} height={20} />
            <span>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-gray-900">Privacy</Link>
            <Link href="/terms" className="hover:text-gray-900">Terms</Link>
            <a href={`https://${BRAND.app}`} className="hover:text-gray-900">Sign in</a>
          </div>
        </Container>
      </footer>
    </main>
  );
}

/* bits */
function Check() {
  return (
    <svg className="mt-0.5 h-5 w-5 text-green-600 shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
      <path fillRule="evenodd" d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.25 7.333a1 1 0 0 1-1.44.01L3.29 9.6a1 1 0 1 1 1.42-1.408l3.044 3.072 6.53-6.6a1 1 0 0 1 1.42.026z" clipRule="evenodd"/>
    </svg>
  );
}

function Feature({ title, text, img }: { title: string; text: string; img: string }) {
  return (
    <div className="rounded-2xl border bg-white shadow-sm overflow-hidden">
      <div className="aspect-[16/10] bg-gray-100">
        <Image src={img} alt={title} width={1200} height={750} className="w-full h-full object-cover" />
      </div>
      <div className="p-5">
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
      <figcaption className="px-4 py-2 text-sm text-gray-700">{title}</figcaption>
    </figure>
  );
}

function Plan(props: {
  name: string; price: string; badge?: string; footnote?: string;
  features: string[]; cta: { label: string; href: string }; highlight?: boolean;
}) {
  const { name, price, badge, features, cta, highlight, footnote } = props;
  return (
    <div className={`rounded-2xl border bg-white p-6 shadow-sm ${highlight ? "ring-2 ring-blue-600" : ""}`}>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{name}</h3>
        {badge ? <span className="text-xs px-2 py-1 rounded-full bg-blue-50 text-blue-700">{badge}</span> : null}
      </div>
      <div className="mt-2 text-3xl font-bold">
        {price}<span className="text-base font-normal text-gray-500">/mo</span>
      </div>
      <ul className="mt-4 space-y-2 text-sm text-gray-700">
        {features.map((f, i) => (
          <li key={i} className="flex gap-2">
            <span>•</span><span>{f}</span>
          </li>
        ))}
      </ul>
      <a className={`mt-5 inline-flex w-full items-center justify-center rounded-lg px-4 py-2 ${highlight ? "bg-blue-600 text-white hover:bg-blue-700" : "border hover:bg-gray-50"}`} href={cta.href}>
        {cta.label}
      </a>
      {footnote ? <p className="mt-3 text-xs text-gray-500">{footnote}</p> : null}
    </div>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <details className="rounded-2xl border bg-white p-4 shadow-sm">
      <summary className="cursor-pointer font-medium">{q}</summary>
      <p className="mt-2 text-sm text-gray-700">{a}</p>
    </details>
  );
}


