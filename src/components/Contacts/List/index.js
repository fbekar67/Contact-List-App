import { useState } from "react";


function List({ contacts }) {
  const [filterText, setFilterText] = useState("");

  const filtered = contacts.filter((item)=>{
    return Object.keys(item).some((key)=>{
      return item[key].toString().toLowerCase().includes(filterText.toLowerCase());
    })
  });
  return (
    <div>
      <input
        placeholder="Filter Contact"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      ></input>
      <div className="tittle">
        <span>Fullname</span>
        <span>Phone Number</span>

      </div>

      <ul className="list">
        {filtered.map((contacts, i) => (
          <li key={i}>
            <span>{contacts.fullname}</span>
            <span>{contacts.phone_number}</span>
          </li>
        ))}
      </ul>
      <p>
        Total Contacts : ({filtered.length})
      </p>
    </div>
  );
}

export default List;
