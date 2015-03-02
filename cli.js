#!/usr/bin/env node

var barth = require('./')
var one = barth()
process.stdout.write(one.text + '\n')
