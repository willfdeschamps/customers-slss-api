interface Costumer {
  username?: string
  name?: string
  email?: string
  phone?: string
  address?: string
  birthdate?: string
}

function validateEmail(email) {
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
    email,
  )
}

function validatePhoneNumber(phone) {
  return /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(
    phone,
  )
}

function validateConstumer  ({ email, phone, birthdate }: Costumer) {
  if (email && !validateEmail(email)) {
    throw new Error('Invalid email format');
  }

  if (phone && !validatePhoneNumber(phone)) {
    throw new Error('Invalid phone number format')
  }

  if (birthdate && !Date.parse(birthdate)) {
    throw new Error('Invalid birthdate date format')
  }
  return true
}

export default validateConstumer
