import { useEffect, useState } from "react";

export default function ButtonCount() {
  const { count, changeCount } = useParagraphCount();

  return (
    <div className="pt-5">
      <p>You clicked {count} times</p>
      <button
        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mt-5"
        onClick={changeCount}
      >
        Click me
      </button>
    </div>
  );
}

function useParagraphCount() {
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
