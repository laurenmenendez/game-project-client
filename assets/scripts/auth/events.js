'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../.././lib/get-form-fields')

const onSignUp = function (event) {
  event.preventDefault()
  console.log('hi')
  const form = event.target
  const formData = getFormFields(form)
  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onError)
}

const onSignIn = function (event) {
  event.preventDefault()
  $('.row').children().text('')
  const form = event.target
  const formData = getFormFields(form)
  console.log(formData)
  api.signIn(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onError)
}

const onChangePasswordButton = function () {
  $('#change-password').show()
}

const onChangePassword = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.changePassword(formData)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onError)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onError)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePasswordButton,
  onChangePassword,
  onSignOut
}
