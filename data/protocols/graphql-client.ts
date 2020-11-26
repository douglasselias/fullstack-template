export interface GraphQLClient<Result = any> {
  request(data: HttpRequest): Promise<HttpResponse<Result>>
}

export type HttpRequest = {
  url: string
  headers?: any
  body: HttpRequestBody
}

export type HttpRequestBody = HttpRequestQuery | HttpRequestMutation

type HttpRequestQuery = {
  query: string
}

type HttpRequestMutation = {
  mutation: string
  variables: string
}

export type HttpResponse<Data = any> = {
  errors: CustomError[]
  data?: Data
}

type CustomError = {
  message: string
  path: string[]
  extensions: {
    code: string | HttpStatusCode
    exception: {
      stacktrace: string[]
    }
    // there is more...
  }
}

export enum HttpStatusCode {
  ok = 200,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  forbidden = 403,
  notFound = 404,
  serverError = 500,
}
