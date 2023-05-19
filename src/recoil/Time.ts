import { atom } from "recoil";

export const currentTime = atom({
  key: "currentTime",
  default: "00시00분",
});

export const inputTime = atom<any>({
  key: "inputTime",
  default: "00시00분",
});

export const matching = atom({
  key: "matching",
  default: false,
});
