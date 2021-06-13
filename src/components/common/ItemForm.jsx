import React, { useEffect } from "react";
import EditForm from "components/common/EditForm";

const ItemForm = (props) => {
  const { fields, optionsModels, onFinish, loading, success, error } = props;

  useEffect(() => {
    if (success) {
      props.closeDrawer();
    }
  }, [props, success]);

  return (
    <>
      <EditForm
        fields={fields}
        record={props.item}
        onFinish={onFinish}
        maximize={true}
        loading={loading}
        success={success}
        error={error}
        optionsModels={optionsModels}
      />
    </>
  );
};

export default ItemForm;
