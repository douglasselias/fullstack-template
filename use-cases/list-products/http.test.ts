import { http } from './http'

describe('List Products - HTTP', () => {
  it('returns all products from specified restaurant', async () => {
    const result = await http('outback')

    expect(result).toEqual([
      {
        id: 'outbread',
        name: 'Outbread',
        description:
          'O nosso icônico pão australiano em um formato exclusivo de 350g para você comer e pedir quando quiser. Não acompanha manteiga.',
        photoURL:
          'https://static-images.ifood.com.br/image/upload/t_medium/pratos/185e2a09-94cb-49af-88cb-4b0de2df6dc5/202106250831_S4HV_f.png',
        price: 19.9,
      },
      {
        id: 'ribs-on-the-barbie',
        name: 'Ribs on the barbie',
        description:
          'Preparada em chama aberta como manda a tradição australiana, vem com as saborosas cinnamon apples.',
        photoURL:
          'https://static-images.ifood.com.br/image/upload/t_medium/pratos/5221af98-5ad4-42e2-a767-23d1545b82d5/201911191742_qCKt_r.jpg',
        price: 79.9,
      },
    ])
  })
})
