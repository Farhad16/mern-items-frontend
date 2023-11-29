// TableActions.js
import { Button, Typography } from "@mui/material";
import { useState } from "react";
import { toast } from "react-toastify";
import { deleteItem, updateItem } from "../../apis/items.api";
import { useAuth } from "../../components/auth/AuthContext";
import { simplifyError } from "../../utils/error.util";
import ReusableModal from "./ReusableModal";

const TableActions = ({ row }: any) => {
  const { user } = useAuth();

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editedName, setEditedName] = useState(row.name);

  const handleDeleteClick = () => {
    setDeleteModalOpen(true);
  };

  const handleEditClick = () => {
    setEditModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      const created_by = user?.email || " ";
      await deleteItem(row.original._id, created_by);
      toast.success("Item deleted successfully", {
        position: "top-right",
        autoClose: 2000,
      });
    } catch (error) {
      const errorMessage = simplifyError(error);
      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 2000,
      });
    } finally {
      setDeleteModalOpen(false);
    }
  };

  const handleEditConfirm = async () => {
    try {
      const editedData = {
        name: editedName,
        created_by: user?.email || "",
      };

      const updatedItem = await updateItem(row.original._id, editedData);

      if (updatedItem) {
        toast.success("Item created successfully", {
          position: "top-right",
          autoClose: 2000,
        });
      }
    } catch (err) {
      const error = simplifyError(err);
      toast.error(error, {
        position: "top-right",
        autoClose: 2000,
      });
    } finally {
      setEditModalOpen(false);
    }
  };

  return (
    <>
      <div className="flex flex-row gap-2 items-center">
        <Button
          onClick={handleEditClick}
          variant="outlined"
          color="inherit"
          className="mr-2"
        >
          Edit
        </Button>
        <Button
          onClick={handleDeleteClick}
          sx={{ color: "red" }}
          variant="outlined"
          color="inherit"
          className="mr-2"
        >
          Delete
        </Button>
      </div>

      <ReusableModal
        title="Delete"
        content={<Typography>Do you want to delete?</Typography>}
        open={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onSuccess={handleDeleteConfirm}
        btnText="Delete"
      />

      {/* Edit Modal */}
      <ReusableModal
        title="Edit"
        content={
          <>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Item name
            </label>
            <input
              type="text"
              id="name"
              defaultValue={row.original.name}
              onChange={(e) => setEditedName(e.target.value)}
              className="mt-2 w-full px-4 py-3 border rounded-md border-gray-300 focus:outline-none focus:ring-1 focus:border-blue-300"
            />
          </>
        }
        open={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        onSuccess={handleEditConfirm}
        btnText="Edit"
      />
    </>
  );
};

export default TableActions;
