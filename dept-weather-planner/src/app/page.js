import Hero from "../components/Hero/hero";
import Weather from "../components/Weather/weather";
import {getWeather} from "../lib/api";

export default async function HomePage() {
  const weather = await getWeather();
  return (
    <main>
      <Hero />
      <Weather weather={weather} />
    </main>
  );
}
