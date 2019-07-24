import React, { useState } from 'react'
import { Transition } from 'react-transition-group'
import MessageBox from './MessageBox'
import * as styles from './styles'

const TransitionExample = () => {
  const [showBox, setShowBox] = useState(true)

  const wrapper = (stage) => { console.log(stage); return <MessageBox stage={ stage } /> }

  return (
    <>
      <button type="button" onClick={ () => { setShowBox(!showBox) } } className={ styles.button }>
        {showBox ? 'Hide' : 'Show'}
      </button>

      <Transition in={ showBox } timeout={ 500 } unmountOnExit mountOnEnter appear>
        {wrapper}
      </Transition>
    </>
  )
}

export default TransitionExample
