import {css} from '../styled-system/css'
import { test } from './Server.telefunc'

const message = await test('Hello, Telefunc')

export const Home = () => {
  return (
    <main>
      <h1 class={css({
        fontSize: "2xl",
        fontWeight: "bold",
        pt: "56px"
      })}>
        Data from telefunc <i>{ message }</i>
      </h1>
    </main>
  );
}