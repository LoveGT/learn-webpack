import React, { memo, useState } from 'react'

const App = memo(() => {
  const [count, setCount] = useState(0)
  const increment = () => {
    console.log(1111);
    setCount(count+1)
  }
  return (
    <div>
      <h1>App Count: {count}</h1>
      <button onClick={increment}>+1</button>
    </div>
  )
})

export default App
