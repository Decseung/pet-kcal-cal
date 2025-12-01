import { atom } from "jotai";

export const productAtom = atom([]);

export const setProductAtom = atom(null, (get, set, selectProduct) => {
  const prev = get(productAtom);
  set(productAtom, [...prev, selectProduct]);
});
