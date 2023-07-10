import { useEffect, useState } from 'preact/hooks'

import { css } from '../styled-system/css'
import { test } from './Server.telefunc'

export const Home = () => {
  const [message, setMessage] = useState<string>()

  useEffect(() => {
    test('Hello, telefunc').then(setMessage)
  }, [])

  return (
    <main>
      <h1 class={css({
        fontSize: "2xl",
        fontWeight: "bold",
      })}>
        Data from telefunc <i>{message ?? <span>Loading...</span>}</i>
      </h1>
    </main>
  );
}