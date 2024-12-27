import { useState } from "react";

function Search({ onClick }) {
  let [search, setSearch] = useState("");

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    onClick(search); // Truyền giá trị searchTerm về App.js
  };

  return (
    <div className="search-staff col-sm-6 col-12">
      <div>
        <input
          className="mt-1"
          style={{ width: "50%" }}
          type="text"
          placeholder="Tìm kiếm..."
          value={search}
          onChange={handleInputChange}
        />

        <button className="btn btn-primary ms-3" onClick={handleSearch}>
          {" "}
          Search{" "}
        </button>
      </div>
    </div>
  );
}

export default Search;
