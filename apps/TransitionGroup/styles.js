import { css, injectGlobal } from 'emotion'


// eslint-disable-next-line no-unused-expressions
injectGlobal`
* {
    margin: 0;
    padding: 0;
}`

export const messageBox = css`
    border: 1px solid black;
    width: 300px;
    height: 300px;
    background-color: yellow;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 1000ms, top 1000ms ease-in-out;
    position: relative;
`

export const button = css`
    padding: 20px 20px;
    background-color: rgba(0,0,0,0.2);
    cursor: pointer;
`


// the timeout mentioned is the time until component stays in DOM before being
// removed.
// when you add component, exited and entering get applied first and duration passed
// is the time before it waits until entered is applied.
// so the transition should happen between exited(0) to entering(1).
// enetered and exited are the left out states.

export const exited = css`
    opacity: 0;     
`

export const exiting = css`
    opacity: 0;
    top: -100px;
`

export const entering = css`
    opacity: 0;
    top: -100px;
`

export const entered = css`
    opacity: 1;
    top: 0;
`
