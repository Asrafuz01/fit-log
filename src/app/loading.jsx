export default function Loading() {
  return (
    <div className="container-fit flex min-h-[60vh] items-center justify-center">
      <div className="text-center">
        <span className="loading loading-spinner loading-lg text-[#ccff00]"></span>

        <p className="mt-4 text-sm font-bold uppercase tracking-widest text-[#999]">
          Loading workouts...
        </p>
      </div>
    </div>
  );
}
