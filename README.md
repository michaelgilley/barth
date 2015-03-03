# barth
Helpful Karl Barth quotes.

[![NPM](https://nodei.co/npm/barth.png?downloads=true)](https://nodei.co/npm/barth/)

## CLI
```
npm install barth -g
barth
```

## NODE
```
npm install barth -S
```

## Usage
```barth([num [, options]])```

```
var barth = require('barth')

barth() // => {text: 'A quote.'}
barth(3) // => [{text: 'An array of 3 quotes.'},{...},{...}]
barth({textOnly: true}) // => 'Only the quote text will be returned.'
```
```barth.daily([options])```

```
barth.daily() // => '{text: 'A quote that will show all day long.}'
barth.daily({textOnly: true}) // => 'A quote that shows all day long.'
```
