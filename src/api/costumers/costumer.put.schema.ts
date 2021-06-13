export default {
  required: ['body'],
  properties: {
    body: {
      type: 'object',
      required: ['name', 'email', 'address'],
      properties: {
        username: { type: 'string' },
        name: { type: 'string' },
        email: { type: 'string' },
        address: { type: 'string' },
        phone: { type: 'string' },
        birthdate: { type: 'string' },
      },
    },
  },
}
