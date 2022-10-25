const BASE_URL = 'https://api.kiselevab.nomoredomains.icu'

const getResponse = (res) => {
  return res.json().then((json) => {
    return res.ok ? json : Promise.reject(json)
  })
  // if (!res.ok) {
  //     return Promise.reject(res.json()).then(err => {
  //         throw err});
  // }
  // return res.json();
}

export const checkUser = () => {
  return fetch(`${BASE_URL}/users/me`).then((res) => getResponse(res))
}

export const register = (data) => {
  console.log(data)
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    body: JSON.stringify({
      data,
    }),
  }).then((res) => getResponse(res))
}
