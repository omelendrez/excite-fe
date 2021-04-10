import React, { useEffect, useState } from "react";
import { Table as AntdTable, BackTop, Row, Col } from "antd";
import Search from "./Search";
import AddButton from "./AddButton";

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
      <BackTop />
      <Row>
        {props.columns.filter((field) => field.searchable).length > 0 && (
          <Col span={21}>
            <Search
              className="table-search"
              onSearch={onSearch}
              searchPlaceholder={searchPlaceholder}
            />
          </Col>
        )}
        <Col span={3}>{props.onAdd && <AddButton onAdd={props.onAdd} />}</Col>
      </Row>
      <AntdTable
        pagination={{
          position: ["bottomCenter"],
          showTotal: (total, range) => `${total} registros`,
          hideOnSinglePage: true,
          showQuickJumper: true,
        }}
        size="small"
        sticky={true}
        tableLayout="fixed"
        {...newProps}
      />
    </>
  );
};

export default Table;
