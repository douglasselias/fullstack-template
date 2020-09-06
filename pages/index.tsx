import { useEffect, useState, ReactNode } from 'react'

function Index(): ReactNode {
  const [user, setUser] = useState({ name: '' })

  useEffect(() => {
    fetch('/api').then(async (r: Response) => {
      const json = await r.json()
      setUser(json)
    })
  }, [])

  return (
    <div>
      <p>Hello, {user.name}</p>
      <button>Hello</button>
    </div>
  )
}

export default Index
