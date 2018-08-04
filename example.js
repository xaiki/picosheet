const GDocs = require('.')

console.error('process', process.argv[2])
GDocs(process.argv[2])
  .then(console.log.bind(console))
