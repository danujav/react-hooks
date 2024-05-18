import React, { useEffect, useState } from "react";

export default function InputFields() {
  const [name, setName] = useState("Danuja");
  const [surname, setSurname] = useState("Greru");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleSurnameChange(e) {
    setSurname(e.target.value);
  }

  useEffect(() => {
      document.title = name + ' ' + surname;
  }, [name, surname]);

  return (
    <div className="flex flex-col space-y-10 max-w-72 pt">
      <p>Hey input your name</p>
      <input
        className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        type="text"
        placeholder="input your name"
        value={name}
        onChange={handleNameChange}
      />
      <input
        className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        placeholder="input your surename"
        value={surname}
        onChange={handleSurnameChange}
      />
    </div>
  );
}
