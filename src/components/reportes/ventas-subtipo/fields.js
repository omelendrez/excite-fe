export const fields = () => {
  return [
    {
      name: 'REMFEC_FROM',
      title: 'Período desde',
      type: 'date',
      rules: [{ required: true }]
    },
    {
      name: 'REMFEC_TO',
      title: 'Período hasta',
      type: 'date',
      rules: [{ required: true }]
    }
  ]
}
