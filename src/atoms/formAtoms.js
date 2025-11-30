import { atom } from "jotai";

export const formAtom = atom({
  petType: "",
  age: 0,
  weight: 0,
  activity: "low",
  neutering: "",
  foodType: "mix",
  dailyAmount: 0,
});

export const setFormFieldAtom = atom(null, (get, set, { key, value }) => {
  const prev = get(formAtom);
  set(formAtom, { ...prev, [key]: value });
});
