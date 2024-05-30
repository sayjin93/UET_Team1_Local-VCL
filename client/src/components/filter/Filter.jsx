import "./filter.scss";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Select from "react-select";
import apiRequest from "@/lib/apiRequest";

function Filter() {
  //#region hooks
  const [searchParams, setsearchParams] = useSearchParams();
  const [cities, setCities] = useState([]);
  //#endregion

  //#region states
  const [query, setQuery] = useState({
    type: searchParams.get("type") || "",
    city: searchParams.get("city") || "",
    property: searchParams.get("property") || "",
    minPrice: searchParams.get("minPrice") || 0,
    maxPrice: searchParams.get("maxPrice") || 10000000,
    bedroom: searchParams.get("bedroom") || "",
  });
  //#endregion

  //#region functions
  const handleChangeSelect = (newValue, actionMeta) => {
    if (actionMeta.action === "select-option") {
      setQuery({
        ...query,
        city: newValue.value,
      });
    }
  };

  const handleChange = (e) => {
    setQuery({
      ...query,
      [e.target.name]: e.target.value,
    });
  };

  const handleFilter = () => {
    const updatedQuery = {
      ...query,
      minPrice: query.minPrice.toString(),
      maxPrice: query.maxPrice.toString(),
      bedroom: query.bedroom.toString(),
    };
    setsearchParams(updatedQuery);
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

  // Find the selected city object from the cities array
  const selectedCity = cities.find((city) => city.value === query.city);

  return (
    <div className="filter">
      <h1>
        Search results for <b>{searchParams.get("city")}</b>
      </h1>
      <div className="top">
        <div className="item">
          <label htmlFor="city">City</label>
          <Select
            className="react-select-container"
            classNamePrefix="react-select"
            options={cities}
            placeholder="City Location"
            value={selectedCity}
            onChange={handleChangeSelect}
          />
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label htmlFor="type">Type</label>
          <select
            name="type"
            id="type"
            onChange={handleChange}
            defaultValue={query.type}
          >
            <option value="">any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="property">Property</label>
          <select
            name="property"
            id="property"
            onChange={handleChange}
            defaultValue={query.property}
          >
            <option value="">any</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="office">Office</option>
            <option value="land">Land</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="minPrice">Min Price</label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            placeholder="any"
            onChange={handleChange}
            defaultValue={query.minPrice}
          />
        </div>
        <div className="item">
          <label htmlFor="maxPrice">Max Price</label>
          <input
            type="text"
            id="maxPrice"
            name="maxPrice"
            placeholder="any"
            onChange={handleChange}
            defaultValue={query.maxPrice}
          />
        </div>
        <div className="item">
          <label htmlFor="bedroom">Bedroom</label>
          <input
            type="text"
            id="bedroom"
            name="bedroom"
            placeholder="any"
            onChange={handleChange}
            defaultValue={query.bedroom}
          />
        </div>
        <button onClick={handleFilter}>
          <img src="/search.png" alt="" />
        </button>
      </div>
    </div>
  );
}

export default Filter;
