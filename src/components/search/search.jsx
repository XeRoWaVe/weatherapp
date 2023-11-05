import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../../util/api";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);
  const [test, setTest] = useState(null)

  const loadOptions = (inputValue) => {
    return fetch(
      `${GEO_API_URL}/cities/?minPopulation=500000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name} ${city.countryCode}`,
            };

          })
        };
      })
      .catch((err) => console.log(err));
  };




  const handleChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    // <div>
    //     <input
    //         className="searchfield"
    //         onChange={handleChange}
    //         placeholder='Search for cities...'
    //         ></input>
    //     <button
    //         className="searchbutton"
    //         /*onSubmit={handleSearch}*/
    //         /*onClick={processChange}*/ >
    //         Search</button>
    // </div>
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
