import { useMemo } from 'react';

  export const formatTitle = (title) => `Hero du ${title}`

export function Hero({title = "Host"}){

    const DISPLAYED_TITLE = formatTitle(title)

  return (
    <div>
      <h1>{DISPLAYED_TITLE}</h1>
      <p>Voici le hero du HOST</p>
    </div>
  )
}