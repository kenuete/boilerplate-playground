import React, { useState, useEffect } from 'react'
import ReactDom from 'react-dom'

const Example = () => {
  const [state, setState] = useState({
    count: 0,
  })
  useEffect(() => {
    console.log('use effect called')
    return () => console.log('clean up')
  })
  return (
    <button type="button" onClick={ () => setState({ count: state.count + 1 }) }>
      {state.count}
    </button>
  )
}

ReactDom.render(<Example />, document.getElementById('hooks'))
