import React from "react";
import { Input } from "antd";
const { Search: AntdSearch } = Input;

const Search = (props) => {
  const handleChange = (e) => {
    const search = e.target?.value || "";
    props.onSearch(search);
  };
  return (
    <AntdSearch
      className="search"
      placeholder={`Buscar por ${props.searchPlaceholder}`}
      onSearch={handleChange}
      allowClear
      onChange={handleChange}
      style={{ width: 500, marginBottom: 10 }}
    />
  );
};

export default Search;
