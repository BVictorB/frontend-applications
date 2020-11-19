const fetchData = async (url, useProxy) => {
  const 
    proxy = 'https://cors-anywhere.herokuapp.com/',
    response = await fetch(useProxy ? proxy + url : url),
    data = await response.json()
    
  return data
}

export default fetchData