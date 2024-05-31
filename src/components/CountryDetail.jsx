import NavHeader from "./NavHeader";
import { IoMdArrowBack } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function CountryDetail() {
  const { name } = useParams();
  const [country, setCountry] = useState([]);

  useEffect(() => {
    const fetchCountryDetail = async () => {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${name.toLowerCase()}`
        );
        const data = await response.json();
        setCountry(data);
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    };
    fetchCountryDetail();
    console.log(country);
  }, []);

  return (
    <div>
      <NavHeader />
      <section className="w-full min-h-screen p-5 bg-Light-Background dark:bg-Dark-Background">
        <Link
          to="/"
          className=" w-[90px] bg-Light-Elements text-Dark-Text flex items-center justify-between p-3 md:py-3 md:px-8 rounded-md text-2xl dark:bg-Dark-Elements dark:text-Light-Text"
        >
          <IoMdArrowBack className=" text-Dark-Text dark:text-Light-Background" />
          Back
        </Link>
        <div>
          {country.length ? (
            <div>
              <div
                key={country[0].name.common}
                style={{ boxShadow: " rgba(0, 0, 0, 0.09) 0px 3px 12px" }}
                className="container m-auto my-5 flex flex-col md:flex-row items-start justify-start "
              >
                <img
                  src={country[0].flags.png}
                  alt={country[0].flags.alt}
                  className="w-1/2"
                />

                <ul className="p-5">
                  <li className="font-[800] text-5xl my-5">
                    {country[0].name.common}
                  </li>
                  <li className="text-2xl my-4">
                    <span className="font-[600]">Population: </span>
                    {country[0].population}
                  </li>
                  <li className="text-2xl my-4">
                    <span className="font-[600]">Region: </span>
                    {country[0].region}
                  </li>
                  <li className="text-2xl my-4">
                    <span className="font-[600]">Capital: </span>
                    {country[0].capital && country[0].capital[0]}
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
