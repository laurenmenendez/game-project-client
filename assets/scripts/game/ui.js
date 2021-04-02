'use strict'

const store = require('.././store')

const onNewGameSuccess = function (response) {
  store.user.game = response.game
}

const onError = function (err) {
  console.error(err)
  $('#messages').text('Something went wrong, please try again.')
}

module.exports = {
  onNewGameSuccess,
  onError
}
