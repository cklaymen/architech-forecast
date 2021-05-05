import styled from "styled-components";

export const WeekBoardWrapper = styled.div`
  overflow-x: auto;
  max-width: fit-content;
  margin: 2% auto 0 auto;
`;

export const TilesGroupWrapper = styled.div`
  display: flex;

  & > * + * {
    margin-left: 11px;
  }
`;
