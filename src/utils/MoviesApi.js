const BASE_URL = 'https://api.nomoreparties.co/beatfilm-movies'

const getResponse = (res) => {
  return res.json().then((json) => {
    return res.ok ? json : Promise.reject(json)
  })
}

export const getMovies = () => {
  return fetch(`${BASE_URL}`).then((res) => getResponse(res))
}
