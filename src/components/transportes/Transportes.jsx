import React, { useEffect } from 'react';
import { Layout, Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../Header';
import { getTransportes } from '../../redux/actions/transportes';
const { columns } = require(`./columns`);

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
};

const Transportes = () => {
  const dispatch = useDispatch();
  const transportes = useSelector(state => state.transportes);
  const { loading, records, error } = transportes;

  useEffect(() => {
    dispatch(getTransportes());
  }, [dispatch]);

  const tableProps = {
    loading,
    columns,
    dataSource: records,
    rowSelection: { ...rowSelection },
    rowKey: 'ID',
    pagination: { position: ['bottomCenter'] },
    size: 'small',
    sticky: true,
    tableLayout: 'fixed'
  };

  return (
    <Layout>

      <Header title="Transportes" />
      {error && (<div>Error</div>)}

      <Table {...tableProps} />

    </Layout>
  );
};

export default Transportes;
