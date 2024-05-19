import { useState, useEffect } from "react";
import { TailSpin } from "react-loader-spinner";
import NavHeader from "./NavHeader";
import CountriesTable from "./CountriesTable";
import SearchPanel from "./SearchPanel";
import FilterPanel from "./FilterPanel";

function Homepage() {
  const [darkMood, setDarkMood] = useState(false);
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const [filteredVal, setFilteredVal] = useState("");

  // show countries at mounting or loading
  useEffect(() => {
    const fetchData = async () => {
      let fetchUrl = await fetch("https://restcountries.com/v3.1/all");
      let countriesData = await fetchUrl.json();
      setCountries(countriesData);
    };
    fetchData();
  }, []);

  // show countries based on search
  useEffect(() => {
    const fetchSearch = async () => {
      if (searchVal != "") {
        let searchedFetch = await fetch(
          `https://restcountries.com/v3.1/name/${searchVal}`
        );
        let searchData = await searchedFetch.json();
        setCountries(searchData);
      }
    };
    fetchSearch();
  }, [searchVal]);

  // show countries based on continents
  useEffect(() => {
    const fetchFiltered = async () => {
      if (filteredVal !== "") {
        let filteredFetch = await fetch(
          `https://restcountries.com/v3.1/region/${filteredVal}`
        );
        let filteredData = await filteredFetch.json();
        setFilteredCountries(filteredData);
      }
    };
    fetchFiltered();
  }, [filteredVal]);

  return (
    <main className="w-full min-h-screen">
      <NavHeader darkMood={darkMood} setDarkMood={setDarkMood} />

      {!countries.length ? (
        <div className="w-full min-h-screen flex items-center justify-center dark:bg-Dark-Elements bg-Light-Elements">
          <TailSpin
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      ) : (
        <section className="w-full min-h-screen bg-Light-Background dark:bg-Dark-Background">
          <div className="container mx-auto py-5 flex flex-col md:flex-row items-start justify-start">
            <SearchPanel searchVal={searchVal} setSearchVal={setSearchVal} />
            <FilterPanel
              filteredVal={filteredVal}
              setFilteredVal={setFilteredVal}
            />
          </div>
          <CountriesTable
            countries={
              filteredCountries.length > 0 ? filteredCountries : countries
            }
          />
        </section>
      )}
    </main>
  );
}

export default Homepage;
