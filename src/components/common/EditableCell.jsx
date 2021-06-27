import InputField from "./InputField";

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  optionsModels,
  options,
  setIsModalVisible,
  ...restProps
}) => {
  const fieldProps = {
    type: inputType,
    name: dataIndex,
    key: dataIndex,
    rules: [
      {
        required: true,
        message: `Debe ingresar ${title}!`,
      },
    ],
    options,
  };
  return (
    <td {...restProps}>
      {editing ? (
        <InputField
          field={fieldProps}
          optionsModels={optionsModels}
          setIsModalVisible={setIsModalVisible}
        />
      ) : (
        children
      )}
    </td>
  );
};

export default EditableCell;
