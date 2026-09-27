"use client";

import { useState } from "react";
import Link from "next/link";
import { useFitLog } from "@/context/FitLogContext";
import PlanStats from "@/components/PlanStats";
import PlanCard from "@/components/PlanCard";

export default function MyPlanPage() {
  const { plan, saved } = useFitLog();

  const [activeTab, setActiveTab] = useState("plan");

  const currentList = activeTab === "plan" ? plan : saved;

  return (
    <main className="container-fit py-12 md:py-16">
      <div className="mb-10">
        <p className="text-xs font-black tracking-[0.3em] text-[#ccff00]">
          FITLOG
        </p>

        <h1 className="display-font mt-2 text-5xl uppercase md:text-6xl">
          My Plan
        </h1>

        <p className="mt-3 max-w-xl text-[#999]">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      <PlanStats plan={plan} />

      {/* Tabs */}
      <div className="mt-10 flex gap-2 border-b border-[#292929] pb-3">
        <button
          onClick={() => setActiveTab("plan")}
          className={`rounded-full px-5 py-2 text-sm font-black uppercase ${
            activeTab === "plan"
              ? "bg-[#ccff00] text-black"
              : "text-[#999] hover:text-white"
          }`}
        >
          Today's Plan ({plan.length})
        </button>

        <button
          onClick={() => setActiveTab("saved")}
          className={`rounded-full px-5 py-2 text-sm font-black uppercase ${
            activeTab === "saved"
              ? "bg-[#ccff00] text-black"
              : "text-[#999] hover:text-white"
          }`}
        >
          Saved ({saved.length})
        </button>
      </div>

      {/* List */}
      <div className="mt-8 space-y-4">
        {currentList.length > 0 ? (
          currentList.map((workout) => (
            <PlanCard
              key={workout.id}
              workout={workout}
              savedCard={activeTab === "saved"}
            />
          ))
        ) : (
          <EmptyState activeTab={activeTab} />
        )}
      </div>
    </main>
  );
}

function EmptyState({ activeTab }) {
  return (
    <div className="rounded-2xl border border-dashed border-[#444] px-6 py-20 text-center">
      <p className="text-xs font-black tracking-[0.3em] text-[#ccff00]">
        NOTHING HERE YET
      </p>

      <h2 className="display-font mt-3 text-4xl uppercase">Start Moving</h2>

      <p className="mx-auto mt-3 max-w-md text-[#999]">
        {activeTab === "plan"
          ? "Browse the library and add a lift to get today moving."
          : "Save a workout from the library and find it here later."}
      </p>

      <Link
        href="/"
        className="mt-7 inline-flex rounded-full bg-[#ccff00] px-6 py-3 text-sm font-black uppercase text-black"
      >
        Go to workouts
      </Link>
    </div>
  );
}
