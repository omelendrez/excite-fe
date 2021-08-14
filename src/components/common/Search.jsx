import React, { useEffect, useState } from "react";
import { Input } from "antd";
import { getPathProps, setPathProps } from "services";
const { Search: AntdSearch } = Input;

const Search = (props) => {
  const { onSearch, path } = props;
  const pathProps = getPathProps(path);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const newPathProps = { ...pathProps };
    setSearch(newPathProps.search || "");
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const newPathProps = { ...pathProps, search };
    setPathProps(path, newPathProps);
    onSearch(search);
    // eslint-disable-next-line
  }, [search]);

  const handleChange = (e) => {
    const search = e.target?.value || "";
    setSearch(search);
  };
  return (
    <AntdSearch
      className="search"
      placeholder={`Buscar por ${props.searchPlaceholder}`}
      onSearch={handleChange}
      allowClear
      onChange={handleChange}
      style={{ width: 500, marginBottom: 10 }}
      value={search}
    />
  );
};

export default Search;
