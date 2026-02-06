import Link from "next/link";

const modules = [
  {
    name: "CRM",
    description: "Customer profiles, quotes, contracts, and service tickets",
    status: "Active",
    href: "/crm"
  },
  {
    name: "Dispatch",
    description: "Jobs, routing, and live schedule coordination",
    status: "Active",
    href: "/dispatch"
  },
  {
    name: "HR & Payroll",
    description: "Employee lifecycle, attendance, and payroll runs",
    status: "Active",
    href: "/hr"
  },
  {
    name: "Fleet & Drivers",
    description: "Vehicle compliance, maintenance, and driver records",
    status: "Active",
    href: "/fleet"
  },
  {
    name: "GPS Tracking",
    description: "Live telemetry, geofencing, and trip analytics",
    status: "Active",
    href: "/tracking"
  },
  {
    name: "Analytics",
    description: "Operational KPIs, financials, and performance trends",
    status: "Active",
    href: "/reports"
  }
];

const stats = [
  { label: "Active Jobs", value: "42" },
  { label: "On-Time Delivery", value: "94%" },
  { label: "Fleet Utilization", value: "82%" },
  { label: "Revenue YTD", value: "$485k" }
];

export default function HomePage() {
  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="text-3xl font-semibold">Operations Command Center</h1>
            <p className="mt-2 max-w-2xl text-sm text-slate-300">
              Real-time visibility across customer relationships, dispatch
              operations, fleet health, payroll, and compliance.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-medium text-slate-950">
              Create New Job
            </button>
            <button className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200">
              Generate Report
            </button>
          </div>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-slate-800 bg-slate-900/40 p-4"
          >
            <p className="text-xs uppercase text-slate-400">{stat.label}</p>
            <p className="mt-2 text-2xl font-semibold">{stat.value}</p>
          </div>
        ))}
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Core Modules</h2>
          <span className="text-sm text-slate-400">
            Role: Operations Director
          </span>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {modules.map((module) => (
            <Link
              key={module.name}
              href={module.href}
              className="group rounded-xl border border-slate-800 bg-slate-900/40 p-5 transition hover:border-emerald-500/60"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{module.name}</h3>
                <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs text-emerald-300">
                  {module.status}
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-300">
                {module.description}
              </p>
              <p className="mt-4 text-xs text-emerald-300">Open module</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
