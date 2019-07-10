import { css, injectGlobal } from 'emotion'

injectGlobal`
 * {
    margin: 0;
    padding: 0;
    font-weight: bold;
 }
`

export const myClassName = css`
  color: red;
  border: 1px solid black;
  height: 500px;
  width: 500px;
  background-color: yellow;
  :hover {
    width: 100px;
  }
`

export const myClassName2 = css({
  color: 'red',
  border: '1px solid black',
  height: '500px',
  width: '500px',
  backgroundColor: 'yellow',
})
