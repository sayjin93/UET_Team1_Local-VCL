import "./searchBar.scss";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";

import apiRequest from "@/lib/apiRequest";

const types = ["buy", "rent"];

function SearchBar() {
  //#region states
  const [query, setQuery] = useState({
    type: "buy",
    city: "",
    minPrice: 0,
    maxPrice: 0,
  });
  const [cities, setCities] = useState([]);
  //#endregion

  //#region functions
  const handleChangeType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };
  const handleChangeSelect = (newValue, actionMeta) => {
    if (actionMeta.action === "select-option") {
      setQuery((prev) => ({ ...prev, city: newValue.value }));
    }
  };
  const handleChange = (e) => {
    setQuery((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  //#endregion

  //#region useEffect
  useEffect(() => {
    const fetchCities = async () => {
      try {
        const res = await apiRequest("/others/cities");
        setCities(res.data.cities);
      } catch (error) {
        console.error("Failed to fetch cities:", error);
      }
    };
    fetchCities();
  }, []);
  //#endregion

  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => handleChangeType(type)}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>

      <form>
        <Select
          className="react-select-container"
          classNamePrefix="react-select"
          options={cities}
          placeholder="City"
          onChange={handleChangeSelect}
        />

        {/* <input
          type="text"
          name="city"
          placeholder="City"
          onChange={handleChange}
        /> */}
        <input
          type="number"
          name="minPrice"
          min={0}
          max={10000000}
          placeholder="Min Price"
          onChange={handleChange}
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={10000000}
          placeholder="Max Price"
          onChange={handleChange}
        />
        <Link
          to={`/list?type=${query.type}&city=${query.city}&minPrice=${query.minPrice}&maxPrice=${query.maxPrice}`}
        >
          <button>
            <img src="/search.png" alt="" />
          </button>
        </Link>
      </form>
    </div>
  );
}

export default SearchBar;
