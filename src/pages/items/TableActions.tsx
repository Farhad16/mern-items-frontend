// TableActions.js
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Menu, MenuItem, Typography } from "@mui/material";
import React, { useState } from "react";
import ReusableModal from "./ReusableModal";
import { updateItem } from "../../apis/items.api";
import { useAuth } from "../../components/auth/AuthContext";
import { toast } from "react-toastify";
import { simplifyError } from "../../utils/error.util";

const TableActions = ({ row }: any) => {
  const { user } = useAuth();

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editedName, setEditedName] = useState(row.name);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDeleteClick = () => {
    setDeleteModalOpen(true);
    handleClose();
  };

  const handleEditClick = () => {
    setEditModalOpen(true);
    handleClose();
  };

  const handleDeleteConfirm = () => {
    // Add your delete logic here
    setDeleteModalOpen(false);
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
      toast.success(error, {
        position: "top-right",
        autoClose: 2000,
      });
    } finally {
      setEditModalOpen(false);
    }
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="w-9 h-9 rounded-full hover:bg-slate-700 transition duration-300 ease-in-out"
      >
        <MoreVertIcon style={{ color: "#FFFFFF" }} />
      </button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleEditClick}>Edit</MenuItem>
        <MenuItem onClick={handleDeleteClick} sx={{ color: "red" }}>
          Delete
        </MenuItem>
      </Menu>

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
              Name
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
