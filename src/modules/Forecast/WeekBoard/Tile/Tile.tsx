import { FC } from "react";

import {
  MeteoOther,
  MeteoTemp,
  MeteoUnit,
  MeteoValue,
  TileMeteo,
  TileTime,
  TileWeather,
  TileWrapper,
  WeatherIcon,
  WeatherTitle,
} from "./Tile.components";
import { MeteoData } from "../../useForecast";

interface Props {
  meteoData: MeteoData;
  className?: string;
}

const Tile: FC<Props> = ({ meteoData, className }) => (
  <TileWrapper
    className={className}
    color={meteoData.weather[0].isNight ? "dark" : "light"}
  >
    <TileTime>
      {meteoData.date.getHours()}:
      {meteoData.date.getMinutes().toString().padStart(2, "0")}
    </TileTime>
    <TileWeather>
      <WeatherIcon
        src={meteoData.weather[0].iconUrl}
        alt={meteoData.weather[0].description}
      />
      <WeatherTitle>{meteoData.weather[0].main}</WeatherTitle>
    </TileWeather>
    <TileMeteo>
      <tbody>
        <MeteoTemp
          title={`Feels like: ${Math.round(meteoData.main.feels_like)}°C`}
        >
          <MeteoValue>{Math.round(meteoData.main.temp)}</MeteoValue>
          <MeteoUnit>°C</MeteoUnit>
        </MeteoTemp>
        <MeteoOther>
          <MeteoValue>{Math.round(meteoData.main.pressure)}</MeteoValue>
          <MeteoUnit>hPa</MeteoUnit>
        </MeteoOther>
        <MeteoOther>
          <MeteoValue>{meteoData.main.humidity}</MeteoValue>
          <MeteoUnit>%</MeteoUnit>
        </MeteoOther>
      </tbody>
    </TileMeteo>
  </TileWrapper>
);

export default Tile;
