"use client";

import { useMemo, useState } from "react";
import WorkoutCard from "./workoutCard";

export default function WorkoutGrid({ workouts }) {
  const [sortBy, setSortBy] = useState("duration");

  const sortedWorkouts = useMemo(() => {
    const copy = [...workouts];

    if (sortBy === "duration") {
      return copy.sort((a, b) => a.duration - b.duration);
    }

    if (sortBy === "calories") {
      return copy.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
    }

    if (sortBy === "rating") {
      return copy.sort((a, b) => b.rating - a.rating);
    }

    return copy;
  }, [workouts, sortBy]);

  return (
    <section id="library" className="container-fit py-14">
      <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-black tracking-[0.3em] text-[#ccff00]">
            12 WORKOUTS
          </p>

          <h2 className="display-font mt-2 text-4xl uppercase sm:text-5xl">
            The Library
          </h2>

          <p className="mt-2 text-[#999]">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        <label className="flex items-center gap-3">
          <span className="text-xs font-bold uppercase text-[#999]">
            Sort By
          </span>

          <select
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
            className="rounded-full border border-[#444] bg-[#111] px-4 py-2 text-sm text-white outline-none"
          >
            <option value="duration">Duration</option>
            <option value="calories">Calories</option>
            <option value="rating">Rating</option>
          </select>
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {sortedWorkouts.map((workout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
    </section>
  );
}
