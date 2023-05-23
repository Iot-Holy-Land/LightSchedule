import { atom } from "recoil";

export const currentTime = atom({
  key: "currentTime",
  default: "",
});

export const currentDate = atom({
  key: "currentDate",
  default: "",
});

export const inputAmPm = atom({
  key: "inputAmPm",
  default: "",
});
