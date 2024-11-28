import React, { useEffect, useState } from 'react';

export default function Localstorage() {

  const [values, setValues] = useState({
    name: "",
    email: "",
  });

  const [data, setData] = useState(() => {
    const saveData = JSON.parse(localStorage.getItem("data"));
    return saveData || [];
  });

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  function submitForm(e) {
    e.preventDefault();
    if (values.name && values.email) { 
      setData([...data, values]);
      setValues({ name: "", email: "" }); 
    }
  }
  function editItem(index) {
    const tempData = [...data];
    const updatedName = prompt("Enter new name:", tempData[index].name);
    const updatedEmail = prompt("Enter new email:", tempData[index].email);

    if (updatedName && updatedEmail) {
      tempData[index] = { ...tempData[index], name: updatedName, email: updatedEmail };
      setData(tempData);
    }
  }

  function deleteItem(index) {
    const filteredData = data.filter((_, i) => i !== index);
    setData(filteredData);
  }


  function clearAll() {
    setData([]);
  }

  return (
    <div>
      <h1>CRUD with LocalStorage</h1>
      
      <form onSubmit={submitForm}>
        <input 
          type="text" 
          placeholder='Enter the name' 
          value={values.name}
          onChange={(e) => setValues({ ...values, name: e.target.value })}
        />
        <input 
          type="text" 
          placeholder='Enter the email' 
          value={values.email}
          onChange={(e) => setValues({ ...values, email: e.target.value })}
        />
        <button type="submit">Submit</button>
      </form>

      <ul>
        {data.map((el, i) => (
          <li key={i}>
            <span>{el.name}</span> - <span>{el.email}</span>
            <button onClick={() => editItem(i)}>Edit</button>
            <button onClick={() => deleteItem(i)}>Delete</button>
          </li>
        ))}
      </ul>

      {data.length > 0 && (
        <button onClick={clearAll}>Clear All</button>
      )}
    </div>
  );
}