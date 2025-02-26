function FilterPanel({ filterVal, setFilterVal }) {
  return (
    <div className="my-3 mb-4 h-[70px] md:mb-0 w-[200px] md:my-0 ml-3 bg-Light-Elements dark:bg-Dark-Elements text-Light-Input dark:text-Light-Text rounded-md flex justify-start md:mr-3">
      <select
        value={filterVal}
        onChange={(event) => {
          setFilterVal(event.target.value);
        }}
        className="py-2 px-4 rounded-md md:py-2  bg-Light-Elements dark:bg-Dark-Elements text-Light-Input dark:text-Light-Text outline-none text-base"
      >
        <option className="w-[200px]" value="">
          Filter By Region{" "}
        </option>
        <option className="w-[200px]" value="africa">
          Africa
        </option>
        <option className="w-[200px]" value="america">
          America
        </option>
        <option className="w-[200px]" value="asia">
          Asia
        </option>
        <option className="w-[200px]" value="europe">
          Europe
        </option>
        <option className="w-[200px]" value="oceania">
          Oceania
        </option>
      </select>
    </div>
  );
}

export default FilterPanel;
