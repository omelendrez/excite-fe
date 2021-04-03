import React, { useEffect, useState } from "react";
import { Table as AntdTable } from "antd";
import Search from "./Search";

const Table = (props) => {
  const [newProps, setNewProps] = useState({});

  useEffect(() => {
    setNewProps(props);
  }, [props]);

  const onSearch = (search) => {
    if (!search) {
      return setNewProps(props);
    }
    const filtered = [];

    props.dataSource.map((record) =>
      props.columns
        .filter((field) => field.searchable)
        .forEach((field) => {
          if (
            record[field.dataIndex]
              .toString()
              .toLowerCase()
              .includes(search.toLowerCase())
          ) {
            filtered.push(record);
          }
        })
    );
    setNewProps({ ...props, dataSource: filtered });
  };

  const searchPlaceholder = props.columns
    .filter((field) => field.searchable)
    .map((field) => field.title)
    .join(", ");

  return (
    <>
      {props.columns.filter((field) => field.searchable).length > 0 && (
        <Search
          className="table-search"
          onSearch={onSearch}
          searchPlaceholder={searchPlaceholder}
        />
      )}
      <AntdTable
        pagination={{ position: ["bottomCenter"] }}
        size="small"
        sticky={true}
        tableLayout="fixed"
        {...newProps}
      />
    </>
  );
};

export default Table;
