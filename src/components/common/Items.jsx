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
    handleDelete,
    handleEdit,
  } = props;
  const [showDrawer, setShowDrawer] = useState(false);
  const [currentItem, setCurrentItem] = useState({});

  const handleClose = () => {
    setShowDrawer(false);
  };

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
