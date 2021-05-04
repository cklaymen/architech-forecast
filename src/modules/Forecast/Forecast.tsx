import { FC } from "react";
import { useParams } from "react-router";
import useForecast from "./useForecast";

const Forecast: FC = () => {
  const { cityName } = useParams<{ cityName: string }>();
  const { data, code } = useForecast(cityName);

  return (
    <>
      _FORECAST_ {code === "404" && `${cityName} not found!`}
      {data?.city.name} {data?.city.country}
      {data?.list.map((it, i) => (
        <ul key={i}>
          {it.date.toLocaleString()}
          <li>temp: {Math.round(it.main.temp)}°C</li>
          <li>feels like: {Math.round(it.main.feels_like)}°C</li>
          <li>pressure: {it.main.pressure}hPa (sea level)</li>
          <li>humidity: {it.main.humidity}%</li>
          {it.weather.map((it, i) => (
            <li key={i}>
              {it.main} <img src={it.iconUrl} alt={it.description} />
            </li>
          ))}
        </ul>
      ))}
    </>
  );
};

export default Forecast;
