import React, { useState, useEffect } from "react";
import { Input } from "antd";
import { fetchPokemon, fetchPokemonsWithDetails } from "../slices/dataSlice";
import { useDispatch } from "react-redux";

const Searcher = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSearch = () => {
    if (inputValue.trim().length > 2) {
      dispatch(fetchPokemon(inputValue));
    }
    if (inputValue === "") {
      dispatch(fetchPokemonsWithDetails());
    }
  };
  useEffect(() => {
    dispatch(fetchPokemonsWithDetails());
  }, []);

  return (
    <div>
      <Input.Search
        placeholder="Buscar"
        style={{ marginBottom: "10px" }}
        allowClear
        onChange={handleInputChange}
        onSearch={handleSearch}
      />
    </div>
  );
};

export default Searcher;
