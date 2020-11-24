const checkLocalStorage = (localStorageKey, defaultState = null) => {
  return localStorage.getItem(localStorageKey) ? JSON.parse(localStorage.getItem(localStorageKey)) : defaultState
}

export default checkLocalStorage