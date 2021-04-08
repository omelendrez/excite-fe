import React from "react";
import { useSelector } from "react-redux";
import { Layout } from "antd";
import Header from "../common/Header";
import EditForm from "../common/EditForm";
import fields from "./fields";
import { sortColumn } from "../../utils/helpers";

const ProductoForm = (props) => {
  const record = props.location.state.record;
  const title = `${record.ID ? "Modificando" : "Agregando"} producto`;
  const tipos = useSelector((state) => state.tipos);
  const subtipos = useSelector((state) => state.subtipos);

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Layout>
      <Header title={title} onBack={props.history.goBack} />
      <EditForm
        fields={fields}
        record={record}
        onFinish={onFinish}
        optionGroups={{
          tipos: tipos.records
            .sort((a, b) => sortColumn(a, b, "TIPDES"))
            .map((record) => ({
              id: record.TIPCOD,
              text: record.TIPDES,
            })),
          subtipos: subtipos.records
            .sort((a, b) => sortColumn(a, b, "SUBTIPDES"))
            .map((record) => ({
              id: record.SUBTIPCOD,
              text: record.SUBTIPDES,
            })),
          sexos: [
            { id: "", text: "INDEFINIDO" },
            { id: "FEMENINO", text: "FEMENINO" },
            { id: "MASCULINO", text: "MASCULINO" },
          ],
          estado: [
            { id: "A", text: "ACTIVO" },
            { id: "I", text: "INACTIVO" },
          ],
        }}
      />
    </Layout>
  );
};

export default ProductoForm;
