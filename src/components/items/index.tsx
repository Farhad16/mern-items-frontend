import { useMemo, useState } from "react";
import DataTable from "./DataTable";
import { columnData, data } from "../../utils/static.data";
import SearchIcon from "@mui/icons-material/Search";

function Items() {
  const [searchKey, setSearchKey] = useState("");

  const columns: any = useMemo(() => columnData, []);

  const handleChange = (e: any) => {
    setSearchKey(e.target.value);
  };

  const filterData: any = useMemo(() => {
    const searchTerm = searchKey.toLowerCase().trim();
    return data.filter((item: any) => {
      for (let key in item) {
        if (
          typeof item[key] === "string" &&
          item[key].toLowerCase().includes(searchTerm)
        ) {
          return true;
        }
      }
      return false;
    });
  }, [searchKey]);

  return (
    <div className="w-full min-h-screen overflow-hidden py-8 flex flex-col gap-4 items-center">
      <div className="flex items-center justify-between gap-4 w-full">
        <div className="relative w-1/2">
          <input
            type="text"
            onChange={handleChange}
            className="bg-gray-100 focus:outline-none px-3 pt-2 pb-3 rounded-lg pl-10 w-full border text-black border-gray-500 placeholder:text-black"
            placeholder="Search..."
          />
          <SearchIcon className="absolute top-3 left-3 text-black" />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md focus:outline-none focus:shadow-outline"
        >
          Create
        </button>
      </div>

      {filterData.length > 0 ? (
        <DataTable data={filterData} columns={columns} />
      ) : (
        <p className="text-lg text-black">No results found</p>
      )}
    </div>
  );
}

export default Items;
