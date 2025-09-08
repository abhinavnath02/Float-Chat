import { useState } from "react";
import { FaSearch } from "react-icons/fa";

import "./SearchBar.css";

export const SearchBar = ({ setResults = () => {} }) => {
  const [input, setInput] = useState("");
  const [notification, setNotification] = useState("");

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value.toLowerCase())
          );
        });
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setNotification("Backend Model not connected yet....");

      // Auto-hide after 3 seconds
      setTimeout(() => setNotification(""), 3000);
    }
  };

  return (
    <div className="relative w-full">
      <div className="input-wrapper">
        <FaSearch id="search-icon" />
        <input
          placeholder="Type to search..."
          value={input}
          onChange={(e) => handleChange(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>

      {/* Notification box */}
      {notification && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-lg shadow-lg z-50">
          {notification}
        </div>
      )}
    </div>
  );
};
