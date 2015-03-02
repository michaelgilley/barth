
var quotes = require('./data').quotes

function getAQuote () {
  var pick = Math.floor(Math.random() * quotes.length)
  return quotes[pick]
}

module.exports = function(num) {
  num = Math.floor(+num || 1)
  if (num === 1) return getAQuote()
  var quotes = []
  for (var i = 1; i <= num; i++) {
    quotes.push(getAQuote())
  }
  return quotes
}
