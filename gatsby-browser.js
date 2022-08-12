export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `Ваша версия сайта не обновлена до самой последней.    ` 
    +
    `Желаете обновить сайт?`
  )

  if (answer === true) {
    window.location.reload()
  }
  <img src="https://minecraft-inside.ru/uploads/ac/fd/31/209405.png"></img>
}
