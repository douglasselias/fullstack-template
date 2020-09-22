import { HttpRequest } from '@/data/protocols'
import { FetchGraphqlClient } from '@/infra/graphql-client'
import { mockGraphQLClient } from '@/infra/mocks'

function makeSut() {
  const sut = new FetchGraphqlClient()
  const mockedGraphQL = mockGraphQLClient()
  return {
    sut,
    mockedGraphQL,
  }
}

function mockRequestData(): HttpRequest {
  return {
    body: {
      query: '',
    },
    url: '',
    headers: {},
  }
}

async function fetch(url: RequestInfo, options: RequestInit): Promise<any> {
  return {
    async json() {
      return { data: {} }
    },
  }
}

global.fetch = fetch

describe('Graphql Client', () => {
  // test('Deve executar com os valores corretos', async () => {
  //   const { sut, mockedGraphQL } = makeSut()
  //   await sut.request(mockRequestData())
  //   expect(mockedGraphQL.request).toHaveBeenCalledWith({
  //     body: {
  //       query: '',
  //     },
  //     url: '',
  //     headers: {},
  //   })
  // })

  test('Deve retornar a response correta', async () => {
    const { sut, mockedGraphQL } = makeSut()
    const response = await sut.request(mockRequestData())
    const mockResponse = await mockedGraphQL.request(mockRequestData())
    expect(response).toStrictEqual(mockResponse.data)
  })
})
