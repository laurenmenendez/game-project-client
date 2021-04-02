'use strict'

const store = require('.././store')

const onNewGameSuccess = function (response) {
  console.log(response)
  store.user.game = response.game
  store.user.value = [true, 'x']
  $('#messages').text('Started new game!')
}

const onUpdateSuccess = function (response) {
  store.user.game = response.game
  console.log(store.user.value)
  if (store.user.value[0] === true) {
    $(`[data-id=${store.user.index}]`).text('x')
    store.user.value[1] = 'x'
  } else {
    $(`[data-id=${store.user.index}]`).text('o')
    store.user.value[1] = 'o'
  }
  store.user.value[0] = !(store.user.value[0])
}

const onError = function (err) {
  console.error(err)
  $('#messages').text('Something went wrong, please try again.')
}

module.exports = {
  onNewGameSuccess,
  onUpdateSuccess,
  onError
}
