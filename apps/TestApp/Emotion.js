import React from 'react'
import ReactDom from 'react-dom'
import { css } from 'emotion'
import * as styles from './Styles'

const Test = ({ v }) => (
  <div className={ styles.myClassName }>
test is working
  </div>
)

ReactDom.render(<Test v={ false } />, document.getElementById('app'))
