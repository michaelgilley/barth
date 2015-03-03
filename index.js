
var fs = require('fs')
var data = fs.readFileSync(__dirname + '/data.json', 'utf8')
var quotes = JSON.parse(data).quotes

function getAQuote (idx) {
  var pick = idx || Math.floor(Math.random() * quotes.length)
  return quotes[pick]
}

function formatter (quote, opts) {
  if (opts.textOnly) return quote.text
  return quote
}

module.exports = exports = function(num, opts) {
  if (!opts && typeof num === 'object') {
    opts = num
    num = 1
  }
  num = Math.abs(Math.floor(+num || 1))
  num = Math.min(num, quotes.length)
  opts = Object(opts)
  if (num === 1) return formatter(getAQuote(), opts)
  var quotes = []
  for (var i = 1; i <= num; i++) {
    quotes.push(formatter(getAQuote(), opts))
  }
  return quotes
}

exports.daily = function(opts) {
  opts = Object(opts)

  var now = new Date()
    , beginningOfDay = (new Date(now.getFullYear(), now.getMonth(), now.getDate())) / 1000

  if (opts.debug) {
    console.log('Getting daily', {now: now, bOfDay: beginningOfDay, outOf: quotes.length})
  }

  return formatter(getAQuote(beginningOfDay % quotes.length), opts)
}
