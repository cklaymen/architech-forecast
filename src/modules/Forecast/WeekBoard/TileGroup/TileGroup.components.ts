import styled from "styled-components";

export const TileGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;

  & * + * {
    margin-top: 7px;
  }
`;

export const GroupTitle = styled.h3`
  margin: 0;
`;

export const Summary = styled.div``;
