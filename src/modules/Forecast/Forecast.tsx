import { FC } from "react";
import { useParams } from "react-router";
import { Bar } from "react-chartjs-2";

import useForecast from "./useForecast";
import Summary from "./WeekBoard/Summary/Summary";
import WeekBoard from "./WeekBoard/WeekBoard";
import colors from "../common/colors";

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
      <Bar
        data={{
          labels: data.list.map((it) => it.date.toLocaleString()),
          datasets: [
            {
              label: "Temperature",
              data: data.list.map((it) => it.main.temp),
              backgroundColor: data.list.map((it) =>
                it.weather[0].isNight ? colors.darkBlue : colors.lightBlue
              ),
            },
          ],
        }}
        type="bar"
      />
    </>
  );
};

export default Forecast;
