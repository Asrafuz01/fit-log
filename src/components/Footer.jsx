export default function Footer() {
  return (
    <footer className="border-t border-[#292929] bg-[#050505]">
      <div className="container-fit flex min-h-[120px] flex-col items-center justify-between gap-5 py-8 sm:flex-row">
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="FitLog"
            className="h-9 w-auto object-contain"
          />

          <span className="font-black tracking-widest">FITLOG</span>
        </div>

        <p className="text-center text-xs text-[#777] sm:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}
