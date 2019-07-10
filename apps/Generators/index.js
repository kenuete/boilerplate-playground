// import reducer from '../Redux/index'
import reducer from 'apps/Redux/index'

function* generator() {
  yield 8
}

console.log(generator().next())
