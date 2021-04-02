'use strict'

const api = require('./api')
const ui = require('./ui')

const onNewGame = function () {
  api.newGame()
    .then(ui.onNewGameSuccess)
    .catch(ui.onError)
}

module.exports = {
  onNewGame
}
