// logout, only clear localstorage, then redirect to logout
export function logout () {
  localStorage.setItem('token', null)
  localStorage.setItem('uid', null)
  this.$router.push('/logout')
}

export function copyString (document, str) {
  var textArea = document.createElement('textarea')
  textArea.value = str
  document.body.appendChild(textArea)
  textArea.focus()
  textArea.select()
  var successful = false
  try {
    successful = document.execCommand('copy')
    // var msg = successful ? 'successful' : 'unsuccessful'
    // console.log('Fallback: Copying text command was ' + msg)
  } catch (err) {
    console.error('Fallback: Oops, unable to copy', err)
  }
  document.body.removeChild(textArea)
  return successful
}

export function dateFormatter (value) {
  var date = new Date(value * 1000)
  var minutes = '0' + date.getMinutes()
  var seconds = '0' + date.getSeconds()
  var formated = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + minutes.substr(-2) + ':' + seconds.substr(-2)
  return formated
}

export const regexMap = {
  givenname: /^([\u4e00-\u9fa5]|[A-Za-z])+$/,
  middlename: /^([\u4e00-\u9fa5]|[A-Za-z])+$/,
  familyname: /^([\u4e00-\u9fa5]|[A-Za-z])+$/,
  phone: /^(\d|-|\+){8,40}$/,
  ethAddrRegex: /^0x([0-9]|[a-z]|[A-Z]){40,40}$/,
  password: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/,
  country: /^[A-Z]{3}$/,
  email: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
  countrycode: /^\d{1,4}$/g,
  postcodezip: /^.{2,128}$/g,
  city: /^\d{0,10}([\u4e00-\u9fa5]|[A-Za-z])+\d{0,10}$/,
  provice: /^\d{0,10}([\u4e00-\u9fa5]|[A-Za-z])+\d{0,10}$/,
  address1: /^\d{0,10}([\u4e00-\u9fa5]|[A-Za-z,.-@!%*#?&]){1,128}\d{0,10}$/,
  username: /^\d{0,32}|([\u4e00-\u9fa5]|[A-Za-z]){0,32}|$/,
}

export function isEmpty (str) {
  if (typeof str === 'undefined' || str === null || str.lenght < 1 || str === '') {
    return true
  }
  return false
}

export function trimStr (str) {
  if (typeof (str) === 'string') {
    return str.replace(/(^\s*)|(\s*$)/g, '')
  }
  return str
}

export function getTargetAPI () {
  if (process.env.ALLOW_TEST) {
    if (localStorage.getItem('target') === null || localStorage.getItem('target') === 'null') {
      return process.env.TARGET
    }
    return localStorage.getItem('target')
  }
  return process.env.TARGET
}
