import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { Layout, Tabs, Form, Modal as AntdModal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Header from "components/common/Header";
import Alert from "components/common/Alert";
import Table from "components/common/Table";
import Info from "components/common/Info";
import Modal from "components/common/Modal";
import InputField from "components/common/InputField";
import notification from "components/common/notification";
import { getTipo, deleteTipo, getTiposSubtipos } from "redux/actions";
import fields from "./fields";
import { setFields } from "utils/helpers";
import { columns as subtiposColumns } from "components/subtipos/columns";

const { TabPane } = Tabs;

const Tipo = (props) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const tipos = useSelector((state) => state.tipos);
  const { loading, success, record, error, subtipos } = tipos;
  const [url, setUrl] = useState("");
  const [cambiarPreciosFormVisible, setCambiarPreciosFormVisible] =
    useState(false);
  const infoDefault = fields.map((field) => ({
    title: field.title,
    value: "",
  }));
  const [info, setInfo] = useState(infoDefault);

  useEffect(() => {
    dispatch(getTipo(props.match.params.id));
  }, [dispatch, props.match.params.id]);

  useEffect(() => {
    if (record) {
      dispatch(getTiposSubtipos(record.TIPCOD));
      const info = setFields(fields, record);
      setInfo(info);
    }
  }, [dispatch, record]);

  useEffect(() => {
    if (success && record.message) {
      notification({
        message: "Registro eliminado",
        description: "El registro fue eliminado con éxito",
        type: "success",
      });
      props.history.goBack();
    }
    if (error) {
      notification({
        message: "Error",
        description: "Error al intentar eliminar el registro",
        type: "error",
      });
    }
  }, [success, record, error, props.history]);

  const handleEdit = () => {
    setUrl(`/tipos/edit/${props.match.params.id}`);
  };

  const handleDelete = () => {
    dispatch(deleteTipo(props.match.params.id));
  };

  const resetFields = () => {
    form.resetFields();
  };

  const handleOpen = () => {
    resetFields();
    setCambiarPreciosFormVisible(true);
  };

  const handleClose = () => {
    setCambiarPreciosFormVisible(false);
  };

  const handleOk = () => {
    form.submit();
  };

  const handleFinish = () => {
    const confirm = AntdModal.confirm();
    confirm.update({
      title: `${record.TIPCOD} - ${record.TIPDES}`,
      content: (
        <p>
          <b>Importante</b>: Confirmando esta acción usted estará cambiando los
          precios de todos los productos asociados a este tipo
        </p>
      ),
      okText: "Si, continuar",
      cancelText: "No, ignorar cambios",
      onOk: confirmPriceChange,
      onCancel: handleClose,
    });
    handleClose();
  };

  const confirmPriceChange = () => {
    console.log(form.getFieldValue("PRODPRE"));
    resetFields();
  };

  if (!!url) {
    return (
      <Redirect push to={{ pathname: url, state: { record: tipos.record } }} />
    );
  }

  const subtiposTableProps = {
    loading,
    columns: subtiposColumns({ tipos: tipos.records }),
    dataSource: subtipos,
    rowKey: "ID",
  };

  const field = {
    title: "Precio",
    name: "PRODPRE",
    type: "amount",
    rules: [{ required: true }],
  };

  const value = {
    PRODPRE: 0,
  };

  return (
    <Layout>
      <Header
        title={`Tipo ${record.TIPCOD} - ${record.TIPDES}`}
        onBack={props.history.goBack}
        loading={loading}
      />
      {error && <Alert message="Error" description={error} type="error" />}
      <div className="card-container">
        <Tabs tabPosition="right">
          <TabPane tab="Info" key="1">
            <Info
              title={info.TIPDES}
              fields={fields}
              data={info}
              onEdit={handleEdit}
              onDelete={handleDelete}
              success={success}
              history={props.history}
              onPrice={handleOpen}
            />
          </TabPane>
          <TabPane
            tab={`Subtipos asociados (${tipos.subtipos.length})`}
            key="2"
          >
            <Table {...subtiposTableProps} />
          </TabPane>
        </Tabs>
      </div>
      <Modal
        title={`${record.TIPCOD} - ${record.TIPDES}`}
        isModalVisible={cambiarPreciosFormVisible}
        onClose={handleClose}
        onOk={handleOk}
      >
        <Form form={form} onFinish={handleFinish}>
          <InputField style={{ width: 180 }} field={field} record={value} />
        </Form>
      </Modal>
    </Layout>
  );
};

export default Tipo;
