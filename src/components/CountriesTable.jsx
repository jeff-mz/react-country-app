import { Link } from "react-router-dom";

function CountriesTable({ countries }) {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center place-items-center place-content-center">
      {countries.map((country) => {
        return (
          <div
            key={country.name.common}
            style={{ boxShadow: " rgba(0, 0, 0, 0.09) 0px 3px 12px" }}
            className="custom-card w-[80%] md:w-[70%] h-[350px] bg-Light-Elements text-Dark-Text dark:bg-Dark-Elements dark:text-Light-Text my-5 "
          >
            <img
              src={country.flags.png}
              alt={country.flags.alt}
              className="w-full h-[150px]"
            />

            <ul className="p-5">
              <li className="font-[800] text-2xl my-5">
                <Link to={`/country/${country.name.common}`}>
                  {country.name.common}
                </Link>
              </li>
              <li className="text-base my-1">
                <span className="font-[600]">Population: </span>
                {country.population}
              </li>
              <li className="text-base my-1">
                <span className="font-[600]">Region: </span>
                {country.region}
              </li>
              <li className="text-base my-1">
                <span className="font-[600]">Capital: </span>
                {country.capital && country.capital[0]}
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default CountriesTable;
