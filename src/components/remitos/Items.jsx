import React from "react";
import { Layout, Table as AntdTable, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Header from "components/common/Header";
import EditableTable from "components/common/EditableTable";
import Alert from "components/common/Alert";
// import Drawer from "components/common/Drawer";
// import ItemForm from "./ItemForm";
import { formatAmount } from "utils/helpers";
// import columns from "./itemsColumns";
// import { getItem, cleanItem, deleteItem } from "redux/actions";
import { deleteItem } from "redux/actions";

const { Text } = Typography;

const Remitos = (props) => {
  const dispatch = useDispatch();
  const { loading, items, error } = useSelector((state) => state.remitos);
  // const [showDrawer, setShowDrawer] = useState(false);
  // const [currentItem, setCurrentItem] = useState({});

  // useEffect(() => {
  //   setCurrentItem(item);
  // }, [item]);

  // const onAdd = () => {
  //   dispatch(cleanItem({ REMNUM: props.ID }));
  //   setShowDrawer(true);
  // };

  // const handleClose = () => {
  //   setShowDrawer(false);
  // };

  // const handleEdit = (record) => {
  //   dispatch(getItem(record.ID));
  //   setShowDrawer(true);
  // };

  const handleDelete = (record) => {
    dispatch(deleteItem(record));
  };

  const summary = (pageData) => {
    let totalAmount = 0;
    pageData.forEach((item) => {
      totalAmount += item.REMCAN * item.REMPRE;
    });

    return (
      <AntdTable.Summary.Row className="summary-row">
        <AntdTable.Summary.Cell>Total</AntdTable.Summary.Cell>
        <AntdTable.Summary.Cell align="right" colSpan={3}>
          <Text type="primary">{formatAmount(totalAmount)}</Text>
        </AntdTable.Summary.Cell>
      </AntdTable.Summary.Row>
    );
  };

  const tableProps = {
    loading,
    dataSource: items,
    rowKey: "ID",
    // onAdd: onAdd,
    summary,
    pagination: false,
    handleDelete,
  };

  return (
    <>
      <Layout>
        <Header />
        {error && <Alert message="Error" description={error} type="error" />}
        {!loading && <EditableTable {...tableProps} />}
      </Layout>
      {/* <Drawer
        isDrawerVisible={showDrawer}
        handleClose={handleClose}
        title={`${item.ID ? "Modificando" : "Agregando"} item`}
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
      </Drawer> */}
    </>
  );
};

export default Remitos;
