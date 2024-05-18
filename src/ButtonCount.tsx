import { useEffect, useState } from "react";

export default function ButtonCount() {
  const [count, setCount] = useState(10);

  // Component Did Mount
  useEffect(() => {
    document.title = `Initial count ${count}`;
  }, []); // Empty dependency, this will ensure to this effect runs only once

  // Component Did Update
  useEffect(() => {
    console.log("The count value: " + count);
  }, [count]);

  // Component Will Unmount
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('hy');
    }, 1000);

    // Cleanup function
    return () => {clearInterval(timer)}
  }, []);


  return (
    <div className="pt-5">
      <p>You clicked {count} times</p>
      <button
        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mt-5"
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Click me
      </button>
    </div>
  );
}
