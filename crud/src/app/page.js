// pages/index.js
"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const res = await fetch("/api/items");
    const data = await res.json();
    setItems(data.data);
  };

  const addItem = async () => {
    const res = await fetch("/api/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    });
    if (res.ok) {
      fetchItems();
      setName("");
    }
  };

  const deleteItem = async (id) => {
    const res = await fetch(`/api/items/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      fetchItems();
    }
  };

  return (
    <div>
      <h1>CRUD App with Next.js and MongoDB</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item) => (
          <li key={item._id}>
            {item.name}{" "}
            <button onClick={() => deleteItem(item._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
