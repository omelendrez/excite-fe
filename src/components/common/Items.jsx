import React, { useState, useEffect } from "react";
import { Layout, Drawer } from "antd";
import Header from "components/common/Header";
import Table from "components/common/Table";
import Alert from "components/common/Alert";

const Items = (props) => {
  const {
    loading,
    success,
    error,
    items,
    item,
    columns,
    title,
    onAdd,
    ItemForm,
    showDrawer,
    handleClose,
    handleDelete,
    handleEdit,
  } = props;
  const [currentItem, setCurrentItem] = useState({});

  useEffect(() => {
    setCurrentItem(item);
  }, [item]);

  const tableProps = {
    loading,
    columns: columns({ handleEdit: handleEdit, handleDelete: handleDelete }),
    dataSource: items,
    rowKey: "ID",
    pagination: false,
    onAdd,
  };

  return (
    <>
      <Layout>
        <Header title={title} />
        {error && <Alert message="Error" description={error} type="error" />}

        <Table {...tableProps} />
      </Layout>
      <Drawer
        isDrawerVisible={showDrawer}
        handleClose={handleClose}
        title={`${item && item.ID ? "Modificando" : "Agregando"} item`}
      >
        {!loading && (
          <ItemForm
            closeDrawer={handleClose}
            item={currentItem}
            success={success}
            error={error}
            loading={loading}
          />
        )}
      </Drawer>
    </>
  );
};

export default Items;
