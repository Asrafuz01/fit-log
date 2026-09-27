import Hero from "@/components/Hero";
import WorkoutGrid from "@/components/WorkoutGrid";

const API_URL = "https://api.abcz.workers.dev/api/fitlog";

async function getWorkouts() {
  const response = await fetch(API_URL, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch workouts");
  }

  return response.json();
}

export default async function Home() {
  const workouts = await getWorkouts();

  return (
    <>
      <Hero />

      <WorkoutGrid workouts={workouts} />
    </>
  );
}