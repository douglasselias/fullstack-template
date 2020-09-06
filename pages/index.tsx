import { useEffect, useRef, useState } from 'react'

function Index() {
  const [user, setUser] = useState({ name: '' })

  useEffect(() => {
    fetch('/api').then(async (r: any) => {
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
