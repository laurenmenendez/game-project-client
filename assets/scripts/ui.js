'use strict'

const store = require('./store')

const onSignUpSuccess = function () {
  console.log('success')
  $('#messages').text('Thanks for signing up!')
}

const onError = function (err) {
  console.error(err)
  $('#messages').text('Something went wrong, please try again.')
}

module.exports = {
  onSignUpSuccess,
  onError
}
