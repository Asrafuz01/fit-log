"use client";

import Link from "next/link";
import { useFitLog } from "@/context/FitLogContext";

export default function WorkoutDetails({ workout }) {
  const { addToPlan, saveWorkout, plan, saved } = useFitLog();

  const alreadyPlanned = plan.some((item) => item.id === workout.id);
  const alreadySaved = saved.some((item) => item.id === workout.id);

  return (
    <main className="container-fit py-10 md:py-16">
      <Link
        href="/"
        className="mb-8 inline-flex text-sm font-bold uppercase text-[#999] hover:text-[#ccff00]"
      >
        ← Back to workouts
      </Link>

      <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
        {/* Image */}
        <div className="overflow-hidden rounded-2xl border border-[#292929] bg-[#111]">
          <img
            src={workout.image}
            alt={workout.name}
            className="h-full min-h-[400px] w-full object-cover"
          />
        </div>

        {/* Details */}
        <div>
          <div className="flex flex-wrap gap-2">
            {workout.muscleGroups.map((group) => (
              <span
                key={group}
                className="rounded-full bg-[#ccff00] px-3 py-1 text-xs font-black uppercase text-black"
              >
                {group}
              </span>
            ))}
          </div>

          <h1 className="display-font mt-5 text-5xl uppercase leading-none md:text-6xl">
            {workout.name}
          </h1>

          <p className="mt-5 leading-7 text-[#999]">{workout.description}</p>

          {/* Specs */}
          <div className="mt-8 overflow-hidden rounded-2xl border border-[#292929]">
            <div className="grid grid-cols-2">
              <Spec label="Equipment" value={workout.equipment} />
              <Spec label="Difficulty" value={workout.difficulty} />
              <Spec label="Sets" value={workout.sets} />
              <Spec label="Reps" value={workout.reps} />
              <Spec label="Duration" value={`${workout.duration} min`} />
              <Spec label="Calories" value={`${workout.caloriesBurned} kcal`} />
              <Spec label="Rating" value={`★ ${workout.rating}`} />
            </div>
          </div>

          {/* Instructions */}
          <section className="mt-8">
            <h2 className="display-font text-3xl uppercase">Instructions</h2>

            <ol className="mt-5 space-y-4">
              {workout.instructions.map((instruction, index) => (
                <li
                  key={instruction}
                  className="flex gap-4 border-b border-[#292929] pb-4"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#ccff00] text-sm font-black text-black">
                    {index + 1}
                  </span>

                  <p className="text-sm leading-6 text-[#bbb]">{instruction}</p>
                </li>
              ))}
            </ol>
          </section>

          {/* Actions */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={() => addToPlan(workout)}
              disabled={alreadyPlanned || plan.length >= 5}
              className="rounded-full bg-[#ccff00] px-6 py-3 text-sm font-black uppercase text-black disabled:cursor-not-allowed disabled:opacity-40"
            >
              {alreadyPlanned ? "Already in plan" : "＋ Add to today's plan"}
            </button>

            <button
              onClick={() => saveWorkout(workout)}
              disabled={alreadySaved}
              className="rounded-full border border-[#555] px-6 py-3 text-sm font-black uppercase text-white hover:border-[#ccff00] disabled:cursor-not-allowed disabled:opacity-40"
            >
              {alreadySaved ? "Already saved" : "♡ Save for later"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

function Spec({ label, value }) {
  return (
    <div className="border-b border-r border-[#292929] p-4">
      <p className="text-[10px] font-black uppercase tracking-widest text-[#777]">
        {label}
      </p>

      <p className="mt-2 text-sm font-bold text-white">{value}</p>
    </div>
  );
}
