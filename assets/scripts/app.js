'use strict'

const authEvents = require('./auth/events')
const gameEvents = require('./game/events')

$(() => {
// initial page view
  $('#change-password').hide()
  $('#change-password-button').hide()
  $('#sign-out-button').hide()
  $('#get-games-button').hide()
  $('.gameboard').hide()
  $('#new-game-button').hide()
// auth events
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-button').on('click', authEvents.onChangePasswordButton)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out-button').on('click', authEvents.onSignOut)

// new game
  $('#new-game-button').on('click', gameEvents.onNewGame)
// get games
  $('#get-games-button').on('click', gameEvents.onGetGames)
// click handlers for each box
  $('[data-id="0"]').on('click', gameEvents.onSelectCell)
  $('[data-id="1"]').on('click', gameEvents.onSelectCell)
  $('[data-id="2"]').on('click', gameEvents.onSelectCell)
  $('[data-id="3"]').on('click', gameEvents.onSelectCell)
  $('[data-id="4"]').on('click', gameEvents.onSelectCell)
  $('[data-id="5"]').on('click', gameEvents.onSelectCell)
  $('[data-id="6"]').on('click', gameEvents.onSelectCell)
  $('[data-id="7"]').on('click', gameEvents.onSelectCell)
  $('[data-id="8"]').on('click', gameEvents.onSelectCell)
})
