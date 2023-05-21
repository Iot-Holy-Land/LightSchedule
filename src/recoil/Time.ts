import { atom } from "recoil";

export const currentTime = atom({
  key: "currentTime",
  default: "",
});

export const matching = atom({
  key: "matching",
  default: false,
});

export const currentDate = atom({
  key: "currentDate",
  default: "",
});
