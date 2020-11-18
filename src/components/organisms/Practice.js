import React, { useState } from 'react';

function Practice() {
  const [state, setState] = useState(() => {
    return {
      count: 100,
      color: 'hotpink'
    }
  })

  const count = state.count
  const color = state.color

  function countUp () {
    setState(prevState => {
      return { ...prevState, count: prevState.count++ }
    })
  }

  function countDown () {
    setState(prevState => {
      return { ...prevState, count: prevState.count-- }
    })
  }

  return (
    <div>
      <button onClick={countDown}>-</button>
      <span>{count}</span>
      <button onClick={countUp}>+</button>
      <p>{color}</p>
    </div>
  )
}

export default Practice