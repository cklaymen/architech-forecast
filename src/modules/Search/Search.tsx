import { FC, useState } from "react";
import { useHistory, useParams } from "react-router";

import { SearchButton, SearchInput, SearchWrapper } from "./Search.components";

const Search: FC = () => {
  const { cityName: cityNameFromUrl } = useParams<{ cityName?: string }>();
  const [cityName, setCityName] = useState(cityNameFromUrl || "");
  const { push } = useHistory();

  return (
    <SearchWrapper
      onSubmit={(e) => {
        e.preventDefault();
        push(encodeURI(cityName));
      }}
    >
      <SearchInput
        type="text"
        value={cityName}
        onChange={({ target: { value } }) => setCityName(value)}
      />
      <SearchButton type="submit" disabled={!cityName}>
        Search
      </SearchButton>
    </SearchWrapper>
  );
};

export default Search;
