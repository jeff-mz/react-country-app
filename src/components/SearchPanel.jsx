import { IoIosSearch } from "react-icons/io";
function SearchPanel({searchVal,setSearchVal}) {
  return (
    <div className=" w-[90%] md:w-[400px]  ml-3 flex justify-start items-center bg-Light-Elements dark:bg-Dark-Elements dark:text-Light-Text rounded-md">
      <IoIosSearch className="w-[50px] text-2xl text-Light-Input" />
      <input
        type="text"
        name="search-input"
        id="search-input"
        placeholder="Search for a country"
        className="w-[250px] px-3 py-2 outline-none border-none text-base text-Light-Input bg-Light-Elements dark:bg-Dark-Elements dark:text-Light-Text rounded-md custom-input focus-ring-0"
        value={searchVal}
        onChange={(e)=>{
          setSearchVal(e.target.value)

        }}
      />
    </div>
  );
}

export default SearchPanel;
