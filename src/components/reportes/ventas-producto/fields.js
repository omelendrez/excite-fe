export const fields = (props) => {
  return [
    {
      name: 'PRODCOD',
      title: 'Producto',
      type: 'select',
      rules: [{ required: true }],
      options: 'productos'
    },
    {
      name: 'REMFEC_FROM',
      title: 'Fecha desde',
      type: 'date',
      rules: [{ required: true }]
    },
    {
      name: 'REMFEC_TO',
      title: 'Fecha hasta',
      type: 'date',
      rules: [{ required: true }]
    }
  ]
}
