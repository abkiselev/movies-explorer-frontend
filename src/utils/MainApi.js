// const BASE_URL = 'https://api.kiselevab.nomoredomains.icu'
const BASE_URL = 'http://localhost:4000'

const getResponse = (res) => {
  return res.json().then((json) => {
    return res.ok ? json : Promise.reject(json)
  })
}

export const checkUser = () => {
  return fetch(`${BASE_URL}/users/me`, { credentials: 'include' }).then((res) => getResponse(res))
}

export const register = ({ email, name, password }) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, name, password }),
  }).then((res) => getResponse(res))
}

export const login = ({ email, password }) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }).then((res) => getResponse(res))
}

export const updateUser = ({ name, email }) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email }),
  }).then((res) => getResponse(res))
}