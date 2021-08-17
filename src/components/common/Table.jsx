import React, { useEffect, useState } from "react";
import { Table as AntdTable, BackTop, Row, Col } from "antd";
import Search from "./Search";
import AddButton from "./AddButton";
import PrintButton from "./PrintButton";
import { setPathProps, getPathProps } from "services";

const Table = (props) => {
  const { path } = props;
  const pagePath = path || "default";
  const initialTableProps = getPathProps(pagePath);
  const [newProps, setNewProps] = useState({});
  const [dataSource, setDataSource] = useState([]);
  const [search, setSearch] = useState(initialTableProps.search || "");
  const [tableProps, setTableProps] = useState(initialTableProps);

  const onChange = (pagination, filters, sorter) => {
    const newTableProps = { ...tableProps, pagination, filters, sorter };
    setTableProps(newTableProps);
  };

  const onSearch = (search) => {
    if (!search) {
      return setDataSource(props.dataSource);
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
            const exists = filtered.find(
              (r) => r[newProps.rowKey] === record[newProps.rowKey]
            );
            if (!exists) {
              filtered.push(record);
            }
          }
        })
    );
    setDataSource(filtered);
  };

  const searchPlaceholder = props.columns
    .filter((field) => field.searchable)
    .map((field) => field.title)
    .join(", ");

  const paginationProps = {
    position: ["bottomCenter"],
    showTotal: (total, _) => `${total} registros`,
    hideOnSinglePage: true,
    pageSizeOptions: [5, 10, 15, 20, 50, 100],
    showLessItems: true,
    size: "small",
  };

  useEffect(() => {
    setNewProps(props);
    setDataSource(props.dataSource);
  }, [props]);

  useEffect(
    () => setPathProps(pagePath, tableProps),
    [tableProps, props, pagePath]
  );

  return (
    <>
      <BackTop />
      <Row>
        {props.columns.filter((field) => field.searchable).length > 0 && (
          <Col>
            <Search
              className="table-search"
              onSearch={onSearch}
              onChange={setSearch}
              searchPlaceholder={searchPlaceholder}
              value={search}
              path={pagePath}
            />
          </Col>
        )}
        <Col offset={1}>{props.onAdd && <AddButton onAdd={props.onAdd} />}</Col>
      </Row>
      <Row style={{ marginBottom: 10 }}>
        <Col>{props.onPrint && <PrintButton onPrint={props.onPrint} />}</Col>
      </Row>
      <AntdTable
        pagination={paginationProps}
        sticky={true}
        tableLayout="fixed"
        loading={props.loading}
        size="small"
        onChange={onChange}
        {...newProps}
        {...tableProps}
        dataSource={dataSource}
      />
    </>
  );
};

export default Table;
