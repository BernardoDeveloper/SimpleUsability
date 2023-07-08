import {css} from '../styled-system/css'

export const Home = () => {
  return (
    <main>
      <h1 class={css({
        fontSize: "2xl",
        fontWeight: "bold",
        pt: "56px"
      })}>
        Partial hydration with Preact and <i>Capri</i>
      </h1>
    </main>
  );
}