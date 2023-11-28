import { useMemo, useState } from "react";
import DataTable from "./DataTable";
import SearchIcon from "@mui/icons-material/Search";
import { columnData, data } from "./dummy.data";

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
            className="pt-2 pb-3 p-10 bg-gray-400 pl-10 text-white placeholder:text-white w-full px-4 py-3 border rounded-md border-gray-300 focus:outline-none focus:ring-1 focus:border-blue-300"
            placeholder="Search..."
          />
          <SearchIcon className="absolute top-3 left-3 text-white" />
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
        <p className="text-lg text-white">No results found</p>
      )}
    </div>
  );
}

export default Items;
