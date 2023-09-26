import React from "react";
import { Input } from "antd";

const Searcher = () => {
  return (
    <div>
      <Input.Search placeholder="Buscar" style={{ marginBottom: "10px" }} />
    </div>
  );
};

export default Searcher;
