import { BsSearch } from "react-icons/bs";

const Searchbar = () => {
  return (
    <div className="flex justify-normal items-center">
      <input
        className="border-[1px] p-1 rounded-md mr-2 drop-shadow-sm"
        placeholder="Search.."
        type="text"
      />
      <button className="border-[1px] w-[100px] rounded-md flex justify-evenly items-center p-1 text-md drop-shadow-md bg-blue-300">
        <BsSearch />
        <span>Search</span>
      </button>
    </div>
  );
};

export default Searchbar;
