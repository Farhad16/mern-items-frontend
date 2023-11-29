// TableActions.js
import { Button, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { useState } from "react";
import { useAuth } from "../../components/auth/AuthContext";
import {
  useItemDeleteMutation,
  useItemListQuery,
  useItemUpdateMutation,
} from "../../queries/item.queries";
import ReusableModal from "./ReusableModal";

const TableActions = ({ row }: any) => {
  const { user } = useAuth();
  const created_by = user?.email || " ";
  const { refetch } = useItemListQuery();

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editedName, setEditedName] = useState(row.name);

  const handleDeleteClick = () => {
    setDeleteModalOpen(true);
  };

  const handleEditClick = () => {
    setEditModalOpen(true);
  };

  const { deleteItemMutation, isLoading } = useItemDeleteMutation(
    row.original._id,
    created_by,
    {
      onSuccess: () => {
        setDeleteModalOpen(false);
        refetch();
      },
    }
  );

  const { updateItemMutation, updateLoading } = useItemUpdateMutation(
    row.original._id,
    {
      created_by,
      name: editedName,
    },
    {
      onSuccess: () => {
        setEditModalOpen(false);
        refetch();
      },
    }
  );

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
        onSuccess={deleteItemMutation}
        btnEl={
          isLoading ? (
            <CircularProgress className="!text-white !w-6 !h-6" />
          ) : (
            "Delete"
          )
        }
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
        onSuccess={updateItemMutation}
        btnEl={
          updateLoading ? (
            <CircularProgress className="!text-white !w-6 !h-6" />
          ) : (
            "Edit"
          )
        }
      />
    </>
  );
};

export default TableActions;
