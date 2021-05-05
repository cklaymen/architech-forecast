import styled from "styled-components";

import colors from "../common/colors";

export const SearchWrapper = styled.form`
  width: 100%;
  display: flex;
`;

export const SearchInput = styled.input`
  flex: 1;
  padding: 15px 20px;
  font-size: 24px;
  border: 3px solid ${colors.lightBlue};

  &:focus {
    outline: 1px solid ${colors.darkBlue};
  }
`;

export const SearchButton = styled.button`
  font-size: 24px;
  padding: 15px 20px;
  margin-left: 10px;

  background-color: ${colors.darkBlue};
  color: ${colors.white};
  border: none;
`;
