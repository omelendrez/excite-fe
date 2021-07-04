import InputField from "../common/InputField";

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
  handleModal,
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
          handleModal={handleModal}
        />
      ) : (
        children
      )}
    </td>
  );
};

export default EditableCell;
