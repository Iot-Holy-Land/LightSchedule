import server from "../server";
import qs from "qs";

interface lightSchedule {
  time: string;
  date: string;
}

export const View = async () => {
  return (await server.get("/BE/view.php")).data;
};

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
