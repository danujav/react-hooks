import { useState, useEffect } from "react";

export default function useParagraphCount() {
  const [count, setCount] = useState(10);

  function changeCount() {
    setCount((prev) => prev + 1);
  }

  useEffect(() => {
    console.log("The count value: " + count);
  }, [count]);

  return {
    count,
    changeCount,
  };
}
