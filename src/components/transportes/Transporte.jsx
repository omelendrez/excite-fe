import React, { useEffect } from "react";
import { Layout } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Header from "../common/Header";
import Alert from "../common/Alert";
import { getTransporte } from "../../redux/actions/transportes";

const Transporte = (props) => {
  const dispatch = useDispatch();
  const transportes = useSelector((state) => state.transportes);
  const { loading, record, error } = transportes;

  useEffect(() => {
    dispatch(getTransporte(props.match.params.id));
  }, [dispatch, props.match.params.id]);

  return (
    <Layout>
      <Header
        title={`Transporte ${record.TRANOM}`}
        onBack={props.history.goBack}
        loading={loading}
      />
      {error && <Alert message="Error" description={error} type="error" />}
    </Layout>
  );
};

export default Transporte;
