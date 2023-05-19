import server from "../server";
import qs from "qs";

export interface lightSchedule {
  time: string;
  date: string;
}

export const Insert = async ({ time, date }: lightSchedule) => {
  if (time === "" || date === "") {
    return;
  }

  const query = qs.stringify({
    time: time,
    date: date,
  });

  return (await server.get(`/BE/insert.php?${query}`)).data;
};
