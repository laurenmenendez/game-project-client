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
  // let x = []
  // let o = []
  // for (let i = 0; i < cells.length; i++) {
  //   if (cells[i] === 'x') {
  //     let index = cells.indexOf(cells[i])
  //     x.push(index)
  //     console.log(x)
  //   } else if (cells[i] === 'o') {
  //     let index = cells.indexOf(cells[i])
  //     o.push(index)
  //     console.log(o)
  //   }
  // }
}
  // if ((cells[0] === cells[1] && cells[0] === cells[2]) || (cells[0] === cells[3] && cells[0] === cells[6]) || (cells[0] === cells[4] && cells[0] === cells[8]) || (cells[2] === cells[4] && cells[2] === cells[6]) || (cells[2] === cells[5] && cells[2] === cells[8]) || (cells[6] === cells[7] && cells[6] === cells[8]) || (cells[3] === cells[4] && cells[3] === cells[5]) || (cells[1] === cells[4] && cells[1] === cells[7])) {
    // $('#messages').text('Game over')
    // store.user.status = false
//   }
// }

const onError = function (err) {
  console.error(err)
  $('#messages').text('Something went wrong, please try again.')
}

module.exports = {
  onNewGameSuccess,
  onUpdateSuccess,
  onError
}
