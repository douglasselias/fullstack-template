import { NextApiRequest, NextApiResponse } from 'next'

async function API(request: NextApiRequest, response: NextApiResponse) {
  response.statusCode = 200
  response.setHeader('Content-Type', 'application/json')
  response.end(JSON.stringify({ name: 'John Doe' }))
}

export default API