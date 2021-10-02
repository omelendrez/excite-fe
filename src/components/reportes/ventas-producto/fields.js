export const fields = () => {
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
      title: 'Reporte desde',
      type: 'date',
      rules: [{ required: true }]
    },
    {
      name: 'REMFEC_TO',
      title: 'Reporte hasta',
      type: 'date',
      rules: [{ required: true }]
    }
  ]
}
