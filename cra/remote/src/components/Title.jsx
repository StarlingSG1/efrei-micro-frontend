
export function capitalizeFirstLetter(string) {
  if (!string) return '';
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

export function Title({title}){

  const TITLE_TO_DISPLAY = capitalizeFirstLetter(title)

  return (
      <h1>{TITLE_TO_DISPLAY}</h1>
  )
}