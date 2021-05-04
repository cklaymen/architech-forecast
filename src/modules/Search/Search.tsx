import { FC, useState } from "react";
import { useHistory } from "react-router";

import { SearchButton, SearchInput } from "./Search.components";

const Search: FC = () => {
  const [cityName, setCityName] = useState("");
  const { push } = useHistory();

  return (
    <>
      <SearchInput
        type="url"
        value={cityName}
        onChange={({ target: { value } }) => setCityName(value)}
      />
      <SearchButton
        type="submit"
        onClick={() => push(encodeURI(cityName.toLowerCase()))}
        disabled={!cityName}
      >
        Search
      </SearchButton>
    </>
  );
};

export default Search;
