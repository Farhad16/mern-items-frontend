import { useEffect, useMemo, useState } from "react";
import DataTable from "./DataTable";
import SearchIcon from "@mui/icons-material/Search";
import ReusableModal from "./ReusableModal";
import { createItem, getAllItems } from "../../apis/items.api";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../components/auth/AuthContext";
import { toast } from "react-toastify";
import { simplifyError } from "../../utils/error.util";
import { columnData } from "./dummy.data";

function Items() {
  const [searchKey, setSearchKey] = useState("");
  const [itemName, setItemName] = useState("");
  const [createModalOpen, setCreateModalOpen] = useState(false);

  const [itemData, setItemData] = useState([null]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await getAllItems();
    setItemData(data);
  }

  const { user } = useAuth();
  const navigate = useNavigate();

  const columns: any = useMemo(() => columnData, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKey(e.target.value);
  };

  const handleCreateClick = () => {
    console.log(user);
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
      created_by: user?.email,
    };
    try {
      const response = await createItem(data);
      if (response) {
        toast.success("Item created successfully", {
          position: "top-right",
          autoClose: 2000,
        });
        fetchData();
      }
    } catch (err) {
      const error = simplifyError(err);
      toast.success(error, {
        position: "top-right",
        autoClose: 2000,
      });
    } finally {
      setCreateModalOpen(false);
    }
  };

  const filterData: any = useMemo(() => {
    const searchTerm = searchKey.toLowerCase().trim();
    return itemData.filter((item: any) => {
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
  }, [searchKey, itemData]);

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
          Create Item
        </button>
      </div>

      {filterData.length > 0 ? (
        <DataTable data={filterData} columns={columns} />
      ) : (
        <p className="text-lg text-white">No results found</p>
      )}
      <ReusableModal
        title="Create new item"
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
        btnText="Create"
      />
    </div>
  );
}

export default Items;
