export default {
  required: ['body'],
  properties: {
    body: {
      type: 'object',
      required: ['name', 'email', 'address'],
      properties: {
        username: { type: 'string', minLength : 4 },
        name: { type: 'string', minLength : 4 },
        email: { type: 'string' },
        address: { type: 'string' },
        phone: { type: 'string' },
        birthdate: { type: 'string'},
      },
    },
  },
}
