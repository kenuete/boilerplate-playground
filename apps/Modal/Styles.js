import { css, injectGlobal } from 'emotion'

injectGlobal`
 * {
    margin: 0;
    padding: 0;
    font-weight: bold;
    box-sizing: border-box;
 }
`

export const container = css`
    display: block;
    padding-right: 15px;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: yellow;
    z-index: 1072;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    outline: 0;
`

export const modalDialogue = css`
    position: relative;
    width: auto;
    margin: 1.75rem auto;
    max-width: 500px;
    background-color: white;
`

export const modalContent = css`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    pointer-events: auto;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0,0,0,.2);
    border-radius: .3rem;
    outline: 0;
`

export const para = css`
  margin-bottom: 1500px;
`
