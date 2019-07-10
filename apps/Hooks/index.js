import React, { useState, useEffect } from 'react'
import ReactDom from 'react-dom'

const Example = () => {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  useEffect(() => {
    console.log('This effect will be called only for count1 change')

    return () => {
      console.log('clean up callback for count 1')
    }
  }, [count1])

  useEffect(() => {
    console.log('This effect will be called only for count2 change')

    return () => {
      console.log('clean up callback for count 2')
    }
  }, [count2])

  console.log('component rendered!')
  return (
    <>
      <button type="button" onClick={ () => setCount1(count1 + 1) }>{ count1 }</button>
      <button type="button" onClick={ () => setCount2(count2 + 1) }>{ count2 }</button>
    </>
  )
}

ReactDom.render(<Example />, document.getElementById('hooks'))
