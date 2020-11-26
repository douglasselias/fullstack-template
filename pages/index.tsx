import { useEffect, useState, ReactNode } from 'react'

function Index(): ReactNode {
  const [user, setUser] = useState({ name: '' })

  useEffect(() => {
    // fetch('/api').then(async (r: Response) => {
    //   const json = await r.json()
    //   setUser(json)
    // })
    // fetch('/api/graphql', {
    //   method: 'POST',
    //   headers: {
    //     'Content-type': 'application/json',
    //   },
    //   body: JSON.stringify({ query: '{ users { name } }' }),
    // })
    //   .then((res) => res.json())
    //   .then((json) => {
    //     const response = json.data.users[0]
    //     setUser(response)
    //   })
  }, [])

  return (
    <>
      <h1 className="text-white">hello</h1>
      <button className="btn-blue">jdflksdjf</button>
    </>
  )
}

export default Index
