import React, { useState, useEffect } from 'react';
import { Layout, Table } from 'antd';
import Header from '../Header';
import { getRecords } from '../../services';
const { columns } = require(`./columns`);

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
};

const Transportes = () => {

  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getRecords('transportes')
      .then(data => {
        setRecords(data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <Layout>

      <Header title="Transportes" />

      <Table
        loading={loading}
        columns={columns}
        dataSource={records}
        rowSelection={{ ...rowSelection }}
        rowKey="ID"
        pagination={{ position: ['bottomCenter'] }}
        size="small"
        sticky={true}
        tableLayout="fixed"
      />

    </Layout>
  );
};

export default Transportes;
