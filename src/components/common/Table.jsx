import React, { useEffect, useState } from "react";
import { Table as AntdTable, BackTop, Row, Col } from "antd";
import Search from "./Search";
import AddButton from "./AddButton";
import PrintButton from "./PrintButton";

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
            const exists = filtered.find((r) => r.ID === record.ID);
            if (!exists) {
              filtered.push(record);
            }
          }
        })
    );
    setNewProps({ ...props, dataSource: filtered });
  };

  const searchPlaceholder = props.columns
    .filter((field) => field.searchable)
    .map((field) => field.title)
    .join(", ");

  const paginationProps = {
    position: ["bottomCenter"],
    showTotal: (total, range) => `${total} registros`,
    hideOnSinglePage: true,
    pageSizeOptions: [5, 10, 15, 20, 50, 100],
    showLessItems: true,
    size: "small",
  };

  return (
    <>
      <BackTop />
      <Row>
        {props.columns.filter((field) => field.searchable).length > 0 && (
          <Col>
            <Search
              className="table-search"
              onSearch={onSearch}
              searchPlaceholder={searchPlaceholder}
            />
          </Col>
        )}
        <Col offset={1}>{props.onAdd && <AddButton onAdd={props.onAdd} />}</Col>
      </Row>
      <AntdTable
        pagination={paginationProps}
        sticky={true}
        tableLayout="fixed"
        loading={props.loading}
        size="small"
        bordered
        {...newProps}
      />
      <Col>{props.onPrint && <PrintButton onPrint={props.onPrint} />}</Col>
    </>
  );
};

export default Table;
