import { useState, useEffect } from "react";
import SearchPanel from "./SearchPanel";
import FilterPanel from "./FilterPanel";
import CountriesTable from "./CountriesTable";

function Homepage() {
  const [countries, setCountries] = useState([]);
  const [countriesData, setCountriesData] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const [filterVal, setFilterVal] = useState("");
  const [showPanel, setShowPanel] = useState(false);

  // Fetch countries at mounting or loading
  useEffect(() => {
    const fetchData = async () => {
      let fetchUrl = await fetch("https://restcountries.com/v3.1/all");
      let countriesData = await fetchUrl.json();
      setCountriesData(countriesData);
      setCountries(countriesData);
    };
    fetchData();
  }, []);

  // find countries with search value
  useEffect(() => {
    if (searchVal) {
      const filteredCountries = countriesData.filter((country) => {
        return country.name.common
          .toLowerCase()
          .includes(searchVal.toLowerCase());
      });
      setCountries(filteredCountries);
      setShowPanel(true);
    } else {
      setCountries(countriesData);
    }
  }, [searchVal]);

  // find countries with filter value
  useEffect(() => {
    if (filterVal) {
      const filteredRegions = countriesData.filter((country) => {
        return country.region.toLowerCase().includes(filterVal.toLowerCase());
      });
      setCountries(filteredRegions);
    } else {
      setCountries(countriesData);
    }
  }, [filterVal]);

  return (
    <main className="w-full min-h-screen">
      {!countries.length && !showPanel ? (
        <div className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center dark:bg-Dark-Elements bg-Light-Elements">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="country-card-skeleton">
              <div className="skeleton-flag"></div>
              <div className="skeleton-text"></div>
              <div className="skeleton-text"></div>
              <div className="skeleton-text"></div>
            </div>
          ))}
        </div>
      ) : (
        <section className="w-full min-h-screen bg-Light-Background dark:bg-Dark-Background">
          <div className="container mx-au py-5 flex flex-col md:flex-row items-start md:items-center md:justify-between">
            <SearchPanel searchVal={searchVal} setSearchVal={setSearchVal} />
            <FilterPanel filterVal={filterVal} setFilterVal={setFilterVal} />
          </div>
          <CountriesTable countries={countries} />
        </section>
      )}
    </main>
  );
}

export default Homepage;
