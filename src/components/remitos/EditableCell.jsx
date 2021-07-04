import InputField from "../common/InputField";

const EditableCell = ({
  editing,
  dataIndex,
  inputType,
  record,
  index,
  children,
  optionsModels,
  options,
  handleModal,
  rules,
  ...restProps
}) => {
  const fieldProps = {
    type: inputType,
    name: dataIndex,
    key: dataIndex,
    rules,
    options,
  };

  return (
    <td {...restProps}>
      {editing ? (
        <InputField
          field={fieldProps}
          optionsModels={optionsModels}
          handleModal={handleModal}
        />
      ) : (
        children
      )}
    </td>
  );
};

export default EditableCell;
