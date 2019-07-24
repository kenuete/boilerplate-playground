import React, { useState, useEffect } from 'react'
import ReactDom from 'react-dom'

const Child = ({ count }) => {
  const [localCount, setLocalcount] = useState(0)
  useEffect(() => {
    setLocalcount(count)
  }, [count])
  console.log('here1')
  if (localCount === 0) {
    console.log('here')
    setLocalcount(count)
  }
  return <p>{localCount}</p>
}

const Example = () => {
  const [count1, setCount1] = useState(1)

  return (
    <>
      <button type="button" onClick={ () => setCount1(count1 + 1) }>{ count1 }</button>
      <Child count={ count1 } />
    </>
  )
}

ReactDom.render(<Example />, document.getElementById('hooks'))
