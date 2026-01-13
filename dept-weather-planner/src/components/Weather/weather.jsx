export default function Weather({ weather }) {
  const temp = weather.temperature.temp;

//   juiste tekst vinden op basis van temperatuur minTemp/maxTemp
  const info = weather.weatherInfo.find(
    ({ minTemp, maxTemp }) =>
      (minTemp ?? -Infinity) <= temp && temp <= (maxTemp ?? Infinity)
  );

  return (
    <section className="weather">
      <h1 className="weather_temp">{Math.round(temp)}°</h1>

      <p className="weather_headline">
        {info.title.replace("{{ CELCIUS }}", temp)}
      </p>

      <p className="weather_tekst">{info.description}</p>
    </section>
  );
}
