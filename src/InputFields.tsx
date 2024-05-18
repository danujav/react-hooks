import React, { useEffect, useState } from "react";

export default function InputFields() {
  const name = useFormInput("Danuja");
  const surname = useFormInput("Greru");

  useDocumentTitle(name.value + ' ' + surname.value);

  return (
    <div className="flex flex-col space-y-10 max-w-72 pt">
      <p>Hey input your name</p>
      <input
        className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        type="text"
        placeholder="input your name"
        {...name}
      />
      <input
        className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        placeholder="input your surename"
        {...surname}
      />
    </div>
  );
}

function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}

function useFormInput(initialValue: string) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange,
  };
}
