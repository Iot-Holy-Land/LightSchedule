import { atom } from "recoil";

export const Status = atom({
  key: "Status",
  default: "",
});

export const Check = atom({
  key: "Check",
  default: false,
});

export const Id = atom<any>({
  key: "id",
  default: 0,
});
