import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./searchBar.css";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Search for:", searchQuery);
  };

  return (
    <div className="searchBarContainer">
      <form onSubmit={handleSubmit} className="searchBarForm">
        <div className="searchBarInputContainer">
          <FontAwesomeIcon icon={faSearch} className="searchIcon" />
          <input
            type="search"
            id="search"
            name="search"
            placeholder="Article name or keywords..."
            value={searchQuery}
            onChange={handleInputChange}
          />
        </div>
      </form>
      <button type="submit" className="searchButton">Search</button>
    </div>
  );
}
