function FilterPanel({filterVal, setFilterVal}) {
  return (
    <div className="my-3 w-[200px] md:my-0 ml-3 bg-Light-Elements dark:bg-Dark-Elements text-Light-Input dark:text-Light-Text rounded-md">
      <select
      value={filterVal}
      onChange={(event)=>{
        setFilterVal(event.target.value)
      }}
        className="py-2 px-5 rounded-md md:py-2  bg-Light-Elements dark:bg-Dark-Elements text-Light-Input dark:text-Light-Text"
      >
        <option value="">Filter By Region </option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  );
}

export default FilterPanel;
