"use client";

import Link from "next/link";
import { useFitLog } from "@/context/FitLogContext";

export default function PlanCard({ workout, savedCard = false }) {
  const { removeFromPlan, toggleDone, removeSaved } = useFitLog();

  return (
    <article className="rounded-2xl border border-[#292929] bg-[#111] p-5">
      <div className="flex flex-col gap-5 sm:flex-row">
        <img
          src={workout.image}
          alt={workout.name}
          className="h-36 w-full rounded-xl object-cover sm:w-48"
        />

        <div className="flex-1">
          <div className="flex flex-wrap gap-2">
            {workout.muscleGroups.map((group) => (
              <span
                key={group}
                className="rounded-full border border-[#444] px-2 py-1 text-[10px] font-bold uppercase text-[#aaa]"
              >
                {group}
              </span>
            ))}
          </div>

          <h3 className="display-font mt-3 text-3xl uppercase">
            {workout.name}
          </h3>

          <p className="mt-2 text-sm text-[#999]">{workout.equipment}</p>

          <div className="mt-4 flex flex-wrap gap-4 text-xs text-[#aaa]">
            <span>◷ {workout.duration} min</span>
            <span>🔥 {workout.caloriesBurned} kcal</span>
            <span>★ {workout.rating}</span>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            <Link
              href={`/workout/${workout.id}`}
              className="rounded-full border border-[#555] px-4 py-2 text-xs font-black uppercase hover:border-[#ccff00]"
            >
              View Details
            </Link>

            {!savedCard && (
              <button
                onClick={() => toggleDone(workout.id)}
                className={`rounded-full px-4 py-2 text-xs font-black uppercase ${
                  workout.done
                    ? "bg-[#ccff00] text-black"
                    : "border border-[#555] text-white"
                }`}
              >
                ✓ {workout.done ? "Done" : "Mark as Done"}
              </button>
            )}

            <button
              onClick={() =>
                savedCard ? removeSaved(workout.id) : removeFromPlan(workout.id)
              }
              className="rounded-full border border-red-900 px-4 py-2 text-xs font-black uppercase text-red-400 hover:bg-red-950"
            >
              × Remove
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
