import styled, { css } from "styled-components";

import colors from "../../../common/colors";

export const TileWrapper = styled.div<{ color: "light" | "dark" }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 15px;
  background-color: #fffce4;
  font-size: 9px;
  width: 220px;
  background-color: ${colors.lightBlue};
  ${(p) =>
    p.color === "dark" &&
    css`
      background-color: ${colors.darkBlue};
      color: ${colors.white};
    `}
`;

export const TileTime = styled.div`
  font-size: 3.2em;
  font-weight: bold;
  text-align: right;
  opacity: 0.2;
  width: 72px;
`;

export const TileWeather = styled.div`
  text-align: center;
`;

export const WeatherIcon = styled.img`
  width: 5em;
  height: auto;
`;

export const WeatherTitle = styled.div`
  font-size: 1.4em;
`;

export const TileMeteo = styled.table`
  display: inline-table;
`;

export const MeteoTemp = styled.tr`
  font-size: 2.8em;
`;

export const MeteoOther = styled.tr`
  font-size: 1.4em;
`;

export const MeteoValue = styled.td`
  text-align: right;
`;
export const MeteoUnit = styled.td``;
