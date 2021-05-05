import { FC } from "react";

import { ForecastData } from "../../useForecast";
import { SummaryWrapper } from "./Summary.components";

interface Props {
  forecastData: ForecastData;
}
const Summary: FC<Props> = ({ forecastData }) => {
  const avgWeekPressure =
    forecastData.list.reduce((sum, it) => it.main.pressure + sum, 0) /
    forecastData.list.length;

  return (
    <SummaryWrapper>
      {forecastData.city.name} {forecastData.city.country} | Avg week pressure:{" "}
      {avgWeekPressure.toFixed(2)} hPa
    </SummaryWrapper>
  );
};

export default Summary;
