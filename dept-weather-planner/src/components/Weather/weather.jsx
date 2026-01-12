export default function Weather({ weather }) {
    const temp = weather.temperature.temp;

    const info = weather.weatherInfo.find(({ minTemp, maxTemp }) => 
        (minTemp ?? -Infinity) <= temp && temp <= (maxTemp ?? Infinity)
      );
      

      return (
        <section className="weather">
          <h1 className="weather_temp">{Math.round(temp)}°</h1>
    
          <p className="weather_headline">
            {info.title.replace("{{ CELCIUS }}", temp)}
          </p>
    
          <p className="weather_body">{info.description}</p>
        </section>
      );
    }