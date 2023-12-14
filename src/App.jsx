import React, { useState } from "react";
import FoodBox from "./components/FoodBox";
import SearchBox from "./components/SearchBox";
import FoodData from "./components/FoodData";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <>
      <SearchBox handleSearch={handleSearch} />
        {FoodData.filter((val) =>
        searchTerm === "" ? true : val.name.toLowerCase().includes(searchTerm.toLowerCase())
        ).map((foodItem) => (
          <div key={foodItem.id} style={{ marginBottom: '25px', marginLeft: '100px' }}>
          <FoodBox food={foodItem} />
        </div>
      ))}
    </>
  );
};

export default App;