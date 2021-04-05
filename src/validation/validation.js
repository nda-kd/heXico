
export default function validate (fieldName, value) {
  let error = []
  const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i)

  switch (fieldName) {
    case 'email':
      console.log('fieldName', fieldName, 'value', value)
      if (!pattern.test(value)) {
        error = 'Please enter valid email address'
      }
      break

    case 'password':
      console.log('fieldName', fieldName, 'value', value)
      if (!value.match(/^.*(?=.{8,}).*$/)) {
        error = 'Your password must be at least 8 characters'
      }
      break

    default:
      error = ''
      break
  }

  console.log('validefunctionReturn::', error)
  return error
}
