import { FC } from "react";
import { useParams } from "react-router";

import useForecast from "./useForecast";
import Summary from "./WeekBoard/Summary/Summary";
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

  return (
    <>
      <Summary forecastData={data} />
      <WeekBoard meteoData={data.list} />
    </>
  );
};

export default Forecast;
