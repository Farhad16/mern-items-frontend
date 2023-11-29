import { useMutation, useQuery, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { simplifyError } from "../utils/error.util";
import {
  createItem,
  deleteItem,
  getAllItems,
  updateItem,
} from "../apis/items.api";

export enum ItemQueryEnum {
  ALL_ITEMS_QUERY = "all-items-fetch",
}

export const useItemListQuery = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ItemQueryEnum.ALL_ITEMS_QUERY,
    queryFn: getAllItems,
  });

  return { data: data || [], isLoading, refetch };
};

export const useItemCreateMutation = (
  updateData: {
    name: string;
    created_by: string;
  },
  params = {}
) => {
  const queryClient = useQueryClient();
  const { mutate: createItemMutation, isLoading } = useMutation(
    () => createItem(updateData),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(ItemQueryEnum.ALL_ITEMS_QUERY);
        toast.success("Item Created successfully", {
          position: "top-right",
          autoClose: 2000,
        });
      },
      onError: (error: any) => {
        const errorMessage = simplifyError(error);
        toast.error(errorMessage, { position: "top-right", autoClose: 2000 });
      },
      ...params,
    }
  );

  return { createItemMutation, isLoading };
};

export const useItemDeleteMutation = (
  id: string,
  created_by: string,
  params = {}
) => {
  const queryClient = useQueryClient();
  const { mutate: deleteItemMutation, isLoading } = useMutation(
    () => deleteItem(id, created_by),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(ItemQueryEnum.ALL_ITEMS_QUERY);
        toast.success("Item deleted successfully", {
          position: "top-right",
          autoClose: 2000,
        });
      },
      onError: (error: any) => {
        const errorMessage = simplifyError(error);
        toast.error(errorMessage, { position: "top-right", autoClose: 2000 });
      },
      ...params,
    }
  );

  return { deleteItemMutation, isLoading };
};

export const useItemUpdateMutation = (
  id: string,
  updateData: {
    name: string;
    created_by: string;
  },
  params = {}
) => {
  const queryClient = useQueryClient();
  const { mutate: updateItemMutation, isLoading: updateLoading } = useMutation(
    () => updateItem(id, updateData),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(ItemQueryEnum.ALL_ITEMS_QUERY);
        toast.success("Item updated successfully", {
          position: "top-right",
          autoClose: 2000,
        });
      },
      onError: (error: any) => {
        const errorMessage = simplifyError(error);
        toast.error(errorMessage, { position: "top-right", autoClose: 2000 });
      },
      ...params,
    }
  );

  return { updateItemMutation, updateLoading };
};
