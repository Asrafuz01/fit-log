import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container-fit flex min-h-[70vh] items-center justify-center py-20">
      <div className="text-center">
        <p className="text-sm font-black tracking-[0.3em] text-[#ccff00]">
          ERROR 404
        </p>

        <h1 className="display-font mt-4 text-7xl uppercase md:text-9xl">
          Not Found
        </h1>

        <p className="mx-auto mt-5 max-w-md text-[#999]">
          The workout or page you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-[#ccff00] px-6 py-3 text-sm font-black uppercase text-black"
        >
          Back to workouts
        </Link>
      </div>
    </main>
  );
}
