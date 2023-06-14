import { useQuery } from "@tanstack/react-query";
import { Insert, Delete, deleteUpdateType, Update } from "./auth";

export const useInsert = () => {
  const useInsertData = (
    copytime: string,
    time: string,
    date: string,
    ampm: string
  ) => {
    const InsertData = useQuery(["Insert", copytime, time, date, ampm], () =>
      Insert({ copytime, time, date, ampm })
    );
    return InsertData;
  };
  return { useInsertData };
};

export const useDelete = () => {
  const useDeleteData = (id: deleteUpdateType) => {
    const DeleteData = useQuery(["Delete", id], () => Delete(id));
    return DeleteData;
  };
  return { useDeleteData };
};

export const useUpdate = () => {
  const useUpdateData = (
    id: string,
    copytime: string,
    time: string,
    ampm: string
  ) => {
    const UpdateData = useQuery(["Update", id, copytime, time, ampm], () =>
      Update({ id, copytime, time, ampm })
    );
    return UpdateData;
  };
  return { useUpdateData };
};
