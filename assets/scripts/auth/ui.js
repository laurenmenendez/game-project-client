'use strict'

const store = require('.././store')

const onSignUpSuccess = function () {
  $('#messages').addClass('alert alert-dismissible alert-success').text('Thanks for signing up!')
  $('.sign-up').hide()
}

const onSignInSuccess = function (response) {
  console.log(response)
  store.user = response.user
  $('#messages').addClass('alert alert-dismissible alert-success').text('Successfully signed in.')
  $('#change-password-button').show()
  $('#get-games-button').show()
  $('.gameboard').show()
  $('#new-game-button').show()
  $('#sign-out-button').show()
  $('.sign-in').hide()
  $('.sign-up').hide()
}

const onChangePasswordSuccess = function () {
  $('#messages').addClass('alert alert-dismissible alert-success').text('Changed password successfully')
  $('#change-password').hide()
}

const onSignOutSuccess = function () {
  $('#messages').addClass('alert alert-dismissible alert-success').text('Signed out successfully')
  store.user = null
  $('#change-password-button').hide()
  $('#get-games-button').hide()
  $('.gameboard').hide()
  $('#new-game-button').hide()
  $('#sign-out-button').hide()
  $('.sign-in').show()
  $('.sign-up').show()
}

const onError = function (err) {
  console.error(err)
  $('#messages').addClass('alert alert-dismissible alert-danger').text('Something went wrong, please try again.')
}

module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onChangePasswordSuccess,
  onSignOutSuccess,
  onError
}
