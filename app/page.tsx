import Link from "next/link";
import "./globals.css";


const BRAND = {
  name: "TradePricer",
  domainWeb: "www.tradepricer.ai",
  domainApp: "app.tradepricer.ai",
  ogImage: "/logo-512.png",
};

export default function HomePage() {
  return (
    <main>
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo-32.png" alt={BRAND.name} className="h-8 w-8" />
            <span className="font-semibold">{BRAND.name}</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="hover:text-blue-700">Features</a>
            <a href="#pricing" className="hover:text-blue-700">Pricing</a>
            <a href="#screens" className="hover:text-blue-700">Screens</a>
            <a href="#faq" className="hover:text-blue-700">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <a className="hidden sm:inline px-4 py-2 rounded-lg border hover:bg-gray-100" href={`https://${BRAND.domainApp}`}>
              Sign in
            </a>
            <a className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700" href={`https://${BRAND.domainApp}/Signup`}>
              Start free
            </a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 opacity-10" />
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-12 md:pt-24 md:pb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-blue-700 text-sm">
                New. AI quotes from drawings
              </div>
              <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight">
                AI powered quotes, jobs and certificates for trades
              </h1>
              <p className="mt-3 text-lg text-gray-700">
                TradePricer helps contractors quote faster, track jobs, and get paid on time. Upload a PDF drawing or describe the job and get an instant quote with your staff wages and realistic materials.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a className="px-5 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700" href={`https://${BRAND.domainApp}/Signup`}>
                  Start free
                </a>
                <a className="px-5 py-3 rounded-lg border border-gray-300 hover:bg-gray-100" href="#screens">
                  See demo
                </a>
              </div>
              <p className="mt-3 text-sm text-gray-500">No card required. Cancel any time.</p>
            </div>
            <div className="relative">
              <div className="rounded-2xl border bg-white shadow-lg overflow-hidden">
                <img src="/landing-hero-mock.png" alt="TradePricer quote and margin" className="w-full h-auto" />
              </div>
              <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-blue-200/40 blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold">How it works</h2>
          <p className="mt-2 text-gray-600">From job brief to accepted quote in minutes</p>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <Step n="1" title="Create job" text="Add customer and site address, or import from your contacts." />
          <Step n="2" title="AI prices it" text="Upload drawings or paste the scope. AI builds line items using your staff wages." />
          <Step n="3" title="Send and get paid" text="Customer accepts online, pays a deposit, and your schedule updates automatically." />
        </div>
      </section>

      <section id="features" className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold">Everything you need in one place</h2>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <Feature title="AI Job Pricer" text="Turn drawings or briefs into a ready to send quote. Uses your staff daily wages and realistic material pricing." />
          <Feature title="Certificates" text="Gas, Electrical, Damp and custom templates. Branded PDFs with e signatures." />
          <Feature title="Smart Site Diary" text="Daily notes with automatic weather logs and photos. Export a dispute ready PDF bundle." />
          <Feature title="Customer portal" text="Customers accept quotes, pay deposits and see progress photos. Ask for Google or Trustpilot reviews automatically." />
          <Feature title="Scheduling" text="Drag and drop jobs, assign staff, and send SMS or email reminders." />
          <Feature title="Profit and margin" text="Live margin on every quote. Compare projected vs actual after the job." />
        </div>
      </section>

      <section id="screens" className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold">Screens</h2>
          <p className="mt-2 text-gray-600">Modern and clean</p>
        </div>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <ScreenCard title="Quote with AI pricing and margin" img="/screen-quote.png" />
          <ScreenCard title="Site diary with weather and photos" img="/screen-diary.png" />
          <ScreenCard title="Certificates with e signatures" img="/screen-cert.png" />
          <ScreenCard title="Customer portal with deposits" img="/screen-portal.png" />
        </div>
      </section>

      <section id="pricing" className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold">Simple monthly pricing</h2>
          <p className="mt-2 text-gray-600">Prices are per company per month. VAT not included.</p>
        </div>
        <div className="mt-8 grid lg:grid-cols-3 gap-6">
          <Plan name="Free" price="£0" badge="For sole traders" cta={{ label: "Start free", href: `https://${BRAND.domainApp}/Signup` }} features={[
            "1 user",
            "3 active jobs",
            "10 quotes and 10 invoices per month",
            "3 certificates per month",
            "3 variations per month",
            "30 reminders per month",
            "AI Job Pricer 3 runs per month",
            "1 GB storage. Watermark on PDFs",
            "Basic customer portal",
          ]} />
          <Plan name="Pro" price="£19" highlight badge="For busy teams" cta={{ label: "Upgrade now", href: `https://${BRAND.domainApp}/Billing` }} features={[
            "3 users included. extra users £4",
            "Unlimited jobs, quotes and invoices",
            "30 certificates per month",
            "Unlimited variations",
            "200 reminders per month",
            "AI Job Pricer 100 runs per month",
            "50 GB storage. branding only",
            "Branded portal. deposits and review booster",
            "Stripe or Open Banking payments",
            "Xero or QuickBooks export",
            "Scheduling. checklists. RAMS basic library",
          ]} />
          <Plan name="Premium" price="£39" badge="For firms that need integrations and reporting"
            cta={{ label: "Book demo", href: `https://${BRAND.domainWeb}/contact` }}
            features={[
              "10 users included. extra users £4",
              "Everything in Pro",
              "Unlimited certificates",
              "1,000 reminders per month",
              "AI Job Pricer 500 runs per month",
              "200 GB storage",
              "Custom domain portal",
              "Live sync with Xero or QuickBooks",
              "Asset register with service reminders",
              "Advanced RAMS and COSHH library",
              "SMS bundle. 100 per month included",
              "Priority support",
            ]}
            footnote="Annual billing gives 2 months free"
          />
        </div>
      </section>

      <section id="faq" className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold">Frequently asked questions</h2>
        </div>
        <div className="mt-6 space-y-4">
          <Faq q="Is there a free plan?" a="Yes. Use the Free plan with limits and upgrade any time." />
          <Faq q="Does AI use my staff wages?" a="Yes. Add staff in Settings with daily wages and AI will price labour with your rates first." />
          <Faq q="Can I take deposits online?" a="Yes. Pro and Premium include Stripe or Open Banking pay links on quotes and invoices." />
          <Faq q="Do you integrate with accounting?" a="Pro exports to Xero or QuickBooks. Premium offers live sync." />
        </div>
      </section>

      <footer className="border-t bg-white">
        <div className="max-w-7xl mx-auto px-6 py-8 text-sm text-gray-600 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo-32.png" alt={BRAND.name} className="h-5 w-5" />
            <span>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-gray-900">Privacy</Link>
            <Link href="/terms" className="hover:text-gray-900">Terms</Link>
            <a href={`https://${BRAND.domainApp}`} className="hover:text-gray-900">Sign in</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function Step({ n, title, text }: { n: string; title: string; text: string }) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="h-8 w-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-semibold">{n}</div>
      <h3 className="mt-3 font-semibold text-lg">{title}</h3>
      <p className="mt-1 text-gray-600 text-sm">{text}</p>
    </div>
  );
}

