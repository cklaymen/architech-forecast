import { FC } from "react";
import { useParams } from "react-router";
import useForecast from "./useForecast";
import WeekBoard from "./WeekBoard/WeekBoard";

const Forecast: FC = () => {
  const { cityName } = useParams<{ cityName: string }>();
  const { data, code } = useForecast(cityName);

  if (!data) {
    if (code === "404") {
      return <h1>{cityName} not found.</h1>;
    } else if (code) {
      return <h1>Something went wrong ({code})</h1>;
    }
    return null;
  }

  const avgWeekPressure =
    data.list.reduce((sum, it) => it.main.pressure + sum, 0) / data.list.length;

  return (
    <>
      {data.city.name} {data.city.country} | Avg week pressure:{" "}
      {avgWeekPressure.toFixed(2)} hPa
      <WeekBoard meteoData={data.list} />
    </>
  );
};

export default Forecast;
