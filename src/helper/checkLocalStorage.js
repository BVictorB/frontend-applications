const checkLocalStorage = (localStorageKey) => {
  return localStorage.getItem(localStorageKey) ? JSON.parse(localStorage.getItem(localStorageKey)) : null
}

export default checkLocalStorage