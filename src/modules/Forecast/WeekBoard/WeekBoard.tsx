import { FC } from "react";

import { MeteoData } from "../useForecast";
import TileGroup from "./TileGroup/TileGroup";

import { TilesGroupWrapper, WeekBoardWrapper } from "./WeekBoard.compontents";

interface Props {
  meteoData: MeteoData[];
}

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const WeekBoard: FC<Props> = ({ meteoData }) => {
  const groupedMeteoData = Object.values(
    meteoData.reduce<{ [key: string]: MeteoData[] }>((a, b) => {
      const group = a[b.date.toLocaleDateString()];
      if (!group) {
        a[b.date.toLocaleDateString()] = [b];
      } else {
        group.push(b);
      }
      return a;
    }, {})
  );
  return (
    <WeekBoardWrapper>
      <TilesGroupWrapper>
        {groupedMeteoData.map((meteoData, i) => (
          <TileGroup
            key={i}
            title={`${
              days[meteoData[0].date.getDay()]
            } ${meteoData[0].date.toLocaleDateString()}`}
            meteoData={meteoData}
          />
        ))}
      </TilesGroupWrapper>
    </WeekBoardWrapper>
  );
};

export default WeekBoard;
