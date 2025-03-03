import React, { useState } from "react";

const initialData = [
  { id: 1, name: "aaa", city: "xxx" },
  { id: 2, name: "bbb", city: "yyy" },
  { id: 3, name: "ccc", city: "zzz" }
];

const TableWithButtons = () => {
  const [data, setData] = useState(initialData);

  // Function to delete row
  const deleteRow = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };

  // Function to copy row and add it as a new row
  const copyRow = (item) => {
    const newItem = { ...item, id: Date.now() }; // New unique id using current timestamp
    setData([...data, newItem]);
  };

  return (
    <div>
      <table border="1" cellPadding="10" cellSpacing="0" style={{ width: "100%", marginBottom: "20px" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>City</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.city}</td>
              <td>
                {/* Copy button */}
                <button onClick={() => copyRow(item)}>Copy</button>
                &nbsp;&nbsp;
                {/* Delete button */}
                <button onClick={() => deleteRow(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableWithButtons;
