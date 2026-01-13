import "./things.css";
import Image from "next/image";

export default function Things({ activities = [], temp }) {
    // check a activity match with current temp
  const getStatus = (a) =>
    temp >= (a.minTemp ?? -Infinity) && temp <= (a.maxTemp ?? Infinity);
// activities suitable/not suitable for the current temperature
  const couldDo = activities.filter(getStatus).slice(0, 3);
  const shouldNotDo = activities.filter((a) => !getStatus(a)).slice(0, 3);

  return (
    <section className="things">
      <h6 className="things_heading">Some things you could do:</h6>
      <ul className="things_list">
        {couldDo.map((a) => (
          <li key={a.id} className="things_item">
            <Image src={a.mainImageUrl} alt={a.title} className="things_image" width={800} height={500} unoptimized/>
            <p className="things_title">{a.title}</p>
            <p className="things_description">{a.shortDescription}</p>
          </li>
        ))}
      </ul>

      <h6 className="things_heading">Some things you should not do:</h6>
      <ul className="things_list">
        {shouldNotDo.map((a) => (
          <li key={`${a.id}-not`} className="things_item">
            <Image src={a.mainImageUrl} alt={a.title} className="things_image" width={800} height={500} unoptimized/>
            <p className="things_title">{a.title}</p>
            <p className="things_description">{a.shortDescription}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
