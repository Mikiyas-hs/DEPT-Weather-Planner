import "./page.css";
import "../components/Hero/hero.css";
import "../components/Weather/weather.css";
import "../components/Things-to-do/things.css"
import "../components/Footer/footer.css"
import Weather from "../components/Weather/weather";
import Things from "../components/Things-to-do/things"
import Hero from "../components/Hero/hero"
import {getThingsToDo, getWeather} from "../lib/api";
// import { Children } from "react";

export default async function HomePage() {
  const weather = await getWeather();
  const things = await getThingsToDo();  
  
  return (
    <main className="home">
      <section className="hero_section"><Hero /></section>
      <section className="weather_section"><Weather weather={weather} /></section>
      <section className="things_section"><Things
      activities={things.activities}
      temp={weather.temperature.temp} />
      </section>
    </main>
  );
}
