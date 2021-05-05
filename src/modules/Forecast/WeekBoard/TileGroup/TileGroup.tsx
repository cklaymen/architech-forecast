import { FC } from "react";

import { MeteoData } from "../../useForecast";
import Tile from "../Tile/Tile";
import { GroupTitle, TileGroupWrapper } from "./TileGroup.components";

interface Props {
  title: string;
  meteoData: MeteoData[];
}

const TileGroup: FC<Props> = ({ title, meteoData }) => (
  <TileGroupWrapper>
    <GroupTitle>{title}</GroupTitle>
    {meteoData.map((it, i) => (
      <Tile key={i} meteoData={it} />
    ))}
  </TileGroupWrapper>
);

export default TileGroup;
