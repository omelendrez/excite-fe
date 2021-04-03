import React from "react";
import { Input } from "antd";
const { Search: AntdSearch } = Input;

const Search = (props) => {
  const onSearch = (text) => {
    props.onSearch(text);
  };
  return (
    <AntdSearch
      placeholder="Buscar"
      onSearch={onSearch}
      allowClear
      style={{ width: 400 }}
    />
  );
};

export default Search;
