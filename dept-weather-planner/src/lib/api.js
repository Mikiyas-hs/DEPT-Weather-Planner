const apiUrl = "https://dept-frontend-case.deptagency.com/api";

async function fetchApi(endpoint) {
  const res = await fetch(`${apiUrl}/${endpoint}`, { cache: "no-store" });
  if (!res.ok) throw new Error(`Failed to fetch ${endpoint}`);
  return res.json();
}

export const getWeather = () => fetchApi("get-weather");
export const getThingsToDo = () => fetchApi("get-things-to-do");
export const getForecast = () => fetchApi("get-forecast");