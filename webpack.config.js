const path = require('path'); //the way we import a module from node 
module.exports = {
 "entry": {
   home: "./src/js/index.js",
   details: "./src/js/details.js",
  },
 "output": {
   "path": __dirname + '/dist',
   "filename": "js/[name].js"
 },
}




