import { useQuery } from "@tanstack/react-query";
import { Insert } from "./auth";

export const useInsert = () => {
  const useInsertData = (time: string, date: string) => {
    const InsertData = useQuery(["Test", time, date], () =>
      Insert({ time, date })
    );
    return InsertData;
  };
  return { useInsertData };
};
