import React from 'react'
import PropTypes from 'prop-types'
import { cx } from 'emotion'
import * as styles from './styles'

const getClassName = stage => styles[stage]

const MessageBox = ({ stage }) => (
  <p className={ cx(styles.messageBox, getClassName(stage)) }>
    Animated Message Box
  </p>
)

export default MessageBox

MessageBox.propTypes = {
  stage: PropTypes.string.isRequired,
}
