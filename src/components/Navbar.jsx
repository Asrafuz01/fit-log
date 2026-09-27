"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useFitLog } from "@/context/FitLogContext";

export default function Navbar() {
  const pathname = usePathname();
  const { plan, saved } = useFitLog();

  const workoutActive = pathname === "/" || pathname.startsWith("/workout");

  const planActive = pathname === "/my-plan";

  return (
    <header className="sticky top-0 z-40 border-b border-[#292929] bg-[#080808]/95 backdrop-blur">
      <div className="container-fit">
        <div className="navbar min-h-[76px] px-0">
          {/* Logo */}
          <div className="navbar-start">
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="FitLog"
                className="h-9 w-auto object-contain"
              />

              <span className="text-xl font-black tracking-wide text-white">
                FITLOG
              </span>
            </Link>
          </div>

          {/* Navigation */}
          <div className="navbar-center hidden md:flex">
            <div className="flex items-center gap-2">
              <Link
                href="/"
                className={`rounded-full px-5 py-2 text-sm font-bold uppercase tracking-wide transition ${
                  workoutActive
                    ? "bg-[#ccff00] text-black"
                    : "text-white hover:bg-white/10"
                }`}
              >
                Workout
              </Link>

              <Link
                href="/my-plan"
                className={`rounded-full px-5 py-2 text-sm font-bold uppercase tracking-wide transition ${
                  planActive
                    ? "bg-[#ccff00] text-black"
                    : "text-white hover:bg-white/10"
                }`}
              >
                My Plan
              </Link>
            </div>
          </div>

          {/* Right badges */}
          <div className="navbar-end gap-2">
            {/* Plan Badge */}
            <Link
              href="/my-plan"
              className="hidden items-center gap-2 rounded-full bg-[#ccff00] px-4 py-2 text-xs font-black uppercase text-black sm:flex"
            >
              Plan
              <span>{plan.length}</span>
            </Link>

            {/* Saved Badge */}
            <Link
              href="/my-plan"
              className="hidden items-center gap-2 rounded-full border border-[#555] px-4 py-2 text-xs font-black uppercase text-white sm:flex"
            >
              Saved
              <span>{saved.length}</span>
            </Link>

            {/* Mobile Menu */}
            <div className="dropdown dropdown-end md:hidden">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-sm text-white"
              >
                ☰
              </div>

              <ul
                tabIndex={0}
                className="menu dropdown-content z-[50] mt-3 w-48 rounded-box border border-[#292929] bg-[#111] p-2 shadow-xl"
              >
                <li>
                  <Link href="/">Workout</Link>
                </li>

                <li>
                  <Link href="/my-plan">My Plan ({plan.length})</Link>
                </li>

                <li>
                  <Link href="/my-plan">Saved ({saved.length})</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
