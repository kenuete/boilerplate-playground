import React from 'react'
import ReactDom from 'react-dom'


const P1 = () => <p>I am h1s child</p>
const H1 = () => (
  <h1>
All good
    {ReactDom.createPortal(<P1 />, document.getElementById('portal'))}
  </h1>
)


ReactDom.render(<H1 />, document.getElementById('root'))
