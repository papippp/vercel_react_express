import { useState, useEffect } from 'react'

export default function App() {
  const [message, setMessage] = useState('')
  useEffect(() => {
    fetch('https://vercel-express-api-rose.vercel.app')
      .then((response) => response.text())
      .then((data) => setMessage(data))
      .catch((error) => console.error('error fetching message', error))
  }, [])
  return (
    <>
      <p clasName='read-the-docs'>
        {message ? message : 'loading message...'}

      </p>

    </>
  )
}