function Feature({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-gray-600 text-sm">{text}</p>
    </div>
  );
}

function ScreenCard({ title, img }: { title: string; img: string }) {
  return (
    <div className="rounded-2xl border bg-white p-4 shadow-sm">
      <div className="aspect-[16/10] w-full rounded-lg bg-gray-100 overflow-hidden">
        <img src={img} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="mt-2 text-sm text-gray-700">{title}</div>
    </div>
  );
}

function Plan(props: {
  name: string;
  price: string;
  badge?: string;
  footnote?: string;
  features: string[];
  cta: { label: string; href: string };
  highlight?: boolean;
}) {
  const { name, price, badge, features, cta, highlight, footnote } = props;
  return (
    <div className={`rounded-2xl border bg-white p-6 shadow-sm ${highlight ? "ring-2 ring-blue-600" : ""}`}>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{name}</h3>
        {badge ? <span className="text-xs px-2 py-1 rounded-full bg-blue-50 text-blue-700">{badge}</span> : null}
      </div>
      <div className="mt-2">
        <div className="text-3xl font-bold">{price}<span className="text-base font-normal text-gray-500">/mo</span></div>
      </div>
      <ul className="mt-4 space-y-2 text-sm text-gray-700">
        {features.map((f, i) => (<li key={i} className="flex gap-2"><span>•</span><span>{f}</span></li>))}
      </ul>
      <a className={`mt-5 inline-flex w-full items-center justify-center rounded-lg px-4 py-2 ${highlight ? "bg-blue-600 text-white hover:bg-blue-700" : "border hover:bg-gray-100"}`} href={cta.href}>
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

