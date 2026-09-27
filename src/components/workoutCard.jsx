"use client";

import Link from "next/link";

export default function WorkoutCard({ workout }) {
  return (
    <Link href={`/workout/${workout.id}`}>
      <article className="card-hover group overflow-hidden rounded-2xl border border-[#292929] bg-[#111]">
        <div className="relative h-56 overflow-hidden bg-[#171717]">
          <img
            src={workout.image}
            alt={workout.name}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          />

          <div className="absolute left-4 top-4 flex flex-wrap gap-2">
            {workout.muscleGroups.map((group) => (
              <span
                key={group}
                className="rounded-full bg-[#ccff00] px-3 py-1 text-[10px] font-black uppercase text-black"
              >
                {group}
              </span>
            ))}
          </div>
        </div>

        <div className="p-6">
          <h3 className="display-font text-2xl uppercase leading-none">
            {workout.name}
          </h3>

          <p className="mt-3 text-sm text-[#999]">{workout.equipment}</p>

          <div className="mt-5 flex items-center justify-between border-t border-[#292929] pt-4 text-xs text-[#aaa]">
            <span>◷ {workout.duration} min</span>

            <span>🔥 {workout.caloriesBurned} kcal</span>

            <span>★ {workout.rating}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
