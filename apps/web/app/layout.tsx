import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sunlight Trucking Company",
  description: "Enterprise CRM and logistics management platform"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-100">
        <div className="min-h-screen">
          <header className="border-b border-slate-800 bg-slate-900/60">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
              <div>
                <p className="text-lg font-semibold">Sunlight Trucking Company</p>
                <p className="text-xs text-slate-400">
                  Enterprise Operations Console
                </p>
              </div>
              <div className="flex items-center gap-4 text-sm text-slate-300">
                <span>Tenant: Sunlight Logistics</span>
                <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-emerald-300">
                  Live
                </span>
              </div>
            </div>
          </header>
          <main className="mx-auto max-w-6xl px-6 py-8">{children}</main>
          <footer className="border-t border-slate-800 px-6 py-6 text-center text-xs text-slate-500">
            Sunlight Trucking Company - SaaS Platform Console
          </footer>
        </div>
      </body>
    </html>
  );
}
