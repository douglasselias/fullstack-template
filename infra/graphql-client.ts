import { GraphQLClient, HttpResponse, HttpRequest } from '@/data/protocols'

export class FetchGraphqlClient implements GraphQLClient {
  async request(data: HttpRequest): Promise<HttpResponse> {
    const response = await fetch(data.url, {
      method: 'POST',
      headers: data.headers,
      body: JSON.stringify(data.body),
    })

    const responseJson = await response.json()

    return responseJson.data
  }
}
