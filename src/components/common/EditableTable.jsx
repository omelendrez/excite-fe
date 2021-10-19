import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Select } from 'antd'
import EditableHeader from './EditableHeader'
import EditableRow from './EditableRow'
import EditableFooter from './EditableFooter'
import Modal from './Modal'
import './EditableTable.scss'

const { Option } = Select

const EditableTable = (props) => {
  const { columns, data, discount, onSave } = props
  const { active, loading } = useSelector((state) => state.productos)
  const [formData, setFormData] = useState([])
  const [activeData, setActiveData] = useState([])
  const [selected, setSelected] = useState('')
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [currentRow, setCurrentRow] = useState(null)
  const defaultRow = {
    ID: 0,
    PRODCOD: '',
    PRODDES: '',
    REMCAN: '',
    REMPRE: ''
  }

  useEffect(() => {
    setFormData(data)
    setActiveData(active)
  }, [data, active])

  const handleFocus = (event) => event.target.select()

  const onSelect = (value) => {
    onToggleModal()
    setSelected(value)
  }

  const onToggleModal = (currentRow) => {
    if (currentRow) {
      setCurrentRow(currentRow)
    }
    setIsModalVisible((status) => !status)
  }

  return (
    <>
      <form className="editable-table">
        <table>
          <thead>
            <EditableHeader columns={columns} />
          </thead>
          <tbody>
            {formData.map((r) => (
              <EditableRow
                key={r.ID}
                row={r}
                onFocus={handleFocus}
                onSave={onSave}
                selected={selected}
                onToggleModal={onToggleModal}
                isModalVisible={isModalVisible}
                currentRow={currentRow}
              />
            ))}
            <EditableRow
              key={0}
              row={defaultRow}
              onFocus={handleFocus}
              onSave={onSave}
              selected={selected}
              onToggleModal={onToggleModal}
              isModalVisible={isModalVisible}
              currentRow={currentRow}
            />
          </tbody>
          <tfoot>
            <EditableFooter data={formData} discount={discount} />
          </tfoot>
        </table>
      </form>
      <Modal
        title="Productos"
        isModalVisible={isModalVisible}
        onClose={onToggleModal}
      >
        <Select
          showSearch
          autoFocus={true}
          style={{ width: '100%' }}
          placeholder="Seleccione un producto"
          optionFilterProp="children"
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
          loading={loading}
          onSelect={onSelect}
          defaultOpen={true}
          filterSort={(optionA, optionB) =>
            optionA.children
              .toLowerCase()
              .localeCompare(optionB.children.toLowerCase())
          }
        >
          {activeData.map((product) => (
            <Option
              key={product.PRODCOD}
              value={product.PRODCOD}
            >{`${product.PRODDES} - ${product.PRODDES}`}</Option>
          ))}
        </Select>
      </Modal>
      )
    </>
  )
}

export default EditableTable
