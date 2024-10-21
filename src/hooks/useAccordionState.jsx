import { useState } from "react";

export function useAccordionState() {
  const [isAcc, setIsAcc] = useState(true);
  const toggleIsAcc = () => setIsAcc((prev) => !prev);
  return [isAcc, toggleIsAcc];
}
