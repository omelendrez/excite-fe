import React, { useEffect, useState } from "react";
import { Table as AntdTable } from "antd";
import Search from "./Search";

const Table = (props) => {
  const [newProps, setNewProps] = useState({});
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    setNewProps({ ...props });
  }, [props]);

  useEffect(() => {
    setNewProps({ ...props, dataSource: filtered });
  }, [filtered]);

  const onSearch = (search) => {
    if (!search) {
      return setFiltered(props.dataSource);
    }
    const filtered = [];
    props.dataSource.map((record) =>
      props.searchFields.forEach((field) => {
        if (
          record[field].toString().toLowerCase().includes(search.toLowerCase())
        ) {
          filtered.push(record);
        }
      })
    );
    setFiltered(filtered);
  };

  return (
    <>
      {props.searchFields && (
        <Search className="table-search" onSearch={onSearch} />
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
