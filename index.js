var l = require("lodash")
const items = [2,[3,[4,[5]]]]
const newItems = l.flattenDeep(items)
console.log(newItems)