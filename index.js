require('dotenv/config')
const server = require('json-server')

server
  .create()
  .use(server.defaults())
  .use(server.router('db.json'))
  .listen(process.env.PORT, () => {
    console.log('Listening on port', process.env.PORT)
  })
