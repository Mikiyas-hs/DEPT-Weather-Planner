export default function Page() {
import { getWeather } from "../lib/api";

export default async function Page() {
  const weather = await getWeather();
  const temp = weather.temperature.temp;

  return (
    <main>
      <h1>DEPT® Weather Planner</h1>
      <p>Project setup complete. Components coming next.</p>

      <section>
        <h2>Data preview</h2>
        <p>Current temperature: {temp}°C</p>
      </section>
    </main>
  );
}
