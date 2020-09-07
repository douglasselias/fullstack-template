import { useEffect, useState, ReactNode } from 'react'
import { Button, Text, Box, Input } from '@chakra-ui/core'

function Index(): ReactNode {
  const [user, setUser] = useState({ name: '' })

  useEffect(() => {
    // fetch('/api').then(async (r: Response) => {
    //   const json = await r.json()
    //   setUser(json)
    // })

    fetch('/api/graphql', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ query: '{ users { name } }' }),
    })
      .then((res) => res.json())
      .then((json) => {
        const response = json.data.users[0]
        setUser(response)
      })
  }, [])

  return (
    <Box maxWidth="30rem" margin="0 auto">
      <Text>Hello, {user.name}</Text>
      <Box display="flex">
        <Input />
        <Input type="date" />
        <Button colorScheme="blue">Hello</Button>
      </Box>
    </Box>
  )
}

export default Index
