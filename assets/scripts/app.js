'use strict'

const events = require('./auth/events')

$(() => {
// auth events
  $('#sign-up-form').on('submit', events.onSignUp)
  $('#sign-in-form').on('submit', events.onSignIn)
  $('#change-password').on('submit', events.onChangePassword)
  $('#sign-out-button').on('click', events.onSignOut)
})

// game events
