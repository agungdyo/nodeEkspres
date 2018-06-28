// const https = require('https')

// https.get('https://api.github.com/users/agungdyo', (res) => {
//   console.log('statusCode:', res.statusCode)
//   console.log('headers:', res.headers)

//   res.on('data', (d) => {
//     process.stdout.write(d)
//   })
// }).on('error', (e) => {
//   console.error(e)
// })


  const https = require('https')

  const username = 'agungdyo'
  // Connect to the GitHub API (https://api.github.com/users/username)
  const options = {
   hostname: `api.github.com`,
   port: 443,
   path: `/users/${username}`,
   method: 'GET',
   headers: {
   'user-agent': 'node.js'
   }
  }
  let request = https.request(options, (response) => {
   console.log(response.statusCode)
   // TODO: Read the data
   // TODO: Parse the data
   // TODO: Print the data out

  })

  request.end()

  request.on('error', (e) => {
   console.error(e)
  })