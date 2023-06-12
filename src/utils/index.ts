import { useQuery } from "@tanstack/react-query";
import { Insert, Delete, deleteType } from "./auth";

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
  const useDeleteData = (id: deleteType) => {
    const DeleteData = useQuery(["Delete", id], () => Delete(id));
    return DeleteData;
  };
  return { useDeleteData };
};
