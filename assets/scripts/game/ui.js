'use strict'

const store = require('.././store')

const onNewGameSuccess = function (response) {
  console.log(response)
  store.user.game = response.game
  store.user.value = [true, 'x']
  store.user.status = true
  $('#messages').text('Started new game!')
}

const onUpdateSuccess = function (response) {
  $('#messages').text('Nice move!')
  store.user.game = response.game
  if (store.user.value[0] === true) {
    $(`[data-id=${store.user.index}]`).text('x')
    store.user.value[1] = 'o'
  } else {
    $(`[data-id=${store.user.index}]`).text('o')
    store.user.value[1] = 'x'
  }
  store.user.value[0] = !(store.user.value[0])

  const cells = store.user.game.cells
  console.log(cells)
  const x = []
  const o = []
  for (let i = 0; i < cells.length; i++) {
    if (cells[i] === 'x') {
      x.push(i)
      console.log(x)
    } else if (cells[i] === 'o') {
      o.push(i)
      console.log(o)
    }
  }
  if ((x.includes(0) && x.includes(1) && x.includes(2)) || (x.includes(0) && x.includes(3) && x.includes(6)) || (x.includes(0) && x.includes(4) && x.includes(8)) || (x.includes(2) && x.includes(4) && x.includes(6)) || (x.includes(2) && x.includes(5) && x.includes(8)) || (x.includes(6) && x.includes(7) && x.includes(8)) || (x.includes(3) && x.includes(4) && x.includes(5)) || (x.includes(1) && x.includes(4) && x.includes(7))) {
    $('#messages').text('Game over. X wins!')
    store.user.status = false
  } else if ((o.includes(0) && o.includes(1) && o.includes(2)) || (o.includes(0) && o.includes(3) && o.includes(6)) || (o.includes(0) && o.includes(4) && o.includes(8)) || (o.includes(2) && o.includes(4) && o.includes(6)) || (o.includes(2) && o.includes(5) && o.includes(8)) || (o.includes(6) && o.includes(7) && o.includes(8)) || (o.includes(3) && o.includes(4) && o.includes(5)) || (o.includes(1) && o.includes(4) && o.includes(7))) {
    $('#messages').text('Game over. O wins!')
    store.user.status = false
  } else if (!(cells.includes(''))) {
    $('#messages').text('Tie! How about a rematch?')
    store.user.status = false
  }
}

const onGetGamesSuccess = function (response) {
  $('#messages').text(`You have played ${response.games.length} games.`)
}
const onError = function (err) {
  console.error(err)
  $('#messages').text('Something went wrong, please try again.')
}

module.exports = {
  onNewGameSuccess,
  onUpdateSuccess,
  onGetGamesSuccess,
  onError
}
