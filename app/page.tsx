import Link from "next/link";
import Image from "next/image";
import "./globals.css";

const BRAND = {
  name: "TradePricer",
  domainApp: "app.tradepricer.ai",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Logo - make sure public/logo-32.png exists */}
            <Image
              src="/logo-32.png"
              alt={`${BRAND.name} logo`}
              width={32}
              height={32}
              priority
            />
            <span className="font-semibold">{BRAND.name}</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="hover:text-blue-700">Features</a>
            <a href="#pricing" className="hover:text-blue-700">Pricing</a>
            <a href="#screens" className="hover:text-blue-700">Screens</a>
            <a href="#faq" className="hover:text-blue-700">FAQ</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              className="hidden sm:inline px-4 py-2 rounded-lg border hover:bg-gray-100"
              href={`https://${BRAND.domainApp}`}
            >
              Sign in
            </a>
            <a
              className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
              href={`https://${BRAND.domainApp}/Signup`}
            >
              Start free
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 opacity-10" />
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-12 md:pt-24 md:pb-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-blue-700 text-sm">
                New - AI quotes from drawings
              </div>
              <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight">
                AI powered quotes, jobs and certificates for trades
              </h1>
              <p className="mt-3 text-lg text-gray-700">
                TradePricer helps contractors quote faster, track jobs, and get paid on time.
                Upload a PDF drawing or describe the job and get an instant quote that uses your own staff rates.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  className="px-5 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
                  href={`https://${BRAND.domainApp}/Signup`}
                >
                  Start free
                </a>
                <a
                  className="px-5 py-3 rounded-lg border border-gray-300 hover:bg-gray-100"
                  href="#screens"
                >
                  See demo
                </a>
              </div>
              <p className="mt-3 text-sm text-gray-500">
                No card required. Cancel any time.
              </p>
            </div>

            <div className="relative">
              {/* Hero mock - make sure public/landing-hero-mock.png exists */}
              <div className="rounded-2xl border bg-white shadow-lg overflow-hidden">
                <Image
                  src="/landing-hero-mock.png"
                  alt="TradePricer quote and margin"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                  priority
                />
              </div>
              <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-blue-200/40 blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Simple anchor targets so header links work now. You can flesh these out later */}
      <section id="features" className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-bold">Features</h2>
        <p className="mt-2 text-gray-600">Add your feature cards here.</p>
      </section>

      <section id="pricing" className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-bold">Pricing</h2>
        <p className="mt-2 text-gray-600">Add your pricing cards here.</p>
      </section>

      <section id="screens" className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-bold">Screens</h2>
        <p className="mt-2 text-gray-600">Add product screenshots here.</p>
      </section>

      <section id="faq" className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-bold">FAQ</h2>
        <p className="mt-2 text-gray-600">Add common questions here.</p>
      </section>

      <footer className="border-t bg-white">
        <div className="max-w-7xl mx-auto px-6 py-8 text-sm text-gray-600 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <Image src="/logo-32.png" alt={`${BRAND.name} logo`} width={20} height={20} />
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

