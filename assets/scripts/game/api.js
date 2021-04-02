'use strict'

const config = require('.././config')
const store = require('.././store')

const newGame = function () {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games',
    data: '{}',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const updateGame = function (index) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' + store.user.game._id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      "game": {
          "cell": {
            "index": index,
            "value": store.user.value[1]
          },
          "over": false
        }
      }
  })
}

module.exports = {
  newGame,
  updateGame
}

// "index": ${index},
// "value": ${store.user.value[1]}
