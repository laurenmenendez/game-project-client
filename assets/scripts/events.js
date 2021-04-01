'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../.././lib/get-form-fields')

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onError)
}

module.exports = {
  onSignUp
}
