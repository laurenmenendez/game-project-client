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

const getGames = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games/',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
})
}

module.exports = {
  newGame,
  updateGame,
  getGames
}

// "index": ${index},
// "value": ${store.user.value[1]}
