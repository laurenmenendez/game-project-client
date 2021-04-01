'use strict'

const events = require('./events')

$(() => {
  $('#sign-up-form').on('submit', events.onSignUp)
  $('#sign-in-form').on('submit', events.onSignIn)
})
