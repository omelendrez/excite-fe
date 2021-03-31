import React from 'react';
import { Table as AntdTable } from 'antd';

const Table = props => {
  return (
    <AntdTable
      pagination={{ position: ['bottomCenter'] }}
      size="small"
      sticky={true}
      tableLayout="fixed"
      {...props}
    />
  );
};

export default Table;