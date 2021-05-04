import { FC } from "react";
import { useParams } from "react-router";

const Forecast: FC = () => {
  const { cityName } = useParams<{ cityName: string }>();

  return <>_FORECAST_ {cityName}</>;
};

export default Forecast;
