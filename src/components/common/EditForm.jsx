import React, { useEffect, useState } from 'react'
import { Form, Row, Col, Modal } from 'antd'
import SaveButton from './SaveButton'
import ResetButton from './ResetButton'
import InputField from './InputField'
import notification from './notification'
import Tipos from 'components/tipos/TipoForm'
import Subtipos from 'components/subtipos/SubtipoForm'
import { formatInputDate } from 'utils/helpers'
import './edit-form.scss'

const components = {
  Tipos,
  Subtipos
}

const fieldsChanged = {
  fields: [],
  add(field) {
    if (!this.fields.includes(field)) {
      this.fields = [...this.fields, field]
    }
  },
  remove(field) {
    this.fields = this.fields.filter((f) => f !== field)
  },
  removeAll() {
    this.fields = []
  },
  get() {
    return this.fields
  }
}

const handleKey = (e) => {
  const inputs = document.getElementsByTagName('input')
  let increment = 0
  switch (e.code) {
    case 'ArrowDown':
      increment = 1
      break
    case 'ArrowUp':
      increment = -1
      break
    default:
      return
  }
  let curIndex = 0
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i] === e.target) {
      curIndex = i
      break
    }
  }
  if (curIndex >= 0 && curIndex < inputs.length - 1) {
    inputs[curIndex + increment].focus()
  }
}

const EditForm = (props) => {
  const [form] = Form.useForm()
  const [modalVisible, setmodalVisible] = useState(false)
  const [componentName, setComponentName] = useState('')
  const [record, setRecord] = useState({})
  const [submitDisabled, setSubmitDisabled] = useState(true)

  const handleChange = (change) => {
    const key = Object.keys(change)[0]
    const value = Object.values(change)[0]
    if (record[key] !== value) {
      fieldsChanged.add(key)
    } else {
      fieldsChanged.remove(key)
    }
    if (!!fieldsChanged.get().length) {
      if (submitDisabled) setSubmitDisabled(false)
    } else {
      if (!submitDisabled) setSubmitDisabled(true)
    }
  }

  const onReset = () => {
    form.resetFields()
    fieldsChanged.removeAll()
    setSubmitDisabled(true)
  }

  const toggleModal = (options) => {
    setComponentName(options)
    setmodalVisible(!modalVisible)
  }

  const FormComponent = componentName.length
    ? components[componentName.charAt(0).toUpperCase() + componentName.slice(1)]
    : null

  useEffect(() => {
    form.resetFields()
  }, [record, form])

  useEffect(() => {
    const record = {}
    props.fields.forEach((field) => {
      switch (field.type) {
        default:
          record[field.name] = props.record[field.name] || ''
          break
        case 'date':
          record[field.name] = formatInputDate(
            props.record[field.name] || undefined
          )
          break
        case 'number':
        case 'amount':
          record[field.name] =
            +props.record[field.name] || (field.name === 'ID' ? undefined : 0)
          break
      }
    })
    if (props.changeFieldValues && props.changeFieldValues.length) {
      props.changeFieldValues.forEach(
        (field) => (record[field.name] = field.value)
      )
    }
    setRecord(record)
  }, [props])

  useEffect(() => {
    if (props.success) {
      props.history && props.history.goBack()
    }
    if (props.error) {
      notification({
        message: 'Error',
        description: 'Error al intentar guardar los datos',
        type: 'error'
      })
    }
  }, [props.success, props.error, props.history])

  const modalStyles = {
    width: '40vw',
    style: { left: '-15vw', top: 10 }
  }

  if (!record) return null

  return (
    <div className="edit-form">
      <Form
        form={form}
        onFinish={props.onFinish}
        initialValues={record}
        labelCol={{
          span: props.maximize ? 0 : 3
        }}
        wrapperCol={{
          span: props.maximize ? 0 : 8
        }}
        onValuesChange={handleChange}
      >
        {props.fields &&
          props.fields.map((field) => (
            <InputField
              handleKey={handleKey}
              key={field.name}
              field={field}
              record={record}
              optionsModels={props.optionsModels}
              addOption={() => toggleModal(field.options)}
            />
          ))}
        {props.onFinish && (
          <Row>
            <Col offset={props.maximize ? 5 : 2} span={props.maximize ? 6 : 3}>
              <SaveButton loading={props.loading} disabled={submitDisabled} />
            </Col>
            <Col>
              <ResetButton handleReset={onReset} />
            </Col>
          </Row>
        )}
      </Form>
      <Modal
        visible={modalVisible}
        onCancel={toggleModal}
        footer={null}
        {...modalStyles}
      >
        {componentName.length > 0 && (
          <FormComponent record={{ ID: 0 }} maximize={true} />
        )}
      </Modal>
    </div>
  )
}

export default EditForm
