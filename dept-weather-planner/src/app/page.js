import Hero from "../components/Hero/hero";
import Weather from "../components/Weather/weather";
import Things from "../components/Things-to-do/things"
import Footer from "../components/Footer/footer"
import {getThingsToDo, getWeather} from "../lib/api";

export default async function HomePage() {
  const weather = await getWeather();
  const things = await getThingsToDo();  
  
  return (
    <main>
      <Weather weather={weather} />
      <Things 
      activities={things.activities}
      temp={weather.temperature.temp} />
    </main>
  );
}
