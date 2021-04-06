'use strict'

const api = require('./api')
const ui = require('./ui')
const store = require('.././store')

const onNewGame = function () {
  $('.row').children().text('')
  api.newGame()
    .then(ui.onNewGameSuccess)
    .catch(ui.onError)
}

const onSelectCell = function (event) {
  // console.log('clicked 0')
  // console.log($(event.target).attr('data-id'))
  // console.log($(event.target).text())
  store.user.index = $(event.target).attr('data-id')
  const index = store.user.index
  if (store.user.status === true && $(event.target).text() === '') {
    api.updateGame(index)
      .then(ui.onUpdateSuccess)
      .catch(ui.onError)
  } else if (!($(event.target).text() === '')) {
    $('#messages').text('Please select blank cell and try again.')
  } else {
    $('#messages').text('Please start new game to play again.')
  }
}

module.exports = {
  onNewGame,
  onSelectCell
}
