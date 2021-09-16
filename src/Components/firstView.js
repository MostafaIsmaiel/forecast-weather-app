import { useState } from "react";

const FirstView = ({ updateCity, currentLocation, lat, lng }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      updateCity(value);
      setValue("");
    }
  };

  return (
    <div className="first-view">
      <form className="search-container">
        <i className="fas fa-search"></i>
        <input
          type="search"
          name="search"
          id="search"
          value={value}
          className="search"
          placeholder="Search for places ..."
          onChange={(e) => setValue(e.target.value)}
          checked
        />
        <button id="submit" className="submit" onClick={handleSubmit}>
          <img
            src="./images/icons/location.png"
            alt="location"
            className="location"
            title="submit"
          />
        </button>
      </form>
      <div
        className="current-location"
        onClick={() => {
          currentLocation(lat, lng);
        }}
      >
        <img
          src="./images/icons/location-off.png"
          alt="location off"
          title="Current location"
        />
      </div>
    </div>
  );
};

export default FirstView;
