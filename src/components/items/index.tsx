import React, { useMemo, useState } from "react";
import DataTable from "./DataTable";
import { columnData, data } from "../../utils/static.data";

function Items() {
  const [searchKey, setSearchKey] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(10);

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
    <div className="w-full min-h-screen overflow-hidden p-6 flex flex-col gap-4">
      <div className="flex flex-col sm:flex-row gap-8">
        <input
          type="text"
          onChange={handleChange}
          className="bg-white bg-opacity-10 border-none text-white px-3 pt-2 pb-3 rounded-lg"
          placeholder="Search..."
        />
        <div className="flex flex-row items-center gap-4">
          <span className="text-base text-white">Entities: </span>
          <select
            name="entities"
            id=""
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
            className="bg-[#0f172a] bg-opacity-30 border text-white px-3 pt-2 pb-3 rounded-lg"
            value={itemsPerPage}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
          </select>
        </div>
      </div>

      <DataTable data={filterData} columns={columns} />
    </div>
  );
}

export default Items;
