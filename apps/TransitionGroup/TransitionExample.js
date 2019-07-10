import React, { useState } from 'react'
import { Transition } from 'react-transition-group'
import MessageBox from './MessageBox'
import * as styles from './styles'

const TransitionExample = () => {
  const [showBox, setShowBox] = useState(false)

  const wrapper = stage => <MessageBox stage={ stage } />

  return (
    <>
      <button type="button" onClick={ () => { setShowBox(!showBox) } } className={ styles.button }>
        {showBox ? 'Hide' : 'Show'}
      </button>

      <Transition in={ showBox } timeout={ 1000 } unmountOnExit>
        {wrapper}
      </Transition>
    </>
  )
}

export default TransitionExample
