'use strict'

const authEvents = require('./auth/events')
const gameEvents = require('./game/events')

$(() => {
// auth events
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out-button').on('click', authEvents.onSignOut)

// game events
  $('#new-game-button').on('click', gameEvents.onNewGame)
})
