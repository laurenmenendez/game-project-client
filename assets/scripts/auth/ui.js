'use strict'

const store = require('.././store')

const onSignUpSuccess = function () {
  $('#messages').text('Thanks for signing up!')
  $('.sign-up').hide()
}

const onSignInSuccess = function (response) {
  console.log(response)
  store.user = response.user
  $('#messages').text('Successfully signed in.')
  $('#change-password-button').show()
  $('.get-games').show()
  $('.gameboard').show()
  $('#new-game-button').show()
  $('.sign-out').show()
  $('.sign-in').hide()
  $('.sign-up').hide()
}

const onChangePasswordSuccess = function () {
  $('#messages').text('Changed password successfully')
}

const onSignOutSuccess = function () {
  $('#messages').text('Signed out successfully')
  store.user = null
}

const onError = function (err) {
  console.error(err)
  $('#messages').text('Something went wrong, please try again.')
}

module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onChangePasswordSuccess,
  onSignOutSuccess,
  onError
}
