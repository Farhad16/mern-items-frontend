import { useMemo, useState } from "react";
import DataTable from "./DataTable";
import SearchIcon from "@mui/icons-material/Search";
import { columnData, data } from "./dummy.data";
import ReusableModal from "./ReusableModal";
import { createItem } from "../../apis/items.api";
import { getUser } from "../../utils/getUser";
import { useNavigate } from "react-router-dom";

function Items() {
  const [searchKey, setSearchKey] = useState("");
  const [itemName, setItemName] = useState("");
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const user = getUser();
  const navigate = useNavigate();

  const columns: any = useMemo(() => columnData, []);

  const handleChange = (e: any) => {
    setSearchKey(e.target.value);
  };

  const handleCreateClick = () => {
    if (!user) {
      // If user is not logged in, navigate to the login page
      navigate("/login");
    } else {
      // If user is logged in, open the create modal
      setCreateModalOpen(true);
    }
  };

  const handleCreateConfirm = async () => {
    const data = {
      name: itemName,
      created_by: user.name,
    };
    const item = await createItem(data);
    console.log(item);
    // Additional logic after creating item if needed
    setCreateModalOpen(false);
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
            className="bg-gray-600 pt-2 pb-3 p-10 bg-gray-00 pl-10 text-white placeholder:text-white w-full px-4 py-3 border rounded-md border-gray-300 focus:outline-none focus:ring-1 focus:border-blue-300"
            placeholder="Search..."
          />
          <SearchIcon className="absolute top-3 left-3 text-white" />
        </div>
        <button
          type="submit"
          onClick={handleCreateClick}
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
      <ReusableModal
        title="Create"
        content={
          <>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              onChange={(e) => setItemName(e.target.value)}
              className="mt-2 w-full px-4 py-3 border rounded-md border-gray-300 focus:outline-none focus:ring-1 focus:border-blue-300"
            />
          </>
        }
        open={createModalOpen}
        onClose={() => setCreateModalOpen(false)}
        onSuccess={handleCreateConfirm}
        btnText="Edit"
      />
    </div>
  );
}

export default Items;
