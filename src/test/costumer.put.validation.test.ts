import costumerValidation from '../api/costumers/costumer.put.validation'

test('Invalid email format', () => {
  expect(() => {
    costumerValidation({
      email: 'test',
      phone: '+5547999999999',
      birthdate: '2020-10-10',
    })
  }).toThrow(Error('Invalid email format'))
})

test('Invalid phone number format', () => {
    expect(() => {
      costumerValidation({
        email: 'test@test.com',
        phone: '+',
        birthdate: '2020-10-10',
      })
    }).toThrow(Error('Invalid phone number format'))
  })

  
  test('Invalid birthdate date format', () => {
    expect(() => {
      costumerValidation({
        email: 'test@test.com',
        phone: '+554799999999',
        birthdate: '2020-10-100',
      })
    }).toThrow(Error('Invalid birthdate date format'))
  })
  

test('Fully correct costumer entity', () => {
  expect(
    costumerValidation({
      email: 'williamfdeschamps@gmail.com',
      phone: '+5547996258443',
      birthdate: '2020-10-10',
    }),
  ).toBe(true)
})
