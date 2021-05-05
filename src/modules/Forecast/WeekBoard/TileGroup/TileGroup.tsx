import { FC } from "react";

import { MeteoData } from "../../useForecast";
import Tile from "../Tile/Tile";
import { GroupTitle, Summary, TileGroupWrapper } from "./TileGroup.components";

interface Props {
  title: string;
  meteoData: MeteoData[];
}

const TileGroup: FC<Props> = ({ title, meteoData }) => {
  const meteoTempData = meteoData.map((it) => it.main.temp);
  const minTemp = Math.round(Math.min(...meteoTempData));
  const maxTemp = Math.round(Math.max(...meteoTempData));

  return (
    <TileGroupWrapper>
      <GroupTitle>{title}</GroupTitle>
      <Summary title="Min/Max temperature">
        {maxTemp} / {minTemp} [°C]
      </Summary>
      {meteoData.map((it, i) => (
        <Tile key={i} meteoData={it} />
      ))}
    </TileGroupWrapper>
  );
};

export default TileGroup;
