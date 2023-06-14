import { server } from "../server";

import qs from "qs";

export interface lightSchedule {
  copytime: string;
  time: string;
  date: string;
  ampm: string;
}
export interface deleteUpdateType extends lightSchedule {
  id: number;
}

export const View = async () => {
  return (await server.get("/BE/view.php")).data;
};

export const Insert = async ({ copytime, time, date, ampm }: lightSchedule) => {
  if (time.length === 0 || ampm === "") {
    return;
  }
  const query = qs.stringify({
    copytime: copytime,
    time: time,
    date: date,
    ampm: ampm,
  });
  return (await server.get(`/BE/insert.php?${query}`)).data;
};

export const Delete = async (id: any) => {
  return (await server.get(`/BE/delete.php?id=${id}`)).data;
};

export const Update = async ({ id, copytime, time, date, ampm }: any) => {
  const query = qs.stringify({
    id: id,
    copytime: copytime,
    time: time,
    date: date,
    ampm: ampm,
  });
  return (await server.get(`/BE/update.php?${query}`)).data;
};
