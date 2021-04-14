import React from "react";
import { Input } from "antd";
const { Search: AntdSearch } = Input;

const Search = (props) => {
  const onSearch = (text) => {
    props.onSearch(text);
  };
  return (
    <AntdSearch
      className="search"
      placeholder={`Buscar por ${props.searchPlaceholder}`}
      onSearch={onSearch}
      allowClear
      style={{ width: 500, marginBottom: 10 }}
    />
  );
};

export default Search;
