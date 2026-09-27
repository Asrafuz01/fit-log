export default function PlanStats({ plan }) {
  const exercises = plan.length;

  const minutes = plan.reduce((total, workout) => total + workout.duration, 0);

  const calories = plan.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0,
  );

  return (
    <div className="grid gap-4 sm:grid-cols-3">
      <Stat title="Exercises" value={exercises} />

      <Stat title="Minutes" value={minutes} />

      <Stat title="Calories" value={calories} />
    </div>
  );
}

function Stat({ title, value }) {
  return (
    <div className="rounded-2xl border border-[#292929] bg-[#111] p-5">
      <p className="text-xs font-black uppercase tracking-widest text-[#777]">
        {title}
      </p>

      <p className="display-font mt-2 text-4xl text-[#ccff00]">{value}</p>
    </div>
  );
}
