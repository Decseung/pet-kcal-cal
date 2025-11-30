// src/hooks/useFormHandler.js
import { useAtom } from "jotai";
import { setFormFieldAtom } from "../atoms/formAtoms";

export default function useFormHandler() {
  const [, setField] = useAtom(setFormFieldAtom);

  const handleFormInput = (key) => (e) => {
    setField({ key, value: e.target.value });
  };

  return { handleFormInput };
}
