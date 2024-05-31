import { useState, useEffect } from "react";
import { TailSpin } from "react-loader-spinner";
import NavHeader from "./NavHeader";
import SearchPanel from "./SearchPanel";
import FilterPanel from "./FilterPanel";
import CountriesTable from "./CountriesTable";

function Homepage() {
  const [darkMood, setDarkMood] = useState(false);
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
      <NavHeader darkMood={darkMood} setDarkMood={setDarkMood} />
      {!countries.length && !showPanel ? (
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
            <FilterPanel filterVal={filterVal} setFilterVal={setFilterVal} />
          </div>
          <CountriesTable countries={countries} />
        </section>
      )}
    </main>
  );
}

export default Homepage;
