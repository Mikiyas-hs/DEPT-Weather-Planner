export default function Weather({ weather }) {
    const { temp, metric } = weather.temperature;

    // coverting temp to cels 
    const tempC = metric === "FAHRENHEIT" ? (temp - 32) * (5 / 9) : temp;

    // round up temp
    const c = Math.round(tempC);

    //   juiste tekst vinden op basis van temperatuur minTemp/maxTemp
  const info = weather.weatherInfo.find(
    ({ minTemp, maxTemp }) =>
      (minTemp ?? -Infinity) <= c && c <= (maxTemp ?? Infinity)
  );

  return (
    <section className="weather">
      <h1 className="weather_temp">{c}°</h1>

      <p className="weather_headline">
        {info.title.replace("{{ CELCIUS }}", c)}
      </p>

      <p className="weather_tekst">{info.description}</p>
    </section>
  );
}
