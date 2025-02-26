import { IoMdArrowBack } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function CountryDetail() {
  const { name } = useParams();
  const [country, setCountry] = useState([]);
  const [neighbors, setNeighbors] = useState([]);

  useEffect(() => {
    const fetchCountryDetail = async () => {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${name.toLowerCase()}`
        );
        const data = await response.json();
        setCountry(data);

        if (data[0].borders) {
          getNeighbors(data[0].borders);
        }
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    };
    fetchCountryDetail();
  }, []);

  // Function to get the official native name
  const getOfficialNativeName = (nativeName) => {
    if (!nativeName) return "N/A";
    const languageKey = Object.keys(nativeName)[0];
    return nativeName[languageKey].official;
  };

  // get and set neighbors
  const getNeighbors = (neighnorBorders) => {
    const neighborPromises = neighnorBorders.slice(0, 3).map((code) =>
      fetch(`https://restcountries.com/v3.1/alpha/${code}`)
        .then((response) => response.json())
        .then((data) => data[0].name.common)
    );

    Promise.all(neighborPromises)
      .then((neighborNames) => setNeighbors(neighborNames))
      .catch((error) => console.error("Error fetching neighbors:", error));
  };

  return (
    <div>
      <section className="w-full min-h-screen p-5 bg-Light-Background dark:bg-Dark-Background">
        <Link
          to="/"
          className="w-[150px] bg-Light-Elements text-Dark-Text flex items-center justify-between p-3 md:py-3 md:px-8 rounded-md text-2xl dark:bg-Dark-Elements dark:text-Light-Text"
        >
          <IoMdArrowBack className=" text-Dark-Text dark:text-Light-Background" />
          Back
        </Link>
        <div>
          {country.length ? (
            <div>
              <div
                key={country[0].name.common}
                className="container m-auto my-5 flex flex-col md:flex-row items-start "
              >
                <img
                  src={country[0].flags.png}
                  alt={country[0].flags.alt}
                  className="w-full md:w-2/6"
                />

                <ul className="py-5 md:py-0 w-full md:w-3/6 md:ml-8">
                  <li className="font-[800] text-3xl my-8 md:text-5xl md:my-0 text-Dark-Text dark:text-Light-Text">
                    {country[0].name.common}
                  </li>
                  <li className="text-2xl my-4 text-Dark-Text dark:text-Light-Text font-bold">
                    <span className="font-[600]">Native Name: </span>
                    {getOfficialNativeName(country[0].name.nativeName)}
                  </li>
                  <li className="text-2xl my-4 text-Dark-Text dark:text-Light-Text font-bold">
                    <span className="font-[600]">Population: </span>
                    {country[0].population}
                  </li>
                  <li className="text-2xl my-4 text-Dark-Text dark:text-Light-Text font-bold">
                    <span className="font-[600]">Region: </span>
                    {country[0].region}
                  </li>
                  <li className="text-2xl my-4 text-Dark-Text dark:text-Light-Text font-bold">
                    <span className="font-[600]">Capital: </span>
                    {country[0].capital && country[0].capital[0]}
                  </li>
                  <li className="text-2xl my-4 text-Dark-Text dark:text-Light-Text font-[600] flex flex-col md:flex-row md:items-center">
                    Border Countries:
                    <ul className="flex items-center justify-between md:justify-center">
                      {neighbors.map((neighborCountry) => {
                        return (
                          <li
                            className="w-[110px] bg-Light-Elements  text-base text-Dark-Text p-2 md:py-2 md:px-4 md:mx-2 text-center rounded-md md:text-2xl dark:bg-Dark-Elements dark:text-Light-Text"
                            key={Math.random()}
                          >
                            {neighborCountry}
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <p>loading...</p>
          )}
        </div>
      </section>
    </div>
  );
}

export default CountryDetail;
