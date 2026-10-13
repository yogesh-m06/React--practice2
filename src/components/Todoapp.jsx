import React, { useState } from "react";
import { MdAutoDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { IoMdAddCircleOutline } from "react-icons/io";
import { CiSaveDown2 } from "react-icons/ci";

const Todoapp = () => {
  const [Items, setItems] = useState([
    { id: 1, label: "Html&css", checked: true },
    { id: 2, label: "javascript", checked: true },
    { id: 3, label: "python", checked: false },
  ]);

  const [newItem, setNewItem] = useState("");
  const [Isediting, setIsediting] = useState(false);
  const [currenteleID, setcurrenteleID] = useState(null);

  // Checked change
  const handleChecked = (id) => {
    const newListItem = Items.map((item) =>
      item.id === id
        ? { ...item, checked: !item.checked }
        : item
    );

    setItems(newListItem);
  };

  // Handle update
  const handleupdate = (id) => {
    const newListItem = Items.find((item) => item.id === id);

    setNewItem(newListItem.label);
    setIsediting(true);
    setcurrenteleID(id);
  };

  // Handle delete
  const handledelete = (id) => {
    const newdeleteitem = Items
      .filter((item) => item.id !== id)
      .map((item, index) => ({
        ...item,
        id: index + 1,
      }));

    setItems(newdeleteitem);
  };

  // Handle save or add
  const handleAddorTure = () => {
    if (newItem.trim() === "") return;

    if (Isediting) {
      const newupdetelist = Items.map((item) =>
        item.id === currenteleID
          ? { ...item, label: newItem }
          : item
      );

      setItems(newupdetelist);
      setcurrenteleID(null);
      setNewItem("");
      setIsediting(false);
    } else {
      setItems([
        ...Items,
        {
          id: Items.length + 1,
          label: newItem,
          checked: false,
        },
      ]);

      setNewItem("");
    }
  };

  // Enter key
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddorTure();
  };

  return (
    <main>
      <section>
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter the name"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
            />

            <button type="submit">
              {Isediting ? (
                <CiSaveDown2 />
              ) : (
                <IoMdAddCircleOutline />
              )}
            </button>
          </form>
        </div>

        <ul>
          {Items.map((item) => (
            <li key={item.id} className="item">
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleChecked(item.id)}
              />

              <label>{item.label}</label>

              <FaEdit
                role="button"
                tabIndex={0}
                onClick={() => handleupdate(item.id)}
              />

              <MdAutoDelete
                role="button"
                tabIndex={0}
                onClick={() => handledelete(item.id)}
              />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Todoapp;
