import React from 'react';
import TableList from '../components/TableList';

const TableExample = (columns,data) => {
  return (
    <div>
      <h2>Table List</h2>
      <TableList columns={columns} dataSource={data} />
    </div>
  );
};

// export default Products;
export default TableExample;
