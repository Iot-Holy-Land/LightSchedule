import server from "../server";
import qs from "qs";

export interface lightSchedule {
  time: string;
  date: string;
}
export interface deleteType extends lightSchedule {
  id: number;
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

export const Delete = async (id: any) => {
  return (await server.get(`/BE/delete.php?id=${id}`)).data;
};

// export const Insert = async ({ time, date }: lightSchedule) => {
//   if (time === "" || date === "") {
//     return;
//   }
//   console.log("보내는 값 : ", time, date);
//   return (
//     await server.post("/BE/insert.php", {
//       time: time,
//       date: date,
//     })
//   ).data;
// };
