import {
  GraphQLClient,
  HttpRequest,
  HttpResponse,
  HttpRequestBody,
} from '@/data/protocols'
import { Task } from '@/domain/entities'

export class GraphQLClientSpy<R = Task[]> implements GraphQLClient<R> {
  url: string
  headers?: any
  body: HttpRequestBody
  response: HttpResponse<R> = {
    errors: [],
  }

  async request(data: HttpRequest): Promise<HttpResponse<R>> {
    this.url = data.url
    this.headers = data.headers
    this.body = data.body
    return this.response
  }
}
